import express, { Application } from 'express';
import { Authenticate, Refresh, SignIn, SignOut } from './index.controllers';
import { validateBody, Schema } from './index.validators';
//passport
import {
  Companies_PassportSignIn,
  //   PassportAuthenticate,
  Companies_PassportRefresh,
  Companies_PassportAuthenticateRest,
} from '../passport/index.passport';

const app: Application = express();

app.get('/', Companies_PassportAuthenticateRest, Authenticate);
app.get('/refresh', Companies_PassportRefresh, Refresh);
app.post('/signin', validateBody(Schema.SignInSchema), Companies_PassportSignIn, SignIn);
app.get('/signout', SignOut);

export default app;
