import express from 'express';
import cors from 'cors';
import * as http from 'http';

import {RoutesConfig} from "./common/routesConfig";
import {CompaniesRoutes} from "./companies/companies.routes";


const app: express.Application = express();
const server = http.createServer(app);
const PORT = 3000;
const routes: RoutesConfig[] = [];
app.use(express.json());
app.use(cors());

routes.push(new CompaniesRoutes(app));

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`I'm working! thanks for using me`)
});

server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});

