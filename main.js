const {app, BrowserWindow} = require('electron')
var url = require('url')
const path = require('path');

let win = null;

app.on('ready', function () {

  // Initialize the window to our specified dimensions
//  win = new BrowserWindow({
//      width: 500, height: 1000
//  });
    win = new BrowserWindow({
      minWidth: 500,
      minHeight: 500,
      width: 800,
      height: 600,
      title: 'toshocat',
      frame: false,
      transparent: false,
      backgroundColor: '#24282a'
  });

  // Specify entry point to default entry point of vue.js
  win.loadURL('http://localhost:8080');
//  win.loadURL(url.format({
//      pathname: path.join(__dirname, 'dist/index.html'),
//      protocol: 'file:',
//      slashes: true
//  }));

  // Remove window once app is closed
  win.on('closed', function () {
  win = null;
  });

});
//create the application window if the window variable is null
app.on('activate', () => {
  if (win === null) {
  createWindow()
  }
})
//quit the app once closed
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
  app.quit();
  }
});