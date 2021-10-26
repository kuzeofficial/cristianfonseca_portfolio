const nodemailer = require('nodemailer');
import NextCors from 'nextjs-cors'

export default function sendEmail(req, res){
    NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });
    var name = req.body.name;
    var from = req.body.email;
    var message = req.body.message;
    var to = `${process.env.USER_GMAIL}`;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: `${process.env.USER_GMAIL}`,
            pass: `${process.env.PASS_GMAIL}`
        }
    });
    var mailOptions = {
        from: from,
        to: to, 
        subject: name+' | new message !',
        text: message+` | Contact in: ${from}`
    }

    transporter.sendMail(mailOptions).then((response) => {res.status(200).json(response)}).catch((error) => {res.status(400).json(error.response)});
}