const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) =>{
    sgMail.send({
        to: email,
        from: 'dagadu.divine@gmail.com',
        subject: 'Welcome to my node project api',
        text: `hello and welcome ${name},for any help concerning the api usage kindly visit the help page.`
    }).then(() =>{
        return true;
    })
}


module.exports = {
    sendWelcomeEmail
}
// sgMail.send({
//     to:'dagadu.divine@gmail.com',
//     from:'dagadu.divine@gmail.com',
//     subject:'This is a mail from sendgrid',
//     text:'I hope this mail finds  you well'
// }).then(()=>{
//     console.log('Sent mail')
// }).catch(err =>{
//     console.log(err.response.body,'failed to send mail')
// })