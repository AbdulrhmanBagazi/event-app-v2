import express, { Application } from 'express';
import Admin from './admin.routes';
import Client from './client.routes';
import Companies from './companies.routes';

const app: Application = express();

app.use('/admin', Admin);
app.use('/companies', Companies);
app.use('/client', Client);

export default app;
