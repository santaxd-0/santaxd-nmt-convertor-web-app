import { Question } from "./components/Question/Question";

import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Form = () => {

    const isEmpty = () => {
        return true;
    }

    return (
        <main className="flex flex-col justify-center items-center gap-10 mt-10">
            <div className="flex flex-col gap-6 w-1/2">
                <Question />
                <Question />
                <Question />
                <Question />
            </div>
            <Button className="mb-10">
                <CirclePlus/>
                Add question
            </Button>
        </main>
    );
    
}