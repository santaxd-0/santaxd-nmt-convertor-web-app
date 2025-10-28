"use client";
import { Question } from "./components/Question/Question";

import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormInterface {
    questions: Array<Map<String, String>>;
    createNewQuestion: () => void;
}

export const Form = ({ questions, createNewQuestion}: FormInterface) => {

    return (
        <main className="flex flex-col justify-center items-center gap-10 mt-10">
            <div className="flex flex-col gap-6 w-170">
                {
                    questions.map((question: any) => (
                        <Question key={question.id} questionId={question.id} /> 
                    ))
                }
            </div>
            <Button className="mb-10 bg-yellow-500" onClick={() => createNewQuestion()}>
                <CirclePlus/>
                Add question
            </Button>
        </main>
    );
    
}