import { 
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuContent,
} from "@radix-ui/react-navigation-menu"
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";
import { 
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup, 
    DropdownMenuItem, 
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Download, Play } from "lucide-react";
import { UIButton } from "../UIButton/UIButton";

export const Navbar = () => {
    return (
        <NavigationMenu className="rounded-b-xl border-2 p-3 fixed w-full z-0 backdrop-blur-sm">
            <NavigationMenuList className="flex gap-4 p-2 items-center justify-between">
                <div className="flex items-center justify-center gap-5">
                    <NavigationMenuItem>
                        <NavigationMenuLink className="text-lg font-bold" href="/">
                            NMT Convertor
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/docs">
                            Docs
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            Theme
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul>
                                <li>Dark</li>
                                <li>White</li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </div>
                <div className="flex items-center justify-center gap-5">
                    <UIButton styleType="primary" buttonText="Convert" ButtonIcon={Play}
                    />
                    <ButtonGroup>
                        <UIButton buttonText="Download" ButtonIcon={Download}/>
                        <ButtonGroupSeparator/>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button>.pdf</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>File format</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        .pdf
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        .tex
                                    </DropdownMenuItem>
                            </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </ButtonGroup>
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    );
}