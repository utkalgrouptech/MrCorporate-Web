import Aboutus from "../components/home/Aboutus";
import Appsection from "../components/home/Appsection";
import Breadcrumb from "../components/home/Breadcrumb";
import Faq from "../components/home/Faq";
import Form from "../components/home/Form";
import OurProjects from "../components/home/OurProjects";
import Ourservice from "../components/home/Ourservice";
import MeetOurTeam from "../components/home/OurTeam";
import Service from "../components/home/Service";
// import Testimonials from "../components/home/Testimonials";
import MainLayout from "../layouts/MainLayout";
import Sheader from "../layouts/Sheader";


export default function Home() {
  return (
    <MainLayout>
      <Breadcrumb />
      <Aboutus />
      <Service />
      <Appsection/>
      <MeetOurTeam />
      <Faq />
      <Ourservice />
      <Form />
      <OurProjects />
      {/* <Testimonials /> */}
    </MainLayout>
  );
}
