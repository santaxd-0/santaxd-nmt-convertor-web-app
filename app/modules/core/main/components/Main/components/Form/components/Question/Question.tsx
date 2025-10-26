import * as CardUI from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";
import { Answer } from "../Answer";
import { UIButton } from "../../../../../UIButton/UIButton";

import { TrashIcon } from "lucide-react";
import { Eraser } from "lucide-react";
import { useState } from "react";

interface QuestionInterface {
    questionId: number;
}

export const Question = ({ questionId }: QuestionInterface) => {
    const [textAreaValue, setTextAreaValue] = useState("");
    const [answersValue, setAnswersValue] = useState({
        a: "",
        b: "",
        c: "",
        d: "",
        e: ""
    });

    const changeTextAreaValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaValue(e.target.value);
    }

    const changeAnswerValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("In progress");
    }

    const clearAllText = () => {
        setTextAreaValue("");
    }

    return (
        <CardUI.Card>
            <CardUI.CardHeader>
                <CardUI.CardTitle>Question {questionId}</CardUI.CardTitle>
                    <CardUI.CardDescription>
                        Enter your question and answers
                    </CardUI.CardDescription>
                    <CardUI.CardAction className="flex gap-2">
                        <UIButton buttonText="Clear" ButtonIcon={Eraser} onClick={() => clearAllText()}/>
                        <UIButton styleType="negative" buttonText="Delete" ButtonIcon={TrashIcon}/>
                    </CardUI.CardAction>
                </CardUI.CardHeader>
            <CardUI.CardContent>
                <div className="text-base gap-6 flex flex-col subpixel-antialiased">
                    <div className="flex flex-col gap-3">
                        <Label htmlFor="question-field-id">Input your question:</Label>
                        <Textarea placeholder="Type your question here..." className="h-30 focus:bg-yellow-50"
                        value={textAreaValue} onChange={(e) => changeTextAreaValue(e)}/>
                    </div>
                    <div className="flex gap-10">
                        <Answer labelText="A:" value={answersValue.a}/>
                        <Answer labelText="Б:" value={answersValue.b}/>
                        <Answer labelText="В:" value={answersValue.c}/>
                        <Answer labelText="Г:" value={answersValue.d}/>
                        <Answer labelText="Д:" value={answersValue.e}/>
                    </div>
                </div>
            </CardUI.CardContent>
        </CardUI.Card>
    );
}