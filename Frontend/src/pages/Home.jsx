import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import EventsList from './EventsList'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NewsLetter from '../components/newsLetter'

function Home() {
  return (
    <>
    <HeroSection/>
    <EventsList/>
    <NewsLetter/>

    </>
  )
}

export default Home