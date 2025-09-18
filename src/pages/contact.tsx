import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/Contact/Breadcrumb'
import Herosection from '../components/Contact/Herosection'
import Formcontact from '../components/Contact/Formcontact'
import Map from '../components/Contact/Map'

export default function contact() {
  return (
    <MainLayout>
        <Breadcrumb/>
        <Herosection/>
        <Formcontact/>
        <Map/>
    </MainLayout>
  )
}
