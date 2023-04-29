import axios from "../axios";

export const detectPatterns = async (formData) => {
    console.log(formData.getAll('files[]'))
    return await axios.post(`/upload`, formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => {
            return eval(response.data);
        }).catch(reason => {
            console.log(reason);
        })
}

