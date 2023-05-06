import axios from "../axios";

export const detectPatterns = async (formData) => {
    console.log(formData.getAll('files[]'))
    return await axios.post(`/yolo-2`, formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => {
            console.log(response.data);
            console.log(typeof response.data);

            console.log(eval(response.data));
            console.log(typeof eval(response.data));
            return eval(response.data);
        }).catch(reason => {
            console.log(reason);
        })
}




