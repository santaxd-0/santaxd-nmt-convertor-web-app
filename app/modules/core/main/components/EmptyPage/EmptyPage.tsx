import * as EmptyUI from "@/components/ui/empty";
import { Button } from "@/components/ui/button";

export const Empty = () => {
    return (
        <EmptyUI.Empty className="h-screen">
            <EmptyUI.EmptyHeader>
                <EmptyUI.EmptyTitle>No content to change</EmptyUI.EmptyTitle>
                <EmptyUI.EmptyDescription>
                    Try to create your first form!
                </EmptyUI.EmptyDescription>
            </EmptyUI.EmptyHeader>
            <EmptyUI.EmptyContent>
                <Button>Create form</Button>
            </EmptyUI.EmptyContent>
            <Button>Read the docs</Button>
        </EmptyUI.Empty>
    );
}