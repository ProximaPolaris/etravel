import { useState } from 'react';
import Header from '../components/Header/Header';
import styles from '../styles/pages/Signup.module.scss';

const SignupPage = () => {
    const [step, setStep] = useState(1);
    const [userInputs, setuserInputs] = useState([
        { label: 'First Name', type: 'text', name: 'first_name', id: 'first_name', required: true },
        { label: 'Last Name', type: 'text', name: 'last_name', id: 'last_name', required: true },
        { label: 'Date of Birth', type: 'date', name: 'dob', id: 'dob', required: true },
    ]);
    const [accountInputs, setAccountInputs] = useState([
        { label: 'Email', type: 'email', name: 'email', id: 'email', required: true },
        { label: 'Password', type: 'password', name: 'password', id: 'password', required: true },
        { label: 'Confirm Password', type: 'password', name: 'confirm_password', id: 'confirm_password', required: true },
    ]);
    const [addressInputs, setAdressInputs] = useState([
        { label: 'Address', type: 'text', name: 'address', id: 'address', required: true },
        { label: 'Zip Code', type: 'text', name: 'zip_code', id: 'zip_code', required: true },
        { label: 'City', type: 'text', name: 'city', id: 'city', required: true },
        { label: 'Pays', type: 'text', name: 'pays', id: 'pays', required: true },
    ]);

     // function to handle "next" button click
    const handleNext = () => {
        setStep(step + 1);
    };

    // function to handle "previous" button click
    const handlePrev = () => {
        setStep(step - 1);
    };

    return (
        <>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>
                    <div className={styles.card}>
                        <div className={styles.form}>
                            <div className={styles.form_title}>
                                <h2>Signup</h2>
                            </div>
                            <div className={styles.form_content}>
                                <form>
                                    {step === 1 && (
                                        <div className={styles.form_left}>
                                            {userInputs.map((input, index) => (
                                                <div key={index}>
                                                    <label htmlFor={input.name}>{input.label}</label>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {step === 1 && (
                                        <div className={styles.form_right}>
                                            {accountInputs.map((input, index) => (
                                                <div key={index}>
                                                    <label htmlFor={input.name}>{input.label}</label>
                                                    <input type={input.type} id={input.name} name={input.name} required={input.required} />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {step === 2 && (
                                        <div className={styles.form_all}>
                                            {addressInputs.map((input, index) => (
                                                <div key={index}>
                                                    <label htmlFor={input.name}>{input.label}</label>
                                                    <input type={input.type} id={input.name} name={input.name} required={input.required} />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </form>
                            </div>
                            <div className={styles.form_button}>
                                {step === 1 ? (
                                    <div>
                                        <button onClick={handleNext}>Suivant</button>
                                    </div>
                                ) : (
                                    <div>
                                        <button onClick={handlePrev}>Précedent</button>
                                        {step === 2 && <input type="submit" value="Terminer" />}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.action_button}>
                    <a href="/">
                        <button>Back</button>
                    </a>
                </div>
            </div>
        </>
  );
};

export default SignupPage;
