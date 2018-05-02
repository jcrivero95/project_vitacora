import axios from "axios";
export const post = (url, data) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`http://localhost:8000/${url}`, { data })
            .then(response => {
                const {
                    data: { message, success }
                } = response;
                if (success) {
                    return resolve(message);
                }
                return reject(message);
            })
            .catch(err => {
                return reject(err);
            });
    });
};