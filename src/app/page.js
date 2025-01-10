import Categories from '@/components/Categories'
import Experience from '@/components/Experience'
import Explore from '@/components/Explore'
import Featured from '@/components/Featured'
import FlashSales from '@/components/FlashSales'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ThisMonth from '@/components/ThisMonth'
import Head from 'next/head'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FlashSales />
      <Categories />
      <ThisMonth/>
      <Experience/>
      <Explore/>
      <Featured />
      <Services />
    </div>
  )
}

export default HomePage