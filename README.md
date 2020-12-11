# Signing Firefox Extensions
Sign Firefox XPI/Addons to validate & publish 

## Getting Started
This project assumes that you already have the required API/Secret keys to sign.
If not please create developer account and create API keys from [FIREFOX STORE](https://addons.mozilla.org/developers/addon/api/key/)

### Prerequisites
    a) Make sure Node has been installed
    b) clone this repo
    c) open terminal from repo directory & run npm install

### Signing

Initial Steps ...

    a) If you have .xpi, extract its contents by renaming it to zip
    b) Copy extracted folder to the root dir(this project)


Next, If you're ready with API keys/secret ...

-  open <b> config.json </b>(in root directory)
-  Change values for ..
    - EXTRACTED_XPI_FOLDER_PATH - Path of extracted folder (ex: ./firefox-folder)
    - API_SECRET: Your API Secret value obtained from AMO
    - API_KEY: Your API Key obtained from AMO
    - (optional) DESTINATION - output XPI directory  
- From terminal, npm start
- If everything went well , wait for some time , your addon should get signed.

## Authors

* **Chaitanya Kumar** -[Github](https://github.com/chaitanya-apty)


