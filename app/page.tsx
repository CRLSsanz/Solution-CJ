"use client";

import { Navbar } from "@/components/Navbar";
import { Whatsapp } from "@/components/Whatsapp";
import {
  Audiowide,
  Megrim,
  Orbitron,
  Oswald,
  Raleway,
  Wallpoet,
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

const title = Audiowide({
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
    "https://corpbps.com/wp-content/uploads/2022/12/Servicios-Generales.jpg";
  //"https://decorexpro.com/images/article/orig/2017/12/odnokomnatnaya-kvartira-v-stile-loft-primery-oformleniya-1.jpg";
  //home2 "https://joseph.cl/assets/img/heroes/hero-remodelaciones-desktop-1920.jpg";
  const fondoPanal =
    "https://raw.githubusercontent.com/CRLSsanz/trade/main/panal1.jpg";
  const fondoMelamina =
    "https://milanicocinas.com/wp-content/uploads/2024/03/tipos-de-melamina-para-cocina.jpg";
  const fondoCerrajeria =
    "https://www.cerrajerosdoshermanas.es/hero-locksmith.jpg";

  return (
    <section className="w-full flex flex-col justify-center items-center ">
      <div className="w-full fixed z-50 top-0">
        <Navbar />
      </div>

      <div className="z-50">
        <Whatsapp />
      </div>

      <section id="home" className="w-full">
        <div
          className="h-[800] bg-[#141414] text-gray-300"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url(${fondoHome})`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "70%",
          }}
        >
          <div className=" w-full h-[800] flex flex-col items-center justify-evenly font-bold p-5 lg:p-0 lg:py-5">
            <div></div>
            <div className="w-full lg:w-[1200]">
              <div
                className={` ${title.className} antialiased w-full lg:w-[800] text-3xl lg:text-6xl mb-5 lg:mb-20 uppercase `}
              >
                <h1>Bienvenido a</h1>
                <h1 className="text-4xl">
                  Soluciones Generales
                  <span className="font-bold">
                    {" "}
                    S<span className="text-teal-200">G</span>J{" "}
                  </span>
                </h1>
              </div>
              <div className="lg:w-[550] text-base lg:text-xl pr-10">
                <span className="">Nos dedicamos a ofrecer </span>
                soluciones internas para su negocio o vivienda,
                <span className="font-bold text-teal-200">
                  {" "}
                  nuestro equipo de profesionales
                </span>{" "}
                está capacitado para brindar servicios de alta calidad.
              </div>
            </div>

            <div className="w-full lg:w-[1200] flex lg:flex-row flex-col text-white">
              <div className="mr-3">
                <Link
                  href="#camaras"
                  className="px-12 py-4 bg-teal-400/50 hover:bg-gray-100 hover:text-teal-500 Xtracking-widest"
                >
                  Llámenos: <span className="fam-number">939 065 454</span>
                </Link>
              </div>

              <div className="lg:mt-0 mt-10">
                <Link
                  href="#camaras"
                  className="px-14 py-4 bg-teal-400/50 hover:bg-gray-100 hover:text-teal-500"
                >
                  Escribir por Whatsapp
                </Link>
              </div>
            </div>

            <div className="hidden w-full lg:w-[1200] text-gray-400/80">
              <div className="lg:w-[800] w-full text-sm lg:text-xl bg-gray-800/60 p-10 flex lg:flex-row flex-col items-center">
                <div className="hidden ">
                  <span>Experiencia</span> <br />
                  <span className="text-5xl">23</span>
                </div>

                <div className="w-full flex flex-row gap-2 items-center justify-center lg:mb-0 mb-5">
                  <div>
                    <svg
                      width="25px"
                      height="35px"
                      viewBox="0 0 48 48"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill=""
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>ic_fluent_person_48_regular</title>{" "}
                        <desc>Created with Sketch.</desc>{" "}
                        <g
                          id="🔍-System-Icons"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          {" "}
                          <g
                            id="ic_fluent_person_48_regular"
                            fill="currentColor"
                            fillRule="nonzero"
                          >
                            {" "}
                            <path
                              d="M35.7502,28 C38.0276853,28 39.8876578,29.7909151 39.9950978,32.0427546 L40,32.2487 L40,33 C40,36.7555 38.0583,39.5669 35.0798,41.3802 C32.1509,43.1633 28.2139,44 24,44 C19.7861,44 15.8491,43.1633 12.9202,41.3802 C10.0319285,39.6218485 8.11862909,36.9249713 8.00532378,33.3388068 L8,33 L8,32.2489 C8,29.9703471 9.79294995,28.1122272 12.0440313,28.0048972 L12.2499,28 L35.7502,28 Z M35.7502,30.5 L12.2499,30.5 C11.331345,30.5 10.5787597,31.2066575 10.5057976,32.1054618 L10.5,32.2489 L10.5,33 C10.5,35.7444 11.8602,37.8081 14.2202,39.2448 C16.6297,40.7117 20.0677,41.5 24,41.5 C27.9323,41.5 31.3703,40.7117 33.7798,39.2448 C36.0555143,37.8594107 37.4015676,35.8910074 37.4948116,33.2914406 L37.5,33 L37.5,32.2488 C37.5,31.331195 36.7934328,30.5787475 35.8937801,30.5057968 L35.7502,30.5 Z M24,4 C29.5228,4 34,8.47715 34,14 C34,19.5228 29.5228,24 24,24 C18.4772,24 14,19.5228 14,14 C14,8.47715 18.4772,4 24,4 Z M24,6.5 C19.8579,6.5 16.5,9.85786 16.5,14 C16.5,18.1421 19.8579,21.5 24,21.5 C28.1421,21.5 31.5,18.1421 31.5,14 C31.5,9.85786 28.1421,6.5 24,6.5 Z"
                              id="🎨-Color"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                  <span className="w-20 text-center text-5xl fam-number">
                    127
                  </span>
                  <span>Clientes</span> <br />
                </div>

                <div className="w-full flex flex-row gap-2 items-center justify-center">
                  <div>
                    <svg
                      width="25px"
                      height="25px"
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
                        <path
                          d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M20.8901 22.75C20.4801 22.75 20.1401 22.41 20.1401 22V13C20.1401 11.76 18.9801 10.75 17.5601 10.75H6.44011C5.02011 10.75 3.86011 11.76 3.86011 13V22C3.86011 22.41 3.52011 22.75 3.11011 22.75C2.70011 22.75 2.36011 22.41 2.36011 22V13C2.36011 10.93 4.19011 9.25 6.44011 9.25H17.5501C19.8001 9.25 21.6301 10.93 21.6301 13V22C21.6401 22.41 21.3001 22.75 20.8901 22.75Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.4401 10.75C18.0301 10.75 17.6901 10.41 17.6901 10V7.17C17.6901 6.39 16.9401 5.75 16.0301 5.75H7.98006C7.06006 5.75 6.32006 6.39 6.32006 7.17V10C6.32006 10.41 5.98006 10.75 5.57006 10.75C5.16006 10.75 4.81006 10.41 4.81006 10V7.17C4.81006 5.56 6.23006 4.25 7.97006 4.25H16.0201C17.7601 4.25 19.1801 5.56 19.1801 7.17V10C19.1901 10.41 18.8501 10.75 18.4401 10.75Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M17.33 17.75C16.17 17.75 15.23 16.81 15.23 15.65V15.34C15.23 15.01 14.96 14.74 14.63 14.74C14.3 14.74 14.03 15.01 14.03 15.34V15.65C14.03 16.81 13.09 17.75 11.93 17.75C10.77 17.75 9.82995 16.81 9.82995 15.65V15.34C9.82995 15.01 9.55995 14.74 9.22995 14.74C8.89995 14.74 8.62995 15.01 8.62995 15.34V15.65C8.62995 16.81 7.68995 17.75 6.52995 17.75C5.36995 17.75 4.42995 16.81 4.42995 15.65V15.32C4.42995 15 4.16995 14.73 3.83995 14.72H3.46995C3.05995 14.71 2.71995 14.37 2.72995 13.96C2.73995 13.55 3.06995 13.22 3.47995 13.22H3.48995H3.85995C4.99995 13.24 5.92995 14.18 5.92995 15.32V15.65C5.92995 15.98 6.19995 16.25 6.52995 16.25C6.85995 16.25 7.12995 15.98 7.12995 15.65V15.34C7.12995 14.18 8.06995 13.24 9.22995 13.24C10.39 13.24 11.33 14.18 11.33 15.34V15.65C11.33 15.98 11.6 16.25 11.93 16.25C12.26 16.25 12.53 15.98 12.53 15.65V15.34C12.53 14.18 13.47 13.24 14.63 13.24C15.79 13.24 16.73 14.18 16.73 15.34V15.65C16.73 15.98 17 16.25 17.33 16.25C17.66 16.25 17.93 15.98 17.93 15.65V15.34C17.93 14.18 18.87 13.24 20.03 13.24H20.48C20.89 13.24 21.23 13.58 21.23 13.99C21.23 14.4 20.89 14.74 20.48 14.74H20.03C19.7 14.74 19.43 15.01 19.43 15.34V15.65C19.43 16.81 18.49 17.75 17.33 17.75Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V3C7.25 2.59 7.59 2.25 8 2.25C8.41 2.25 8.75 2.59 8.75 3V5C8.75 5.41 8.41 5.75 8 5.75Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V3C15.25 2.59 15.59 2.25 16 2.25C16.41 2.25 16.75 2.59 16.75 3V5C16.75 5.41 16.41 5.75 16 5.75Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M12 5.75C11.59 5.75 11.25 5.41 11.25 5V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V5C12.75 5.41 12.41 5.75 12 5.75Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <span className="w-16 text-center text-5xl fam-number">
                    12
                  </span>
                  <span className="lg:min-w-48 w-20">Años Experiencia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="camaras" className="w-full">
        <div
          className="Xmin-h-screen bg-[#141414] text-gray-100 w-full"
          style={{
            //backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/camaras/fondo.jpg')`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="w-full flex flex-col items-center py-20">
            <div className="w-full lg:w-[1200] lg:p-0 p-5">
              <h2 className="title text-4xl uppercase mb-5">
                Instalacion de camaras de vigilancia
              </h2>
              <ul className="mb-10">
                <li className="flex flex-row gap-x-2 mb-3">
                  <svg
                    className="w-8 mt-1"
                    width="16px"
                    height="16px"
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.22222 2H19.7778C21 2 22 3 22 4.22222V19.7778C22 21 21 22 19.7778 22H4.22222C3 22 2 21 2 19.7778V4.22222C2 3 3 2 4.22222 2ZM4 20H20V4H4V20Z"
                        fill="currentColor"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span>DVR (Equipo de gravacion, incluye disco duro)</span>
                </li>
                <li className="flex flex-row justify-items-start gap-x-2 mb-3">
                  <svg
                    className="w-8 mt-1"
                    width="16px"
                    height="16px"
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.22222 2H19.7778C21 2 22 3 22 4.22222V19.7778C22 21 21 22 19.7778 22H4.22222C3 22 2 21 2 19.7778V4.22222C2 3 3 2 4.22222 2ZM4 20H20V4H4V20Z"
                        fill="currentColor"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span className="w-full">
                    <span className="fam-number">2 - 8 </span> Cámaras de
                    interior y exterior con visión nocturna, resistente al agua.
                  </span>
                </li>
                <li className="flex flex-row gap-x-2 mb-3">
                  <svg
                    className="w-8 mt-1"
                    width="16px"
                    height="16px"
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.22222 2H19.7778C21 2 22 3 22 4.22222V19.7778C22 21 21 22 19.7778 22H4.22222C3 22 2 21 2 19.7778V4.22222C2 3 3 2 4.22222 2ZM4 20H20V4H4V20Z"
                        fill="currentColor"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span className="w-full">Instalación y/o mantenimiento</span>
                </li>
                <li className="flex flex-row gap-x-2 mb-3">
                  <svg
                    className="w-8 mt-1"
                    width="16px"
                    height="16px"
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.22222 2H19.7778C21 2 22 3 22 4.22222V19.7778C22 21 21 22 19.7778 22H4.22222C3 22 2 21 2 19.7778V4.22222C2 3 3 2 4.22222 2ZM4 20H20V4H4V20Z"
                        fill="currentColor"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span className="w-full">
                    Configuración de App móvil para ver su casa o negocio en
                    tiempo real.
                  </span>
                </li>
                <li className="flex flex-row gap-x-2 mb-3">
                  <svg
                    className="w-8 mt-1"
                    width="16px"
                    height="16px"
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.22222 2H19.7778C21 2 22 3 22 4.22222V19.7778C22 21 21 22 19.7778 22H4.22222C3 22 2 21 2 19.7778V4.22222C2 3 3 2 4.22222 2ZM4 20H20V4H4V20Z"
                        fill="currentColor"
                      ></path>{" "}
                    </g>
                  </svg>

                  <span className="w-full">Soporte Post-Venta</span>
                </li>
                <li className="flex flex-row gap-x-2 mb-3">
                  <svg
                    className="w-8 mt-1"
                    width="16px"
                    height="16px"
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.22222 2H19.7778C21 2 22 3 22 4.22222V19.7778C22 21 21 22 19.7778 22H4.22222C3 22 2 21 2 19.7778V4.22222C2 3 3 2 4.22222 2ZM4 20H20V4H4V20Z"
                        fill="currentColor"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span className="w-full">Garantía y confiabilidad.</span>
                </li>
              </ul>
              <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
                <div className="relative w-full h-48 lg:h-[400]">
                  <Image
                    src={`/images/camaras/01.jpg`} //"/images/electricidad.jpg"
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
                  <h1 className="hidden absolute w-full bottom-0 bg-gray-900/80 p-5 font-bold">
                    Camara
                  </h1>
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
                      objectPosition: "50% 50%",
                    }}
                  />
                  <h1 className="hidden absolute w-full bottom-0 bg-gray-900/80 p-5 font-bold">
                    Camara
                  </h1>
                </div>

                <div className="relative w-full h-48 lg:h-[400]">
                  <Image
                    src={`/images/camaras/02.jpg`} //"/images/electricidad.jpg"
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
            </div>
          </div>
        </div>
      </section>

      <section id="cerrajeria" className="w-full">
        <div
          className="min-h-screen bg-[#141414] text-gray-300 w-full"
          style={{
            //backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/cerrajeria/fondo.jpg')`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="w-full flex flex-col items-center py-20">
            <div className="w-full lg:w-[1200] lg:p-0 p-5">
              <h3 className="title text-4xl uppercase mb-5">Cerrajeria</h3>
              <div className="flex lg:flex-row flex-col">
                <div className="lg:w-2/3 relative w-full h-48 lg:h-[400] mb-10">
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
                <div className="lg:w-1/3 p-10">
                  <h1 className="subtitle uppercase font-bold mb-5">
                    Nuestros Servicios
                  </h1>
                  <p className="mb-10 leading-8">
                    - Instalación de cerraduras <br /> - Extraccion de llaves
                    partidas <br />
                    - Ajustes y nivelacion de puertas <br />- Instalacion de
                    cilindros de gaveta <br /> y mucho mas
                  </p>
                </div>
              </div>

              <div className="flex lg:flex-row-reverse flex-col">
                <div className="lg:w-2/3 relative w-full h-60 lg:h-[500]">
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
                  <h1 className="hidden absolute w-full bottom-0 bg-gray-900/80 p-5 font-bold">
                    Camara
                  </h1>
                </div>

                <div className="lg:w-1/3 w-full flex items-center py-5">
                  <div className="relative w-[400] h-60 lg:h-[400] lg:mt-0 -mt-12">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="domotica" className="w-full">
        <div
          className="min-h-screen bg-[#141414] text-gray-300"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/domotica/fondo.jpg')`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "60%",
          }}
        >
          <div className="w-full flex flex-col items-center py-20">
            <div className="w-full lg:w-[1200] lg:p-0 p-5">
              <div className="w-full lg:w-[500] bg-black/80 p-10">
                <h2 className="title text-4xl uppercase mb-5">Domótica</h2>
                <p className="mb-10 space-y-3">
                  Hogar inteligente sin complicaciones. <br />
                  Instalación y recomendaciones. <br />
                  Ahorro Energetico. <br />
                </p>
                <div className="relative w-full col-span-2 h-48 lg:h-[300] mb-10">
                  <Image
                    src={`/images/domotica/02.jpg`} //"/images/electricidad.jpg"
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

                <p className="space-y-3 mb-32">
                  Automatiza tu hogar para mayor confort. <br />
                  Seguridad y eficiencia energética. <br />
                </p>

                <div className="w-full lg:w-[1440]">
                  <Link
                    href="/"
                    className="px-10 py-3 border-b border border-gray-200 bg-gray-800/50 uppercase text-xs tracking-widest"
                  >
                    Solicitar presupuesto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="drywall" className="w-full">
        <div
          className="hidden lg:block min-h-[800] bg-[#141414] text-gray-300"
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
                <div className="py-24 pl-24">
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
                  <p className="mb-20 text-lg text-justify">
                    No esperes mas para transformar tus espacios. Descubre el
                    potencial del Drywall con SGJ Soluciones Generales
                  </p>

                  <p className="font-semibold text-xl uppercase mb-5">
                    Contactenos
                  </p>
                  <p className="fam-number font-extrabold mb-20">
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
                <h2 className="title text-4xl mb-10 tracking-widest">
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
                <div className="mb-10 subtitle">Instalación, mantenimiento y reparación </div>
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
          className="min-h-screen bg-[#141414] text-gray-300 w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/gasfiteria/fondo.jpg')`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="XXw-80">Gasfiteria</div>
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
            <div className="w-full lg:w-[1440] text-3xl text-center mb-5">
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
                      opacity: "50%",
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
          className="min-h-screen bg-[#141414] text-gray-300 lg:w-6/6"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/pintura/fondo.jpg)`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="w-4/5">Pintura</div>
        </div>
      </section>

      <section id="mayolica" className="w-full">
        <div
          className="min-h-screen bg-[#141414] text-gray-300 lg:w-4/6"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/mayolica/fondo.jpg)`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="w-4/5">Mayolica</div>
        </div>
      </section>

      <section id="metalica" className="w-full">
        <div
          className="min-h-screen bg-[#272727] text-gray-300 lg:w-6/6"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/metales/fondo.jpg)`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="w-4/5">Metalica</div>
        </div>
      </section>

      <section id="general" className="w-full">
        <div
          className="min-h-screen bg-[#141414] text-gray-300 lg:w-6/6"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/rack/fondo.jpg)`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="w-4/5">Rack para tv</div>
        </div>
      </section>
    </section>
  );
}
