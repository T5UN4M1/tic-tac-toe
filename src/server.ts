import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as log4js from 'log4js';

const app = express();
const port = 8080;
const logger = log4js.getLogger('');
logger.level = "debug";

const morganLogger = morgan("combined", {
    stream: {
        write: str => logger.info(str)
    }
});

app.use(cors());
app.use(morganLogger);

app.listen(port, () => logger.info(`server started at http://localhost:${port}`));





