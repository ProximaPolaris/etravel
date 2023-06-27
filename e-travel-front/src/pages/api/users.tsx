import { IUsers } from "../interface/IUsers";
import { baseUrl } from "./config";

export async function PostUser(user: IUsers) {
    // console.log(user); 
    const userUrl = `${baseUrl}/users`;
    try {
        const response = await fetch(userUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error: any) {
        console.error(`Fetch failed: ${error}`);
        throw error;
    }
}