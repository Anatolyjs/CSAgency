import styles from "./About.module.scss";
import aboutText from "../../assets/aboutText";

const About = ({refValue}) => {
  return (
    <section ref={refValue} className="about">
      <div className="container">
        <div className={styles.about}>
        <h2 className="title">About us</h2>
          <div className={styles.about__body}>
            <div className={styles.info}>
              {aboutText.map((item, index) => <Paragraph key={index} title={item.title} text={item.text}/>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Paragraph = ({ text, title }) => {
  return (
    <div className={styles.paragraph}>
      <div className={styles.text}>
        <div className={styles.text__title}>{title}</div>
        <div className={styles.text__info}>{text}</div>
      </div>
    </div>
  );
};

export default About;
