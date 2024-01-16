import React from "react";
import Header from "./Header";
import SideNavLayout from "./SideNavLayout";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <SideNavLayout />
    </div>
  );
};

export default MainLayout;
