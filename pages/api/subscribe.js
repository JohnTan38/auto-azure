import nodemailer from 'nodemailer';
 
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
 
    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: process.env.user,
        pass: process.env.pass,
      },
    });
    await new Promise((resolve, reject) => {
      //verify connection configuration
      transporter.verify(function(error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to accept message");
          resolve(success);
        }
      });
    });


    // Set up email data
    let mailOptions = {
      from: 'azx1818@hotmail.com',
      to: email,
      subject: 'Email Confirmation',
      text: 'Thank you for expression of interest. We will contact you.',
    };

    await new Promise((resolve, reject) => {
      // send email
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });
    

    try {
      // Send mail with defined transport object
      //await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Subscription successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Subscription failed. Please try again later.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
