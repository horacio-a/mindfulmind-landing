import Image from 'next/image'
import styles from './page.module.css'
import Header from '../componets/Header'
import MainSetion from '../componets/MainSetion'
import Footer from '../componets/Footer'
import SecondSetion from '../componets/SecondSetion'
import ContactoSetion from '../componets/ContactoSetion'
import ThirdSection from '../componets/ThirdSection'
import FourSection from '../componets/FourSection'


export default function Home() {
  return (
    <>
      <Header />

      <MainSetion />
      <SecondSetion />
      <ThirdSection />
      <FourSection />
      <ContactoSetion />

      <Footer />

    </>
  )
}
