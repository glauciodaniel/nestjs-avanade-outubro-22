import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  async sendEmail(to: string, subject: string, msg: string, options: object) {
    const clientID = process.env.CLIENT_ID;
    const secretKey = process.env.SECRET_KEY;
    const refreshToken = process.env.REFRESH_TOKEN;
    const redirectURI = 'https://developers.google.com/oauthplayground';
    const OAuth2 = google.auth.OAuth2;

    const oauth2Client = new OAuth2(clientID, secretKey, redirectURI);

    oauth2Client.setCredentials({ refresh_token: refreshToken });
  }
}
