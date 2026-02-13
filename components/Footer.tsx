"use client";


import { Github, Linkedin,  Mail, Send, MapPin } from "lucide-react";
import { useState } from 'react';

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { icon: Mail, label: "Email", href: "mailto:woutdec@hotmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/woutdecrop" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/woutdecrop" },
];



export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
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


export default function FooterSection() {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer id="contact" className="bg-black border-t border-orange-500/20 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

      <div className="text-center mb-12">
        <p className="text-orange-500 font-medium tracking-widest uppercase text-sm mb-4">
          Get in Touch
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-white">
          Let's collaborate
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
              className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/50 hover:bg-orange-500 hover:border-orange-500 text-orange-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-12">
      
      {/* LEFT SIDE – Contact Info */}
      <div className="space-y-4">
        <p className="text-gray-400 max-w-xl mx-auto">
          I'm always interested in hearing about new research collaborations, 
          speaking opportunities, or just connecting with fellow scientists.
        </p>
        <div className="flex items-start">
          <div className="p-3 bg-blue-100 rounded-lg mr-4">
            <Mail className="text-blue-600" size={24} />
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-white">Email</h4>
            <a
              href="mailto:woutdec@hotmail.com"
              className="text-gray-200 hover:text-white transition-colors"
            >
              woutdec@hotmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <div className="p-3 bg-blue-100 rounded-lg mr-4">
            <MapPin className="text-blue-600" size={24} />
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-white">Location</h4>
            <p className="text-gray-200">Ghent - Belgium</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE – Contact Form */}
      {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-200 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Your message..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Send Message
              <Send size={18} className="ml-2" />
            </button>
          </form>
        </div>

    </div>

    
    <div className="border-t border-orange-500/20 pt-8 text-center">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Wout Decrop. All rights reserved.
      </p>
    </div>
    </div>
    </footer>
  );
}