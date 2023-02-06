import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "../../../App.scss";

import cn from "classnames";
import styles from "./Portfolio.module.scss";

const Portfolio = ({ title, items, refValue, isSlider }) => {
  return (
    <section ref={refValue} className="portfolio">
      <div className="container">
        <div className={styles.portfolio}>
          <div className={styles.portfolio__title}>
            <h2 className="title">{title}</h2>
          </div>
          {isSlider ? (
            <div className={cn(styles.portfolio__body, styles.active)}>
              <Swiper
                loop={true}
                spaceBetween={10}
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                grabCursor={true}
                className="slider"
              >
                {items.map((item, index) => (
                  <SwiperSlide key={index}>
                    {item.map((el, i) => (
                      <Project
                        key={i}
                        link={el.link}
                        logo={el.logo}
                        name={el.name}
                        radius={el.radius ? el.radius : null}
                        className={styles.active}
                      />
                    ))}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className={styles.portfolio__body}>
              {items.map((item, index) => (
                <Project
                  key={index}
                  link={item.link}
                  logo={item.logo}
                  name={item.name}
                  radius={item.radius ? item.radius : null}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Project = ({ link, logo, name, radius, className }) => {
  return (
    <article className={cn(styles.project, className)}>
      <a href={link} target={"_blank"} className={styles.project__link}>
        <div className={cn(styles.project__logo, radius && styles.formed)}>
          <img src={logo} alt="project logo" />
        </div>
        <h3 className={styles.project__name}>{name}</h3>
      </a>
    </article>
  );
};

export default Portfolio;
