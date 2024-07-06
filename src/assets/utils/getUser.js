import axios from 'axios';
export const fetchUser = async() => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/users/get-user`, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true // Send cookies with the request
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}