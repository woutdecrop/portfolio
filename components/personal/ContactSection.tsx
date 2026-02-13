"use client";

import { Github, Linkedin, Mail, Instagram } from "lucide-react"; // removed Send
import { useState } from 'react';

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

// Custom OnlyFans SVG icon (perfect circle, bigger, same text)
const OFIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"   // bigger canvas for big circle
    fill="currentColor"
  >
    <circle cx="50" cy="50" r="45" fill="currentColor" />  {/* big circle */}
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dy=".35em"
      fontSize="32"       // same as before
      fontWeight="bold"
      fill="white"
      fontFamily="Arial, sans-serif"
    >
      OF
    </text>
  </svg>
);



const socialLinks: SocialLink[] = [
  { icon: Mail, label: "Email", href: "mailto:woutdec@hotmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/woutdecrop" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/woutdecrop" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/wout.decrop/" },
  { icon: OFIcon, label: "OF", href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer id="contact" className="bg-black border-t border-blue-500/20 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-white">
            Let's talk!
          </h2>
        </div>

        <div className="flex justify-center gap-4 mb-16">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/50 hover:bg-blue-500 hover:border-blue-500 text-blue-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form can go here */}
        </div>

        <div className="border-t border-blue-500/20 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Wout Decrop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
