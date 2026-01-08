"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Check, Send } from "lucide-react";
import { sendEmail } from "@/actions/sendEmail";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    setError(null);
    startTransition(async () => {
      const result = await sendEmail(data);
      if (result.success) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 3000); // Reset success state after 3 seconds
      } else {
        setError(result.error || "Something went wrong");
      }
    });
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="w-full px-4 py-2 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-white/30 transition-all"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-white/30 transition-all"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-1">
            Subject
          </label>
          <input
            {...register("subject")}
            type="text"
            id="subject"
            className="w-full px-4 py-2 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-white/30 transition-all"
            placeholder="What's this about?"
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
            Message
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={4}
            className="w-full px-4 py-2 bg-black/20 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-white/30 transition-all resize-none"
            placeholder="Your message here..."
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
          )}
        </div>

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isPending || isSuccess}
          className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
            isSuccess
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "border border-white/20 bg-neutral-900 hover:bg-white hover:text-black text-white"
          } disabled:opacity-70 disabled:cursor-not-allowed`}
        >
          {isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : isSuccess ? (
            <>
              <Check className="w-5 h-5" />
              Sent Successfully!
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};
