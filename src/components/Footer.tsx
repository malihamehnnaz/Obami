"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      {/* Gold Bar */}
      <div className="bg-[#C5A059] py-3 text-center">
        <p className="text-white font-medium text-sm md:text-base">Looking for the best Vietnamese food in Surry Hills?</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Logo Section */}
        <div className="mb-12">
          <Link href="/" className="inline-block group">
            <div className="flex flex-col items-start">
              <Image 
                src="/New folder (2)/download-removebg-preview.png" 
                alt="OBA'MI Logo" 
                width={150} 
                height={75} 
                className="h-20 w-auto object-contain mb-4 bg-white rounded-lg p-2"
              />
              <p className="text-white text-sm font-medium tracking-wide">
                Vietnamese Restaurant - Surry Hills
              </p>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Monday - Sunday</h3>
            <div className="flex items-center space-x-3 mb-6">
              <div className="border border-[#C5A059] p-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white">9:30 am to 8:55 pm</p>
            </div>

            <h3 className="text-lg font-bold text-white mb-6">Public Holidays</h3>
            <div className="flex items-center space-x-3">
              <div className="border border-[#C5A059] p-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white">Open</p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Address</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="text-[#C5A059] mt-1 flex-shrink-0" size={24} />
              <a 
                href="https://maps.google.com/?q=318+Elizabeth+St,+Surry+Hills+NSW+2010" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#C5A059] transition-colors leading-relaxed"
              >
                318 Elizabeth St<br />Surry Hills NSW 2010
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://www.ubereats.com/au/store/obami/UXcrBC3PSjmUGlCklwod9Q?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#C5A059] transition-colors flex items-center"
                >
                  <span className="mr-3 text-[#C5A059]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 001-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Order | Uber Eats
                </a>
              </li>
              <li>
                <a 
                  href="https://www.doordash.com/store/oba'mi-surry-hills-33848257/62964349/?rwg_token=ACgRB3fKecSG8Fx_GEltRhpOjLto1b6UM9XuIpEMIzh5tOrvZb0ogCUP3kDzFj0tYo2Xss3TA3ZRPLdQAUVoA9woJW6sT93CM7AW0aQXYlRb72IDCggGPDA=&utm_campaign=gpa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#C5A059] transition-colors flex items-center"
                >
                  <span className="mr-3 text-[#C5A059]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 001-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Order | Take Away
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-[#C5A059] mr-3 flex-shrink-0" size={20} />
                <a href="mailto:obami@gmail.com" className="text-white hover:text-[#C5A059] transition-colors">obami@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Socials</h3>
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-[#C5A059] transition-colors flex items-center group">
                <Instagram size={20} className="mr-3 text-[#C5A059]" />
                Follow on Instagram
              </a>
              <a href="#" className="text-white hover:text-[#C5A059] transition-colors flex items-center group">
                <Facebook size={20} className="mr-3 text-[#C5A059]" />
                Like on Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-white text-sm">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 text-[#C5A059] hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <div className="border border-[#C5A059] rounded-full p-2">
              <ArrowUp size={20} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
