import { motion } from "framer-motion";
import React from "react";
import Header from "./Header";
import Navi from "./Navi";
import ShrunkNav from "./ShrunkNav";
import { InstagramEmbed } from "react-social-media-embed";

const Team = () => {
  return (
    <>
      <ShrunkNav />
      <Navi />
      <motion.div initial={{ x: "-50vw" }} animate={{ x: 0 }}>
        <div className="w-screen top-[10vh] relative flex flex-col justify-center items-center ">
          <h1 className="address-text my-8">ABOUT THE TEAM</h1>
          <div className="team-content grid gap-3 p-2 grid-rows-5 grid-cols-3 h-screen border-black w-[90%] h-full mb-[100px]">
            <div className="flex flex-col justify-around items-center">
              <img src="https://via.placeholder.com/1158x1600" />
              <img
                src="https://via.placeholder.com/1158x1600"
                className="mob-team-pics"
              />
              <img
                src="https://via.placeholder.com/1158x1600"
                className="mob-team-pics"
              />
              <img
                src="https://via.placeholder.com/1158x1600"
                className="mob-team-pics"
              />
            </div>
            <div className="col-span-2 p-5">
              <div className="flex flex-col justify-between h-full ">
                <h2 className="team-title-text border-b-2 border-[#725C71]">
                  Kirsty
                </h2>
                <h3 className="team-work text-xl">Work:</h3>
                <div className="team-work flex justify-around items-center">
                  <motion.img
                    whileHover={{ scale: 2 }}
                    src="https://via.placeholder.com/150x210"
                  />
                  <motion.img
                    whileHover={{ scale: 2 }}
                    src="https://via.placeholder.com/150x210"
                  />
                  <motion.img
                    whileHover={{ scale: 2 }}
                    src="https://via.placeholder.com/150x210"
                  />
                  <motion.img
                    whileHover={{ scale: 2 }}
                    src="https://via.placeholder.com/150x210"
                  />
                </div>
                <h3 className="text-xl">History: </h3>
                <p>
                  Kirsty was a driven and talented hairdresser who began her
                  career at a young age. She was self-taught and started her own
                  salon at just 22 years old. Her unique style and innovative
                  haircuts and color techniques quickly earned her a reputation
                  in the industry. After five years of running her own business,
                  she was offered a job at a prestigious salon in the city,
                  where she honed her skills and became known for her intricate
                  updos and braids. Her passion and talent for hairdressing were
                  evident, and this led to her opening a chain of successful
                  salons across the country.
                </p>

                <h3 className="text-xl"> Skills:</h3>
                <p>
                  Innovative haircut and color techniques Self-taught and
                  resourceful Skilled in intricate updos and braids Reputation
                  for delivering high-quality results Strong business acumen,
                  with the ability to build and run a successful salon chain.
                </p>
              </div>
            </div>
            <div className="col-span-2 p-5">
              <div className="flex flex-col justify-between h-full">
                <h2 className="team-title-text border-b-2 border-[#725C71]">
                  Fiona
                </h2>
                <h3 className="team-work text-xl">Work:</h3>
                <div className="team-work flex justify-around items-center">
                  <motion.img
                    whileHover={{ scale: 2 }}
                    src="https://via.placeholder.com/150x210"
                  />
                  <motion.img
                    whileHover={{ scale: 2 }}
                    src="https://via.placeholder.com/150x210"
                  />
                  <motion.img
                    whileHover={{ scale: 2 }}
                    src="https://via.placeholder.com/150x210"
                  />
                  <motion.img
                    whileHover={{ scale: 2 }}
                    src="https://via.placeholder.com/150x210"
                  />
                </div>
                <h3 className="text-xl">History:</h3>

                <p>
                  Fiona was a driven and talented hairdresser who began her
                  career at a young age. She was self-taught and started her own
                  salon at just 22 years old. Her unique style and innovative
                  haircuts and color techniques quickly earned her a reputation
                  in the industry. After five years of running her own business,
                  she was offered a job at a prestigious salon in the city,
                  where she honed her skills and became known for her intricate
                  updos and braids. Her passion and talent for hairdressing were
                  evident, and this led to her opening a chain of successful
                  salons across the country.
                </p>
                <h3 className="text-xl">Skills:</h3>

                <p>
                  Innovative haircut and color techniques Self-taught and
                  resourceful Skilled in intricate updos and braids Reputation
                  for delivering high-quality results Strong business acumen,
                  with the ability to build and run a successful salon chain.{" "}
                </p>
              </div>
            </div>
            <div className="w-auto h-auto flex flex-col justify-around items-center">
              <img src="/images/fiona.JPG" />
              <img
                src="https://via.placeholder.com/1158x1600"
                className="mob-team-pics"
              />
              <img
                src="https://via.placeholder.com/1158x1600"
                className="mob-team-pics"
              />
              <img
                src="https://via.placeholder.com/1158x1600"
                className="mob-team-pics"
              />
            </div>
            <div className="flex flex-col justify-around items-center">
              <img src="https://via.placeholder.com/1158x1600" />
              <img
                src="https://via.placeholder.com/1158x1600"
                className="mob-team-pics"
              />
              <img
                src="https://via.placeholder.com/1158x1600"
                className="mob-team-pics"
              />
              <img
                src="https://via.placeholder.com/1158x1600"
                className="mob-team-pics"
              />
            </div>
            <div className="col-span-2 p-5">
              <div className="flex flex-col justify-between h-full">
                <h2 className="team-title-text border-b-2 border-[#725C71]">
                  Amy
                </h2>
                <h3 className="team-work text-xl">Work:</h3>
                <div className="team-work flex justify-around items-center">
                  <motion.img
                    whileHover={{ scale: 2 }}
                    src="https://via.placeholder.com/150x210"
                  />
                  <motion.img
                    whileHover={{ scale: 2 }}
                    src="https://via.placeholder.com/150x210"
                  />
                  <motion.img
                    whileHover={{ scale: 2 }}
                    src="https://via.placeholder.com/150x210"
                  />
                  <motion.img
                    whileHover={{ scale: 2 }}
                    src="https://via.placeholder.com/150x210"
                  />
                </div>
                <h3 className="text-xl">History:</h3>
                <p>
                  Amy was a driven and talented hairdresser who began her career
                  at a young age. She was self-taught and started her own salon
                  at just 22 years old. Her unique style and innovative haircuts
                  and color techniques quickly earned her a reputation in the
                  industry. After five years of running her own business, she
                  was offered a job at a prestigious salon in the city, where
                  she honed her skills and became known for her intricate updos
                  and braids. Her passion and talent for hairdressing were
                  evident, and this led to her opening a chain of successful
                  salons across the country.
                </p>
                <h3 className="text-xl">Skills:</h3>
                <p>
                  Innovative haircut and color techniques Self-taught and
                  resourceful Skilled in intricate updos and braids Reputation
                  for delivering high-quality results Strong business acumen,
                  with the ability to build and run a successful salon chain.{" "}
                </p>
              </div>
            </div>
            <div className="col-span-2 p-5">
              <div className="flex flex-col justify-between h-full">
                <h2 className="team-title-text border-b-2 border-[#725C71]">
                  Emma
                </h2>
                <h3 className="team-work text-xl">Work:</h3>
                <div className="team-work flex justify-around items-center">
                  <motion.img
                    whileHover={{ scale: 3 }}
                    src="/images/emma1.jpg"
                    className="w-[150px] h-[210px]"
                  />
                  <motion.img
                    whileHover={{ scale: 3 }}
                    src="/images/emma2.jpg"
                    className="w-[150px] h-[210px]"
                  />
                  <motion.img
                    whileHover={{ scale: 3 }}
                    src="/images/emma3.jpg"
                    className="w-[150px] h-[210px]"
                  />
                  <motion.img
                    whileHover={{ scale: 3 }}
                    src="/images/emma4.jpg"
                    className="w-[150px] h-[210px]"
                  />
                </div>

                <h3 className="text-xl">History:</h3>

                <p>
                  Emma was a driven and talented hairdresser who began her
                  career at a young age. She was self-taught and started her own
                  salon at just 22 years old. Her unique style and innovative
                  haircuts and color techniques quickly earned her a reputation
                  in the industry. After five years of running her own business,
                  she was offered a job at a prestigious salon in the city,
                  where she honed her skills and became known for her intricate
                  updos and braids. Her passion and talent for hairdressing were
                  evident, and this led to her opening a chain of successful
                  salons across the country.{" "}
                </p>

                <h3 className="text-xl">Skills:</h3>

                <p>
                  Innovative haircut and color techniques Self-taught and
                  resourceful Skilled in intricate updos and braids Reputation
                  for delivering high-quality results Strong business acumen,
                  with the ability to build and run a successful salon chain.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-around items-center">
              <img src="images/emma.JPG" />
              <img
                src="https://via.placeholder.com/1158x1600"
                className="mob-team-pics"
              />
              <img
                src="https://via.placeholder.com/1158x1600"
                className="mob-team-pics"
              />
              <img
                src="https://via.placeholder.com/1158x1600"
                className="mob-team-pics"
              />
            </div>
            <div className="flex flex-col justify-around items-center">
              <img src="/images/chantelle.JPG" />
              <img
                src="https://via.placeholder.com/1158x1600"
                className="mob-team-pics"
              />
              <img
                src="https://via.placeholder.com/1158x1600"
                className="mob-team-pics"
              />
              <img
                src="https://via.placeholder.com/1158x1600"
                className="mob-team-pics"
              />
            </div>
            <div className="col-span-2 p-5 mb-8">
              <div className="flex flex-col justify-between h-full">
                <h2 className="team-title-text border-b-2 border-[#725C71]">
                  Chantelle
                </h2>
                <h3 className="team-work text-xl">Work:</h3>
                <div className="team-work flex justify-around items-center">
                  <motion.img
                    whileHover={{ scale: 2 }}
                    src="/images/chantelle1.jpg"
                    className="w-[150px] h-[210px]"
                  />
                  <motion.img
                    whileHover={{ scale: 2 }}
                    src="/images/chantelle2.jpg"
                    className="w-[150px] h-[210px]"
                  />
                  <motion.img
                    whileHover={{ scale: 2 }}
                    src="/images/chantelle3.jpg"
                    className="w-[150px] h-[210px]"
                  />
                  <motion.img
                    whileHover={{ scale: 2 }}
                    src="/images/chantelle4.jpg"
                    className="w-[150px] h-[210px]"
                  />
                </div>
                <h3 className="text-xl">History:</h3>
                <p>
                  Chantelle was a driven and talented hairdresser who began her
                  career at a young age. She was self-taught and started her own
                  salon at just 22 years old. Her unique style and innovative
                  haircuts and color techniques quickly earned her a reputation
                  in the industry. After five years of running her own business,
                  she was offered a job at a prestigious salon in the city,
                  where she honed her skills and became known for her intricate
                  updos and braids. Her passion and talent for hairdressing were
                  evident, and this led to her opening a chain of successful
                  salons across the country.{" "}
                </p>

                <h3 className="text-xl">Skills:</h3>
                <p>
                  Innovative haircut and color techniques Self-taught and
                  resourceful Skilled in intricate updos and braids Reputation
                  for delivering high-quality results Strong business acumen,
                  with the ability to build and run a successful salon chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Team;
