import Header from '../components/Header/Header';
import styles from '../styles/pages/NewTravel.module.scss';
import Image from 'next/image';

import plane from '../img/etravel/plane.png';
import activity from '../img/etravel/activity.png';
import lodgement from '../img/etravel/lodgement.png';

const NewTravelPage = () => {
  return (
    <>
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <div className={styles.section_country}>
                    <label>Choisir votre pays de destination</label>
                    <input type="text" />
                </div>
                <div className={styles.section_images_travel}>
                    <div className={styles.image_container}>
                        <a href="/newTransportation" className={styles.img_link}>
                            <div className={styles.img_wrapper}>
                                <Image src={plane} alt="Logo" />
                            </div>
                            <div className={styles.text}>Transport</div>
                        </a>
                        <div className={styles.input_img}>
                            <input type='text' id='transport' value="choix transport"></input>
                        </div>
                    </div>
                    <div className={styles.image_container}>
                        <a href="#" className={styles.img_link}>
                            <div className={styles.img_wrapper}>
                            <Image src={activity} alt="Logo" />
                            </div>
                            <div className={styles.text}>Activité</div>
                        </a>
                        <div className={styles.input_img}>
                            <input type='text' id='activity' value="choix activité"></input>
                        </div>
                    </div>
                    <div className={styles.image_container}>
                        <a href="#" className={styles.img_link}>
                            <div className={styles.img_wrapper}>
                            <Image src={lodgement} alt="Logo" />
                            </div>
                            <div className={styles.text}>Logement</div>
                        </a>
                        <div className={styles.input_img}>
                            <input type='text' id='lodgement' value="choix logement"></input>
                        </div>
                    </div>
                </div>
                <div className={styles.section_action_button}>
                    <a href='/home' className={styles.button}>Back</a>
                    <a href='#' className={styles.button}>Ajouter mon travel</a>
                </div>

            </div>
        </div>
    </>
  );
};

export default NewTravelPage;
