const { Project, SyntaxKind } = require('ts-morph');
const fs = require('fs');

async function run() {
    const project = new Project();
    
    // Process ac-selection-data.ts
    const selectionDataPath = 'E:\\GitHubCloneProject\\Venus_Applianes_Website\\src\\lib\\ac-selection-data.ts';
    const sourceFile = project.addSourceFileAtPath(selectionDataPath);
    
    const acProductsVar = sourceFile.getVariableDeclaration('acProducts');
    const initializer = acProductsVar.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
    
    let removedImages = [];
    let removedCount = 0;
    
    const elements = initializer.getElements();
    
    for (let i = elements.length - 1; i >= 0; i--) {
        const el = elements[i];
        if (el.isKind(SyntaxKind.ObjectLiteralExpression)) {
            const getPropValue = (name) => {
                const prop = el.getProperty(name);
                if (!prop || !prop.isKind(SyntaxKind.PropertyAssignment)) return null;
                const val = prop.getInitializer();
                if (!val || !val.isKind(SyntaxKind.StringLiteral)) return null;
                return val.getLiteralValue();
            };
            
            const type = getPropValue('type');
            const brand = getPropValue('brand');
            const inverter = getPropValue('inverter');
            const starRating = getPropValue('starRating');
            
            let shouldRemove = false;
            
            // Criteria 1: 1-Star and 2-Star
            if (starRating === '1★' || starRating === '2★') {
                shouldRemove = true;
            }
            
            // Criteria 2: Non-inverter splits for premium brands
            if (type === 'split' && inverter === 'non-inverter') {
                if (['daikin', 'lg', 'panasonic', 'mitsubishi-heavy', 'mitsubishi-electric', 'mitsubishi-akabishi'].includes(brand)) {
                    shouldRemove = true;
                }
            }
            
            if (shouldRemove) {
                // Collect images
                const imageProp = el.getProperty('image');
                if (imageProp && imageProp.isKind(SyntaxKind.PropertyAssignment)) {
                    const val = imageProp.getInitializer();
                    if (val && val.isKind(SyntaxKind.StringLiteral)) {
                        removedImages.push(val.getLiteralValue());
                    }
                }
                
                const imagesProp = el.getProperty('images');
                if (imagesProp && imagesProp.isKind(SyntaxKind.PropertyAssignment)) {
                    const val = imagesProp.getInitializer();
                    if (val && val.isKind(SyntaxKind.ArrayLiteralExpression)) {
                        val.getElements().forEach(imgEl => {
                            if (imgEl.isKind(SyntaxKind.StringLiteral)) {
                                removedImages.push(imgEl.getLiteralValue());
                            }
                        });
                    }
                }
                
                initializer.removeElement(i);
                removedCount++;
            }
        }
    }
    
    await sourceFile.save();
    console.log(`ac-selection-data.ts: Removed ${removedCount} models.`);
    
    // Process ac-data.ts
    const acDataPath = 'E:\\GitHubCloneProject\\Venus_Applianes_Website\\src\\lib\\ac-data.ts';
    const sourceFile2 = project.addSourceFileAtPath(acDataPath);
    const acModelsVar = sourceFile2.getVariableDeclaration('acModels');
    if (acModelsVar) {
        const initializer2 = acModelsVar.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
        const elements2 = initializer2.getElements();
        let removedCount2 = 0;
        
        for (let i = elements2.length - 1; i >= 0; i--) {
            const el = elements2[i];
            if (el.isKind(SyntaxKind.ObjectLiteralExpression)) {
                const getPropValue = (name) => {
                    const prop = el.getProperty(name);
                    if (!prop || !prop.isKind(SyntaxKind.PropertyAssignment)) return null;
                    const val = prop.getInitializer();
                    if (!val || !val.isKind(SyntaxKind.StringLiteral)) return null;
                    return val.getLiteralValue();
                };
                
                const type = getPropValue('type');
                const brand = getPropValue('brand');
                const inverter = getPropValue('inverter');
                const starRating = getPropValue('starRating');
                
                let shouldRemove = false;
                
                if (starRating === '1★' || starRating === '2★') shouldRemove = true;
                if (type === 'split' && inverter === 'non-inverter') {
                    if (['daikin', 'lg', 'panasonic', 'mitsubishi-heavy', 'mitsubishi-electric', 'mitsubishi-akabishi'].includes(brand)) {
                        shouldRemove = true;
                    }
                }
                
                if (shouldRemove) {
                    initializer2.removeElement(i);
                    removedCount2++;
                }
            }
        }
        await sourceFile2.save();
        console.log(`ac-data.ts: Removed ${removedCount2} models.`);
    }

    fs.writeFileSync('C:\\Users\\barsu\\.gemini\\antigravity\\brain\\d4619783-b0e0-4874-9dca-cab6c3740a9a\\scratch\\removed_images.json', JSON.stringify([...new Set(removedImages)], null, 2));
}

run().catch(console.error);
