import publicKey from './public.pem?raw';

export const window = {
width: 900,
resizable: false,
maximizable: false,
fullscreenable: false,
    title: 'Fusion Craft',
};

export const api = {
ws: 'ws://62.122.242.127:1370/ws',
web: 'http://62.122.242.127:1370',
    publicKey,
};

export const appPath = '.fusion-launcher';

