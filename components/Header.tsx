import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex items-center justify-between px-4 pt-4">
      <h2>Dashboard</h2>
      <h2>Welcome back, Sameer</h2>
    </div>
  );
};

export default Header;
