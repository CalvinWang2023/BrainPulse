import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import api from "../api/axiosConfig";
import { setIsLoading, setQuiz } from "../slices/quizSlice";

const useQuizFetch = () => {
    const dispatch = useAppDispatch();
    const { category, amount, difficulty, type } = useAppSelector((state) => state.form);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/api/Question/${category}/${difficulty}/${type}/${amount}`, {
                    // query URL without using browser cache
                    headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                    },
                });
            
                const result: Question[] = response.data;

                const data = result?.map((res: Question) => ({
                        ...res,
                        optionTexts: res.options.map((option: Option) => option.optionText).sort(() => 0.5 - Math.random()),
                        score: 0,
                        picked: '',
                }));
                dispatch(setQuiz(data));
            } catch (error) {
                console.log(error);
            } finally {
                dispatch(setIsLoading(false));
            }
        };
        fetchData();   
    }, []);
}

export default useQuizFetch;