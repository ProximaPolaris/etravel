import { FaCalendar } from 'react-icons/fa';
import Header from '../components/Header/Header';
import styles from '../styles/pages/NewTransportation.module.scss';
import Image from 'next/image';

const NewTransportationPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
            <div className={styles.loader}>
                <span></span>
                <span></span>
                <span></span>
                <div className={styles.card}>
                    <div className={styles.title}>
                        <h2>Information</h2>
                    </div>
                        <div className={styles.section_date}>
                            <div className={styles.date}>
                                <label>Start Date</label>
                                <div className={styles.input_date}>
                                    <input type="date" />
                                    <FaCalendar size={20} />
                                </div>
                            </div>
                            <div className={styles.date}>
                                <label>End Date</label>
                                <div className={styles.input_date}>
                                    <input type="date" />
                                    <FaCalendar size={20} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.section_input}>
                            <div className={styles.input}>
                                <label>City</label>
                                <select>
                                    <option value="">Select City</option>
                                    {/* Add your ville options here */}
                                </select>
                            </div>
                            <div className={styles.input}>
                                <label>Number of people</label>
                                <input type="number" min="1" />
                            </div>
                        </div>
                        <div className={styles.section_button}>
                            <button>Register</button>
                        </div>
                    </div>
                </div>
                <div className={styles.action_button}>
                    <a href='/newTravel'>Back</a>
                </div>
            </div>
        </div>
    </>
  );
};

export default NewTransportationPage;
