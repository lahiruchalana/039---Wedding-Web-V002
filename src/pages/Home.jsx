import styles from "./../style";
import { Ceremony, Reception, OurStory, RSVP, Footer, Navbar, DateVenue, Hero } from "./../components";


const Home = () => (
    <div className="bg-violet-950 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-violet-950 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-violet-950 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <DateVenue />
        <Ceremony />
        <Reception />
        <OurStory />
        <RSVP />
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;
