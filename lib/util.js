const fs = require('fs')

/** detect if foler exists, if not exists, create  it
 * @param {String} folder the folder location string
 */
function touchFolder(folder) {
    return folder.split('/').reduce(function (parentFolder, subFolder, index) {
        let destFolder = parentFolder + '/' + subFolder
        if (fs.existsSync(destFolder) === false) {
            console.log(`create folder : ${destFolder}`);
            fs.mkdirSync(destFolder)
        }
        return destFolder
    })
}


export { touchFolder }

