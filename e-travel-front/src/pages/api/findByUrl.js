export async function findByUrl(url) {
    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Fetch failed: ${error}`);
        throw error;
    }
}
