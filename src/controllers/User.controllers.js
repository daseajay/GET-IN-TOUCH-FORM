import nodemailer from "nodemailer";
const sendEmail = async (req, res) => {
  // get user data from frontend....
  const { name, email, subject, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const mailOptions = {
      from: name,
      email,
      subject,
      message,
      to: process.env.EMAIL,
      subject: "sending Email with react and node js ",
      html: `
      <h2>New Contact Request</h2>
      <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%;">
        <tr>
          <th style="text-align: left;">Name</th>
          <td>${name}</td>
        </tr>
        <tr>
          <th style="text-align: left;">Email</th>
          <td>${email}</td>
        </tr>
        <tr>
          <th style="text-align: left;">Subject</th>
          <td>${subject}</td>
        </tr>
        <tr>
          <th style="text-align: left;">Message</th>
          <td>${message}</td>
        </tr>
      </table>
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error", error);
      } else {
        console.log("Email send" + info.response);
        res.status(201).json({ status: 201, info });
      }
    });
  } catch (error) {
    res.status(201).json({ status: 401, error });
  }
};

export { sendEmail };
