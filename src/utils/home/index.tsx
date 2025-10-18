import { airport_management, bc, bd, ceo, facility_management, md, mm, se, ship_management, sl, slider1, slider2, slider3, sm, waste_management } from "@/src/assets/home";


export const cardArr=[
    {
        id:1,
        image:facility_management,
        title:"facility management",
        content:"Our facility management is contineously re-defined and re-engineered for high-...",
       
    },
    {
        id:2,
        image:airport_management,
        title:"Airport Management",
        content:"Our service include teminal management,Air traffic coordination...",
        
    },
    {
        id:3,
        image:ship_management,
        title:"Ship Management",
        content:"Our ship management service encompass a wide range of port..",
        
    },
    {
        id:4,
        image:waste_management,
        title:"Waste Management",
        content:"We advice you on methods to manage your waste more cost effectively and....",
        
    }
]

export const stepsArr = [
    {
      id: 1,
      title: "Fill The Form",
      description: "Fill up the form details which will help us to know our customer.",
      bgColor: "blue-500",
    },
    {
      id: 2,
      title: "Book An Appointment",
      description: "Schedule a date & time for us to know the exact requirements.",
      bgColor: "orange-500",
    },
    {
      id: 3,
      title: "Site-Survey",
      description: "Our team will make a survey & estimate client requirements.",
      bgColor: "green-500",
    },
    {
      id: 4,
      title: "Get Services",
      description: "We will provide the services as per client requirements.",
      bgColor: "blue-900",
    },
  ];

export const faqArr= [
    {
        id:1,
        question:"What is Facility Management (FM)?",
        answer:"Facility Management involves the effective management of an organization's buildings, infrastructure, and services. It encompasses various tasks such as maintenance, security, space planning, and ensuring a conducive environment for occupants."
    },
    {
        id:2,
        question:"What is Payroll Management (PM)?",
        answer:"Payroll Management (PM) refers to the process of managing and administering employee compensation, ensuring that employees are paid accurately and on time, while also complying with relevant laws and regulations. It involves calculating wages, bonuses, deductions, and benefits, as well as maintaining records for tax purposes and regulatory compliance. Payroll management is a critical function for organizations of all sizes, as it directly impacts employee satisfaction, financial management, and legal compliance."
    },
    {
        id:3,
        question:"What is Security Management (SM)?",
        answer:"Security Management (SM) refers to the process of planning, implementing, and maintaining measures to protect an organization's assets, information, systems, and people from potential threats and risks. It involves a comprehensive set of policies, practices, and technologies to ensure the safety, confidentiality, integrity, and availability of resources in both physical and digital environments."
    }
]

export const sliderArr = [
  {
    id: 1,
    img: slider1,
    title: "We are corporate facility  services provider ",
    paragraph: "We are Providing cleaning Services Since 2010",
  },
  {
    id: 2,
    img: bc,
    title: "All In One Solution",
    paragraph: "We are Provideing all type of Facility Management Services with payroll software. ",
  },
  {
    id: 3,
    img: slider3,
    title: "Get a Appointment to Done your Work",
    paragraph: " By Choosing us you have Achive all Your Success.",
  },
];
import { Build, CheckCircle, EventAvailable, Forum, Star, Update } from "@mui/icons-material";

export const featuresData = [
  {
    icon: <Build fontSize="large" />, // Specialized Company
    title: "Specialized Company",
    description: "We’re specialized in residential and commercial cleaning.",
  },
  {
    icon: <CheckCircle fontSize="large" />, // Licensed and Insured
    title: "Licensed and Insured",
    description: "All cleaners are licensed and insured for your peace of mind.",
  },
  {
    icon: <EventAvailable fontSize="large" />, // Dependable Services
    title: "Dependable Services",
    description: "We love to take pride. Each job is finished in time and budget.",
  },
  {
    icon: <Update fontSize="large" />, // Same Day Scheduling
    title: "Same Day Scheduling",
    description: "We schedule regularly to visit you on the same day and time.",
  },
  {
    icon: <Forum fontSize="large" />, // Provide Consultations
    title: "Provide Consultations",
    description: "We give free consultations and provide you with a quote.",
  },
  {
    icon: <Star fontSize="large" />, // Reputable Company
    title: "Reputable Company",
    description: "Operating more than 15 years earning a reputation for service.",
  },
];

export const teamData = [
  {
    name: "Suresh Mishra",
    role: "Founder & CEO",
    image: ceo, // Replace with actual image paths
    phone: "#",
    email: "#",
  },
  {
    name: "Swayamshree Mishra",
    role: "ED",
    image: md,
    phone: "#",
    email: "#",
  },
  {
    name: "Priyabrata Misra",
    role: "Branch Head",
    image: bd,
    phone: "#",
    email: "#",
  },
  {
    name: "Niranjan Mishra",
    role: "BDM",
    image: mm,
    phone: "#",
    email: "#",
  },
];

export const projectData = [
  {
    name: "Facility Management",
    role: "HouseKeeping,pantry Service,Waste Management",
    image: facility_management, // Replace with actual image paths
  },
  {
    name: "Technical Service",
    role: "BMS,Plumbing & Carpentry,Water Treatment System",
    image: se,
  },
  {
    name: "Security Service",
    role: "Security management,Security on boarding",
    image: sm,
  },
  {
    name: "Staffing Solution",
    role: "Wet Bio-Degrable Waste,Dry Recyclable Waste,E-Waste",
    image: sl,
  },
];

