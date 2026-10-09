const contactValidation = (req, res, next) => {
  const { name, email, subject, message } = req.body;

  const errors = {};

  if (typeof name !== "string" || name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

  if (typeof email !== "string" || !emailRegex.test(email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (typeof subject !== "string" || subject.trim().length < 5) {
    errors.subject = "Subject must be at least 5 characters.";
  }

  if (typeof message !== "string" || message.trim().length < 20) {
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
