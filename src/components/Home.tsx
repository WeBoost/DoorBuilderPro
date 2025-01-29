import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-950 shadow-md">
        <h1 className="text-2xl font-bold text-white">DoorBuilderPro</h1>
        <nav className="space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">Templates</a>
          <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-white">Help Center</a>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Sign In</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h2 className="text-4xl font-bold">Helping You Build & Sell Doors Online</h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          The easiest way to create, customize, and launch high-performing door & construction websites.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-green-500 px-6 py-3 rounded-lg text-white">Get Started</button>
          <button className="border border-gray-400 px-6 py-3 rounded-lg text-white">Learn More</button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="flex justify-around bg-gray-800 py-12 text-center">
        <div>
          <h3 className="text-3xl font-bold">500+</h3>
          <p className="text-gray-400">Active Businesses</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">50K+</h3>
          <p className="text-gray-400">Monthly Visitors</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">100%</h3>
          <p className="text-gray-400">Coverage</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-center py-24 px-6">
        <h2 className="text-4xl font-bold">Build Your Digital Presence with <span className="text-green-400">AI-Powered Websites</span></h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Empower your construction business with modern, high-performing websites powered by AI automation.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-center py-6 text-gray-400">
        &copy; {new Date().getFullYear()} DoorBuilderPro. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
