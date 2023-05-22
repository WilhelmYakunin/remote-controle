import { mouse, down } from '@nut-tree/nut-js';
import { WebSocket } from 'ws';
import { createClietCommand } from '../utils';
import constants from '../constants';

const moveDown = (socket: WebSocket, param1: string) => {
  const height = Number(param1);

  mouse.move(down(height));
  const command = constants.MOUSE_DOWN + ' ' + height + 'px';
  return socket.send(createClietCommand(command));
};

export default moveDown;
