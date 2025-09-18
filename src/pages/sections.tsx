// pages/sections.tsx
import Link from 'next/link';
import MainLayout from '../layouts/MainLayout';

const SectionsPage: React.FC = () => {
  const sections = [
    'facility-management',
    'senior-management',
    'payroll-management',
    'waste-management',
    'sanitation-service',
    'technical-services',
    'landscaping',
    'pestcontrol'
  ];

  return (
    <MainLayout>
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-4'>Sections</h1>
      <ul className='list-disc pl-5'>
        {sections.map(section => (
          <li key={section} className='mb-2'>
            <Link href={`/${section}`}>
              <a className='text-blue-500 hover:underline'>{section.replace(/-/g, '-').toUpperCase()}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </MainLayout>
  );
}

export default SectionsPage;
