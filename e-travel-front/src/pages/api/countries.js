import { baseUrl } from "./config";
import { findByUrl } from "./findByUrl";

export async function GetCountries() {
    const countriesUrl = `${baseUrl}/countries`;
    try {
        const countries = await findByUrl(countriesUrl);
        // console.log(countries);
        return countries;
    } catch (err) {
        console.error('Error while fetching countries:', err);
    }
};

GetCountries();


