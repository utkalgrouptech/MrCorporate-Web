// // utils/section/sectionsData.ts
// export interface SectionData {
//     title: string;
//     breadcrumb: string;
//     content: string;
//     downloadLinks: {
//       pdf: string;
//       doc: string;
//     };
//   }

import { sl, sm, waste_management,Pay } from "@/src/assets/home";
import { coroprate_canteen, landscaping, payroll, pestcontrol, sanitation, technical_servises } from "@/src/assets/service";

  
//   export const sectionsData: Record<string, SectionData> = {
//     contact: {
//       title: 'Contact us',
//       breadcrumb: 'Home > Contacts',
//       content: `Contact us content goes here...`,
//       downloadLinks: {
//         pdf: '/path/to/contact.pdf',
//         doc: '/path/to/contact.doc',
//       },
//     },
    // services: {
    //   title: 'Facility Management Service',
    //   breadcrumb: 'Home > Services',
    //   content: `
    //     Mr Corporate is a full-spectrum integrated facilities management company which provide cutting edge and latest facility management service across India. 
    //     Our integrated facilities management paradigm is driven by our highly trained proficient staff, innovative systems, universal quality standards. 
    //     We run for Excellence with customised, flexible and competitive services. Mr corporate will be the one-stop destination for all your facility management need.
        
    //     Our Services Include:
    //     - Housekeeping
    //     - Pantry Services
    //     - Waste Management
    //     - Warehouse Management
    //     - Pest Management Services
    //     - Guest House Management
    //   `,
//       downloadLinks: {
//         pdf: '/path/to/services.pdf',
//         doc: '/path/to/services.doc',
//       },
//     },
//     // Add more sections as needed
//   };
  
// utils/section/sectiondata.ts
export interface SectionData {
  title: string;
  breadcrumb: string;
  content: string;
  details: any; // Made details optional
  pillars?: {
    title: string;
    desc: string;
  }[];
modelPoints?: {        
    title: string;
    desc: string;
  }[];
  downloadLinks?: {
    pdf: string;
    doc: string;
  };
  image?: any;
}

export const sectionsData: Record<string, SectionData> = {
  'facility-management': {
    title: 'Facility Management',
    breadcrumb: 'Facility Management',
    content: `MR Corporate is a premier provider of integrated facilities management (IFM) solutions across India. We specialize in delivering seamless, high-impact services that allow organizations to focus on their core business while we handle the complexities of their physical environment.

By blending cutting-edge technology with a human-centric approach, we ensure that every facility under our care operates at peak efficiency and maintains a world-class professional standard.`,
    details: `
        - Housekeeping Services
        - Pantry & Cafeteria Management
        - Waste Management
        - Warehouse Management
        - Pest Management Services
        - Guest House Management
        - Support Services
        `,
 pillars: [
    {
      title: "Integrated Solutions",
      desc: "A true one-stop destination for technical, soft, and specialized facility requirements."
    },
    {
      title: "Expert Human Capital",
      desc: "Our staff is rigorously trained and highly proficient, ensuring reliable service delivery."
    },
    {
      title: "Innovation & Tech",
      desc: "We leverage innovative systems and advanced technologies to streamline operations and reporting."
    },
    {
      title: "Sustainability Focus",
      desc: "We are committed to the environment, utilizing eco-friendly products and sustainable best practices."
    },
    {
      title: "Quality Excellence",
      desc: "Strict adherence to universal quality standards ensures consistent service across all locations."
    }
  ],
    modelPoints: [     // 👈 ye add karo
    {
      title: "Unified Reporting",
      desc: "One point of contact for all your facility needs, reducing administrative overhead."
    },
    {
      title: "Operational Consistency",
      desc: "Standardized SOPs across all service lines to ensure quality never fluctuates."
    },
    {
      title: "Resource Optimization",
      desc: "Cross-trained teams and shared resources lead to significant cost savings and increased responsiveness."
    }
  ],
    downloadLinks: {
      pdf: '/downloads/facility-management.pdf',
      doc: '/downloads/facility-management.doc'
    },
     image: sm
  },
  'senior-management': {
    title: 'Senior Management',
    breadcrumb: 'Ship Management',
    content: 'The maritime industry requires specialized expertise to manage the complex operations of ships and fleets. Our ship management services are designed to provide end-to-end solutions that cover every aspect of maritime operations. From crew management and vessel maintenance to safety compliance and logistics support, we ensure that your vessels are always in top condition and ready to sail. Our experienced team understands the unique challenges of the maritime industry and works closely with you to develop customized solutions that maximize efficiency and minimize downtime. With our ship management services, you can navigate the high seas with confidence, knowing that your fleet is in capable hands',
    details: `
        - Housekeeping
        - Pantry Services
        `,
    downloadLinks: {
      pdf: '/downloads/ship-management.pdf',
      doc: '/downloads/ship-management.doc'
    },
     image: sl
  },
  'payroll-management': {
    title: 'Payroll Management',
    breadcrumb: 'Payroll Management',
    content:`We deliver intelligent payroll management solutions designed to streamline operations, enhance accuracy, and drive efficiency across your organization. Our end-to-end services simplify complex payroll processes, ensuring timely disbursement, regulatory compliance, and cost optimization.
    
    Backed by deep expertise in payroll processing, statutory compliance, and employee lifecycle management, we enable businesses to stay focused on their core growth and strategic priorities.
    Our intuitive, user-friendly platform supports seamless employee onboarding, precise attendance tracking, customizable salary structures, and flexible payout options. It also ensures full compliance with statutory norms while simplifying leave management, reimbursements, and exit formalities.
    Whether you are a growing enterprise or an established organization, our scalable solutions are tailored to meet your unique requirements—delivering accuracy, transparency, and operational excellence in every payroll cycle.`,
    details: `
        - Seamless Onboarding 
        - Advanced Attendance Tracking
        - Statutory Compliance 
        - Customized Salary Architecture 
       
        `,
    downloadLinks: {
      pdf: '/downloads/payroll-management.pdf',
      doc: '/downloads/payroll-management.doc'
    },
     image: Pay
  },
  'waste-management': {
    title: 'Waste Management',
    breadcrumb: 'Waste Management',
    content: `At MR Corporate, we provide end-to-end solid waste management solutions designed to promote sustainability, environmental responsibility, and high standards of hygiene.
Our dedicated division supports the nationwide Swachh Bharat mission, working closely with government bodies, municipal corporations, and private organizations to build cleaner and greener ecosystems.
We provide end-to-end solutions for recycling, treatment, and safe disposal of waste—ensuring full compliance with regulatory requirements while upholding the highest ethical standards.`,
    details: `
        - Wet Biodegradable Waste
         -Dry Recyclable Waste
        - E-Waste
        `,
    downloadLinks: {
      pdf: '/downloads/waste-management.pdf',
      doc: '/downloads/waste-management.doc'
    },
    image: waste_management
  },
  'sanitation-service': {
    title: 'Sanitation Service',
    breadcrumb: 'Sanitation Service',
    content: 'At MR Corporate Facilities Services, we deliver comprehensive sanitization solutions designed to ensure safe, hygienic, and compliant environments across workplaces, industries, and public spaces.
With increasing awareness around health and hygiene, our scientifically designed sanitization protocols help minimize the risk of contamination, infection, and microbial spread—creating safer environments for employees, customers, and visitors.
',
    details: `
        - Sanitary Fixtures
        - Garden Irrigation
        - Pest Management Services
        `,
    downloadLinks: {
      pdf: '/downloads/sanitation-service.pdf',
      doc: '/downloads/sanitation-service.doc'
    },
     image: sanitation
  },
  'corporate-canteen': {
    title: 'Corporate Canteen',
    breadcrumb: 'Corporate Canteen',
    content: 'A well-managed corporate canteen is an essential part of employee welfare, providing nutritious meals that fuel productivity and morale. Our corporate canteen management services are designed to offer a seamless dining experience that caters to the diverse tastes and dietary needs of your workforce. From menu planning and food preparation to service and hygiene, we take care of every aspect of canteen management. Our team of culinary experts works closely with you to create a menu that reflects your company’s culture and values while ensuring that meals are delicious and balanced. With our corporate canteen services, you can provide your employees with the nourishment they need to perform at their best.',
    details: `
        - Housekeeping
        - Pantry Services
        - Waste Management
        - Warehouse Management
        - Pest Management Services
        - Guest House Management
        `,
    downloadLinks: {
      pdf: '/downloads/corporate-canteen.pdf',
      doc: '/downloads/corporate-canteen.doc'
    },
     image: coroprate_canteen
  },
  'technical-services': {
    title: 'Technical Services',
    breadcrumb: 'Technical Services',
    content: 'We take care of the operation, maintenance, inspection, and restoration of our clients offices and buildings. Our services include regular inspections and maintenance, as well as comprehensive rehabilitation efforts to ensure the safety and stability of these structures. We are committed to delivering the highest standards of care, ensuring that every building under our management remains in peak condition.Our experienced teams are composed of qualified professionals, including engineers, technicians, and experts from various domains. These specialists work collaboratively to develop and deploy a range of technical services that guarantee the smooth operation and long-term sustainability of building systems.',
    details: `
        - Mechanical,Electrical & HVAC
        - BMS
        - Plumbing & Carpentry
        - Water Treatment Systems
        - Fire & Safety Systems
        - Project Management
        `,
    downloadLinks: {
      pdf: '/downloads/technical-services.pdf',
      doc: '/downloads/technical-services.doc'
    },
     image: technical_servises
  },
  'landscaping': {
    title: 'Landscaping',
    breadcrumb: 'Landscaping',
    content: 'A well-maintained landscape not only enhances the aesthetic appeal of your property but also contributes to a positive environment. Our landscaping services are designed to create beautiful, sustainable outdoor spaces that reflect your company’s image and values. From garden design and installation to ongoing maintenance and irrigation, we offer a comprehensive range of landscaping solutions that meet your specific needs. Our team of experienced landscapers works closely with you to develop a customized plan that brings your vision to life. With our landscaping services, you can create an outdoor environment that is both beautiful and sustainable.',
    details: ``,
    downloadLinks: {
      pdf: '/downloads/landscaping.pdf',
      doc: '/downloads/landscaping.doc'
    },
     image: landscaping
  },
  'pestcontrol': {
    title: 'Pest Control',
    breadcrumb: 'Pest Control',
    content: 'Soft Services with adequate and trained uniformed manpower. We use latest equipment and branded chemicals for cleaning of clients commercial & non-commercial buildings, educational institutions, and government and non-government companies.',
    details: `
        - Comprehensive Inspections
        -  Customized Treatment Plans
        - Eco-Friendly Products
        - Warehouse Management
        - Pest Management Services
        - Guest House Management
        `,
    downloadLinks: {
      pdf: '/downloads/staffing-solution.pdf',
      doc: '/downloads/staffing-solution.doc'
    },
     image: pestcontrol
  }
};

export default sectionsData;
