import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-950 py-4">
        {/* Your header content goes here */}
      </header>
      <main className="bg-gray-950 flex-grow px-10">
        {/* Your main content goes here */}
        {children}
      </main>
      <footer className="bg-gray-950 py-4">
        {/* Your footer content goes here */}
      </footer>
    </div>
  );
};

export default Layout;
