const nodemaiiler = require('nodemailer');
async function sendMail({ from, to, subject, text, html}){
    let tranpoter = nodemaiiler.createTransport({
        host: 'process.env.SMTP_HOST',
        port: 'process.env.SMTP_PORT',
        secure: 'false',
        auth: {
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS
        }
    });

    let info = await TransformStreamDefaultController.sendMail({
        from :`cloudclique <${from}>`,
        to,
        subject,
        text,
        html
    });
}



module.exports = sendMail;