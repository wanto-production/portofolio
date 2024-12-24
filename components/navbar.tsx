"use client"
import { useEffect, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Navbar() {
  const [scroll,setScroll] = useState(false)

  useEffect(()=>{
    let timer:any;

    const handlescrol =()=>{
      setScroll(true)

      if (timer) clearTimeout(timer)

      timer = setTimeout(() => {
        setScroll(false)
      }, 1000);
    }

    window.addEventListener('scroll',handlescrol)

    return()=>{
      window.removeEventListener('scroll',handlescrol)
    }
  },[scroll])

  return (
    <header className=' w-full h-[70px] flex justify-center items-center p-2 fixed z-20 top-0'>
      <nav className={` w-full h-full bg-greenleaf ${scroll?'opacity-100':'opacity-40'} duration-300 shadow-lg flex justify-between items-center pr-2 pl-2`}>
        <h2 className=' text-white text-2xl'>ikhwan satrio</h2>
        <DropdownMenu>
        <DropdownMenuTrigger><i className='fa fa-bars text-white text-xl font-semibold mt-2'></i></DropdownMenuTrigger>
        <DropdownMenuContent className=' mr-3'>
          <DropdownMenuLabel>section</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem><a href="#about">about</a></DropdownMenuItem>
          <DropdownMenuItem><a href="#skills">skills</a></DropdownMenuItem>
          <DropdownMenuItem><a href="#project">project</a></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </nav>
    </header>
  )
}
