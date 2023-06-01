files.forEach((file) => {
    console.log(`[F] ${file}`);
});

files.forEach((file) => {
    console.log(`[F] ${file}`);
});
}

function createFile(filename) {
    const currentDir = process.cwd();
    const filePath = path.join(currentDir, filename);

    fs.writeFile(filePath, '', (err) => {
        if (err) {
            console.log('Error creating file:', err);
        } else {
            console.log('File created successfully!');
        }
    });
}

function renameFile(oldPath, newName) {
    const currentDir = process.cwd();
    const oldFilePath = path.join(currentDir, oldPath);
    const newFilePath = path.join(currentDir, newName);

    fs.rename(oldFilePath, newFilePath, (err) => {
        if (err) {
            console.log('Error renaming file:', err);
        } else {
            console.log('File renamed successfully!');
        }
    });
}

function copyFile(sourcePath, destinationPath) {
    const currentDir = process.cwd();
    const sourceFilePath = path.join(currentDir, sourcePath);
    const destinationFilePath = path.join(currentDir, destinationPath);

    fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
        if (err) {
            console.log('Error copying file:', err);
        } else {
            console.log('File copied successfully!');
        }
    });
}

function moveFile(sourcePath, destinationPath) {
    const currentDir = process.cwd();
    const sourceFilePath = path.join(currentDir, sourcePath);
    const destinationFilePath = path.join(currentDir, destinationPath);

    fs.rename(sourceFilePath, destinationFilePath, (err) => {
        if (err) {
            console.log('Error moving file:', err);
        } else {
            console.log('File moved successfully!');
        }
    });
}

function deleteFile(filePath) {
    const currentDir = process.cwd();
    const fileToDelete = path.join(currentDir, filePath);

    fs.unlink(fileToDelete, (err) => {
        if (err) {
            console.log('Error deleting file:', err);
        } else {
            console.log('File deleted successfully!');
        }
    });
}
