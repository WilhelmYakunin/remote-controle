# NodeJS websocket remote controle

> Static http server and base task packages.

## Installation

1. Clone/download repo
2. `npm install`

## Usage

**Development**

`npm run start:dev`

- App served @ `http://localhost:{.env.PORT}` with nodemon. .env eviroment propositions please install by yourself. In case of problems please send me a message.

**Production**

`npm run start`

- App served @ `http://localhost:{.env.WSPORT}` without nodemon

---

**All commands**

Command | Description

List of websocket commands:
mouse move: key down, key up, key left, key right,
drowing: key "c" for circle, key "r" for rectangle and key "s" for sqaure (mose is down so it able to draw those figuares in paint),
position and screenshoot: keyborad with 'p' (position), 'Left CTRL + P' (screenshoot) and their syntax (<- - cmd from frontend, -> - answer):

- Navigation over the x and y axis
  - Move mouse up
  ```bash
  <- mouse_up {y px}
  ```
  - Move mouse down
  ```bash
  <- mouse_down {y px}
  ```
  - Move mouse left
  ```bash
  <- mouse_left {x px}
  ```
  - Move mouse right
  ```bash
  <- mouse_right {x px}
  ```
  - Send mouse coordinates
  ```bash
  <- mouse_position
  -> mouse_position {x px},{y px}
  ```
- Drawing
  - Draw circle with pushed left button:
  ```bash
  <- draw_circle {px}
  ```
  - Draw rectangle with pushed left button:
  ```bash
  <- draw_rectangle {px} {px}
  ```
  - Draw square with pushed left button:
  ```bash
  <- draw_square {px}
  ```
- Print screen
  - Make print screen command and send image (a base64 buffer of the 200 px square around the mouse position):
  ```bash
  <- prnt_scrn
  -> prnt_scrn {base64 string (png buf)}
  ```
