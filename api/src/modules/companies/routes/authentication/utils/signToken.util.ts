import Jwt from 'jsonwebtoken';
import {
  JWT_PrivateKey,
  CompaniesPassPhrase,
  CompaniesAccessTokenMaxAge,
  CompaniesTokenMeta,
  CompaniesRefreshTokenMaxAge,
} from '../../../config/jwt.config';

type Token_Type = 'companies_access_token' | 'companies_refresh_token';

const SignToken = async (data: { id: string; email: string }, type: Token_Type): Promise<string> => {
  const Token = await Jwt.sign(
    data,
    { key: JWT_PrivateKey, passphrase: CompaniesPassPhrase },
    {
      expiresIn: type === 'companies_access_token' ? CompaniesAccessTokenMaxAge : CompaniesRefreshTokenMaxAge,
      algorithm: 'RS256',
      ...CompaniesTokenMeta,
    },
  );

  return Token;
};

export default SignToken;
