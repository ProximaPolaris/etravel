import { useRouter } from 'next/router';
import styles from '../../styles/components/Footer.module.scss';
import git from '../../img/icons8-github.svg';
import Image from 'next/image';

const Footer = () => {
    const router = useRouter();
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.widgets}>
                    <div className={styles.widget}>
                        <div className={styles.nav_menu}>
                            <h4>About</h4>
                        </div>
                    </div>
                    <div className={styles.widget}>
                        <div className={styles.nav_menu}>
                            <h4>Contact</h4>
                        </div>
                    </div>
                    <div className={styles.widget}>
                        <div className={styles.nav_menu}>
                            <h4>Follow Us</h4>
                            <div className={styles.icons}>
                                <div className={styles.icon}>
                                    <a target="_blank" href="#" rel="noopener">
                                        <img alt="Twitter" src="https://company.trivago.com/wp-content/uploads/2022/05/twitter-ffffff.svg" width="30px" />
                                    </a>
                                </div>
                                <div className={styles.icon}>
                                    <a target="_blank" href="https://github.com/ProximaPolaris/etravel" rel="noopener">
                                        <Image src={git} alt="github" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer_bottom}>
                <div className={styles.container}>
                    <div className={styles.copyright}>
                        © Copyright 2023 E-TRAVEL - All rights reserved
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;