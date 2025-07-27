const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');
const path = require('path');
const fs = require('fs');

const inputDir = 'public/images'; // Directory containing your images
const outputDir = 'public/images'; // Output directory (can be the same)

async function optimizeImages() {
    if (!fs.existsSync(inputDir)) {
        console.error(`Input directory not found: ${inputDir}`);
        return;
    }

    console.log(`Optimizing images in ${inputDir}...`);

    await imagemin([`${inputDir}/**/*.{jpg,png}`], {
        destination: outputDir,
        plugins: [
            imageminMozjpeg({ quality: 80 }), // Adjust quality as needed
            imageminPngquant({ quality: [0.6, 0.8] }), // Adjust quality as needed
            imageminWebp({ quality: 80 }) // Adjust quality as needed
        ]
    }).then((files) => {
        console.log('Images optimized:');
        for (const file of files) {
            console.log(`- ${file.sourcePath} -> ${file.destinationPath}`);
        }
    }).catch((err) => {
        console.error('Error optimizing images:', err);
    });

    console.log('Image optimization complete.');
}

optimizeImages();