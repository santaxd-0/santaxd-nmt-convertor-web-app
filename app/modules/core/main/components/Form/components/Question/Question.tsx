import * as CardUI from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { TrashIcon } from "lucide-react";
import { Eraser } from "lucide-react";

export const Question = () => {
    return (
        <CardUI.Card>
            <CardUI.CardHeader>
                <CardUI.CardTitle>Question 1</CardUI.CardTitle>
                    <CardUI.CardDescription>
                        Enter your question and answers
                    </CardUI.CardDescription>
                    <CardUI.CardAction className="flex gap-2">
                        <Button>
                            <Eraser/>
                            Clear
                        </Button>
                        <Button className="bg-red-600">
                            <TrashIcon/>
                            Delete
                        </Button>
                    </CardUI.CardAction>
                </CardUI.CardHeader>
            <CardUI.CardContent>
                <div className="text-base gap-6 flex flex-col subpixel-antialiased">
                    <div className="flex flex-col gap-3">
                        <Label htmlFor="question-field-id">Input your question:</Label>
                        <Textarea placeholder="Type your question here..." className="h-30 focus:bg-yellow-50"/>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex gap-5 justify-center align-center">
                            <Label>A:</Label>
                            <Input className="focus:bg-yellow-50" />
                        </div>
                        <div className="flex gap-5 justify-center align-center">
                            <Label>Б:</Label>
                            <Input />
                        </div>
                        <div className="flex gap-5 justify-center align-center">
                            <Label>В:</Label>
                            <Input />
                        </div>
                        <div className="flex gap-5 justify-center align-center">
                            <Label>Г:</Label>
                            <Input />
                        </div>
                        <div className="flex gap-5 justify-center align-center">
                            <Label>Д:</Label>
                            <Input />
                        </div>
                    </div>
                </div>
            </CardUI.CardContent>
        </CardUI.Card>
    );
}