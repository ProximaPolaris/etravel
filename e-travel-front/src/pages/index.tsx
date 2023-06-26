import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

import Header from '../components/Header/Header';
import Footer from '@import/components/Footer/Footer';

import styles from '@import/styles/pages/Index.module.scss';

import about from '../img/etravel/about-etravel.png';
import thomas from '../img/team/1599916246528.jpeg';
import lucien from '../img/team/1600270558214.jpeg';
import kilian from '../img/team/Screenshot_1.png';
import monument1 from '../img/monument/monument1.png';
import monument2 from '../img/monument/monument2.png';
import monument3 from '../img/monument/monument3.png';
import monument4 from '../img/monument/monument4.png';
import monument5 from '../img/monument/monument5.png';
import monument6 from '../img/monument/monument6.png';
import monument7 from '../img/monument/monument7.png';
import monument8 from '../img/monument/monument8.png';
import monument9 from '../img/monument/monument9.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const IndexPage = () => {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    // Start the slider autoplay when the component mounts
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
  };

  const images = [
    { src: monument1, alt: 'Monument 1' },
    { src: monument2, alt: 'Monument 2' },
    { src: monument3, alt: 'Monument 3' },
    { src: monument4, alt: 'Monument 4' },
    { src: monument5, alt: 'Monument 5' },
    { src: monument6, alt: 'Monument 6' },
    { src: monument7, alt: 'Monument 7' },
    { src: monument8, alt: 'Monument 8' },
    { src: monument9, alt: 'Monument 9' }
  ];
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.content}>
        <div className={styles.section_about}>
          <div className={styles.about}>
            <h1>About E-Travel</h1>
            <span>
              E-Travel vous facilite la planification de votre voyage en vous proposant un système intégré de visualisation pour
              les billets d'avion, le logement et les activités, avec des comparateurs de prix pour les vols et le logement pour
              économiser de l'argent. 
              <br />
              Vous pouvez planifier votre voyage de A à Z avec une prévisualisation d'itinéraire disponible
              en cas de défaut d'internet.
              <br />
              <br />
              Le public visé par E-Travel est constitué de voyageurs soucieux de planifier leur voyage de manière efficace et économique,
              en utilisant un système intégré pour la réservation de billets d'avion, la réservation d'hébergement et la recherche
              d'activités touristiques.
              <br />
              <br />
              E-Travel est développé par une équipe passionnée par les voyages et les technologies de l'information.
            </span>
          </div>
          <div className={styles.img}>
            <Image className={styles.img} src={about} alt="Logo" />
          </div>
        </div>
        <div className={styles.section_voyage}>
           <Slider ref={sliderRef} {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <Image className={styles.img_voyage} src={image.src} alt={image.alt} />
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.section_dev}>
          <h1>Our Team</h1>
          <div className={styles.team}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <Image className={styles.cardImage} src={thomas} alt='thomas' />
                <div>
                  <h3>DE SOUSA Thomas</h3>
                  <p>Developpeur Full Stack Spec DevOps</p>
                </div>
                <div className={styles.socialButtons}>
                  <a href="https://github.com/TomaRouki" className={styles.socialButton} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/thomas-de-sousa-187b08189/" className={styles.socialButton} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className={styles.socialButton} target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <Image className={styles.cardImage} src={lucien} alt='lucien' />
                <div>
                  <h3>BESNIER Lucien</h3>
                  <p>Developpeur Full Stack</p>
                </div>
                <div className={styles.socialButtons}>
                  <a href="#" className={styles.socialButton} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20}/>
                  </a>
                  <a href="https://www.linkedin.com/in/lucien-besnier-b236871b7/" className={styles.socialButton} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className={styles.socialButton} target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <Image className={styles.cardImage} src={kilian} alt='kilian' />
                <div>
                  <h3>MEVREL Kilian</h3>
                  <p>Developpeur Full Stack Javascript Spec Front | Project Leader </p>
                </div>
                <div className={styles.socialButtons}>
                  <a href="https://github.com/Redcroow" className={styles.socialButton} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/kilian-mevrel/" className={styles.socialButton} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://www.instagram.com/km_phooto/" className={styles.socialButton} target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;
