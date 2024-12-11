import React from 'react'
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import Benefits from './Benefits'
import ProductList from './ProductList'
import Venders from './Venders'
import Sale from './Sales'
import Categories from './Categories'
import Recomendations from './Recomendations'
import QuickDeals from './QuickDeals'
import PersonalRec from '../HomePageV1/PersonalRec'
import UserData from '../../components/UsersData'

const Index = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
        <Hero />
        <UserData />
        <QuickDeals />
        <Recomendations />
        <Categories />
        <Sale />
        <Venders />
        <ProductList />
        <Benefits />
        <PersonalRec />
        <Features />
    </div>
  )
}

export default Index