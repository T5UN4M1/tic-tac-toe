import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as log4js from 'log4js';
import * as WebSocket from 'ws';
import * as http from 'http';

const app = express();
const server = http.createServer(app);

const port = 8080;
const logger = log4js.getLogger('app');

logger.level = "debug";

const morganLogger = morgan("combined", {
    stream: {
        write: str => logger.info(str)
    }
});
app.use(cors());
app.use(morganLogger);


const wss = new WebSocket.Server({ server });

server.listen(port, () => logger.info(`server started at http://localhost:${port}`));


export {app};

