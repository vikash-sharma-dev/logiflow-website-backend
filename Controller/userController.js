const { sendUserEmail } = require("../services/mailService");

module.exports = {
  sendDetails: async (req, res) => {
    try {
      const { name, phone,email } = req.body;
        console.log(name, phone);
      if (!name || !phone) {
        return res.status(400).json({
          message: "Name and phone are required",
        });
      }

      await sendUserEmail(name, phone,email);

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
