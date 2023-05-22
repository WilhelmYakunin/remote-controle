import { mouse, up, down, left, right } from '@nut-tree/nut-js';
import { WebSocket } from 'ws';
import { createClietCommand } from '../utils';
import constants from '../constants';

const drawReactagle = async (
  socket: WebSocket,
  param1: string,
  param2: string
) => {
  const width = Number(param1);
  const height = Number(param2);
  const drawingStep = 200;

  mouse.config.mouseSpeed = drawingStep;

  await mouse.pressButton(0);
  await mouse.move(left(width));
  await mouse.move(up(height));
  await mouse.move(right(width));
  await mouse.move(down(height));
  await mouse.releaseButton(0);

  socket.send(createClietCommand(constants.DRAW_RECTANGLE));
};

export default drawReactagle;
