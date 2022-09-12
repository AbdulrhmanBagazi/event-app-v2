import passport from 'passport';
import './passport.companies';

const Companies_PassportSignIn = passport.authenticate('Companies_SingIn', { session: false });
const Companies_PassportAuthenticate = passport.authenticate('Companies_Authenticate_Access_Token', {
  session: false,
});
const Companies_PassportAuthenticateRest = passport.authenticate('Companies_Authenticate_Access_Token_Rest', {
  session: false,
  failureRedirect: '/companies/authentication/refresh',
});
const Companies_PassportRefresh = passport.authenticate('Companies_Authenticate_Refresh_Token', { session: false });

export {
  Companies_PassportSignIn,
  Companies_PassportAuthenticate,
  Companies_PassportRefresh,
  Companies_PassportAuthenticateRest,
};
