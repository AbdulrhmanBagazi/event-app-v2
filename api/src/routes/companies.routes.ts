import express, { Application } from 'express';
const app: Application = express();
//routes
import Authentication from '../modules/companies/routes/authentication/routes';

app.use('/authentication', Authentication);

export default app;
