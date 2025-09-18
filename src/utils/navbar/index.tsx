import { navArrType } from "@/src/types";
import { title } from "process";

export const navArr:navArrType[]= [
    {
        id:1,
        title:"home",
        path:"/"
    },
    {
        id:2,
        title:"about",
        path:"/about-us"
    },
    {
        id:3,
        title:'services',
        path:"/services",
        subMenu:[
            {
                id:31,
                title:"facility management",
                path:"/facility management"
            },
            {
                id:32,
                title:"senior management",
                path:"/senior management"
            },
            {
                id:33,
                title:"payroll management",
                path:"/payroll management"
            },
            {
                id:35,
                title:"waste management",
                path:"/waste management"
            },
            {
                id:36,
                title:"sanitation service",
                path:"/sanitation service"
            },
            {
                id:37,
                title:"corporate canteen",
                path:"/corporate canteen"
            },
            {
                id:38,
                title:"technical services",
                path:"/technical services"
            },
            {
                id:37,
                title:"landscaping",
                path:"/landscaping"
            },
            {
                id:38,
                title:"Pest Control",
                path:"/pestcontrol"
            }
        ]
    },
    {
        id:4,
        title:"career",
        path:"/career"
    },
    {
        id:5,
        title:"contact",
        path:"/contact"
    },
    {
        id:6,
        title:"Project",
        path:"/projects"

    }
]