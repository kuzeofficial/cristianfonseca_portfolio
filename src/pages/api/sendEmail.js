const nodemailer = require('nodemailer');
export default function sendEmail(req, res){
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