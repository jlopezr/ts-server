import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as methodOverride from 'method-override';
import * as cors from 'cors';
import {Request, Response} from 'express';

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

let bigRedDog = 'Clifford';

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, '+bigRedDog);
});

app.listen(process.env.PORT || 8080);
console.log("Server started on port 8080");