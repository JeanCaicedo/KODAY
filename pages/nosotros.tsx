import { useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import gsap from 'gsap'
import styles from '../styles/Home.module.css'

export default function Nosotros() {
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
        <title>Nosotros - KODAY</title>
        <meta name="description" content="Sobre KODAY - Creative Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <img
              src="/images/logo/LOGOKODAY.png"
              alt="KODAY Logo"
              className={styles.logoImage}
            />
          </Link>
        </div>
        <div className={styles.menu}>
          <Link href="/proyectos">PROYECTOS</Link>
          <Link href="/nosotros">NOSOTROS</Link>
          <Link href="/contactanos">CONTÁCTANOS</Link>
        </div>
      </nav>

      <main className={styles.main}>
        <h1 ref={titleRef} className={styles.title}>
          SOBRE<br />NOSOTROS
        </h1>
      </main>
    </div>
  )
} 