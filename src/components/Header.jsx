import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navi from "./Navi";
import { UilBars } from "@iconscout/react-unicons";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollXPosition, setScrollXPosition] = useState(0);
  const [navShrunk, setNavShrunk] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const openMenu = () => {
    setShowModal((prev) => !prev);
    setModalContent(<MobileMenu />);
  };

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
      if (scrollPosition > 50) {
        setNavShrunk(true);
      } else {
        setNavShrunk(false);
      }
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  });

  useEffect(() => {
    const updateXPosition = () => {
      setScrollXPosition(window.innerWidth);
      if (scrollXPosition < 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("scroll", updateXPosition);

    updateXPosition();

    return () => window.removeEventListener("scroll", updateXPosition);
  });

  // console.log(isMobile);

  // console.log(scrollPosition);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between px-5 items-center bg-[#bbbdbd] fixed z-40 w-screen text-3xl border-b-8 border-[#725C71]">
          {navShrunk && !showModal ? (
            <>
              <motion.img
                initial={{ x: "-50vw" }}
                animate={{ x: 0 }}
                src="/images/divine-logo-init-sq.png"
                alt="company logo"
                className="logo h-[10vh] duration-300"
              />
            </>
          ) : null}
          {scrollPosition < 25 ? (
            <div className="flex flex-col">
              <img
                src="/images/divine-logo.png"
                alt="company logo"
                className={!isMobile ? "h-[40vh]" : "h-[13vh]"}
              />
              <div className="address-text text-[#725C71] text-end text-[2rem] mb-2">
                26 High St, Knaresborough 01423 861592
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <img
                src="/images/divine-logo.png"
                alt="company logo"
                className="opacity-0 h-0 duration-300"
              />
              <div className="address-text text-[#725C71] text-end text-[2rem] mb-2">
                26 High St, Knaresborough <br /> 01423 861592
              </div>
            </div>
          )}

          {scrollPosition > 25 ? (
            <>
              <motion.button
                whileHover={{ scale: 1.1, color: "black" }}
                whileTap={{ scale: 0.9 }}
                className="navigation-button bg-[#725C71] p-3 rounded-lg"
              >
                Book Online
              </motion.button>
              <UilBars
                size="50"
                color="#725C71"
                className="menu-button hidden"
                onClick={openMenu}
              />
            </>
          ) : null}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="relative z-50"
        >
          {navShrunk ? <Navi /> : null}
        </motion.div>
      </div>
      <MobileMenu
        showModal={showModal}
        setShowModal={setShowModal}
        modalContent={modalContent}
        closeModal={closeModal}
      />
    </>
  );
};

export default Header;
