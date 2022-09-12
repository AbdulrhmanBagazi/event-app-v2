import { Prisma, PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import appleSigninAuth from 'apple-signin-auth';
import crypto from 'crypto';
import { SendEmail, SignToken } from '../../../index.utils';

const prisma = new PrismaClient();

const AppleSignIn = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const now = new Date();
    const appleIdTokenClaims = await appleSigninAuth.verifyIdToken(data.identityToken, {
      nonce: data.nonce ? crypto.createHash('sha256').update(data.nonce).digest('hex') : undefined,
    });

    const user = await prisma.user.findFirst({
      where: {
        AccountId: appleIdTokenClaims?.sub,
        Type: 'APPLE',
      },
      select: {
        id: true,
        email: true,
        verfied: true,
        Type: true,
      },
    });

    if (user) {
      const AccessToken = await SignToken(user, 'access_token');
      const RefreshToken = await SignToken(user, 'refresh_token');

      res.cookie('refresh_token', RefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 365 * 24 * 60 * 60 * 1000,
        signed: true,
      });

      res.cookie('access_token', AccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 365 * 24 * 60 * 60 * 1000,
        signed: true,
      });

      return res.status(200).send({ user: user });
    }

    if (!user && appleIdTokenClaims?.email) {
      const newUser = await prisma.user.create({
        data: {
          email: appleIdTokenClaims?.email.toLowerCase(),
          verfied: appleIdTokenClaims?.email_verified === 'true',
          verificationEmail: now,
          Type: 'APPLE',
          AccountId: appleIdTokenClaims?.sub,
        },
        select: {
          id: true,
          email: true,
          verfied: true,
          Type: true,
        },
      });

      const AccessToken = await SignToken(newUser, 'access_token');
      const RefreshToken = await SignToken(newUser, 'refresh_token');

      res.cookie('refresh_token', RefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 365 * 24 * 60 * 60 * 1000,
        signed: true,
      });

      res.cookie('access_token', AccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 365 * 24 * 60 * 60 * 1000,
        signed: true,
      });

      if (!appleIdTokenClaims?.email_verified) {
        await SendEmail(newUser.id, newUser.email);
      }

      return res.status(200).send({ user: newUser });
    }

    return res.sendStatus(400);
  } catch (e: unknown) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        return res.status(400).send({ error: `${e.code}`, meta: e.meta });
      }

      return res.status(400).send({ error: `${e.code}`, meta: e.meta });
    }
    return res.sendStatus(500);
  }
};

export default AppleSignIn;

// {
//   iss: 'https://appleid.apple.com',
//   aud: 'com.bagazi.dev.test',
//   exp: 1662873269,
//   iat: 1662786869,
//   sub: '000537.16cf43ad4f49407c9e877cf25002afe2.0439',
//   nonce: 'fda6c548584fc2e63847510eb946535c1dc7f1633729eb8a2ac10a0494f6fd8e',
//   c_hash: 'n1eAgzpf3rqdETcBl8CpFA',
//   email: 'hgdf5bmsy4@privaterelay.appleid.com',
//   email_verified: 'true',
//   is_private_email: 'true',
//   auth_time: 1662786869,
//   nonce_supported: true
// }
