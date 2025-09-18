// import Breadcrumb from "../components/Service/Breadcrumb";
// import { Herosection } from "../components/Service/Herosection";
// import MainLayout from "../layouts/MainLayout";

// export default function service() {
//     return (
//       <MainLayout>
//         <Breadcrumb/>
//         <Herosection/>
//       </MainLayout>
//     )
//   }
  
// pages/services.tsx
import React from 'react';
import Breadcrumb from '../components/Service/Breadcrumb';
import { Herosection } from '../components/Service/Herosection';
import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';
import { navArr } from '../utils/navbar';  // Ensure the path is correct

const ServicesPage: React.FC = () => {
    const services = navArr.find(menu => menu.title === 'services')?.subMenu || [];

    return (
        <MainLayout>
            <Breadcrumb />
            <Herosection />
        </MainLayout>
    );
};

export default ServicesPage;
