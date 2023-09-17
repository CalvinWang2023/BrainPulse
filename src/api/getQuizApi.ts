import get from 'axios';

const API_URL = 'https://opentdb.com/api.php';
const getQuizApi = async (params: FormState) => {
    const { results } = (await get(API_URL, { params, timeout: 5000 })).data;
    return results;
};

export default getQuizApi;