import { 
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardAction
} from "@/components/ui/card";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "@/components/ui/button";

export const PDFResultContainer = () => {
    return (
        <Card className="w-1/2">
            <CardHeader>
                <CardTitle>PDF Result</CardTitle>
                <CardDescription>
                    Here will display your .pdf file result
                </CardDescription>
                <CardAction>
                    <Button>
                        Save file
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent className="flex-1">
                <Card className="h-full flex flex-col">
                    <CardContent className="flex-1">
                        <ScrollArea className="h-full w-1/2">
                            .pdf file content
                        </ScrollArea>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    );
}