import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { personalInfo, socialLinks } from '@/data/portfolio';
import { Github, Linkedin, Instagram } from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // NOTE: This is a frontend-only form. No email is actually sent.
    // To send real emails, connect a backend service (e.g. Supabase Edge Function,
    // EmailJS, or Formspree) and handle the submission here.
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: undefined },
  ];

  return (
    <SectionWrapper
      id="contact"
      title="Let's Connect"
      subtitle="Have a question or opportunity? I'd love to hear from you."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {contactItems.map((item) => (
            <div key={item.label} className="glass-card neon-border flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-slate-200 transition hover:text-cyan-400"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-slate-200">{item.value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Social */}
          <div className="glass-card p-5">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-500">
              Follow Me
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-slate-400 transition-all hover:border-cyan-400/40 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="glass-card neon-border p-6 md:p-8"
        >
          {submitted && (
            <div className="mb-4 flex items-center gap-3 rounded-lg border border-green-500/20 bg-green-500/5 p-4 text-sm text-green-400">
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              <span>
                Thank you! Your message has been noted. (Note: this demo form does not send
                real emails yet.)
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" className="btn-glow w-full text-cyan-400">
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
