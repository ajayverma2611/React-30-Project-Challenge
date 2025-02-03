// import { Children } from "react";

export const menus=[
    {
        label:"Home",
        to:"/",
    },
    {
        label: "profile",
        to: "/profile",
        children:[
            {
                label: "Details",
                to:"details",
                children:[
                    {
                        label:"Location",
                        to:"location",
                        children:[
                            {
                            label: "city",
                            to: "city",

                            }
                        ]
                    },
                ],
            },
        ],
    },
    {
        label: "Settings",
        to: "/settings",
        children: [
            {
            label: "Account",
            to: "account",
            },{
                label:"Security",
                to:"security",
                childre: [
                    {
                        label:"Login",
                        too:"Login",
                    },
                    {
                        label:"Register",
                        to:"register",
                    },
                ],
            },
        ],
    },
];

export default menus;