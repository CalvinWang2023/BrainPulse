import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import getQuizApi from "../api/getQuizApi";
import { setIsLoading, setQuiz } from "../slices/quizSlice";
import { setPage } from "../slices/pageSlice";

const useQuizFetch = () => {
    const dispatch = useAppDispatch();
    const params = useAppSelector((state) => state.form);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getQuizApi(params);
                let data;

                if (!response || response.length === 0) {
                    // Handle the case where the response is empty
                    dispatch(setPage('error'));           
                } else {
                    data = response?.map((res: Question) => ({
                        ...res,
                        options: [
                            res.correct_answer,
                            ...res.incorrect_answers,
                        ].sort(() => 0.5 - Math.random()),
                        score: 0,
                        picked: '',
                    }))
                }

                if (data.length > 0) dispatch(setQuiz(data));
            } catch (error) {
                dispatch(setPage('error'));
            } finally {
                setTimeout(() => {
                    dispatch(setIsLoading(false));
                }, 1000);        
            }
        };
        fetchData();   
    }, []);
}

export default useQuizFetch;