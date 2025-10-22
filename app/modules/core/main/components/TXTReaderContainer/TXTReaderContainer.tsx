import { 
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
    CardContent
 } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "@/components/ui/button";
import {
    Empty,
    EmptyHeader,
    EmptyTitle,
    EmptyMedia,
    EmptyDescription,
    EmptyContent
} from "@/components/ui/empty";


export const TXTReaderContainer = () => {

    const isEmpty = () => {
        return true;
    }

    return (
       <Card className="w-1/2">
            <CardHeader>
                <CardTitle>TXT File Content</CardTitle>
                <CardDescription>
                    Add your txt file to view the content
                </CardDescription>
                <Input type="file" id="read-txt-file"></Input>
            </CardHeader>
            <CardContent className="flex-1">
                <Card className="h-full flex flex-col">
                    {
                        (!isEmpty()) ? (
                            <CardContent className="flex-1">
                                <ScrollArea className="h-full">
                                    .txt file content
                                </ScrollArea>
                            </CardContent>
                        ) : (
                            <Empty>
                                <EmptyHeader>
                                    <EmptyTitle>No files have imported yet</EmptyTitle>
                                    <EmptyDescription>No files to read. Try to import the first one!</EmptyDescription>
                                </EmptyHeader>
                                <EmptyContent className="flex justify-center">
                                    <Button>Import .txt file</Button>
                                </EmptyContent>
                                <Button>Read the docs</Button>
                            </Empty>
                        )
                    }
                </Card>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button className="w-full">
                    Convert
                </Button>
            </CardFooter>
        </Card>
    );
}
