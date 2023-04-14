import { coupleAlbum } from "../assets";
import styles, { layout } from "../style";

const CardDeal = () => (
  <section className={layout.section}>
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

    <div className={layout.sectionImg}>
      <img src={coupleAlbum} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
