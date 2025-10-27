import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


interface AnswerInterface {
    labelText: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Answer = ({ labelText, value, onChange }: AnswerInterface) => {

    return (
        <div className="flex gap-5 justify-center align-center">
            <Label>{labelText}</Label>
            <Input className="focus:bg-yellow-50" value={value}
            onChange={onChange}/>
        </div>
    );
}