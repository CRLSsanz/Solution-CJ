"use client";

import Domotica from "@/components/Domotica";
import { Navbar } from "@/components/Navbar";
import { Navigation } from "@/components/Navigation";
import { Whatsapp } from "@/components/Whatsapp";
import {
  Audiowide,
  Orbitron,
  Oswald,
  Raleway,
  Wallpoet,
  Allerta_Stencil,
  Sirin_Stencil,
  Manrope,
} from "next/font/google";
import Image from "next/image";
import Link from "next/link";
//bg-cover bg-fixed bg-[0%] bg-[url('/images/piggy-mobile.jpg')] min-h-screen

const oswald = Oswald({
  weight: ["400"],
  style: "normal",
  variable: "--font-Oswald",
  subsets: ["latin"],
});

//const title = Audiowide({
const manrope = Manrope({
  weight: ["400"],
  style: "normal",
  variable: "--font-Oswald",
  subsets: ["latin"],
});

export default function Home() {
  const card1 = [
    {
      id: "01",
      title: "Electricidad",
      text: "Brindamos servicios de electricidad desde instalaciones domiciliarias hasta proyectos comerciales. Incorporamos la tecnología en tu residencia mediante la domótica.",
      link: "+ info servicio electrico",
      link2: "electricidad",
      ima: "electricidad.jpg",
    },
    {
      id: "02",
      title: "Drywall",
      text: "Transforma tus espacios, ampliacion y remodelacion de oficinas, casas, departamentos. Tendencia actual en decoracion de interiores.",
      link: "+ info servicio drywall",
      link2: "drywall",
      ima: "drywall.jpg",
    },
    {
      id: "03",
      title: "Melamina",
      text: "Diseño y fabricación de muebles en melamina. Mantenimiento y remodelacion para sus espacios u oficina, armado de closet y mas.",
      link: "+ info servicio melamina",
      link2: "melamina",
      ima: "melamina.jpg",
    },
  ];

  const card2 = [
    {
      id: "01",
      title: "Pintura",
      subtitle: "Interior y Exterior",
      text: "Ofrecemos soluciones personalizadas para cualquier necesidad de pintura para mejorar la apariencia de tu vivienda o darle un nuevo look a tu oficina.",
      link: "+ info servicio pintura",
      link2: "pintura",
      ima: "pintura.jpg",
    },
    {
      id: "02",
      title: "Gasfiteria",
      subtitle: "Instalacion de Tanques",
      text: "Servicio de gasfiteria en general ofrecemos inspección, reparación e instalación de sanitarios y tuberias en cualquier ambiente de su vivienda o negocio.",
      link: "+ info servicio gasfiteria",
      link2: "gasfiteria",
      ima: "gasfiteria.jpg",
    },
    {
      id: "03",
      title: "Vigilancia",
      subtitle: "Camaras de Seguridad",
      text: "Cuida lo que mas quieres desde cualquier lugar remoto con un sistema profesional de video vigilancia de alta calidad para tu hogar o negocio.",
      link: "+ info servicio vigilancia",
      link2: "camara",
      ima: "camara.jpg",
    },
  ];

  const fondoHome =
    "https://www.fomora.com/wp-content/uploads/2025/09/fomora-reformas-integrales-precios-2025.jpg";
  //"https://espaintegral.com/wp-content/uploads/2015/01/slider-Pareja.jpg"
  //"https://serviciosgeneralesacr.com/images/servicios-generales-y-mantenimiento.jpg"
  // "https://corpbps.com/wp-content/uploads/2022/12/Servicios-Generales.jpg";
  //"https://decorexpro.com/images/article/orig/2017/12/odnokomnatnaya-kvartira-v-stile-loft-primery-oformleniya-1.jpg";
  //home2 "https://joseph.cl/assets/img/heroes/hero-remodelaciones-desktop-1920.jpg";
  const fondoPanal =
    "https://raw.githubusercontent.com/CRLSsanz/trade/main/panal1.jpg";
  const fondoMelamina =
    "https://milanicocinas.com/wp-content/uploads/2024/03/tipos-de-melamina-para-cocina.jpg";
  const fondoCerrajeria =
    "https://www.cerrajerosdoshermanas.es/hero-locksmith.jpg";

  return (
    <section className="w-full flex flex-col justify-center items-center Xbg-[#141414] text-gray">
      <div className="w-full fixed z-50 top-0">
        <Navbar />
      </div>

      <div className="z-40">
        <Whatsapp />
      </div>

      <div className="z-50">
        <Navigation />
      </div>

      <section id="home" className="w-full">
        <div className="bg-black h-16"></div>
        <div
          className="lg:h-[700] bg-[#141414] text-gray-100"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${fondoHome})`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "45%",
          }}
        >
          <div className=" w-full lg:h-[700] h-[700] flex flex-col items-center justify-evenly px-5 lg:px-0 py-10">
            <div className="w-full lg:w-[1200]">
              <div className={`w-full lg:w-[600] mb-5 font-semibold `}>
                <h1 className="">
                  Ofrecemos soluciones internas para su negocio o vivienda
                </h1>
                <h1 className="text-5xl lg:text-7xl mt-5">
                  Mantenimiento y Reformas de
                  <span className="text-teal-400 font-bold"> Calidad</span>
                  <br />
                </h1>
              </div>

              <div className="w-full lg:w-[400] font-medium lg:text-xl">
                <span className="">
                  Un solo equipo, presupuesto claro y precios económicos
                </span>
              </div>
            </div>

            <div className="w-full lg:w-[1200] flex lg:flex-row flex-col gap-3 text-center text-sm">
              <Link
                href="https://api.whatsapp.com/send?phone=+51939065454&text=Hola, estoy interesado en sus servicios."
                className="px-10 lg:py-3 py-2.5 bg-teal-600/90 hover:bg-teal-500 flex flex-row items-center justify-center gap-x-2 animate-bounce2"
              >
                <span className="">
                  <svg
                    fill="#ffffff"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="m15.271 13.21c.578.185 1.078.416 1.543.7l-.031-.018c.529.235.986.51 1.403.833l-.015-.011c.02.061.032.13.032.203 0 .011 0 .021-.001.032v-.001c-.015.429-.11.832-.271 1.199l.008-.021c-.231.463-.616.82-1.087 1.01l-.014.005c-.459.243-1.001.393-1.576.411h-.006c-1.1-.146-2.094-.484-2.988-.982l.043.022c-1.022-.468-1.895-1.083-2.636-1.829l-.001-.001c-.824-.857-1.579-1.795-2.248-2.794l-.047-.074c-.636-.829-1.041-1.866-1.1-2.995l-.001-.013v-.124c.032-.975.468-1.843 1.144-2.447l.003-.003c.207-.206.491-.335.805-.341h.001c.101.003.198.011.292.025l-.013-.002c.087.013.188.021.292.023h.003c.019-.002.04-.003.062-.003.13 0 .251.039.352.105l-.002-.001c.107.118.189.261.238.418l.002.008q.124.31.512 1.364c.135.314.267.701.373 1.099l.014.063c-.076.361-.268.668-.533.889l-.003.002q-.535.566-.535.72c.004.088.034.168.081.234l-.001-.001c.405.829.936 1.533 1.576 2.119l.005.005c.675.609 1.446 1.132 2.282 1.54l.059.026c.097.063.213.103.339.109h.002q.233 0 .838-.752t.804-.752zm-3.147 8.216h.022c1.357 0 2.647-.285 3.814-.799l-.061.024c2.356-.994 4.193-2.831 5.163-5.124l.024-.063c.49-1.113.775-2.411.775-3.775s-.285-2.662-.799-3.837l.024.062c-.994-2.356-2.831-4.193-5.124-5.163l-.063-.024c-1.113-.49-2.411-.775-3.775-.775s-2.662.285-3.837.799l.062-.024c-2.356.994-4.193 2.831-5.163 5.124l-.024.063c-.49 1.117-.775 2.419-.775 3.787 0 2.141.698 4.12 1.879 5.72l-.019-.026-1.225 3.613 3.752-1.194c1.49 1.01 3.327 1.612 5.305 1.612h.047zm0-21.426h.033c1.628 0 3.176.342 4.575.959l-.073-.029c2.825 1.197 5.028 3.4 6.196 6.149l.029.076c.588 1.337.93 2.896.93 4.535s-.342 3.198-.959 4.609l.029-.074c-1.197 2.825-3.4 5.028-6.149 6.196l-.076.029c-1.327.588-2.875.93-4.503.93-.011 0-.023 0-.034 0h.002c-.016 0-.034 0-.053 0-2.059 0-3.992-.541-5.664-1.488l.057.03-6.465 2.078 2.109-6.279c-1.051-1.714-1.674-3.789-1.674-6.01 0-1.646.342-3.212.959-4.631l-.029.075c1.197-2.825 3.4-5.028 6.149-6.196l.076-.029c1.327-.588 2.875-.93 4.503-.93h.033-.002z"></path>
                    </g>
                  </svg>
                </span>
                <span className="xfam-manrope">Pide tu presupuesto gratis</span>
              </Link>

              <Link
                href="tel:+51939065454"
                className="px-10 lg:py-3 py-2.5 border border-gray-200 hover:bg-gray-100/20 flex flex-row items-center justify-center gap-x-2"
              >
                <span>
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </span>
                <span className="fam-manrope">Llamar ahora</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="camaras" className="w-full">
        <div
          className="Xmin-h-screen Xbg-[#141414] text-gray-100 w-full flex justify-center"
          style={{
            //backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/fondo.jpg')`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="w-full lg:w-[800] flex flex-col items-center justify-center py-20">
            <div className="w-full grid grid-cols-2 gap-y-5 px-5 lg:p-0 ">
              <h2 className="lg:text-4xl text-2xl mb-5">
                Camaras de Vigilancia y Seguridad
              </h2>

              <ul className="col-span-2 lg:col-span-1 px-5 lg:px-0 list-disc Xlist-inside mb-5 lg:ml-16 lg:leading-loose">
                <li>Instalacion de camaras CCTV </li>
                <li>Mantenimiento y servicio tecnico </li>
                <li>Renovación de cámaras PTZ</li>
                <li>Instalación de radioenlaces</li>
                <li>Configuración de DVR para grabación</li>
                <li>Discos duros</li>
              </ul>

              <div className="col-span-2">
                <div className="relative w-full h-40 lg:h-96 lg:col-span-1 col-span-2">
                  <Image
                    src={`/images/camaras/01.jpg`} //"/images/electricidad.jpg"
                    alt="03"
                    fill
                    sizes=""
                    //width={250}
                    //height={200}
                    style={{
                      objectFit: "cover", // cover, contain, none
                      objectPosition: "50% 50%",
                    }}
                  />
                </div>
                <h1 className="w-full p-5 bg-gray-100 text-gray-700 ">
                  Asesoramos tu planificación del proyecto de video vigilancia
                  <br />
                  Camaras de seguridad para casas, departamentos y edificios.
                </h1>
              </div>

              <div className="col-span-2">
                <div className="w-full flex flex-row  ">
                  <div className="relative w-full h-48 lg:h-[400]">
                    <Image
                      src={`/images/camaras/02.jpg`} //"/images/electricidad.jpg"
                      alt="01"
                      fill
                      sizes=""
                      //width={250}
                      //height={200}
                      style={{
                        objectFit: "cover", // cover, contain, none
                        objectPosition: "50% 50%",
                      }}
                    />
                  </div>
                  <div className="relative w-full h-48 lg:h-[400]">
                    <Image
                      src={`/images/camaras/03.jpg`} //"/images/electricidad.jpg"
                      alt="02"
                      fill
                      sizes=""
                      //width={250}
                      //height={200}
                      style={{
                        objectFit: "cover", // cover, contain, none
                        objectPosition: "20%",
                      }}
                    />
                  </div>
                  <div className="relative w-full h-48 lg:h-[400]">
                    <Image
                      src={`/images/camaras/04.jpg`} //"/images/electricidad.jpg"
                      alt="03"
                      fill
                      sizes=""
                      //width={250}
                      //height={200}
                      style={{
                        objectFit: "cover", // cover, contain, none
                        objectPosition: "50% 50%",
                      }}
                    />
                    <h1 className="hidden absolute w-full bottom-0 bg-gray-900/80 p-5 font-bold">
                      Camara
                    </h1>
                  </div>
                </div>
                <div className="w-full p-5 bg-gray-100 text-gray-700 ">
                  <h1 className="text-xl mb-5">Materiales</h1>
                  <p className="text-base">
                    Contamos con kits de <span className="fam-number"> 4 </span>{" "}
                    y <span className="fam-number"> 8 </span> cámaras, HD{" "}
                    <span className="fam-number"> 720</span>P y Full HD{" "}
                    <span className="fam-number"> 1080</span>P, configuración de
                    App móvil para ver su casa o negocio en tiempo real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cerrajeria" className="w-full">
        <div
          className="min-h-screen Xbg-[#141414] text-gray-300 w-full"
          style={{
            //backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/cerrajeria/fondo.jpg')`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="w-full flex flex-col items-center py-20">
            <div className="w-full lg:w-[800] lg:px-0 px-5 grid grid-cols-2 gap-5">
              <h1 className="lg:text-4xl text-2xl mb-5">
                Servicio de Cerrajeria a domicilio
              </h1>
              <p className="lg:pl-10 mb-10">
                Tenemos la solución a tu problema de cerrajería, ofrecemos un
                servicio a domicilio rápido y eficiente, disponible las 24 horas
                del día. Ya sea que necesites abrir una puerta, cambiar
                cerraduras o instalar sistemas de seguridad, puedes contar con
                nosotros.
              </p>

              <div className="col-span-2">
                <div className="relative h-60 lg:h-96">
                  <Image
                    src={`/images/cerrajeria/01.jpg`} //"/images/electricidad.jpg"
                    alt="01"
                    fill
                    sizes=""
                    //width={250}
                    //height={200}
                    style={{
                      objectFit: "cover", // cover, contain, none
                      objectPosition: "50% 50%",
                    }}
                  />
                </div>
                <h1 className="p-5 text-xl text-center mb-10">
                  Instalación de cerraduras, cilindros de gaveta y mucho mas
                </h1>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <div className="relative w-full h-80 lg:h-60">
                  <Image
                    src={`/images/cerrajeria/02.jpg`} //"/images/electricidad.jpg"
                    alt="01"
                    fill
                    sizes=""
                    //width={250}
                    //height={200}
                    style={{
                      objectFit: "cover", // cover, contain, none
                      objectPosition: "50% 50%",
                    }}
                  />
                </div>
                <h1 className="p-5 bg-gray-50 text-gray-700">
                  Instalación de cerraduras inteligentes
                </h1>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <div className="relative w-full h-44 lg:h-60">
                  <Image
                    src={`/images/cerrajeria/03.jpg`} //"/images/electricidad.jpg"
                    alt="01"
                    fill
                    sizes=""
                    //width={250}
                    //height={200}
                    style={{
                      objectFit: "cover", // cover, contain, none
                      objectPosition: "50% 50%",
                    }}
                  />
                </div>
                <h1 className="p-5 bg-gray-50 text-gray-700">
                  Configuración de chapas y cerraduras
                </h1>
              </div>

              <div className="col-span-2">
                <div className="relative w-full h-48 lg:h-[400]">
                  <Image
                    src={`/images/cerrajeria/04.jpg`} //"/images/electricidad.jpg"
                    alt="02"
                    fill
                    sizes=""
                    //width={250}
                    //height={200}
                    style={{
                      objectFit: "cover", // cover, contain, none
                      objectPosition: "50% 50%",
                    }}
                  />
                </div>
                <h1 className="p-5 text-xl text-center mb-10">
                  Instalación, ajustes y nivelacion de puertas
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Domotica />

      <section id="drywall" className="w-full">
        <div
          className="Xhidden lg:min-h-[800] h-[400] bg-[#141414] text-gray-300"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/drywall/fondo.jpg')`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className=""> </div>
        </div>
        <div className="flex justify-center bg-[#141414]">
          <div className="w-full lg:w-[1440] min-h-[800] -mt-24 bg-gray-200 text-gray-600 flex lg:flex-row flex-col mb-20">
            <div className="w-full lg:w-1/2 flex lg:flex-row flex-col">
              <div className="w-full lg:w-1/2">
                <div className="lg:py-20 py-10 pl-20 lg:mt-0 -mt-34">
                  <h1 className="title text-4xl uppercase mb-10">
                    Drywall en General
                  </h1>
                  <h4>- Remodelaciones</h4>
                  <h4>- Ampliaciones</h4>
                  <h4>- Diviciones Interiores</h4>
                  <h4>- Fachadas</h4>
                  <h4>- Cielo Raso</h4>
                  <h4>- Muros</h4>
                  <h4>- Deparmamentos</h4>
                  <h4>- Revestimiento</h4>
                  <h4>- Centro de entretenimiento</h4>
                  <h4>- Azotea Terrazas</h4>
                </div>
              </div>
              <div
                className="hidden lg:block lg:w-1/2"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('/images/drywall/04.jpg')`,
                  backgroundSize: "cover",
                  //backgroundAttachment: "fixed",
                  backgroundPosition: "50%",
                }}
              >
                2
              </div>
            </div>

            <div className="w-full lg:w-1/2 bg-gray-200 flex lg:flex-row flex-col">
              <div className="w-full lg:w-1/2">
                <div className="h-1/3 mt-1">
                  <div className="relative w-full h-[260] mb-10">
                    <Image
                      src={`/images/drywall/01.jpg`} //"/images/electricidad.jpg"
                      alt="01"
                      fill
                      sizes=""
                      //width={250}
                      //height={200}
                      style={{
                        objectFit: "cover", // cover, contain, none
                        objectPosition: "50% 50%",
                      }}
                    />
                  </div>
                </div>
                <div className="h-1/3">
                  <div className="relative w-full h-[260] mb-10">
                    <Image
                      src={`/images/drywall/02.jpg`} //"/images/electricidad.jpg"
                      alt="01"
                      fill
                      sizes=""
                      //width={250}
                      //height={200}
                      style={{
                        objectFit: "cover", // cover, contain, none
                        objectPosition: "50% 50%",
                      }}
                    />
                  </div>
                </div>
                <div className="h-1/3">
                  <div className="relative w-full h-[260] mb-10">
                    <Image
                      src={`/images/drywall/03.jpg`} //"/images/electricidad.jpg"
                      alt="01"
                      fill
                      sizes=""
                      //width={250}
                      //height={200}
                      style={{
                        objectFit: "cover", // cover, contain, none
                        objectPosition: "50% 50%",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 bg-gray-200 text-lg">
                <div className="px-10 py-20">
                  <p className="lg:mb-20 mb-10 text-lg text-justify">
                    No esperes mas para transformar tus espacios. Descubre el
                    potencial del Drywall con SGJ Soluciones Generales
                  </p>

                  <p className="font-semibold text-xl uppercase mb-5">
                    Contactenos
                  </p>
                  <p className="fam-number font-extrabold lg:mb-20 mb-10">
                    +51 904 150 352
                  </p>

                  <p className="font-semibold text-xl uppercase mb-5">
                    Otros Servicios
                  </p>
                  <h4>Electricidad</h4>
                  <h4>Melamina</h4>
                  <h4>Pintura</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden xflex justify-center bg-gray-900">
          <div className="w-[1440] h-[800] -mt-40 bg-gray-800 flex flex-row">
            <div className="w-1/2 flex flex-row">
              <div className="w-1/2">1</div>
              <div className="w-1/2">2</div>
            </div>
            <div className="w-1/2 bg-teal-800 flex flex-row">
              <div className="w-1/2">
                <h1 className="h-1/3">1</h1>
                <h1 className="h-1/3">2</h1>
                <h1 className="h-1/3">3</h1>
              </div>
              <div className="w-1/2 bg-amber-800">hi</div>
            </div>
          </div>
        </div>
      </section>

      <section id="electricidad" className="w-full">
        <div
          className="min-h-screen bg-[#141414] text-gray-300"
          style={
            {
              //backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/electricidad1.jpg)`,
              //backgroundSize: "cover",
              //backgroundAttachment: "fixed",
              //backgroundPosition: "50%",
            }
          }
        >
          <div className="w-full flex flex-col items-center py-20">
            <div className="w-full lg:w-[1200] p-5 lg:p-0 flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 flex flex-col Xitems-center">
                <h2 className="title lg:text-4xl text-2xl mb-10">
                  Electricidad
                </h2>
                <div className="lg:w-[400] mb-10 tracking-wider">
                  Brindamos servicios de electricidad desde instalaciones
                  domiciliarias hasta proyectos comerciales. Incorporamos la
                  tecnología en tu residencia mediante la domótica.
                </div>
                <div className="relative w-full px-5 h-80 mb-10">
                  <Image
                    src="/images/electricidad/01.jpg" //"/images/electricidad.jpg"
                    alt="electricidad"
                    fill
                    sizes=""
                    //width={450}
                    //height={400}
                    style={{
                      objectFit: "cover", // cover, contain, none
                      objectPosition: "50% 50%",
                    }}
                  />
                </div>
                <div className="mb-10 subtitle">
                  Instalación, mantenimiento y reparación{" "}
                </div>
                <div className="relative w-full px-5 h-80">
                  <Image
                    src="/images/electricidad/02.jpg" //"/images/electricidad.jpg"
                    alt="electricidad"
                    fill
                    sizes=""
                    //width={450}
                    //height={400}
                    style={{
                      objectFit: "cover", // cover, contain, none
                      objectPosition: "50% 50%",
                    }}
                  />
                </div>
              </div>
              <div
                className="w-full lg:w-1/2 h-[600] lg:min-h-screen bg-[#141414] text-gray-300 -mt-20 lg:mt-0"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.5)), url(/images/electricidad/fondo.jpg)`,
                  backgroundSize: "cover",
                  //backgroundAttachment: "fixed",
                  backgroundPosition: "50%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section id="gasfiteria" className="w-full">
        <div
          className="Xmin-h-screen bg-gray-100 text-gray-600 Xbg-[#141414] w-full rounded-xl"
          style={{
            //backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/gasfiteria/fondo.jpg')`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="w-full flex flex-col items-center py-20">
            <div className="w-full lg:w-[1320] p-5 lg:p-0 flex flex-col lg:flex-row">
              <div className="lg:w-1/4 mb-10">
                <h1 className="title lg:text-4xl text-2xl mb-5">Gasfiteria</h1>
                <ul className="list-disc Xlist-inside">
                  <li>Reparación de fugas</li>
                  <li>
                    Limpieza y destape de tuberías, lavaderos, inodoros y cajas
                    de registro.
                  </li>
                  <li>Instalaciones sanitarias</li>
                  <li>
                    Montaje de griferías, duchas, sanitarios, termas y tanques
                    elevados.
                  </li>
                  <li>
                    Instalación o mantenimiento de bomba rotoplas y trampas.
                  </li>
                </ul>
              </div>
              <div className="lg:w-3/4 grid lg:grid-cols-3 grid-cols-2 gap-5">
                <div className="relative w-full px-5 lg:h-80 h-50">
                  <Image
                    className="rounded-2xl"
                    src="/images/gasfiteria/01.jpg" //"/images/electricidad.jpg"
                    alt="electricidad"
                    fill
                    sizes=""
                    //width={450}
                    //height={400}
                    style={{
                      objectFit: "cover", // cover, contain, none
                      objectPosition: "50% 50%",
                    }}
                  />
                </div>
                <div className="relative w-full px-5 lg:h-80 h-50">
                  <Image
                    className="rounded-2xl"
                    src="/images/gasfiteria/02.jpg" //"/images/electricidad.jpg"
                    alt="electricidad"
                    fill
                    sizes=""
                    //width={450}
                    //height={400}
                    style={{
                      objectFit: "cover", // cover, contain, none
                      objectPosition: "50% 50%",
                    }}
                  />
                </div>
                <div className="relative w-full px-5 lg:h-80 h-50">
                  <Image
                    className="rounded-2xl"
                    src="/images/gasfiteria/03.jpg" //"/images/electricidad.jpg"
                    alt="electricidad"
                    fill
                    sizes=""
                    //width={450}
                    //height={400}
                    style={{
                      objectFit: "cover", // cover, contain, none
                      objectPosition: "50% 50%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="melamina" className="w-full">
        <div
          className="lg:min-h-screen bg-[#141414] text-gray-300 w-full"
          style={{
            //backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${fondoPanal})`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="w-full lg:h-svh py-20 lg:py-0 flex flex-col items-center justify-center">
            <div className="w-full lg:w-[1440] lg:text-4xl text-2xl text-center mb-5">
              MELAMINA
            </div>
            <div className="w-full lg:w-[700] text-center mb-5">
              Diseño y fabricación de muebles en melamina. Mantenimiento y
              remodelacion para sus espacios u oficina, armado de closet y mas.
            </div>

            <div className="w-full lg:w-[1440] flex flex-col lg:flex-row gap-x-2">
              <div className="relative w-full lg:w-1/3 h-[600]">
                <Image
                  src={`/images/melamina/fondo.jpg`} //"/images/electricidad.jpg"
                  alt="01"
                  fill
                  sizes=""
                  //width={250}
                  //height={200}
                  style={{
                    objectFit: "cover", // cover, contain, none
                    objectPosition: "50% 50%",
                    opacity: "50%",
                  }}
                />
                <div className="absolute w-full bottom-0 bg-gray-900/60 p-7">
                  <h1 className="uppercase mb-5 text-xl font-bold">Diseños</h1>
                  <p className="mr-20">
                    Nuestros diseños le ayudan a mejorar sus espacios con
                    nuestros diferentes modelos en melamina para una ducra un
                    closet o una habitacion
                  </p>
                </div>
              </div>
              <div className="flex flex-row lg:w-2/3 gap-x-2">
                <div className="relative w-1/3 h-48 lg:h-[600]">
                  <Image
                    src={`/images/melamina/02.jpg`} //"/images/electricidad.jpg"
                    alt="02"
                    fill
                    sizes=""
                    //width={250}
                    //height={200}
                    style={{
                      objectFit: "cover", // cover, contain, none
                      objectPosition: "50% 50%",
                    }}
                  />
                  <h1 className="hidden absolute w-full bottom-0 bg-gray-900/80 p-5 font-bold">
                    Albañilleria
                  </h1>
                </div>
                <div className="relative w-1/3 h-48 lg:h-[600]">
                  <Image
                    src={`/images/melamina/03.jpg`} //"/images/electricidad.jpg"
                    alt="03"
                    fill
                    sizes=""
                    //width={250}
                    //height={200}
                    style={{
                      objectFit: "cover", // cover, contain, none
                      objectPosition: "50% 50%",
                      //opacity: "50%",
                    }}
                  />
                  <h1 className="hidden absolute w-full bottom-0 bg-gray-900/80 p-5 font-bold">
                    Albañilleria
                  </h1>
                </div>
                <div className="relative w-1/3 h-48 lg:h-[600]">
                  <Image
                    src={`/images/melamina/04.jpg`} //"/images/electricidad.jpg"
                    alt="04"
                    fill
                    sizes=""
                    //width={250}
                    //height={200}
                    style={{
                      objectFit: "cover", // cover, contain, none
                      objectPosition: "50% 50%",
                    }}
                  />
                  <div className="hidden absolute w-full bottom-0 bg-gray-900/80 p-5 font-bold">
                    <h1>Diseños</h1>
                    <p>
                      mejora tus espacios con nuestros diferentes modelos en
                      melamina para una ducra un closet o una habitacion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pintura" className="w-full">
        <div
          className="min-h-[800] bg-gray-100 Xbg-[#141414] text-gray-600 lg:w-6/6"
          style={{
            //backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/pintura/fondo.jpg)`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="flex lg:flex-row flex-col">
            <div className="lg:w-1/2 flex justify-end py-10">
              <div className="lg:w-[600] lg:px-0 px-5">
                <h1 className="title lg:text-4xl text-2xl mb-5">
                  Pintura general
                </h1>
                <p>
                  El servicio de pintura en Lima y zonas aledañas. <br />
                  Renovación de paredes, empastado, acabados en látex o
                  satinado.
                  <br />
                  Presupuestos por metro cuadrado y/o visita técnica.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-row">
              <div className="relative w-full h-48 lg:h-[400]">
                <Image
                  src={`/images/pintura/01.jpg`} //"/images/electricidad.jpg"
                  alt="03"
                  fill
                  sizes=""
                  style={{
                    objectFit: "cover", // cover, contain, none
                    objectPosition: "0% 50%",
                  }}
                />
                <h1 className="">hello</h1>
              </div>
              <div className="relative w-full h-48 lg:h-[400]">
                <Image
                  src={`/images/pintura/02.jpg`} //"/images/electricidad.jpg"
                  alt="03"
                  fill
                  sizes=""
                  style={{
                    objectFit: "cover", // cover, contain, none
                    objectPosition: "50% 50%",
                  }}
                />

                <div className="absolute w-full bottom-5 bg-white/50 py-2 px-5 text-gray-800">
                  <h1 className="text-lg font-semibold">Lijado</h1>
                  <h1 className="lg:text-sm text-xs">Maquina</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col">
            <div className="lg:w-1/2">
              <div className="relative w-full h-48 lg:h-[400]">
                <Image
                  src={`/images/pintura/03.jpg`} //"/images/electricidad.jpg"
                  alt="03"
                  fill
                  sizes=""
                  style={{
                    objectFit: "cover", // cover, contain, none
                    objectPosition: "50% 50%",
                  }}
                />
                <h1 className="">hello</h1>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-row">
              <div className="relative w-full h-48 lg:h-[400]">
                <Image
                  src={`/images/pintura/04.jpg`} //"/images/electricidad.jpg"
                  alt="03"
                  fill
                  sizes=""
                  style={{
                    objectFit: "cover", // cover, contain, none
                    objectPosition: "50% 50%",
                  }}
                />
                <div className="absolute w-full top-0 bg-white/50 py-2 px-5 text-gray-800">
                  <h1 className="text-lg font-semibold">Vista frontal</h1>
                  <h1 className="lg:text-sm text-xs">Paleta de colores</h1>
                </div>
              </div>
              <div className="relative w-full h-48 lg:h-[400]">
                <Image
                  src={`/images/pintura/05.jpg`} //"/images/electricidad.jpg"
                  alt="03"
                  fill
                  sizes=""
                  style={{
                    objectFit: "cover", // cover, contain, none
                    objectPosition: "50% 50%",
                  }}
                />
                <h1>hola</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rack" className="w-full">
        <div
          className="min-h-screen bg-[#141414] text-gray-300 lg:w-6/6"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/rack/fondo.jpg)`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="w-full flex flex-col items-center py-20">
            <div className="w-full lg:w-[1200] p-5 lg:p-0 flex flex-col lg:flex-row">
              <div className="lg:w-3/10 py-10 lg:pr-10">
                <div className="title lg:text-4xl text-2xl mb-10">
                  Instalacion de accesorios
                </div>
                <p className="mb-5">
                  Contamos con las herramientas y materiales adecuados para
                  garantizar nuestro servicio de instalación, conocemos y
                  prevemos las dificultades que se puedan presentar, nos
                  adecuamos a su ambiente y le ofrecemos los mejores materiales
                  para garantizar nuestro trabajo. <br />
                </p>
                <div className="grid grid-cols-12 gap-3 mb-5">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M10.5 15.25C10.307 15.2353 10.1276 15.1455 9.99998 15L6.99998 12C6.93314 11.8601 6.91133 11.7029 6.93756 11.55C6.96379 11.3971 7.03676 11.2562 7.14643 11.1465C7.2561 11.0368 7.39707 10.9638 7.54993 10.9376C7.70279 10.9114 7.86003 10.9332 7.99998 11L10.47 13.47L19 5.00004C19.1399 4.9332 19.2972 4.91139 19.45 4.93762C19.6029 4.96385 19.7439 5.03682 19.8535 5.14649C19.9632 5.25616 20.0362 5.39713 20.0624 5.54999C20.0886 5.70286 20.0668 5.86009 20 6.00004L11 15C10.8724 15.1455 10.6929 15.2353 10.5 15.25Z"
                        fill="currentColor"
                      ></path>{" "}
                      <path
                        d="M12 21C10.3915 20.9974 8.813 20.5638 7.42891 19.7443C6.04481 18.9247 4.90566 17.7492 4.12999 16.34C3.54037 15.29 3.17596 14.1287 3.05999 12.93C2.87697 11.1721 3.2156 9.39921 4.03363 7.83249C4.85167 6.26578 6.1129 4.9746 7.65999 4.12003C8.71001 3.53041 9.87134 3.166 11.07 3.05003C12.2641 2.92157 13.4719 3.03725 14.62 3.39003C14.7224 3.4105 14.8195 3.45215 14.9049 3.51232C14.9903 3.57248 15.0622 3.64983 15.116 3.73941C15.1698 3.82898 15.2043 3.92881 15.2173 4.03249C15.2302 4.13616 15.2214 4.2414 15.1913 4.34146C15.1612 4.44152 15.1105 4.53419 15.0425 4.61352C14.9745 4.69286 14.8907 4.75712 14.7965 4.80217C14.7022 4.84723 14.5995 4.87209 14.4951 4.87516C14.3907 4.87824 14.2867 4.85946 14.19 4.82003C13.2186 4.52795 12.1987 4.43275 11.19 4.54003C10.193 4.64212 9.22694 4.94485 8.34999 5.43003C7.50512 5.89613 6.75813 6.52088 6.14999 7.27003C5.52385 8.03319 5.05628 8.91361 4.77467 9.85974C4.49307 10.8059 4.40308 11.7987 4.50999 12.78C4.61208 13.777 4.91482 14.7431 5.39999 15.62C5.86609 16.4649 6.49084 17.2119 7.23999 17.82C8.00315 18.4462 8.88357 18.9137 9.8297 19.1953C10.7758 19.4769 11.7686 19.5669 12.75 19.46C13.747 19.3579 14.713 19.0552 15.59 18.57C16.4349 18.1039 17.1818 17.4792 17.79 16.73C18.4161 15.9669 18.8837 15.0864 19.1653 14.1403C19.4469 13.1942 19.5369 12.2014 19.43 11.22C19.4201 11.1169 19.4307 11.0129 19.461 10.9139C19.4914 10.8149 19.5409 10.7228 19.6069 10.643C19.6728 10.5631 19.7538 10.497 19.8453 10.4485C19.9368 10.3999 20.0369 10.3699 20.14 10.36C20.2431 10.3502 20.3471 10.3607 20.4461 10.3911C20.5451 10.4214 20.6372 10.471 20.717 10.5369C20.7969 10.6028 20.863 10.6839 20.9115 10.7753C20.9601 10.8668 20.9901 10.9669 21 11.07C21.1821 12.829 20.842 14.6026 20.0221 16.1695C19.2022 17.7363 17.9389 19.0269 16.39 19.88C15.3288 20.4938 14.1495 20.8755 12.93 21C12.62 21 12.3 21 12 21Z"
                        fill="currentColor"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span className="col-span-11 -mt-0.5">
                    Instalacion de rack para TV, monitor, bicicletas, cortinas y
                    mas
                  </span>
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M10.5 15.25C10.307 15.2353 10.1276 15.1455 9.99998 15L6.99998 12C6.93314 11.8601 6.91133 11.7029 6.93756 11.55C6.96379 11.3971 7.03676 11.2562 7.14643 11.1465C7.2561 11.0368 7.39707 10.9638 7.54993 10.9376C7.70279 10.9114 7.86003 10.9332 7.99998 11L10.47 13.47L19 5.00004C19.1399 4.9332 19.2972 4.91139 19.45 4.93762C19.6029 4.96385 19.7439 5.03682 19.8535 5.14649C19.9632 5.25616 20.0362 5.39713 20.0624 5.54999C20.0886 5.70286 20.0668 5.86009 20 6.00004L11 15C10.8724 15.1455 10.6929 15.2353 10.5 15.25Z"
                        fill="currentColor"
                      ></path>{" "}
                      <path
                        d="M12 21C10.3915 20.9974 8.813 20.5638 7.42891 19.7443C6.04481 18.9247 4.90566 17.7492 4.12999 16.34C3.54037 15.29 3.17596 14.1287 3.05999 12.93C2.87697 11.1721 3.2156 9.39921 4.03363 7.83249C4.85167 6.26578 6.1129 4.9746 7.65999 4.12003C8.71001 3.53041 9.87134 3.166 11.07 3.05003C12.2641 2.92157 13.4719 3.03725 14.62 3.39003C14.7224 3.4105 14.8195 3.45215 14.9049 3.51232C14.9903 3.57248 15.0622 3.64983 15.116 3.73941C15.1698 3.82898 15.2043 3.92881 15.2173 4.03249C15.2302 4.13616 15.2214 4.2414 15.1913 4.34146C15.1612 4.44152 15.1105 4.53419 15.0425 4.61352C14.9745 4.69286 14.8907 4.75712 14.7965 4.80217C14.7022 4.84723 14.5995 4.87209 14.4951 4.87516C14.3907 4.87824 14.2867 4.85946 14.19 4.82003C13.2186 4.52795 12.1987 4.43275 11.19 4.54003C10.193 4.64212 9.22694 4.94485 8.34999 5.43003C7.50512 5.89613 6.75813 6.52088 6.14999 7.27003C5.52385 8.03319 5.05628 8.91361 4.77467 9.85974C4.49307 10.8059 4.40308 11.7987 4.50999 12.78C4.61208 13.777 4.91482 14.7431 5.39999 15.62C5.86609 16.4649 6.49084 17.2119 7.23999 17.82C8.00315 18.4462 8.88357 18.9137 9.8297 19.1953C10.7758 19.4769 11.7686 19.5669 12.75 19.46C13.747 19.3579 14.713 19.0552 15.59 18.57C16.4349 18.1039 17.1818 17.4792 17.79 16.73C18.4161 15.9669 18.8837 15.0864 19.1653 14.1403C19.4469 13.1942 19.5369 12.2014 19.43 11.22C19.4201 11.1169 19.4307 11.0129 19.461 10.9139C19.4914 10.8149 19.5409 10.7228 19.6069 10.643C19.6728 10.5631 19.7538 10.497 19.8453 10.4485C19.9368 10.3999 20.0369 10.3699 20.14 10.36C20.2431 10.3502 20.3471 10.3607 20.4461 10.3911C20.5451 10.4214 20.6372 10.471 20.717 10.5369C20.7969 10.6028 20.863 10.6839 20.9115 10.7753C20.9601 10.8668 20.9901 10.9669 21 11.07C21.1821 12.829 20.842 14.6026 20.0221 16.1695C19.2022 17.7363 17.9389 19.0269 16.39 19.88C15.3288 20.4938 14.1495 20.8755 12.93 21C12.62 21 12.3 21 12 21Z"
                        fill="currentColor"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span className="col-span-11 -mt-0.5">
                    Servicio de reinstalación o cambio de lugar
                  </span>
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M10.5 15.25C10.307 15.2353 10.1276 15.1455 9.99998 15L6.99998 12C6.93314 11.8601 6.91133 11.7029 6.93756 11.55C6.96379 11.3971 7.03676 11.2562 7.14643 11.1465C7.2561 11.0368 7.39707 10.9638 7.54993 10.9376C7.70279 10.9114 7.86003 10.9332 7.99998 11L10.47 13.47L19 5.00004C19.1399 4.9332 19.2972 4.91139 19.45 4.93762C19.6029 4.96385 19.7439 5.03682 19.8535 5.14649C19.9632 5.25616 20.0362 5.39713 20.0624 5.54999C20.0886 5.70286 20.0668 5.86009 20 6.00004L11 15C10.8724 15.1455 10.6929 15.2353 10.5 15.25Z"
                        fill="currentColor"
                      ></path>{" "}
                      <path
                        d="M12 21C10.3915 20.9974 8.813 20.5638 7.42891 19.7443C6.04481 18.9247 4.90566 17.7492 4.12999 16.34C3.54037 15.29 3.17596 14.1287 3.05999 12.93C2.87697 11.1721 3.2156 9.39921 4.03363 7.83249C4.85167 6.26578 6.1129 4.9746 7.65999 4.12003C8.71001 3.53041 9.87134 3.166 11.07 3.05003C12.2641 2.92157 13.4719 3.03725 14.62 3.39003C14.7224 3.4105 14.8195 3.45215 14.9049 3.51232C14.9903 3.57248 15.0622 3.64983 15.116 3.73941C15.1698 3.82898 15.2043 3.92881 15.2173 4.03249C15.2302 4.13616 15.2214 4.2414 15.1913 4.34146C15.1612 4.44152 15.1105 4.53419 15.0425 4.61352C14.9745 4.69286 14.8907 4.75712 14.7965 4.80217C14.7022 4.84723 14.5995 4.87209 14.4951 4.87516C14.3907 4.87824 14.2867 4.85946 14.19 4.82003C13.2186 4.52795 12.1987 4.43275 11.19 4.54003C10.193 4.64212 9.22694 4.94485 8.34999 5.43003C7.50512 5.89613 6.75813 6.52088 6.14999 7.27003C5.52385 8.03319 5.05628 8.91361 4.77467 9.85974C4.49307 10.8059 4.40308 11.7987 4.50999 12.78C4.61208 13.777 4.91482 14.7431 5.39999 15.62C5.86609 16.4649 6.49084 17.2119 7.23999 17.82C8.00315 18.4462 8.88357 18.9137 9.8297 19.1953C10.7758 19.4769 11.7686 19.5669 12.75 19.46C13.747 19.3579 14.713 19.0552 15.59 18.57C16.4349 18.1039 17.1818 17.4792 17.79 16.73C18.4161 15.9669 18.8837 15.0864 19.1653 14.1403C19.4469 13.1942 19.5369 12.2014 19.43 11.22C19.4201 11.1169 19.4307 11.0129 19.461 10.9139C19.4914 10.8149 19.5409 10.7228 19.6069 10.643C19.6728 10.5631 19.7538 10.497 19.8453 10.4485C19.9368 10.3999 20.0369 10.3699 20.14 10.36C20.2431 10.3502 20.3471 10.3607 20.4461 10.3911C20.5451 10.4214 20.6372 10.471 20.717 10.5369C20.7969 10.6028 20.863 10.6839 20.9115 10.7753C20.9601 10.8668 20.9901 10.9669 21 11.07C21.1821 12.829 20.842 14.6026 20.0221 16.1695C19.2022 17.7363 17.9389 19.0269 16.39 19.88C15.3288 20.4938 14.1495 20.8755 12.93 21C12.62 21 12.3 21 12 21Z"
                        fill="currentColor"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span className="col-span-11 -mt-0.5">
                    Instalación en menos de una hora
                  </span>
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M10.5 15.25C10.307 15.2353 10.1276 15.1455 9.99998 15L6.99998 12C6.93314 11.8601 6.91133 11.7029 6.93756 11.55C6.96379 11.3971 7.03676 11.2562 7.14643 11.1465C7.2561 11.0368 7.39707 10.9638 7.54993 10.9376C7.70279 10.9114 7.86003 10.9332 7.99998 11L10.47 13.47L19 5.00004C19.1399 4.9332 19.2972 4.91139 19.45 4.93762C19.6029 4.96385 19.7439 5.03682 19.8535 5.14649C19.9632 5.25616 20.0362 5.39713 20.0624 5.54999C20.0886 5.70286 20.0668 5.86009 20 6.00004L11 15C10.8724 15.1455 10.6929 15.2353 10.5 15.25Z"
                        fill="currentColor"
                      ></path>{" "}
                      <path
                        d="M12 21C10.3915 20.9974 8.813 20.5638 7.42891 19.7443C6.04481 18.9247 4.90566 17.7492 4.12999 16.34C3.54037 15.29 3.17596 14.1287 3.05999 12.93C2.87697 11.1721 3.2156 9.39921 4.03363 7.83249C4.85167 6.26578 6.1129 4.9746 7.65999 4.12003C8.71001 3.53041 9.87134 3.166 11.07 3.05003C12.2641 2.92157 13.4719 3.03725 14.62 3.39003C14.7224 3.4105 14.8195 3.45215 14.9049 3.51232C14.9903 3.57248 15.0622 3.64983 15.116 3.73941C15.1698 3.82898 15.2043 3.92881 15.2173 4.03249C15.2302 4.13616 15.2214 4.2414 15.1913 4.34146C15.1612 4.44152 15.1105 4.53419 15.0425 4.61352C14.9745 4.69286 14.8907 4.75712 14.7965 4.80217C14.7022 4.84723 14.5995 4.87209 14.4951 4.87516C14.3907 4.87824 14.2867 4.85946 14.19 4.82003C13.2186 4.52795 12.1987 4.43275 11.19 4.54003C10.193 4.64212 9.22694 4.94485 8.34999 5.43003C7.50512 5.89613 6.75813 6.52088 6.14999 7.27003C5.52385 8.03319 5.05628 8.91361 4.77467 9.85974C4.49307 10.8059 4.40308 11.7987 4.50999 12.78C4.61208 13.777 4.91482 14.7431 5.39999 15.62C5.86609 16.4649 6.49084 17.2119 7.23999 17.82C8.00315 18.4462 8.88357 18.9137 9.8297 19.1953C10.7758 19.4769 11.7686 19.5669 12.75 19.46C13.747 19.3579 14.713 19.0552 15.59 18.57C16.4349 18.1039 17.1818 17.4792 17.79 16.73C18.4161 15.9669 18.8837 15.0864 19.1653 14.1403C19.4469 13.1942 19.5369 12.2014 19.43 11.22C19.4201 11.1169 19.4307 11.0129 19.461 10.9139C19.4914 10.8149 19.5409 10.7228 19.6069 10.643C19.6728 10.5631 19.7538 10.497 19.8453 10.4485C19.9368 10.3999 20.0369 10.3699 20.14 10.36C20.2431 10.3502 20.3471 10.3607 20.4461 10.3911C20.5451 10.4214 20.6372 10.471 20.717 10.5369C20.7969 10.6028 20.863 10.6839 20.9115 10.7753C20.9601 10.8668 20.9901 10.9669 21 11.07C21.1821 12.829 20.842 14.6026 20.0221 16.1695C19.2022 17.7363 17.9389 19.0269 16.39 19.88C15.3288 20.4938 14.1495 20.8755 12.93 21C12.62 21 12.3 21 12 21Z"
                        fill="currentColor"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span className="col-span-11 -mt-0.5">
                    Cobertura en todo Lima
                  </span>
                </div>
              </div>

              <div className="lg:w-7/10 font-semibold grid grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                <div>
                  <div className="relative w-full h-[200] lg:h-[300] mb-3 ">
                    <Image
                      className="rounded-2xl"
                      src={`/images/rack/tv.jpg`} //"/images/electricidad.jpg"
                      alt="01"
                      fill
                      sizes=""
                      //width={250}
                      //height={200}
                      style={{
                        objectFit: "cover", // cover, contain, none
                        objectPosition: "50% 50%",
                        //opacity: "50%",
                      }}
                    />
                  </div>
                  <h1>Rack para TV y Monitores</h1>
                </div>
                <div>
                  <div className="relative w-full h-[200] lg:h-[300] mb-3 ">
                    <Image
                      className="rounded-2xl"
                      src={`/images/rack/bicicleta.jpg`} //"/images/electricidad.jpg"
                      alt="01"
                      fill
                      sizes=""
                      //width={250}
                      //height={200}
                      style={{
                        objectFit: "cover", // cover, contain, none
                        objectPosition: "50% 50%",
                        //opacity: "50%",
                      }}
                    />
                  </div>
                  <h1>Rack para bicicleta</h1>
                </div>
                <div>
                  <div className="relative w-full h-[200] lg:h-[300] mb-3 ">
                    <Image
                      className="rounded-2xl"
                      src={`/images/rack/cuadro.jpg`} //"/images/electricidad.jpg"
                      alt="01"
                      fill
                      sizes=""
                      //width={250}
                      //height={200}
                      style={{
                        objectFit: "cover", // cover, contain, none
                        objectPosition: "50% 50%",
                        //opacity: "50%",
                      }}
                    />
                  </div>
                  <h1>Instalación de cuadros</h1>
                </div>
                <div>
                  <div className="relative w-full h-[200] lg:h-[300] mb-3 ">
                    <Image
                      className="rounded-2xl"
                      src={`/images/rack/campana.jpg`} //"/images/electricidad.jpg"
                      alt="01"
                      fill
                      sizes=""
                      //width={250}
                      //height={200}
                      style={{
                        objectFit: "cover", // cover, contain, none
                        objectPosition: "50% 50%",
                        //opacity: "50%",
                      }}
                    />
                  </div>
                  <h1>Campana extractora</h1>
                </div>
                <div>
                  <div className="relative w-full h-[200] lg:h-[300] mb-3 ">
                    <Image
                      className="rounded-2xl"
                      src={`/images/rack/espejo.jpg`} //"/images/electricidad.jpg"
                      alt="01"
                      fill
                      sizes=""
                      //width={250}
                      //height={200}
                      style={{
                        objectFit: "cover", // cover, contain, none
                        objectPosition: "50% 50%",
                        //opacity: "50%",
                      }}
                    />
                  </div>
                  <h1>Espejo para baño con luces</h1>
                </div>
                <div>
                  <div className="relative w-full h-[200] lg:h-[300] mb-3 ">
                    <Image
                      className="rounded-2xl"
                      src={`/images/rack/cortina.jpg`} //"/images/electricidad.jpg"
                      alt="01"
                      fill
                      sizes=""
                      //width={250}
                      //height={200}
                      style={{
                        objectFit: "cover", // cover, contain, none
                        objectPosition: "50% 50%",
                        //opacity: "50%",
                      }}
                    />
                  </div>
                  <h1>Cortinas y persianas</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mayolica" className="w-full">
        <div
          className="min-h-[600] bg-[#141414] text-gray-300 lg:w-6/6"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,1.0), rgba(0,0,0,0.5)), url(/images/mayolica/fondo.jpg)`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="w-full flex flex-col items-center py-20">
            <div className="w-full lg:w-[1200] p-5 lg:p-0 flex flex-col lg:flex-row">
              <div className="lg:w-3/10 py-10 lg:pr-10">
                <div className="title lg:text-4xl text-2xl mb-10">
                  Enchapado de Mayolica y Porcelanato
                </div>
                <p className="mb-5">
                  Se realiza todo tipo de enchapado: <br />
                </p>
                <ul className="list-disc list-inside">
                  <li>Cocina</li>
                  <li>Baños</li>
                  <li>Salas</li>
                  <li>Pasadisos</li>
                  <li>Azoteas</li>
                  <li>Piscinas</li>
                  <li>Fachadas</li>
                  <li>Mesadas de cocinas</li>
                  <li>Escaleras</li>
                  <li>Remodelacion</li>
                </ul>
              </div>
              <div className="lg:w-7/10 font-semibold grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
                {Array(6)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index}>
                      <div className="relative w-full h-[200] lg:h-[300] Xmb-3 ">
                        <Image
                          className="rounded-2xl"
                          src={`/images/mayolica/0${index + 1}.jpg`} //"/images/electricidad.jpg"
                          alt="01"
                          fill
                          sizes=""
                          //width={250}
                          //height={200}
                          style={{
                            objectFit: "cover", // cover, contain, none
                            objectPosition: "50% 50%",
                            //opacity: "50%",
                          }}
                        />
                      </div>
                      <h1 className="hidden">Rack para TV y Monitores</h1>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="metalica" className="w-full">
        <div
          className="min-h-screen XXbg-[#272727] bg-gray-50 text-gray-300 lg:w-6/6"
          style={{
            //backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/metales/XXXfondo.jpg)`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="w-4/5">Metalica</div>
          <div className="w-full flex items-center justify-center ">
            <div className="relative w-[500] h-[800] Xmb-3 ">
              <Image
                className="rounded-2xl"
                src={`/images/metales/fondo.jpg`} //"/images/electricidad.jpg"
                alt="01"
                fill
                sizes=""
                //width={250}
                //height={200}
                style={{
                  objectFit: "cover", // cover, contain, none
                  objectPosition: "50% 50%",
                  //opacity: "50%",
                }}
              />
            </div>
            <h1 className="hidden">Rack para TV y Monitores</h1>
          </div>
        </div>
      </section>
    </section>
  );
}
