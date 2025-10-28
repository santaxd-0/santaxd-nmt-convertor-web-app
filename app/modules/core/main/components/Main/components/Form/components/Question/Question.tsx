import * as CardUI from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";
import { Answer } from "../Answer";
import { UIButton } from "../../../../../UIButton/UIButton";
import { TrashIcon, Eraser } from "lucide-react";
import React from "react"; 


interface AnswersInterface { a: string; b: string; c: string; d: string; e: string; }
interface QuestionInterface {
    id: number;
    question: string;
    answers: AnswersInterface;
}

interface QuestionProps {
    question: QuestionInterface;
    onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onAnswerChange: (key: keyof AnswersInterface, value: string) => void;
    onClear: () => void;
    onDelete: () => void;
}

export const Question = ({ question, onTextChange, onAnswerChange, onClear, onDelete }: QuestionProps) => {

    return (
        <CardUI.Card>
            <CardUI.CardHeader>
                <CardUI.CardTitle>Question {question.id}</CardUI.CardTitle>
                <CardUI.CardDescription>
                    Enter your question and answers
                </CardUI.CardDescription>
                <CardUI.CardAction className="flex gap-2">
                    <UIButton buttonText="Clear" ButtonIcon={Eraser} onClick={onClear}/>
                    <UIButton styleType="negative" buttonText="Delete" ButtonIcon={TrashIcon} onClick={onDelete}/>
                </CardUI.CardAction>
            </CardUI.CardHeader>
            <CardUI.CardContent>
                <div className="text-base gap-6 flex flex-col subpixel-antialiased">
                    <div className="flex flex-col gap-3">
                        <Label htmlFor="question-field-id">Input your question:</Label>
                        <Textarea 
                            placeholder="Type your question here..." 
                            className="h-30 focus:bg-yellow-50"
                            value={question.question}
                            onChange={onTextChange}
                        />
                    </div>
                    <div className="flex gap-10">
                        <Answer labelText="A:" value={question.answers.a} onChange={(e) => onAnswerChange('a', e.target.value)}/>
                        <Answer labelText="Б:" value={question.answers.b} onChange={(e) => onAnswerChange('b', e.target.value)}/>
                        <Answer labelText="В:" value={question.answers.c} onChange={(e) => onAnswerChange('c', e.target.value)}/>
                        <Answer labelText="Г:" value={question.answers.d} onChange={(e) => onAnswerChange('d', e.target.value)}/>
                        <Answer labelText="Д:" value={question.answers.e} onChange={(e) => onAnswerChange('e', e.target.value)}/>
                    </div>
                </div>
            </CardUI.CardContent>
        </CardUI.Card>
    );
}