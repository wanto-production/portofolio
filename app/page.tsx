import type { Metadata } from 'next'
import Image from 'next/image';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export const metadata:Metadata ={
  title:'home',
  description:'hello im ikhwan satrio wicaksono, a fullstack developer',
  keywords:['portofolio ikhwan satrio','portofolio'],
  verification:{
    google:"google-site-verification=eFSS6--_5HHxP92Joz-my95FdWfmI5dVS-38_l0FKjE"
  }
}

export default function Home() {
  return (
    <main>
        <section className=' w-full h-screen relative flex flex-col justify-center items-center  bg-green-200 kontener overflow-x-hidden'>
          <img className=' absolute w-full h-auto bottom-0' src="/parallax/hill1.png" alt="" />
          <img className=' absolute w-full h-auto bottom-0' src="/parallax/hill2.png" alt="" />
          <img className='absolute w-[80%] h-auto bottom-0 right-0 animate-right ' src="/parallax/hill3.png" alt="" />
          <img className='absolute w-[80%] h-auto bottom-0 left-0 animate-left' src="/parallax/hill4.png" alt="" />
          <p className='z-[1] text-lg font text-white motion-preset-slide-right-lg'>hello, i`m</p>
          <h1 className='z-[1] text-2xl font font-semibold text-white '>ikhwan satrio wicaksono</h1>
          <h2 className='z-[1] text-xl text-white motion-preset-slide-left-lg'>web developer</h2>
          <img className='absolute w-full h-auto bottom-0 ' src="/parallax/plant.png" alt="" />
          <img  src="/parallax/tree.png" className="absolute w-full h-auto bottom-0 " alt="" />
        </section>
        <section className=' w-full h-[70vh] flex flex-col justify-center items-center gap-2 border-b-2 border-greenleaf'>
          <img src="/website.svg" className=' w-[300px] h-auto' alt="" />
          <div className=' flex gap-2'>
            <AlertDialog>
            <AlertDialogTrigger><p className=' border-2 border-greenleaf p-2 rounded-md text-greenleaf text-lg' >download cv</p></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>belom ada cv aku wak</AlertDialogTitle>
                <AlertDialogDescription>
                    <Image className=' h-auto w-auto' priority src="/atmin.jpg" alt="" width={200} height={150}/>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>
            <a className=' bg-greenleaf p-2 rounded-md text-white text-lg' href="#about">about me</a>
          </div>
        </section>
        <section id='about' className='w-full h-screen flex flex-col justify-center items-center gap-4 border-b-2 border-greenleaf'>
          <Image src="/jomok.jpg" className=' rounded-md w-auto h-auto' alt='' width={300} height={200}/>
          <div className=' flex items-center gap-2 '>

            <div className='flex flex-col justify-center items-center p-2 rounded-md shadow-lg border-t-2 border-greenleaf'>
              <i className="fa fa-certificate text-greenleaf" aria-hidden="true"></i>
              <h2 className=' text-lg font-semibold'>certificates</h2>
              <p>1 certificate</p>
            </div>

            <div className='flex flex-col justify-center items-center p-2 rounded-md shadow-lg border-t-2 border-greenleaf'>
              <i className="fas fa-briefcase text-greenleaf" aria-hidden="true"></i>
              <h2 className=' text-lg font-semibold'>completed</h2>
              <p>2 project</p>
            </div>

          </div>

          <p className=' font-[Roboto,Arial,sans-serif] w-[80%] text-center sm:text-lg md:text-2xl'>hello i`m ikhwan satrio from indonesia,i really enjoy learning leanguage like javascript and rust!</p>
          <a href="#skills" className='p-2 bg-greenleaf text-white rounded-md'>my skills <i className="fa fa-arrow-circle-down" aria-hidden="true"></i> </a>
        </section>
        <section id='skills' className=' w-full min-h-[100vh] p-5 h-fit flex flex-col justify-center items-center gap-2 border-b-2 border-greenleaf'>
          <div className=' flex gap-2 flex-wrap justify-center items-center mt-[30px]'>

          <Card className=' shadow-lg'>
            <CardHeader>
              <CardTitle>basic</CardTitle>
            </CardHeader>
            <CardContent className=' w-[250px] h-[100px] p-2 flex flex-wrap justify-around items-center gap-2'>
              <ul className='h-full flex flex-col justify-start gap-2 '>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> javascript</p></li>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> html</p></li>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> css</p></li>
              </ul>
              <ul className='h-full flex flex-col justify-start gap-2'>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> python</p></li>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> rust</p></li>
              </ul>
            </CardContent>
          </Card>

          <Card className=' shadow-lg'>
            <CardHeader>
              <CardTitle>library/framework</CardTitle>
            </CardHeader>
            <CardContent className=' w-[250px] h-[100px] p-2 flex flex-wrap justify-around items-center gap-2'>
              <ul className='h-full flex flex-col justify-start gap-2 '>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> next js</p></li>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> sveltekit</p></li>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> tailwindcss</p></li>
              </ul>
              <ul className='h-full flex flex-col justify-start gap-2'>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> react</p></li>
                <li><p><i className="fa fa-check-circle text-greenleaf" aria-hidden="true"></i> vue</p></li>
              </ul>
            </CardContent>
          </Card>

          </div>
          <a href="#project" className='p-2 bg-greenleaf text-white rounded-md'>my project <i className="fa fa-arrow-circle-down" aria-hidden="true"></i> </a>
        </section>
        <section className='w-full min-h-[50vh] h-fit p-3 flex justify-center ' id='project'>
          <div className='flex flex-wrap justify-center items-center gap-3 mt-[30px]'>
            <a href="https://wanto-production.github.io/quran-digital">
              <Card>
                <CardHeader>
                  <CardTitle>qur`an digital</CardTitle>
                </CardHeader>
                <CardContent className=' p-2' >
                  <div className=" w-[250px] h-[150px] bg-gradient-to-r from-green-300 via-green-400 to-green-500 p-8"/>
                </CardContent>
                <CardFooter>
                  <h2>web app for readng al-Quran</h2>
                </CardFooter>
              </Card>
            </a>
            <a href="https://rpl-weather-wheat.vercel.app/">
              <Card className=' w-[270px]'>
                <CardHeader>
                  <CardTitle>weather app</CardTitle>
                </CardHeader>
                <CardContent className=' p-2' >
                  <div className=" w-[250px] h-[150px] bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 p-8"/>
                </CardContent>
                <CardFooter>
                  <h2>web app to find out the latest weather</h2>
                </CardFooter>
              </Card>
            </a>
          </div>
        </section>
        <footer className=' relative w-full h-[20vh] flex flex-col  justify-start pt-2 gap-3 items-center bg-greenleaf'>
            <h2 className=' text-white text-2xl font-semibold'>contact me</h2>
            <div className='flex gap-4 text-white text-xl'>
              <i className="fab fa-instagram" aria-hidden="true"></i>
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </div>
            <h2 className=' absolute bottom-2 text-white'><i className="fas fa-copyright" aria-hidden="true"></i>ikhwan satrio wicaksono</h2>
        </footer>
    </main>
  );
}
