import { coupleAlbum } from "../assets";
import styles, { layout } from "../style";


const OurStory = () => (
  <section id="ourStory" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
        <img src={coupleAlbum} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
        Our Story <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Amelia and Lucas's love story began when they met at a mutual friend's party. 
      They hit it off right away, bonding over their shared love of music and travel.

      From their first date, they knew they had found something special. 
      They spent countless hours exploring the city, trying new restaurants, and making each other laugh.

      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>

      Over time, their love grew stronger, and they became each other's best friend and partner in crime. 
      And now, they're excited to start their forever together as husband and wife.

      Amelia and Lucas can't wait to see what the future holds and are grateful for every moment they've shared together so far. 
      They're looking forward to creating new memories and facing life's adventures together, hand in hand.
      </p>

    </div>
  </section>
);

export default OurStory;
