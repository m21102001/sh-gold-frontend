import { Navbar } from '@/layout';
import React from 'react'
import { useLocation } from 'react-router-dom';
const GoldNews = () => {
    const item = useLocation()?.state?.item;
  return (
    <>
    <Navbar />
    <div>{item?.id}</div>
    <div>{item?.title}</div>
    <div>{item?.desc}</div>
    <div>{item?.price}</div>
    </>
  )
}

export default GoldNews