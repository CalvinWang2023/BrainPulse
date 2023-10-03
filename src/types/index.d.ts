type PageState = {
    page: page;
};

type Page = "home" | "quiz" | "result";

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
    correctAnswer: string;
    options: Option[];
    difficulty: 'easy' | 'medium' | 'hard';
    questionText: string;
    questionType: 'multiple' | 'boolean';
};
type Option = {
    optionText: string;
};

type QuestionState = Question & {
    score: number;
    picked: string;
    optionTexts: string[];
};

type QuizState = {
    questions: QuestionState[];
    isLoading: boolean;
    currentIndex: number;
    isQuizCompleted: boolean;
    correct_number: number;
};