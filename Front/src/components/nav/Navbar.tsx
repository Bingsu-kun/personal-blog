import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import NavbarDefault from "./NavbarDefault";
import NavbarFixed from "./NavbarFixed";

function Navbar() {
  const [isScrollPast, setIsScrollPast] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setIsScrollPast(true);
    } else {
      setIsScrollPast(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrollPast ? <NavbarFixed key="navbar-fixed" /> : <NavbarDefault />}
      </AnimatePresence>
    </>
  );
}
export default Navbar;
