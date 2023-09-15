import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://opentdb.com/api.php',
    timeout: 5000,
});

const getQuizApi = async (params: FormState) => {
    const { result } = (await apiInstance.get('', { params })).data;
    return result;
};
  
export default getQuizApi;