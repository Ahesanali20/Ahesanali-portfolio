const contactValidation = (req, res, next) => {
  const { name, email, subject, message } = req.body;

  const errors = {};

  if (!name || name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!email || !email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (!subject || subject.trim().length < 5) {
    errors.subject = "Subject must be at least 5 characters.";
  }

  if (!message || message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors,
    });
  }

  next();
};

export default contactValidation;
