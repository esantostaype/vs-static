import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperObject } from "swiper";
import { FreeMode, Thumbs, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import styles from "./Process.module.css";

interface ProcessProps {
  processTitle: string;
  process: 
    {
      title: string;
      description: string;
      icon: string;
      image: string;
    }[]
  ;
}

export const Process: React.FC<ProcessProps> = ({ processTitle, process }) => {
  const [processList, setProcessList] = useState<SwiperObject>();

  return (
    <section className="process animate-fade-up animate-duration-1000 animate-delay-300">
      <div className="process__main">
        <div className={styles.list}>
          <span>El proceso</span>
          <h2 className={styles.title}>{processTitle}</h2>
          <Swiper
            onSwiper={setProcessList}
            spaceBetween={10}
            slidesPerView={5}
            modules={[Thumbs]}
          >
            {process.map((itemProcess, index) => {
              return (
                <SwiperSlide key={index}>
                  {index + 1}. {itemProcess.title}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="content">
        <Swiper
          spaceBetween={0}
          navigation={false}
          thumbs={{ swiper: processList }}
          modules={[FreeMode, Thumbs, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
        >
          {process.map((itemProcess, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="caption">
                  <div className={styles.caption__wrapper}>
                    <div className={styles.caption__icon}>
                      {itemProcess.icon ? (
                        <img
                          src={itemProcess.icon}
                          alt={itemProcess.title}
                        />
                      ) : (
                        <img
                          src="/images/proceso-icono-defecto.webp"
                          alt="Ícono por defecto de Proceso"
                        />
                      )}
                    </div>
                    <div className={styles.caption__content}>
                      <h2 className={styles.caption__title}>
                        {itemProcess.title}
                      </h2>
                      <p>{itemProcess.description}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.image}>
                  {itemProcess.image ? (
                    <img
                      src={itemProcess.image}
                      alt={itemProcess.title}
                    />
                  ) : (
                    <img
                      src="/images/imagen-proceso-defecto.webp"
                      alt="Imagen por defecto de Proceso"
                    />
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
