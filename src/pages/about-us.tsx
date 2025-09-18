import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/Aboutus/Breadcrumb'
import Aboutus from '../components/home/Aboutus'
import Herosection from '../components/Aboutus/Herosection'
import Worksection from '../components/Aboutus/Worksection'
import Testimonials from '../components/Aboutus/Testimonials'
import MeetOurTeam from '../components/home/OurTeam'

export default function AboutUs() {
  return (
    <MainLayout>
        <Breadcrumb/>
        <Herosection/>
        <Worksection/>
        <Testimonials/>
        <MeetOurTeam/>
    </MainLayout>
  )
}
