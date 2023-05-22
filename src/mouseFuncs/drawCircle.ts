import {
  mouse,
  up,
  down,
  left,
  right,
  straightTo,
  Point,
} from '@nut-tree/nut-js';
import { WebSocket } from 'ws';
import { createClietCommand } from '../utils';
import constants from '../constants';

const drawCircle = async (socket: WebSocket, param1: string) => {
  const radius = Number(param1);
  const drawingStep = 0.5;

  for (let i = 0; i <= Math.PI * 2; i += drawingStep) {
    const x = (await mouse.getPosition()).x - radius * Math.cos(i);
    const y = (await mouse.getPosition()).y + radius * Math.sin(i);

    await mouse.drag(straightTo(new Point(x, y)));
  }

  return socket.send(createClietCommand(constants.DRAW_CIRCLE));
};

export default drawCircle;
