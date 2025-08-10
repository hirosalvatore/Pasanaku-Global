// electron/main.js
const { app, BrowserWindow, shell } = require("electron");
const path = require("path");

function createWindow(startUrlOrFile) {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    backgroundColor: "#0B1220",
    title: "Pasanaku Global", 
    webPreferences: { nodeIntegration: false, contextIsolation: true },
  });

  if (startUrlOrFile.startsWith("http")) {
    win.loadURL(startUrlOrFile);
  } else {
    win.loadFile(startUrlOrFile);
  }

  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });
}

const isDev = process.env.NODE_ENV !== "production";

app.whenReady().then(() => {
  if (isDev) {
    // 👉 arranca directo en /pasanaku
    const url = process.env.ELECTRON_START_URL || "http://localhost:3000/pasanaku";
    createWindow(url);
  } else {
    // export estático (next export)
    const outDir = path.join(__dirname, "out");
    const entry = path.join(outDir, "pasanaku", "index.html"); // 👉 home de tu demo
    createWindow(entry);
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
