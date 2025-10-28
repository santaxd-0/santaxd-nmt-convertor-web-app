"use client";

import { TabsContent } from "@radix-ui/react-tabs";
import { Form } from "./components/Form/Form";
import { EmptyPage } from "../EmptyPage/EmptyPage";
import * as TabManager from "@/components/ui/tabs";
import { useState } from "react";

export const Main = () => {
    const [isEmpty, setIsEmpty] = useState(true);

    const [questions, setQuestions] = useState(
        [
            {id: 1,}
        ]
    );

    const createNewQuestion = () => {
        setQuestions(
            prevQuestions => {
                const newId = prevQuestions.length + 1;
                return [...prevQuestions, {id: newId}];
            }
        );
    }

    return (
        <TabManager.Tabs defaultValue="nmt-form">
            <TabManager.TabsList className="z-10 fixed top-0 left-1/2 -translate-x-1/2 mt-5">
                <TabManager.TabsTrigger value="nmt-form">NMT Form</TabManager.TabsTrigger>
                <TabManager.TabsTrigger value="pdf-preview">PDF Preview</TabManager.TabsTrigger>
            </TabManager.TabsList>
            <TabsContent value="nmt-form" className="mt-20">
                {
                    !isEmpty ? (
                        <Form questions={questions}
                        createNewQuestion={createNewQuestion}/>
                    ) : (
                        <EmptyPage setIsEmpty={setIsEmpty}/>
                    )
                }
            </TabsContent>
            <TabsContent value="pdf-preview" className="mt-20">
                
            </TabsContent>
        </TabManager.Tabs>
    );
}