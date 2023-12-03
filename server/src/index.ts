import * as express from 'express';
import { RequestHandler } from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { routes } from './routes';

const server = express();
const port = 8080;
server.use(bodyParser.json() as RequestHandler);
server.use(cors());
server.use('/', routes);

server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
