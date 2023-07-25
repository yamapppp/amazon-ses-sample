import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  const AWS = require('aws-sdk');
  AWS.config.update({ region: 'ap-northeast-1' });
  const ses = new AWS.SES();
  const msg = {
    Destination: {
      ToAddresses: [data.email],
    },
    Source: String(process.env.EMAIL_FROM),
    Template: 'test',
    TemplateData: `{"str1":"${data.message}"}`,
  };
  const res = await ses.sendTemplatedEmail(msg).promise();
  return NextResponse.json(res)
}
