import { BrowserWindow, app } from 'electron'

function createWindow() {
  const window = new BrowserWindow({
    width: 800,
    height: 600
  })

  window.loadURL('http://localhost:3000')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
