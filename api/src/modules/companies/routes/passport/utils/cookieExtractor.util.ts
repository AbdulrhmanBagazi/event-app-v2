import { Request } from 'express';

type Token_Type = 'companies_access_token' | 'companies_refresh_token';

export const CookieExtractor = function (req: Request, type: Token_Type) {
  let token = null;

  if (req && req.signedCookies && req.signedCookies.companies_access_token && type === 'companies_access_token') {
    token = req.signedCookies.companies_access_token;
  }

  if (req && req.signedCookies && req.signedCookies.companies_refresh_token && type === 'companies_refresh_token') {
    token = req.signedCookies.companies_refresh_token;
  }

  return token;
};
