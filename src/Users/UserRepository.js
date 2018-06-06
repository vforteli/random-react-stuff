import axios from 'axios';

class UserRepository {
    static checkUsernameAvailability = async (username) => {
        if (username) {
            const response = await axios.get(`/api/users/checkusernameavailability?username=${username}`);
            return response.data.available;
        }
        return true;
    }
}

export default UserRepository