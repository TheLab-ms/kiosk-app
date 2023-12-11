// import {
//     Button,
//     Kbd,
//     Link,
//     Input,
//     Navbar as NextUINavbar,
//     NavbarContent,
//     NavbarMenu,
//     NavbarMenuToggle,
//     NavbarBrand,
//     NavbarItem,
//     NavbarMenuItem,
// } from "@nextui-org/react";

// import { link as linkStyles } from "@nextui-org/theme";

// import { siteConfig } from "@/config/site";
// import NextLink from "next/link";
// import clsx from "clsx";

// import { ThemeSwitch } from "@/components/theme-switch";

// import { Logo } from "@/components/icons";

// export const Navbar = () => {

//     return (
//         <NextUINavbar maxWidth="full" position="sticky">
//             <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
//                 <NavbarBrand className="gap-3 max-w-fit">
//                     <NextLink className="flex justify-start items-center gap-1" href="/">
//                         <Logo />
//                     </NextLink>
//                 </NavbarBrand>
//             </NavbarContent>

//             <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
//                 <NavbarItem className="hidden sm:flex gap-2">
//                     <ThemeSwitch />
//                 </NavbarItem>
//             </NavbarContent>

//             <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
//                 <ThemeSwitch />
//                 <NavbarMenuToggle />
//             </NavbarContent>

//         </NextUINavbar>
//     );
// };


import {
    Button,
    Kbd,
    Link,
    Input,
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/react";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
    return (
        <NextUINavbar maxWidth="full" position="sticky">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand className="gap-3 max-w-fit">
                    {/* Replace Logo component with custom image */}
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <img src="/images/thelab_profile.png" 
                        alt="Custom Logo"
                         width={50} 
                        height={10} />
                        
                    </NextLink>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
                <NavbarItem className="hidden sm:flex gap-2">
                    <ThemeSwitch />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <ThemeSwitch />
                <NavbarMenuToggle />
            </NavbarContent>
        </NextUINavbar>
    );
};
