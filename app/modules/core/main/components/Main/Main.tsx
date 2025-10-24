import { TabsContent } from "@radix-ui/react-tabs";
import { Form } from "../Form/Form";
import { EmptyPage } from "../EmptyPage/EmptyPage";
import * as TabManager from "@/components/ui/tabs";

export const Main = () => {
    return (
        <TabManager.Tabs defaultValue="nmt-form">
            <TabManager.TabsList className="z-10 fixed top-0 left-1/2 -translate-x-1/2 mt-5">
                <TabManager.TabsTrigger value="nmt-form">NMT Form</TabManager.TabsTrigger>
                <TabManager.TabsTrigger value="pdf-preview">PDF Preview</TabManager.TabsTrigger>
            </TabManager.TabsList>
            <TabsContent value="nmt-form" className="mt-20">
                <Form/>
            </TabsContent>
            <TabsContent value="pdf-preview" className="mt-20">
                <EmptyPage/>
            </TabsContent>
        </TabManager.Tabs>
    );
}