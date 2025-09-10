
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Add bridged functions here later if needed
});
