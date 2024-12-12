import { Hero } from '@/commons/components'
import React, { useEffect,useContext } from 'react'
import HeaderContext from '@/commons/components/Header/HeaderContext';

const LandingPage = () => {
  const { setTitle } = useContext(HeaderContext);
  useEffect(() => setTitle("Home"));
  const DUMMY_BANNER =
    'https://i.pinimg.com/736x/c6/11/1c/c6111c2a2cea1c1160f2cbc311e8e9fd.jpg'

  return (
    <div className="landing-page">
      <Hero banner={DUMMY_BANNER} />
    </div>
  )
}

export default LandingPage
