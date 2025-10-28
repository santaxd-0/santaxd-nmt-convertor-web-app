"use client";
import { Question } from "./components/Question/Question";
import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";


interface AnswerValues { a: string; b: string; c: string; d: string; e: string; }
interface QuestionData {
    id: number;
    question: string;
    answers: AnswerValues;
}

interface FormInterface {
    questions: QuestionData[];
    createNewQuestion: () => void;
    setQuestionsState: React.Dispatch<React.SetStateAction<QuestionData[]>>;
}

export const Form = ({ questions, createNewQuestion, setQuestionsState }: FormInterface) => {

    const handleTextChange = (id: number, newText: string) => {
        setQuestionsState(prev => prev.map(q => 
            q.id === id ? { ...q, question: newText } : q
        ));
    };

    const handleAnswerChange = (id: number, key: keyof AnswerValues, newValue: string) => {
        setQuestionsState(prev => prev.map(q =>
            q.id === id ? { ...q, answers: { ...q.answers, [key]: newValue } } : q
        ));
    };

    const handleClear = (id: number) => {
        setQuestionsState(prev => prev.map(q =>
            q.id === id ? { ...q, question: "", answers: { a: "", b: "", c: "", d: "", e: "" } } : q
        ));
    };

    const handleDelete = (id: number) => {
        setQuestionsState(prev => prev.filter(q => q.id !== id));
    };

    return (
        <main className="flex flex-col justify-center items-center gap-10 mt-10">
            <div className="flex flex-col gap-6 w-170">
                {
                    questions.map((question) => (
                        <Question 
                            key={question.id} 
                            question={question}
                            onTextChange={(e) => handleTextChange(question.id, e.target.value)}
                            onAnswerChange={(key, value) => handleAnswerChange(question.id, key, value)}
                            onClear={() => handleClear(question.id)}
                            onDelete={() => handleDelete(question.id)}
                         /> 
                    ))
                }
            </div>
            <Button className="mb-10 bg-yellow-500" onClick={createNewQuestion}>
                <CirclePlus/>
                Add question
            </Button>
        </main>
    );
}