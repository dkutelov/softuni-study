function extractFileExtension(str) {
    const slashIndex = str.lastIndexOf('\\');
    const file = str.substring(slashIndex + 1);
    const dotIndex = file.lastIndexOf('.');
    console.log(`File name: ${file.substring(0, dotIndex)}`);
    console.log(`File extension: ${file.substring(dotIndex + 1)}`);
}

extractFileExtension('C:\\Internal\\training-internal\\Template.bak.pptx');
