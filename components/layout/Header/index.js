import { memo } from "react";
import { Navbar } from "./Navbar";
import { TopNavbar } from "./TopNavbar";

const Header = () => {
  return (
    <>
      <TopNavbar />
      <Navbar />
    </>
  );
};

export default memo(Header);
