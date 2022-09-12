export const JWT_PrivateKey = process.env.JWT_PRIVATE_KEY?.replace(/\\n/g, '\n') as string;
export const JWT_PublicKey = process.env.JWT_PUBLIC_KEY?.replace(/\\n/g, '\n') as string;

export const CompaniesPassPhrase = process.env.COMPANIES_PASSPHRASE as string;
export const CompaniesAccessTokenMaxAge = process.env.COMPANIES_ACCESS_TOKEN_MAXAGE || '';
export const CompaniesRefreshTokenMaxAge = process.env.COMPANIES_REFRESH_TOKEN_MAXAGE || '';
export const CompaniesTokenMeta = {
  issuer: process.env.COMPANIES_ISSUER,
  audience: process.env.COMPANIES_AUDIENCE,
  subject: 'companies',
};
