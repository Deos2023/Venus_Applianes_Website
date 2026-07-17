const { Project, SyntaxKind } = require('ts-morph');
const fs = require('fs');
const path = require('path');

async function run() {
    const project = new Project();
    
    // Process ac-selection-data.ts
    const selectionDataPath = 'E:\\GitHubCloneProject\\Venus_Applianes_Website\\src\\lib\\ac-selection-data.ts';
    const sourceFile = project.addSourceFileAtPath(selectionDataPath);
    const acProductsVar = sourceFile.getVariableDeclaration('acProducts');
    const initializer = acProductsVar.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
    
    let removedImages = [];
    let removedCount = 0;
    let updatedCount = 0;
    
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
            
            const brand = getPropValue('brand');
            const modelNumber = getPropValue('modelNumber');
            const type = getPropValue('type');
            
            if (brand === 'daikin' && modelNumber) {
                // 1. Remove FTKC and GTKC
                if (modelNumber.startsWith('FTKC') || modelNumber.startsWith('GTKC')) {
                    // Collect images
                    const imageProp = el.getProperty('image');
                    if (imageProp && imageProp.isKind(SyntaxKind.PropertyAssignment)) {
                        const val = imageProp.getInitializer();
                        if (val && val.isKind(SyntaxKind.StringLiteral)) removedImages.push(val.getLiteralValue());
                    }
                    const imagesProp = el.getProperty('images');
                    if (imagesProp && imagesProp.isKind(SyntaxKind.PropertyAssignment)) {
                        const val = imagesProp.getInitializer();
                        if (val && val.isKind(SyntaxKind.ArrayLiteralExpression)) {
                            val.getElements().forEach(imgEl => {
                                if (imgEl.isKind(SyntaxKind.StringLiteral)) removedImages.push(imgEl.getLiteralValue());
                            });
                        }
                    }
                    
                    initializer.removeElement(i);
                    removedCount++;
                    continue; // Skip update
                }
                
                // 2. Add specific features based on series
                let newFeatures = new Set(['PM 2.5 Filter', 'Econo Mode', 'Stabilizer Inside']);
                
                if (modelNumber.startsWith('JTKJ') || modelNumber.startsWith('FTKM') || modelNumber.startsWith('FTKR') || modelNumber.startsWith('ATKM')) {
                    newFeatures.add('Streamer Discharge Technology');
                    newFeatures.add('Intelligent Eye');
                    newFeatures.add('Dew Clean Technology');
                    newFeatures.add('Triple Display');
                } else if (modelNumber.startsWith('FTKF') || modelNumber.startsWith('FTHT') || modelNumber.startsWith('FTKL') || modelNumber.startsWith('ATKL')) {
                    newFeatures.add('Dew Clean Technology');
                    newFeatures.add('Coanda Airflow');
                    newFeatures.add('Triple Display');
                }
                
                // Merge with existing features
                const featuresProp = el.getProperty('features');
                let existingFeatures = [];
                if (featuresProp && featuresProp.isKind(SyntaxKind.PropertyAssignment)) {
                    const val = featuresProp.getInitializer();
                    if (val && val.isKind(SyntaxKind.ArrayLiteralExpression)) {
                        val.getElements().forEach(featEl => {
                            if (featEl.isKind(SyntaxKind.StringLiteral)) {
                                existingFeatures.push(featEl.getLiteralValue());
                            }
                        });
                    }
                }
                
                // Combine and replace
                const finalFeatures = [...new Set([...existingFeatures, ...newFeatures])];
                if (featuresProp) {
                    featuresProp.setInitializer(`[${finalFeatures.map(f => `"${f}"`).join(', ')}]`);
                    updatedCount++;
                }
            }
        }
    }
    
    await sourceFile.save();
    console.log(`ac-selection-data.ts: Removed ${removedCount} models, Updated ${updatedCount} models.`);
    
    fs.writeFileSync('C:\\Users\\barsu\\.gemini\\antigravity\\brain\\d4619783-b0e0-4874-9dca-cab6c3740a9a\\scratch\\removed_images_daikin.json', JSON.stringify([...new Set(removedImages)], null, 2));
}

run().catch(console.error);
