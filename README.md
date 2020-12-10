# Signing Firefox Extensions
Sign Firefox XPI/Addons to validate/publish in extension store

## Getting Started
This project assumes that you already have the required API/Secret keys to sign.
If not please create developer account and create API keys from [FIREFOX STORE](https://addons.mozilla.org/en-US/developers/)

### Prerequisites
```
a) Make sure Node has been installed
b) clone this repo, open terminal from cloned directory
c) npm install
```

### Signing

```
Initial Steps ...
1) If you have .xpi, extract its contents by renaming it to zip
2) Copy extracted folder to the root dir(this project)
```

Next, If you're ready with API keys/secret ...

```
1) open sign-firefox-xpi.js
2) Change path for playerSourceFirefox(line: 5), with the copied folder name from above steps
3) Add your API key and Secret key in signOptions(line: 9)
4) Open terminal and run npm start
5) If everything went well , wait for some time , your addon should get signed.
```

## Authors

* **Chaitanya Kumar** -[Github](https://github.com/chaitanya-apty)


