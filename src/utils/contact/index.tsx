import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import DraftsIcon from '@mui/icons-material/Drafts';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

export const contactArr = [
    {
      id: 1,
      title: "Office Address",
      cont: "Head Office: HIG-42, Ekamra Vihar, Jayadev Vihar, Bhubaneswar, Odisha 751015",
      icon: <LocationOnIcon />,
      bgcolor: "bg-blue-500",
    },
    {
      id: 2,
      title: "Mobile Number",
      cont: "+91 8260500785",
      icon:<PhoneIcon/> ,
      bgcolor: "bg-green-500",
    },
    {
      id: 3,
      title: "Mail Address",
      cont: "info@mrcorporate.in, admin@mrcorporate.in",
      icon: <DraftsIcon/>,
      bgcolor: "bg-green-500",
    },
    {
      id: 4,
      title: "Website Address",
      cont: "www.mrcorporate.in",
      icon: <LanguageRoundedIcon/>,
      bgcolor: "bg-blue-500"
    },
];

// utils/formFields.js

export const formFields = [
  { id: 1, label: "Full Name", type: "text", name: "fullName" },
  { id: 2, label: "Email Address", type: "email", name: "email" },
  { id: 3, label: "Phone Number", type: "text", name: "phone" },
  { id: 4, label: "Subject", type: "text", name: "subject" },
  { id: 5, label: "Service", type: "text", name: "service" },
  { id: 6, label: "Message", type: "textarea", name: "message" },
];

export default formFields;
