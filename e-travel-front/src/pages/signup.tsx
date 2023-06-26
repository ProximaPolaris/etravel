import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import styles from "../styles/pages/Signup.module.scss";
import { GetCountries } from "./api/countries";
import { ICountries } from "./interface/ICountries";
import { IUsers } from "./interface/IUsers";
import { PostUser } from "./api/users";

const SignupPage = () => {

  const [step, setStep] = useState(1);
  const [userInputs, setuserInputs] = useState([
    {
      label: "First Name",
      type: "text",
      name: "first_name",
      id: "first_name",
      required: true,
    },
    {
      label: "Last Name",
      type: "text",
      name: "last_name",
      id: "last_name",
      required: true,
    },
    {
      label: "Date of Birth",
      type: "date",
      name: "dob",
      id: "dob",
      required: true,
    },
    {
      label: "Gender",
      type: "select",
      name: "gender",
      id: "gender",
      required: true,
      options: [
        {
          value: "",
          label: "--Please choose an option--",
          id: "gender_default",
        },
        { value: "male", label: "Male", id: "gender_male" },
        { value: "female", label: "Female", id: "gender_female" },
      ],
    },
  ]);
  const [accountInputs, setAccountInputs] = useState([
    {
      label: "Email",
      type: "email",
      name: "email",
      id: "email",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      id: "password",
      required: true,
    },
    {
      label: "Confirm Password",
      type: "password",
      name: "confirm_password",
      id: "confirm_password",
      required: true,
    },
  ]);
  const [addressInputs, setAdressInputs] = useState([
    {
      label: "Address",
      type: "text",
      name: "address",
      id: "address",
      required: true,
    },
    {
      label: "Zip Code",
      type: "text",
      name: "zip_code",
      id: "zip_code",
      required: true,
    },
    { label: "City", type: "text", name: "city", id: "city", required: true },
  ]);

  const [countries, setCountries] = useState<ICountries[]>([]);
  useEffect(() => {
    GetCountries()
      .then((response) => {
        setCountries(response);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const [user, setUser] = useState<{
    first_name: string;
    last_name: string;
    dob: string;
    country: string;
    city: string;
    zip_code: string;
    address: string;
    email: string;
    password: string;
}>({
    first_name: "",
    last_name: "",
    dob: "",
    country: "",
    city: "",
    zip_code: "",
    address: "",
    email: "",
    password: "",
});

const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
    const { name, value } = event.target;

    if (name === 'country') {
        setUser(prevUser => ({ ...prevUser, country: Number(value).toString() }));
    } else if (name === 'dob') {
        const selectedDate = new Date(value);
        const formattedDate = selectedDate.toLocaleDateString('en-CA');
        setUser(prevUser => ({ ...prevUser, dob: formattedDate }));
    } else {
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    }
};


  function transformUserForAPI(user: any) {
    let transformedUser: IUsers = {
      name: user.first_name,
      surname: user.last_name,
      birthdate: user.dob,
      countryId: Number(user.country),
      city: user.city,
      zipCode: user.zip_code,
      address: user.address,
      email: user.email,
      password: user.password
    }
    return transformedUser;
}

const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log(user);
    const userForAPI = transformUserForAPI(user);
    PostUser(userForAPI)
      // .then((response: Response) => {
      //   // if (!response.ok) {
      //   //   throw new Error(`HTTP error! status: ${response.status}`);
      //   // }
      //   return response.json();
      // })
      .then((data: any) => {
        // console.log(data);
        window.location.href = "/login";
      })
      // .catch((error: any) => {
      //   console.error('Error posting user:', error);
      // });
  };
  

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
                <form onSubmit={handleSubmit}>
                    <div className={styles.form_step1}>
                        {step === 1 && (
                            <div className={styles.form_left}>
                                {userInputs.map((input, index) => (
                                    <div key={index}>
                                        <label htmlFor={input.name}>{input.label}</label>
                                        {input.type === "select" && input.options ? (
                                            <select
                                                id={input.name}
                                                name={input.name}
                                                required={input.required}
                                                onChange={handleInputChange}
                                            >
                                            {input.options.map((option) => (
                                                <option
                                                    key={option.id}
                                                    id={option.id}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                            </select>
                                        ) : (
                                            <input
                                            type={input.type}
                                            id={input.name}
                                            name={input.name}
                                            required={input.required}
                                            onChange={handleInputChange}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {step === 1 && (
                            <div className={styles.form_right}>
                            {accountInputs.map((input, index) => (
                                <div key={index}>
                                <label htmlFor={input.name}>{input.label}</label>
                                <input
                                    type={input.type}
                                    id={input.name}
                                    name={input.name}
                                    required={input.required}
                                    onChange={handleInputChange}
                                />
                                </div>
                            ))}
                            </div>
                        )}
                    </div>

                    {step === 2 && (
                        <div className={styles.form_all}>
                        {addressInputs.map((input, index) => (
                            <div key={index}>
                            <label htmlFor={input.name}>{input.label}</label>
                            <input
                                type={input.type}
                                id={input.name}
                                name={input.name}
                                required={input.required}
                                onChange={handleInputChange}
                            />
                            </div>
                        ))}
                        <div className={styles.select_input}>
                            <label htmlFor="country">Country</label>
                            <select
                            id="country"
                            name="country"
                            required
                            onChange={handleInputChange}
                            >
                            {countries &&
                                countries.map((country) => (
                                <option key={country.id} value={country.id}>
                                    {country.name}
                                </option>
                                ))}
                            </select>
                        </div>
                        </div>
                    )}
                    <div className={styles.form_button}>
                        {step === 1 ? (
                        <div>
                            <button onClick={handleNext}>Next</button>
                        </div>
                        ) : (
                        <div>
                            <button onClick={handlePrev}>Back</button>
                            {step === 2 && <input type="submit" value="Submit" />}
                        </div>
                        )}
                    </div>
                </form>
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
