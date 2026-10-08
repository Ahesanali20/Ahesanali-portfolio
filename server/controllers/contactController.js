import Contact from "../models/Contact.js";

export const submitContact = async (req, res, next) => {
  try {
    const contact = await Contact.create({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });

    return res.status(201).json({
      success: true,
      message: "Your message has been received successfully.",
      data: {
        id: contact._id,
      },
    });
  } catch (error) {
    next(error);
  }
};
