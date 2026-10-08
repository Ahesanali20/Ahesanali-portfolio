// TODO: Implement the contact form.
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitContactForm } from "../../services/contactApi";
import { contactSchema } from "../../schemas/contactSchema";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setSubmitError("");

      await submitContactForm(data);

      reset();
      setSubmitted(true);
      setSubmitError("");
    } catch (error) {
      console.error(error);
      setSubmitted(false);

      setSubmitError(
        error.response?.data?.message ||
          "Something went wrong. Please try again later.",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-(--color-border) bg-(--color-surface) p-6 shadow-(--color-accent-shadow) shadow-lg sm:p-8"
    >
      {submitted && (
        <div className="mb-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400">
          Thanks! Your message has been submitted successfully.
        </div>
      )}

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="text-sm font-medium text-(--color-text-primary)"
        >
          Name
        </label>

        <input
          id="name"
          type="text"
          {...register("name")}
          placeholder="Your name"
          className="mt-2 h-12 w-full rounded-xl border border-(--color-border) bg-(--color-background) px-4 text-sm text-(--color-text-primary) transition outline-none placeholder:text-(--color-text-secondary) focus:border-(--color-accent)"
        />

        {errors.name && (
          <p className="mt-2 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="mt-5">
        <label
          htmlFor="email"
          className="text-sm font-medium text-(--color-text-primary)"
        >
          Email
        </label>

        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder="you@example.com"
          className="mt-2 h-12 w-full rounded-xl border border-(--color-border) bg-(--color-background) px-4 text-sm text-(--color-text-primary) transition outline-none placeholder:text-(--color-text-secondary) focus:border-(--color-accent)"
        />

        {errors.email && (
          <p className="mt-2 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Subject */}
      <div className="mt-5">
        <label
          htmlFor="subject"
          className="text-sm font-medium text-(--color-text-primary)"
        >
          Subject
        </label>

        <input
          id="subject"
          type="text"
          {...register("subject")}
          placeholder="How can I help?"
          className="mt-2 h-12 w-full rounded-xl border border-(--color-border) bg-(--color-background) px-4 text-sm text-(--color-text-primary) transition outline-none placeholder:text-(--color-text-secondary) focus:border-(--color-accent)"
        />

        {errors.subject && (
          <p className="mt-2 text-xs text-red-500">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="mt-5">
        <label
          htmlFor="message"
          className="text-sm font-medium text-(--color-text-primary)"
        >
          Message
        </label>

        <textarea
          id="message"
          rows={6}
          {...register("message")}
          placeholder="Tell me about your project..."
          className="mt-2 w-full resize-none rounded-xl border border-(--color-border) bg-(--color-background) p-4 text-sm text-(--color-text-primary) transition outline-none placeholder:text-(--color-text-secondary) focus:border-(--color-accent)"
        />

        {errors.message && (
          <p className="mt-2 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-(--color-button) px-5 py-3.5 text-sm font-semibold text-(--color-button-text) transition hover:bg-(--color-button-hover) disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        {!isSubmitting && <Send size={17} />}
      </button>
    </form>
  );
};

export default ContactForm;
