//rc95 16/07/2022 18:35 - https://www.selenium.dev/documentation/webdriver/

// npm install selenium-webdriver
// npm install chromedriver@102.0.0

const getDate = () => {
    return (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
}

const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function firstScript() {
    try {
        console.log(getDate() + ' >>>  Abriendo el navegador...')

        // let driver = await new Builder().forBrowser('chrome').build() //navegador en pantalla
        let driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome.Options().headless()) //headless para correr en el background
            .build()

        // console.log(getDate() + ' >>>  Ingresando credenciales a la web...')
        // const pageCdpConnection = await driver.createCDPConnection('page');
        // await driver.register('username', 'password', pageCdpConnection);

        console.log(getDate() + ' >>>  Navegando a la web...')
        await driver.get('https://clasipar.paraguay.com/')

        console.log(getDate() + ` >>>  Inició el proceso..`)
        let titulo = await driver.getTitle()
        let url = await driver.getCurrentUrl();

        console.log(getDate() + ` >>>  titulo: ` + titulo)
        console.log(getDate() + ` >>>  url: ` + url)


        let txtBuscar = await driver.findElement(By.name('buscar'))
        let btnBuscar = await driver.findElement(By.className('btn-success'))

        console.log(getDate() + ` >>>  Va a enviar las teclas..`)
        await txtBuscar.sendKeys('terreno')

        //desde la version 103 de chrome y chrome-driver, hay un error al tratar de recuperar la web..
        // await driver.sleep(10000) //por algun motivo esto soluciona el inconveniente.. 
        // al correr en el background no aparece este error, y el wait/sleep no es necesario..

        console.log(getDate() + ` >>>  Va a hacer click en BUSCAR..`)
        await btnBuscar.click()

        console.log(getDate() + ` >>>  Va a esperar al elemento de la siguiente pantalla..`)
        await driver.wait(driver.findElements(By.className('box-anuncio--premium')), 30000); //esperamos hasta 30 segundos que se cargue el elemento..

        console.log(getDate() + ` >>>  Va a iterar en todos los items del elemento..`)

        const registros = await driver.findElements(By.className('box-anuncio--premium'))

        const listaProductos = []
        for (let registro of registros) {
            const registro_text = await registro.getText() //el texto trae saltos de lineas
            const result = registro_text.split(/\r?\n/) //hacemos split

            const registroTitulo = result[0]
            const registroPrecio = result[1]
            const registroSubTitulo = result[2]

            // console.log(registroTitulo)
            // console.log(registroPrecio)
            // console.log(registroSubTitulo)
            // console.log('----------------------------')

            let nuevoProducto = {}
            nuevoProducto.descripcion = registroTitulo
            nuevoProducto.precio = registroPrecio
            nuevoProducto.categoria = registroSubTitulo

            listaProductos.push(nuevoProducto)
        }

        console.log(getDate() + ` >>>  Items encontrados:`)
        console.log(listaProductos)
        console.log(getDate() + ` >>>  Finalizó el proceso..`)

        await driver.quit()

    } catch (error) {
        console.log('ERROR: ' + error)
    }
})()

// para ejecutar:
// npm start