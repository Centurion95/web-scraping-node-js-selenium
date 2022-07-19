# Web Scraping con NodeJS y Selenium
Proyecto de Web Scraping simple con NodeJS y Selenium listo para clonar y modificar

Es una adaptación a Selenium del proyecto https://github.com/Centurion95/web-scraping-node-js-puppeteer.git

Desarrollado en Linux (Debian10), VSCode

- Rodrigo Centurión
(Asunción, Paraguay)

## Clonar el proyecto y abrir desde VSCode
```sh
git clone https://github.com/Centurion95/web-scraping-node-js-selenium.git
cd web-scraping-node-js-selenium
code .
```

## Antes de ejecutar por primera vez, instalar las dependencias
```sh
npm i
```

## Ejecutar el proyecto
```sh
npm start
```

## Atención para sistema operativo Windows
Si aparece el siguiente mensaje:
```sh
Error: The ChromeDriver could not be found on the current PATH. Please download the latest version of the ChromeDriver from http://chromedriver.storage.googleapis.com/index.html and ensure it can be found on your PATH.
```
Debe descargarse el chromedriver_win32.zip del link indicado en el mensaje de error (la versión del driver deberá coincidir con la del navegador chrome), decomprimirse y mover el archivo chromedriver.exe en la carpeta del proyecto. Luego ya podremos ejecutar `npm start`


Si aparece un mensaje como este:
```sh
SessionNotCreatedError: session not created: This version of ChromeDriver only supports Chrome version 103
Current browser version is 98.0.4758.80 with binary path C:\Program Files (x86)\Google\Chrome\Application\chrome.exe
```
Descargar el driver que coincida con la versión de chrome indicada en el mensaje y seguir las indicaciones del punto anterior.

OBS: puede que para la ejecución del script se deba comentar la siguiente línea en app.js
```sh
.setChromeOptions(new chrome.Options().headless())
```


## Acerca de
rc95 - 18/07/2022 20:26
- Indicaciones para Windows agregadas en el readme

rc95 - 17/07/2022 17:03
- Primera versión del proyecto
- Se ejecuta desde Google-Chrome
- Se agrega .gitignore
- Se agrega package.json para iniciar con: `npm i`
- Se agrega el script: `npm start`