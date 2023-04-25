import { specs } from "../constants";
import styles from "../style";

const DateVenue = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {specs.map((spec) => (
      <div key={spec.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {spec.title}
        </p>
      </div>
    ))}
  </section>
);

export default DateVenue;
