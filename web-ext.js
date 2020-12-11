var webExt = require('web-ext');
var path = require('path');
var {
    API_KEY, API_SECRET,
    EXTRACTED_XPI_FOLDER_PATH,
    CREATE_EXTENSION_ID,
    DESTINATION 
} = require('./config.json');
const hiddenFireFoxIDPath = path.join(EXTRACTED_XPI_FOLDER_PATH, '.web-extension-id');
    
const { deleteHiddenId } = require('./helpers/fileseach_helpers');

const signOptions = {
    sourceDir: EXTRACTED_XPI_FOLDER_PATH,
    artifactsDir: path.join(DESTINATION),
    apiKey: API_KEY,
    apiSecret: API_SECRET
};
const buildOptions = {
    overwriteDest: true,
    shouldExitProgram: true,
}

async function signXpi() {
    try {
        /*
           IF you want to update the same extension, copy .webextensionid file and keep it!
           In Future either add gecko_settings with your emailid in manifest.json (or)
           copy the same .webextensionID file into extracted folder to Update the existing XPI before Signing it
       */
        if (CREATE_EXTENSION_ID) {
            await deleteHiddenId(hiddenFireFoxIDPath); // Delete Prev ExtensionID if exists
        }
        await webExt.cmd.sign(signOptions, buildOptions);
    } catch (e) {
        console.error('Signing XPI Failed Due to Unknown Error', e);
    }
}

signXpi();
