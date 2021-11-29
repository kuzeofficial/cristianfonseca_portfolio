import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  var name = req.body.name;
  var from = req.body.email;
  var message = req.body.message;
  var to = `${process.env.USER_GMAIL}`;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: `${process.env.USER_GMAIL}`,
      pass: `${process.env.PASS_GMAIL}`,
    },
  });
  var mailOptions = {
    from: from,
    to: to,
    subject: name + " | new message !",
    text: message + ` | Contact in: ${from}`,
  };

  transporter
    .sendMail(mailOptions)
    .then((response: NextApiResponse) => {
      res.status(200).json(response);
    })
    .catch((error: { response: string }) => {
      res.status(400).json(error.response);
    });
}

export default sendEmail;
