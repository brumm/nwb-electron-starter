import { app, BrowserWindow, Menu, screen, ipcMain } from 'electron'
import template from './menu-template.js'
import windowStateKeeper from 'electron-window-state'
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer'

const { DEV, PORT = '8080' } = process.env
const windowUrl = DEV ? `http://0.0.0.0:${PORT}/` : 'file://' + __dirname + '/index.html'

let mainWindow

function createWindow() {
  installExtension(REACT_DEVELOPER_TOOLS)
    .then(name => {
      let { width, height } = screen.getPrimaryDisplay().workAreaSize

      Menu.setApplicationMenu(Menu.buildFromTemplate(template))

      let mainWindowState = windowStateKeeper({
        defaultWidth: width * 0.9,
        defaultHeight: height * 0.9,
      })

      mainWindow = new BrowserWindow({
        width: mainWindowState.width,
        height: mainWindowState.height,
        x: mainWindowState.x,
        y: mainWindowState.y,
        minWidth: 1000,
        minHeight: 700,
        titleBarStyle: 'hidden-inset',
        webPreferences: {
          webSecurity: false,
        },
        show: false,
      })

      mainWindowState.manage(mainWindow)
      mainWindow.loadURL(windowUrl)

      if (DEV) {
        mainWindow.webContents.openDevTools()
      }

      mainWindow.on('closed', () => {
        mainWindow = null
      })

      mainWindow.once('ready-to-show', mainWindow.show)
    })
    .catch(err => console.log('An error occurred: ', err))
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

process.on('uncaughtException', ::console.log)
