import styles from "./Intro.module.scss";
import logo from "../.././../img/intro/logo.png";

const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className={styles.intro}>
          <div className={styles.intro__container}>
            <div className={styles.image}>
              <img src={logo} alt="CS Agency logo" />
            </div>
            <div className={styles.info}>
              <div className={styles.info__title}><h2 className="title">CS Agency</h2></div>
              <p className={styles.info__text}>
                We provide such services as Marketing (working with KOLs),
                Advising, Creating Tokenomics, Testing the product, Helping with
                strategic partnerships, Communicating with launchpads, Helping
                with listings on CEXs, Creating ambassador programs, Moderating
                chats, and others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
