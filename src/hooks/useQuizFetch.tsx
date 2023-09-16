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
                const data: Question[] = await getQuizApi(params);

                console.log(data);
                
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