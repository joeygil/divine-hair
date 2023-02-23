import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UilFacebook, UilInstagramAlt } from "@iconscout/react-unicons";

const MobileMenu = ({ showModal, setShowModal, modalContent }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  return (
    <>
      {showModal ? (
        <motion.div
          initial={{ x: "110vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "150vw", opacity: 0 }}
          className="w-screen h-screen fixed bg-[#00000090] z-50 flex justify-end items-center"
          ref={modalRef}
          onClick={closeModal}
        >
          <div className="w-[60%] h-[100%] relative bg-white z-50 flex flex-col justify-center items-end rounded-bl-full">
            <motion.img
              initial={{ y: "-50vh" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5 }}
              src="/images/divine-logo-init-sq.png"
            />
            <Link
              className="menu-text my-4 text-3xl w-10/12 text-center py-2 border-b-2"
              to="/"
            >
              <div>HOME</div>
            </Link>
            <Link
              className="menu-text my-4 text-3xl w-10/12 text-center py-2 border-b-2"
              to="/team"
            >
              <div>TEAM</div>
            </Link>
            <Link
              className="menu-text my-4 text-3xl w-10/12 text-center py-2 border-b-2"
              to="/contact"
            >
              <div>CONTACT</div>
            </Link>
            <div className="flex justify-between items-center m-5">
              <UilFacebook size="50" color="#725C71" />
              <UilInstagramAlt size="50" color="#725C71" />
            </div>
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default MobileMenu;
