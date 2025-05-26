import { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import gsap from 'gsap'
import styles from '../styles/Home.module.css'

export default function Home() {
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.from(titleRef.current, {
      duration: 1.5,
      y: 100,
      opacity: 0,
      ease: "power4.out"
    })
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>THIS IS KODAY</title>
        <meta name="description" content="KODAY - Creative Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <img
            src="/images/logo/LOGOKODAY.png"
            alt="KODAY Logo"
            className={styles.logoImage}
          />
        </div>
        <div className={styles.menu}>
          <a href="/proyectos">PROYECTOS</a>
          <a href="/nosotros">NOSOTROS</a>
          <a href="/contactanos">CONTÁCTANOS</a>
        </div>
      </nav>

      <main className={styles.main}>
        <h1 ref={titleRef} className={styles.title}>
          THIS IS<br />KODAY
        </h1>
      </main>
    </div>
  )
} 