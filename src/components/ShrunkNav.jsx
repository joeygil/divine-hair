import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UilBars } from "@iconscout/react-unicons";
import { useRef, useState } from "react";
import MobileMenu from "./MobileMenu";

const ShrunkNav = () => {
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
  return (
    <>
      <nav className="navigation flex justify-between px-5 items-center bg-[#bbbdbd] fixed z-10 w-screen text-3xl">
        <motion.img
          src="/images/divine-logo-init-sq.png"
          alt="company logo"
          className="h-[10vh] duration-300"
        />
        <div className="address-text text-[#725C71] text-end text-[2rem] mb-2">
          <p>26 High St, Knaresborough </p>
          <p className="text-[2.1rem] text-center">01423 861592</p>
        </div>

        <motion.button className="navigation-button bg-[#725C71] p-5 rounded-lg">
          Book Online
        </motion.button>
        <UilBars
          size="50"
          color="#725C71"
          className="menu-button hidden"
          onClick={openMenu}
        />
      </nav>
      <MobileMenu
        showModal={showModal}
        setShowModal={setShowModal}
        modalContent={modalContent}
        closeModal={closeModal}
      />
    </>
  );
};

export default ShrunkNav;
