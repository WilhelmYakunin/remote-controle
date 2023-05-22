import { mouse, right } from '@nut-tree/nut-js';
import { WebSocket } from 'ws';
import { createClietCommand } from '../utils';
import constants from '../constants';

const moveRight = (socket: WebSocket, param1: string) => {
  const width = Number(param1);

  mouse.move(right(width));
  const command = constants.MOUSE_RIGHT + ' ' + width + 'px';
  return socket.send(createClietCommand(command));
};

export default moveRight;
