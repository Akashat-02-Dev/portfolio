"use client";
import { motion } from "framer-motion";
import { DATA } from "../data";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/10 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        I&apos;m currently looking for new opportunities, my inbox is always open. 
                        Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                </div>

                <div className="space-y-6">
                    <a href={`mailto:${DATA.contact.email}`} className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                        <span className="p-4 rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Mail size={24} />
                        </span>
                        <span className="text-lg">{DATA.contact.email}</span>
                    </a>
                    <a href={`tel:${DATA.contact.phone}`} className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                        <span className="p-4 rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Phone size={24} />
                        </span>
                        <span className="text-lg">{DATA.contact.phone}</span>
                    </a>
                    <div className="flex items-center gap-4 text-muted-foreground group">
                        <span className="p-4 rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <MapPin size={24} />
                        </span>
                        <span className="text-lg">{DATA.contact.location}</span>
                    </div>
                </div>

                <div className="pt-8 border-t border-border">
                    <h4 className="font-medium mb-4 text-lg">Connect with me</h4>
                    <div className="flex gap-4">
                        <a 
                            href={DATA.contact.social.linkedin.url} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full bg-secondary hover:bg-[#0077b5] hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a 
                            href={DATA.contact.social.github.url} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full bg-secondary hover:bg-[#333] hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <ContactForm />
            </motion.div>
        </div>
      </div>
    </section>
  );
};
