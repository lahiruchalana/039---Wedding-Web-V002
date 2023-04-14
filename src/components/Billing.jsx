import { couple002 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";


const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
        <img src={couple002} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Ceremony.. <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      "Join us as Amelia and Lucas exchange their vows and become one. 
      The ceremony will take place on <a className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1"> 
      May 22nd, 2023 at 4:30 PM</a> at <a className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
      LINDLEY SCOTT HOUSE, AZUSA, CA, USA. </a> 
      Please join us for a celebration of love!"
      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Dress: <a className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        Cocktail Attire </a> 
        </p>

      <Button styles={`mt-10`} buttonName={`Google Map On Location`} />
    </div>
  </section>
);

export default Billing;
