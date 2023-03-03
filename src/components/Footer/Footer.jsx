import styles from "./Footer.module.scss";

const Footer = ({ refValue }) => {
  return (
    <footer ref={refValue} className="footer">
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.footer__left}>
            <h2 className={styles.logo}>CS Agency</h2>
            <div className={styles.socials}>
              <a
                href="https://twitter.com/CSAgency_"
                target={"_blank"}
                className={styles.item}
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a
                href="https://t.me/FUTMB"
                target={"_blank"}
                className={styles.item}
              >
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
              </a>
            </div>
            <div className={styles.email}>csagency000@gmail.com</div>
          </div>
          <div className={styles.footer__right}>
            <h2 className={styles.title}>Contacts</h2>
            <div className={styles.social}>
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
              <span>
                <a href="https://t.me/FUTMB" target={"_blank"}>
                  @FUTMB - Founder
                </a>
              </span>
            </div>
            <div className={styles.social}>
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
              <span>
                {" "}
                <a href="https://t.me/unknownuser01010101" target={"_blank"}>
                  @unknownuser01010101 - CEO
                </a>
              </span>
            </div>
            <div className={styles.social}>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <span>
                <a href="https://twitter.com/Sava_FUTMB" target={"_blank"}>
                  @Sava_FUTMB
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
