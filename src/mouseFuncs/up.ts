import { mouse, up } from '@nut-tree/nut-js';
import { WebSocket } from 'ws';
import { createClietCommand } from '../utils';
import constants from '../constants';

const moveUp = (socket: WebSocket, param1: string) => {
  const height = Number(param1);

  mouse.move(up(height));
  const command = constants.MOUSE_UP + ' ' + height + 'px';
  return socket.send(createClietCommand(command));
};

export default moveUp;
