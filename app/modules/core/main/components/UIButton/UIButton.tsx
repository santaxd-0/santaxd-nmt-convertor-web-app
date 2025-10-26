import { Button } from "@/components/ui/button";

interface UIButtonInterface {
    styleType?: "primary" |"negative";
    buttonText: string;
    ButtonIcon: React.ElementType;
    onClick?: () => void;
}

export const UIButton = ({ styleType, buttonText, ButtonIcon, onClick }: UIButtonInterface) => {

    const styleReader = (type: string | undefined) => {
        switch (type) {
            case "primary": {return "bg-yellow-500";}
            case "negative": {return "bg-red-600";}
            default: {return type;}
        }
    }

    return (
        <Button className={styleReader(styleType)}
        onClick={onClick}>
            <ButtonIcon/>
            {buttonText}
        </Button>
    );
}