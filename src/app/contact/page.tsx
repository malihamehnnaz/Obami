import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen py-24 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-orange-600 text-sm tracking-[0.3em] uppercase mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">CONTACT US</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
            We&apos;d love to hear from you. Visit us, call us, or send us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="bg-gray-50 border border-gray-200 p-10 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-10 uppercase tracking-wider">Information</h2>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6 group">
                <div className="bg-white p-4 text-orange-600 shadow-sm rounded-md group-hover:bg-orange-600 group-hover:text-white transition-colors border border-gray-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-2">Visit Us</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    318 Elizabeth St, <br />
                    Surry Hills NSW 2010, Australia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="bg-white p-4 text-orange-600 shadow-sm rounded-md group-hover:bg-orange-600 group-hover:text-white transition-colors border border-gray-100">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-2">Opening Hours</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Monday - Sunday <br />
                    9:30 am - 8:55 pm
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="bg-white p-4 text-orange-600 shadow-sm rounded-md group-hover:bg-orange-600 group-hover:text-white transition-colors border border-gray-100">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-2">Call Us</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    (02) 1234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="bg-white p-4 text-orange-600 shadow-sm rounded-md group-hover:bg-orange-600 group-hover:text-white transition-colors border border-gray-100">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-2">Email Us</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    obami@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-gray-200 border border-gray-300 relative overflow-hidden group rounded-md">
               <iframe 
                 width="100%" 
                 height="100%" 
                 src="https://maps.google.com/maps?q=318%20Elizabeth%20St%2C%20Surry%20Hills%20NSW%202010&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                 style={{ border: 0 }}
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Obami Location"
               ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 border border-gray-200 p-10 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-10 uppercase tracking-wider">Send a Message</h2>
            <form className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-600 mb-2 uppercase tracking-wide">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 focus:border-orange-600 outline-none transition-colors placeholder-gray-400 rounded-md"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-600 mb-2 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 focus:border-orange-600 outline-none transition-colors placeholder-gray-400 rounded-md"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-600 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 focus:border-orange-600 outline-none transition-colors placeholder-gray-400 rounded-md"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white font-bold py-4 uppercase tracking-widest hover:bg-orange-600 transition-all duration-300 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}