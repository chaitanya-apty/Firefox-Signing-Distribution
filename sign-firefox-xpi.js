var webExt = require('web-ext');
var fs = require('fs');
var path = require('path');

const playerSourceFirefox = './client-firefox-4.4.1';  // Change path if required
const destination = "./builds";
const hiddenFireFoxIDPath = path.join(playerSourceFirefox, '.web-extension-id');

const signOptions = {
    sourceDir: playerSourceFirefox,
    artifactsDir: path.join(destination),
    apiKey: "", // Add Your Keys
    apiSecret: "", // Add Your Secret
};

const buildOptions = {
    overwriteDest : true,
    shouldExitProgram: true,
}

const deleteHiddenId = () => {
  return new Promise((resolve, _) => {
      fs.unlink(hiddenFireFoxIDPath, function(err) {
          // IF exists deletes else ignoring not found error
          resolve();
      })
  })
}

// const renameSignedXpi = (source) => {
//  const destinationXpi = path.join('./','build'); // Change path if required
//  return new Promise((resolve, reject) => {
//     fs.copyFile(source, destinationXpi, (err) => {
//         if(!err) resolve()
//         reject();
//     });
//  })
// }

async function signXpi () {
    try {
        await deleteHiddenId();
        const res = await webExt.cmd.sign(signOptions, buildOptions);
        console.log('Signed Succesfully', res)
    } catch(e) {
        console.error('Signing XPI Failed Due to Unknown Error', e);
    }
}

signXpi();
