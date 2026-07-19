import { Navbar } from '@/components/Navbar'
import React from 'react'

const fondoHome =
  //"https://corpbps.com/wp-content/uploads/2022/12/Servicios-Generales.jpg";
 // "https://decorexpro.com/images/article/orig/2017/12/odnokomnatnaya-kvartira-v-stile-loft-primery-oformleniya-1.jpg";
 "https://joseph.cl/assets/img/heroes/hero-remodelaciones-desktop-1920.jpg";


const page = () => {
  return (
     <section className="w-full">
          <div className="w-full fixed z-50 top-0">
            <Navbar />
          </div>
          <div className="">
            <div
              className="h-[600] bg-[#141414] text-gray-300 flex items-center justify-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${fondoHome})`,
                backgroundSize: "cover",
                //backgroundAttachment: "fixed",
                backgroundPosition: "70%",
              }}
            >
              <div className="w-[800]">
                <div className="text-7xl">about</div>
                <h1>{" "}
                </h1>
                <p>
                </p>
              </div>
            </div>
          </div>
          <div>imagen</div>
        </section>
  )
}

export default page