import styles from "../style";
import ButtonViolet from "./buttons/ButtonViolet";

const RSVP = () => {
  return(
    <section id="rsvp" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>We hope you can make it!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Join us.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <ButtonViolet buttonName={"RSVP"} url={"rsvp"}/>
      </div>
    </section>
  )
}

export default RSVP;
