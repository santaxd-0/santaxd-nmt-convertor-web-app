import { 
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuContent,
} from "@radix-ui/react-navigation-menu"

export const Navbar = () => {
    return (
        <NavigationMenu className="rounded-b-xl border-2 p-3">
            <NavigationMenuList className="flex gap-4 p-2 items-center">
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
            </NavigationMenuList>
        </NavigationMenu>
    );
}