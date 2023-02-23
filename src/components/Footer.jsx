import { UilFacebook, UilInstagramAlt } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute z-0 h-[100px] w-screen bg-[#725C71]">
          <div className="footer-items flex justify-around items-center mt-5">
            <UilFacebook size="50" color="white" />
            <UilInstagramAlt size="50" color="white" />
            <p className="footer-items text-5xl text-white">01423 864755</p>
            <p className="footer-items-off text-3xl text-white">
              info@divinehair.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
