const { sendUserEmail } = require("../services/mailService");

module.exports = {
  sendDetails: async (req, res) => {
    try {
      const { name, phone,email, company, shipmentType, message } = req.body;
        console.log(name, phone, email, company, shipmentType, message);
      if (!name || !phone || !email) {
        return res.status(400).json({
          message: "Name, phone, and email are required",
        });
      }

      await sendUserEmail(name, phone,email, company, shipmentType, message);

      res.status(200).json({
        message: "Email sent successfully",
        status : true,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending email", status : false });
    }
  },
};
