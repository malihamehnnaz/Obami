import Link from "next/link";
import { ChevronDown, Clock, MapPin, Phone, Mail, Flame, Leaf, Sparkles } from 'lucide-react';
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import CustomerReviews from "@/components/CustomerReviews";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Tagline Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <ScrollReveal animation="fade-up" className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-6 ornamental-bottom">
            Discover the best Vietnamese restaurant in town
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg font-light">
            In the heart of Surry Hills' dining precinct, a contemporary Vietnamese restaurant featuring dishes from South East Asian cuisines including Vietnamese, Thai, and Malaysian with a Modern Australian twist.
          </p>
        </ScrollReveal>
      </section>

      {/* Our Story - Split Section */}
      <section className="py-0 bg-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          <div className="flex items-center justify-center p-12 md:p-20 bg-white order-2 md:order-1">
            <ScrollReveal animation="slide-right" className="max-w-lg">
              <span className="text-orange-600 text-sm tracking-[0.2em] uppercase font-bold mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">Our Story</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
                We're extremely passionate about the way food impacts one's health and life. We simply aim to put a smile on the customer's faces with our tasty food.
              </p>
              <Link 
                href="/about" 
                className="inline-block px-8 py-3 border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 uppercase tracking-wider text-sm"
              >
                Read Our Story
              </Link>
            </ScrollReveal>
          </div>
          <div className="relative h-[500px] md:h-auto order-1 md:order-2">
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1555126634-323283e090fa?w=1200&h=1000&fit=crop" 
              alt="Our Story" 
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Our Menus Section */}
      <section className="py-0 bg-gray-50 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          <div className="relative h-[500px] md:h-auto">
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=1000&fit=crop" 
              alt="Our Menus" 
              className="w-full h-full"
            />
          </div>
          <div className="flex items-center justify-center p-12 md:p-20 bg-gray-50">
            <ScrollReveal animation="slide-left" className="max-w-lg">
              <span className="text-orange-600 text-sm tracking-[0.2em] uppercase font-bold mb-4 block">Taste of Vietnam</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">Our Menus</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
                Our menu is packed full of delicious, healthy dishes that bring together the fresh flavours of various South East Asian cuisines. Whether it's something light and fragrant or a rich and spicy meal, we've got all the bases covered!
              </p>
              <Link 
                href="/menu" 
                className="inline-block px-8 py-3 bg-orange-600 text-white font-medium hover:bg-orange-700 transition-all duration-300 uppercase tracking-wider text-sm shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                View Our Menu
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fade-up" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">What We Offer</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-6"></div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <ScrollReveal animation="fade-up" delay={100} className="text-center group">
              <div className="inline-block p-6 bg-orange-50 rounded-full mb-8 group-hover:bg-orange-100 transition-colors duration-500">
                <Flame className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Authentic Flavors</h3>
              <p className="text-gray-600 leading-relaxed font-light">Traditional Vietnamese recipes prepared with the finest fresh ingredients and authentic techniques passed down through generations.</p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200} className="text-center group">
              <div className="inline-block p-6 bg-orange-50 rounded-full mb-8 group-hover:bg-orange-100 transition-colors duration-500">
                <Leaf className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Fresh Ingredients</h3>
              <p className="text-gray-600 leading-relaxed font-light">We source the freshest ingredients locally to ensure quality and health benefits in every dish we serve to our guests.</p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={300} className="text-center group">
              <div className="inline-block p-6 bg-orange-50 rounded-full mb-8 group-hover:bg-orange-100 transition-colors duration-500">
                <Sparkles className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Modern Twist</h3>
              <p className="text-gray-600 leading-relaxed font-light">Contemporary Australian dining approach combined with traditional South East Asian culinary excellence for a unique experience.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Visit Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Visit Us Today</h2>
            <p className="text-gray-400 text-lg font-light tracking-wide">BEST VIETNAMESE RESTAURANT IN SURRY HILLS</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <ScrollReveal animation="fade-up" delay={100} className="flex flex-col items-center text-center p-8 border border-white/10 rounded-lg hover:border-orange-500/50 transition-colors duration-300">
              <Phone className="w-8 h-8 text-orange-500 mb-6" />
              <p className="font-bold text-white mb-3 tracking-widest text-sm">CONTACT</p>
              <a href="tel:+61286685865" className="text-gray-400 hover:text-orange-500 transition-colors mb-1">(02) 8668 5865</a>
              <a href="mailto:contact@phamouskitchen.com" className="text-gray-400 hover:text-orange-500 transition-colors">contact@phamouskitchen.com</a>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200} className="flex flex-col items-center text-center p-8 border border-white/10 rounded-lg hover:border-orange-500/50 transition-colors duration-300">
              <MapPin className="w-8 h-8 text-orange-500 mb-6" />
              <p className="font-bold text-white mb-3 tracking-widest text-sm">VISIT US</p>
              <p className="text-gray-400 mb-1">318 Elizabeth St</p>
              <p className="text-gray-400">Surry Hills NSW 2010</p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={300} className="flex flex-col items-center text-center p-8 border border-white/10 rounded-lg hover:border-orange-500/50 transition-colors duration-300">
              <Clock className="w-8 h-8 text-orange-500 mb-6" />
              <p className="font-bold text-white mb-3 tracking-widest text-sm">OPENING HOURS</p>
              <p className="text-gray-400 mb-1">MON-SUN: 9:30 AM - 8:55 PM</p>
              <p className="text-gray-400">Public Holidays: Open</p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-up" delay={400} className="text-center">
            <Link 
              href="/contact" 
              className="inline-block px-10 py-4 bg-orange-600 text-white font-bold hover:bg-orange-700 transition-all duration-300 uppercase tracking-widest text-sm rounded-sm shadow-lg hover:shadow-orange-600/20"
            >
              Make a Reservation
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Instagram Follow */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <ScrollReveal animation="zoom-in" className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Follow Us</h3>
          <a 
            href="https://www.instagram.com/obami.balmain/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-orange-600 font-bold hover:text-orange-700 transition-colors text-xl tracking-wider"
          >
            @OBAMI.BALMAIN
          </a>
        </ScrollReveal>
      </section>
    </div>
  );
}
