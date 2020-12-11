const fs = require("fs").promises;
const path = require('path');

async function searchFile(XPI_DIR, file_pattern) {
    let filePath;
    for (const content of await fs.readdir(XPI_DIR)) {
        var dirInner = path.resolve(XPI_DIR, content);
        var stat = await fs.stat(dirInner);

        if (stat.isFile() && dirInner.endsWith(file_pattern)) {
            filePath = dirInner
            break;
        }
    }
    return filePath;
}

async function deleteHiddenId(path) {
    try {
        await fs.unlink(path);
    } catch {
        return;
    }
}

module.exports = { searchFile, deleteHiddenId }