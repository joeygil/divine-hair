import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import { UilTrophy } from "@iconscout/react-unicons";

const Home = () => {
  return (
    <>
      <Header />
      <div className="z-0">
        <img
          src="/images/salon-mobile.webp"
          alt="salon interior"
          className="home-mob-banner hidden w-full mb-5"
        />
        <img
          src="/images/salon-interior.webp"
          alt="salon viewed from the street"
          className="home-main-banner w-full relative top-[20vh]"
        />
      </div>

      <div className="award-title flex items-center justify-center top-[20vh]">
        <UilTrophy size="50" color="#B8860B" />
        <p className="text-[#725C71]">Award Winning Knaresborough Hair Salon</p>
        <UilTrophy size="50" color="#B8860B" />
      </div>

      {/* Links */}
      <div className="home-content my-8 h-[100vh] flex justify-around items-center">
        {/* team */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="content-items w-[30%] h-[600px] bg-white shadow-2xl mb-5 flex flex-col justify-start items-center rounded-xl my-5 ring ring-[#725C71]"
        >
          <h2 className="team-text text-3xl text-bold p-2">THE TEAM:</h2>
          <img src="/images/team.webp" />{" "}
          <p className="p-3 team-text text-center text-xl">
            Divine Hair is a collective hub of some of Knaresborough's most
            talented and creative hairdressers. Each stylist is self employed
            and is essentially running their own business under the Divine
            umbrella, meaning they can offer something truly unique to suit your
            needs
          </p>
        </motion.div>

        {/* map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="content-items w-[30%] h-[600px] bg-white shadow-2xl rounded-xl my-5 ring ring-[#725C71]"
        >
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="100%"
                height="600"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=26%20high%20street%20knaresborough&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* opening times */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="opening-times content-items w-[30%] h-[600px] flex flex-col justify-start items-center bg-white shadow-2xl my-5 rounded-xl ring ring-[#725C71]"
        >
          <h2 className="text-3xl text-bold p-3 ">OPENING TIMES:</h2>
          <ul className="text-2xl flex flex-col justify-between items-between leading-loose pt-12">
            <li>Monday: 9am - 6pm</li>
            <li>Tuesday: 9am - 6pm</li>
            <li>Wednesday: 9am - 6pm</li>
            <li>Thursday: 9am - 6pm</li>
            <li>Friday: 9am - 6pm</li>
            <li>Saturday: 9am - 6pm</li>
            <li>Sunday: CLOSED</li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
