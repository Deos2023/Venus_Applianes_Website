const { Project, SyntaxKind } = require('ts-morph');

async function run() {
    const project = new Project();
    
    const files = [
        'E:\\GitHubCloneProject\\Venus_Applianes_Website\\src\\lib\\ac-selection-data.ts',
        'E:\\GitHubCloneProject\\Venus_Applianes_Website\\src\\lib\\ac-data.ts'
    ];
    
    const newImages = [
        "/lovable-uploads/daikin/generated/daikin_cassette_1_1784201773767.png",
        "/lovable-uploads/daikin/generated/daikin_cassette_2_1784201784259.png",
        "/lovable-uploads/daikin/generated/daikin_cassette_3_1784201794908.png",
        "/lovable-uploads/daikin/generated/daikin_cassette_4_1784201805093.png",
        "/lovable-uploads/daikin/generated/daikin_cassette_5_1784201815460.png",
        "/lovable-uploads/daikin/generated/daikin_cassette_6_1784201834670.png",
        "/lovable-uploads/daikin/generated/daikin_cassette_7_1784201844348.png",
        "/lovable-uploads/daikin/generated/daikin_cassette_8_1784201854498.png",
        "/lovable-uploads/daikin/generated/daikin_cassette_9_1784201866857.png",
        "/lovable-uploads/daikin/generated/daikin_cassette_10_1784201897824.png",
        "/lovable-uploads/daikin/generated/daikin_cassette_11_1784201907402.png",
        "/lovable-uploads/daikin/generated/daikin_cassette_12_1784201917791.png"
    ];
    
    let updatedCount = 0;

    for (const file of files) {
        const sourceFile = project.addSourceFileAtPath(file);
        
        // both files have a variable exporting the products list
        // ac-selection-data.ts has 'acProducts'
        // ac-data.ts has 'acData'
        
        let varDecl;
        if (file.includes('ac-selection-data')) {
            varDecl = sourceFile.getVariableDeclaration('acProducts');
        } else {
            varDecl = sourceFile.getVariableDeclaration('acData');
        }
        
        if (!varDecl) continue;
        
        const initializer = varDecl.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
        const elements = initializer.getElements();
        
        for (let i = 0; i < elements.length; i++) {
            const el = elements[i];
            if (el.isKind(SyntaxKind.ObjectLiteralExpression)) {
                const imageProp = el.getProperty('image');
                if (imageProp && imageProp.isKind(SyntaxKind.PropertyAssignment)) {
                    const val = imageProp.getInitializer();
                    if (val && val.isKind(SyntaxKind.StringLiteral)) {
                        const currentImage = val.getLiteralValue();
                        if (currentImage === '/lovable-uploads/daikin/FCMF50/1.png') {
                            const newImage = newImages[updatedCount % newImages.length];
                            imageProp.setInitializer(`'${newImage}'`);
                            
                            const imagesProp = el.getProperty('images');
                            if (imagesProp && imagesProp.isKind(SyntaxKind.PropertyAssignment)) {
                                imagesProp.setInitializer(`['${newImage}']`);
                            }
                            
                            updatedCount++;
                        }
                    }
                }
            }
        }
        await sourceFile.save();
        console.log(`Updated ${file}`);
    }
    
    console.log(`Updated ${updatedCount} products to use unique images in total.`);
}

run().catch(console.error);
