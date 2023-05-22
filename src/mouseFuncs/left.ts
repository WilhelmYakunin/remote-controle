import { mouse, left } from '@nut-tree/nut-js';
import { WebSocket } from 'ws';
import { createClietCommand } from '../utils';
import constants from '../constants';

const moveLeft = (socket: WebSocket, param1: string) => {
  const width = Number(param1);

  mouse.move(left(width));
  const command = constants.MOUSE_LEFT + ' ' + width + 'px';
  return socket.send(createClietCommand(command));
};

export default moveLeft;
