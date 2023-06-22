//Nodemailer module

//Send email to user


const nodemailer = require("nodemailer");

//mail 
const mailOptions = {
    from: '"shahel 👻" <avashb2@gmail.com>', // sender address
    to: "rainfall037@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
};

//gmail transporter
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'avashb2@gmail.com',
        pass: '',
    }
});
//ES5 style
//
// const mailer = (mailOptions, transporter) => {
//     transporter.sendMail(mailOptions, (err, info) =>{
//         if (err) {
//             console.log(err);
//         }else{
//             console.log(info);
//         }
//     })
// };

//ES6 style (async await)
const mailer = async (mailOptions, transporter) => {
        console.log('sending Email......');
        const info = await transporter.sendMail(mailOptions);
        console.log({ info: info.response});
};

mailer(mailOptions, transporter)


