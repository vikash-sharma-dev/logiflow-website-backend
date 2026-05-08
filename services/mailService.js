const transporter = require("../config/mailConfig");
const dotenv = require("dotenv");
dotenv.config();
const ejs = require("ejs");
const path = require("path");

module.exports = {
  sendUserEmail: async (name, phone, email, company, shipmentType, message) => {
    try {
      // path to EJS template
      const templatePath = path.resolve("views/emailTemplate.ejs");

      // render HTML from EJS
      const htmlContent = await ejs.renderFile(templatePath, {
        name,
        email,
        phone,
        company,
        shipmentType,
        message
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: "New Inquiry Received",
        html: htmlContent,
      };

      return await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Mail error:", error);
      throw error;
    }
  },
};
