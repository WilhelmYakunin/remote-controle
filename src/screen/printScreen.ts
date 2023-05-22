import Jimp from 'jimp';
import { screen, mouse } from '@nut-tree/nut-js';
import { unlink } from 'node:fs/promises';
import { WebSocket } from 'ws';
import { createClietCommand } from '../utils';
import constants from '../constants';

const printScreen = async (
  ws: WebSocket,
  width: number = 200,
  height: number = 200
) => {
  try {
    const { x, y } = await mouse.getPosition();
    const area: any = { left: x, top: y, width: width, height: height };
    const imgPath: any = await screen.captureRegion('./screen', area);

    const screenShoot = await Jimp.read(imgPath);
    const imageBase64 = await screenShoot.getBase64Async(Jimp.MIME_PNG);
    const screenshootPNGBuffer = imageBase64.split(',')[1];

    await ws.send(
      createClietCommand(`${constants.PRINT_SCREEN} ${screenshootPNGBuffer}`)
    );
    await unlink(imgPath);
  } catch (err: any) {
    console.log(
      'prnt_scrn base64 string (png buf) faild reason: ' + err.message
    );
  }
};

export default printScreen;
