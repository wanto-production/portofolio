"use client"
import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

export default function ParallaxProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".animate-right", {
      x: 300, // Elemen bergerak ke kanan (300px)
      opacity: 0, // Elemen menjadi transparan
      duration: 2.5, // Durasi animasi 1 detik
      ease:'power2.out',
      scrollTrigger: {
        trigger: ".animate-right", // Elemen yang memicu ScrollTrigger
        start: "top 0%", // Animasi mulai saat elemen mencapai 80% dari viewport
        end: "top 20%", // Animasi selesai saat elemen mencapai 100% (keluar dari viewport)
        scrub: 2, // Animasi mengikuti scroll
      },
    });

    gsap.to(".animate-left", {
      x: -300, // Elemen bergerak ke kanan (300px)
      opacity: 0, // Elemen menjadi transparan
      duration: 2.5, // Durasi animasi 1 detik
      ease:'power2.out',
      scrollTrigger: {
        trigger: ".animate-left", // Elemen yang memicu ScrollTrigger
        start: "top 0%", // Animasi mulai saat elemen mencapai 80% dari viewport
        end: "top 20%", // Animasi selesai saat elemen mencapai 100% (keluar dari viewport)
        scrub: 2, // Animasi mengikuti scroll
      },
    });
    
  },[])
  return (
    <>
      {children}
    </>
  )
}