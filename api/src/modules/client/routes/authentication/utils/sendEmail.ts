import sgMail from '@sendgrid/mail';
import { SignToken } from '../index.utils';
const FromEmail = process.env.SENDER_EMAIL as string;
const VerifyURL = process.env.VERIFY_URL as string;
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const SendEmail = async (id: string, email: string) => {
  try {
    const EmailToken = await SignToken({ id, email }, 'email_token');
    const msg = {
      to: email, // Change to your recipient
      from: FromEmail, // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: `<td align="center" bgcolor="#ffbe00" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;"> <a href="${
        VerifyURL + '/' + EmailToken
      }" style="background-color:#ffbe00; border:1px solid #ffbe00; border-color:#ffbe00; border-radius:0px; border-width:1px; color:#000000; display:inline-block; font-size:14px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:12px 40px 12px 40px; text-align:center; text-decoration:none; border-style:solid; font-family:inherit;" target="_blank">Verify Email Now</a> </td>`,
    };

    await sgMail.send(msg);

    return true;
  } catch (e: unknown) {
    return false;
  }
};

export default SendEmail;
