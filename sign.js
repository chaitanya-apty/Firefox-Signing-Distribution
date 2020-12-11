const { signAddon } = require('sign-addon');
const fs = require("fs").promises;
const path = require('path');
const config = require('./config.json');

async function sign() {
    const claims = {
        xpiPath: config.XPI_PATH,
        apiKey: config.API_KEY,
        apiSecret: config.API_SECRET,
        downloadDir: config.DESTINATION,
        version: config.VERSION,
        debugLogging: true,
    }
    const props = Object.assign({}, claims, config.EXTENSION_ID ? {id: config.EXTENSION_ID} : {})
    return await signAddon(props);
}

async function signXPIAddon() {
    try {
        const res = await sign();
        console.log('Signed Succesfully', res.id)
    } catch (e) {
        console.error('Signing XPI Failed', e);
    }
}

signXPIAddon();