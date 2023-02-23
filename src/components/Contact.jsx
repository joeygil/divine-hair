import React from "react";
import { motion } from "framer-motion";
import ShrunkNav from "./ShrunkNav";
import Navi from "./Navi";
import { UilFacebook, UilInstagramAlt } from "@iconscout/react-unicons";

const Contact = () => {
  return (
    <>
      <ShrunkNav />
      <Navi />
      <motion.div initial={{ x: "-50vw" }} animate={{ x: 0 }}>
        <div className="w-screen top-[20vh] relative flex flex-col justify-center items-center mb-[250px]">
          <div className="text-[3rem]">CONTACT</div>
          <div className="contact-page flex justify-around items-center w-full">
            <div className="flex flex-col justify-around bg-white rounded-xl shadow-2xl my-8 border-2 w-[500px] h-[500px] text-center ring ring-[#725C71]">
              Address:
              <p className="text-3xl">
                26 High Street, <br />
                Knaresborough, <br />
                HG5 0EQ
              </p>
              Telephone:
              <p className="text-5xl">01423 864755</p>
              Email:
              <p className="text-3xl">info@divinehair.com</p>
              Socials:
              <div className="socials flex justify-around items-center">
                <UilFacebook size="50" color="#725C71" />
                <UilInstagramAlt size="50" color="#725C71" />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl border-2 w-[500px] h-[500px] text-center ring ring-[#725C71]">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="100%"
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=26%20high%20street%20knaresborough&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
