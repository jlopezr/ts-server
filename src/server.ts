import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as methodOverride from 'method-override';
import * as cors from 'cors';
import {Request, Response} from 'express';

function x(a,b) {
    return a+b;
}

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

const bigRedDog = 'Clifford';

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, '+bigRedDog+x(1,2));
});

app.listen(process.env.PORT || 8080);
console.log("Server started on port 8080");
