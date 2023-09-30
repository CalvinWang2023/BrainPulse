type Timer = {
    initialTime: number;
    elapsedTime: number;
    delay: number;
    isTimerStop: boolean;
};

type FormState = {
    amount: '5' | '10' | '15' | '20';
    category: string;
    difficulty: 'easy' | 'medium' | 'hard';
    type: 'multiple' | 'boolean';
};

type FormValue = FormState[keyof FormState];

type Question = {
    category: string;
    correct_answer: string;
    difficulty: 'easy' | 'medium' | 'hard';
    incorrect_answers: string[];
    question: string;
    type: 'multiple' | 'boolean';
};

type QuestionState = Question & {
    score: number;
    picked: string;
    options: string[];
};

type QuizState = {
    questions: QuestionState[];
    isLoading: boolean;
    currentIndex: number;
    isQuizCompleted: boolean;
    correct_number: number;
};