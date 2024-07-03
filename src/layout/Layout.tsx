import React from "react";
import SidebarNavigation from "./SidebarNavigation";
import BottomNavigation from "./BottomNavigation";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className=" flex w-100 bg-slate-800">
      <SidebarNavigation />
      <div className="flex flex-col w-100 min-h-screen">
        <header className=" py-2"></header>
        <main className="w-100 flex-grow">{children}</main>
        <footer className="sticky bottom-0 sm:hidden">
          <BottomNavigation />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
