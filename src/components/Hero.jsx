import styles from "../style";
import { couple001 } from "../assets";
import GetStarted from "./GetStarted";

import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <AnimatePresence>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <motion.div  
            transition={{ duration: 2 }} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            animate={{ x: 0, y: 0, opacity: 1 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { y: 100, opacity: 0 }
            }}
            >
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              Amelia Flora<br className="sm:block hidden" />{" "}
                <span className="text-gradient">And</span>{" "}
              </h1>
            </div>
          </motion.div>


          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Lucas Elio
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            We are getting married!
          </p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={couple001} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;
