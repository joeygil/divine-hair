import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilInstagramAlt } from "@iconscout/react-unicons";
import { UilTrophy } from "@iconscout/react-unicons";

const Navi = () => {
  return (
    <>
      <nav className="relative z-50 ">
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
          className="navigation bg-white fixed top-[10vh] px-12 text-xl flex w-full justify-between items-between z-50"
        >
          <div className="socials flex justify-around items-center w-[20%]">
            <UilFacebook size="50" color="#725C71" />
            <UilInstagramAlt size="50" color="#725C71" />
          </div>

          <div className="nav-options flex w-[30%] justify-between">
            <Link to="/" className="py-5 my-0">
              Home
            </Link>
            <Link to="/team" className="py-5 my-0">
              Team
            </Link>
            <Link to="/contact" className="py-5 my-0">
              Contact
            </Link>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navi;
