import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as methodOverride from 'method-override';
import * as cors from 'cors';

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

let bigRedDog = 'Clifford';

app.listen(process.env.PORT || 8080);
