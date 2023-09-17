import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import getQuizApi from "../api/getQuizApi";
import { setIsLoading, setQuiz } from "../slices/quizSlice";

const useQuizFetch = () => {
    const dispatch = useAppDispatch();
    const params = useAppSelector((state) => state.form);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: Question[] = await getQuizApi(params);

                const data = result?.map((res: Question) => ({
                    ...res,
                    score: 0,
                    picked: '',
                    options: [res.correct_answer, ...res.incorrect_answers]
                                                        .sort(() => 0.5 - Math.random()),
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