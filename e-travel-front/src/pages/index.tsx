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
              E-Travel makes it easy for you to plan your trip with an integrated viewing system for for flights, 
              accommodation and activities, with price comparisons for flights and accommodation to save you to save you money. 
              <br />
              You can plan your trip from A to Z, with an itinerary preview available
              in case of internet failure.
              <br />
              <br />
              E-Travel's target audience is travelers who want to plan their trips efficiently and economically,
              using an integrated system for booking flights, accommodations and tourist activities.
              <br />
              <br />
              E-Travel is developed by a team passionate about travel and information technology.
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
                  <p>Full Stack Developer Spec DevOps</p>
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
                  <p>Full Stack Developer</p>
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
                  <p>Full Stack Developer Spec Front | Project Leader </p>
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
