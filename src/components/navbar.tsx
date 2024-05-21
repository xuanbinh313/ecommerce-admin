import { UserButton } from "@clerk/nextjs";
import React from "react";
import { MainNav } from "@/components/main-nav";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div>This will be store switcher</div>
      </div>
      <MainNav/>
      <div className="ml-auto flex items-center space-x-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
