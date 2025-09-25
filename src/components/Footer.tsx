"use client";
import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      
          <div>
            <h2 className="text-2xl font-bold text-white">YourBrand</h2>
            <p className="mt-4 text-gray-400">
              Building the future of productivity tools.  
              Helping teams collaborate and innovate faster.
            </p>
          </div>

   
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#blog" className="hover:text-white">Blog</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#docs" className="hover:text-white">Documentation</a></li>
              <li><a href="#support" className="hover:text-white">Support</a></li>
              <li><a href="#terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white"><Facebook /></a>
              <a href="#" className="hover:text-white"><Twitter /></a>
              <a href="#" className="hover:text-white"><Linkedin /></a>
              <a href="#" className="hover:text-white"><Instagram /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
