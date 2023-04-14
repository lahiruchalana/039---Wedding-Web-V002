import styles, { layout } from "../style";
import Button from "./Button";
import { couple003 } from "../assets";

const Business = () =>  (
  <section id="reception" className={layout.section}>

    <div className={layout.sectionInfo} >
      <h2 className={styles.heading2}>
        Reception.. <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      "Join us for the celebration of our marriage at the reception! The reception will be held 
      at <a className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
      LINDLEY SCOTT HOUSE, AZUSA, CA, USA </a> 
      on <a className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1"> 
      May 22nd, 2023 </a>
      at <a className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1"> 
       6:00 PM</a>. 
      Come enjoy delicious food, drinks, and dancing with us as we continue to celebrate our love. 
      We can't wait to spend this special day with our loved ones and make unforgettable memories together.
      so get ready to dance the night away with us!"
      </p>

      <Button styles={`mt-10`} buttonName={`Google Map On Location`} />
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={couple003} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
    </div>

  </section>
);

export default Business;
