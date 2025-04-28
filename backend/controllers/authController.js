const twilio = require("twilio");
require("dotenv").config();

const client = twilio(
  process.env.TWILLIO_AUTH_SID,
  process.env.TWILLIO_AUTH_TOKEN
);
 
const requestOtp = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ message: "Phone number is required" });
    }

    const verification = await client.verify.v2
      .services(process.env.TWILLIO_VERIFY_SERVICE_SID)
      .verifications.create({
        to: phone,
        channel: "sms",
      });
    res
      .status(200)
      .json({ message: "OTP sent successfully", sid: verification.sid });
  } catch (error) {
    console.error("Error sending OTP:", error.message);
    res.status(500).json({ message: `Error sending OTP: ${error.message}` });
  }
};

const verifyOtp = async (req, res) => {
  const { phone, otp } = req.body;

  try {
    const verificationCheck = await client.verify.v2
      .services(process.env.TWILLIO_VERIFY_SERVICE_SID)
      .verificationChecks.create({
        to: phone,
        code: otp,
      });
    if (verificationCheck.status === "approved") {
      res.status(200).json({ message: "OTP verified successfully" });
    } else {
      res.status(400).json({ message: "Invalid OTP" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { requestOtp, verifyOtp };
