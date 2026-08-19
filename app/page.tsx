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
    <section className="w-full flex flex-col justify-center items-center bg-[#141414]">
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
                className={` ${title.className} antialiased w-full lg:w-[800] mb-5 lg:mb-20 uppercase `}
              >
                <h1 className="text-2xl lg:text-6xl">Bienvenido a</h1>
                <h1 className="text-3xl lg:text-4xl mt-2">
                  <span className="font-bold">
                    {" "}
                    S<span className="text-teal-200">G</span>J{" "}
                  </span>
                  Soluciones Generales
                </h1>
              </div>
              <div className="lg:w-[550] text-justify text-base lg:text-xl pr-10">
                <span className="">Nos dedicamos a ofrecer </span>
                soluciones internas para su negocio o vivienda,
                <span className="font-bold text-teal-200">
                  {" "}
                  nuestro equipo de profesionales
                </span>{" "}
                está capacitado para brindar servicios de alta calidad.
              </div>
            </div>

            <div className="w-full lg:w-[1200]  flex lg:flex-row flex-col gap-3 text-white text-center">
              <Link
                href="tel:+51939065454"
                className="px-10 py-4 bg-teal-500/90 hover:bg-gray-100 hover:text-teal-500 Xtracking-widest"
              >
                Llámenos: <span className="fam-number"> 939 065 454</span>
              </Link>

              <Link
                href="https://api.whatsapp.com/send?phone=+51939065454&text=Hola, estoy interesado en sus servicios."
                className="px-10 py-4 bg-teal-500/90 hover:bg-gray-100 hover:text-teal-500"
              >
                Escribir por Whatsapp
              </Link>
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
              <h2 className="title lg:text-4xl text-2xl uppercase mb-5">
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

                <div className="relative w-full h-48 lg:h-[400] lg:col-span-1 col-span-2">
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
              <h3 className="title lg:text-4xl text-2xl uppercase mb-5">
                Cerrajeria
              </h3>
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
                <div className="lg:w-1/3 lg:p-10 p-5">
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

              <div className="flex lg:flex-row-reverse flex-col gap-5">
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

                <div className="lg:w-1/3 w-full flex items-center">
                  <div className="relative w-[400] h-60 lg:h-[400] ">
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
            backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.1)), url('/images/domotica/fondo.jpg')`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "60%",
          }}
        >
          <div className="w-full flex flex-col items-center py-20">
            <div className="w-full lg:w-[1200] lg:p-0 p-5">
              <div className="w-full lg:w-[500] bg-black/70 p-10">
                <h2 className="title lg:text-4xl text-2xl uppercase mb-5">
                  Domótica
                </h2>
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
          className="Xmin-h-screen bg-gray-100 text-gray-600 Xbg-[#141414] w-full rounded-4xl"
          style={{
            //backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/gasfiteria/fondo.jpg')`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="w-full flex flex-col items-center py-20">
            <div className="w-full lg:w-[1200] p-5 lg:p-0 flex flex-col lg:flex-row">
              <div className="lg:w-1/4 mb-10">
                <h1 className="title lg:text-4xl text-2xl mb-5">Gasfiteria</h1>
                <p>
                  Reparación de fugas <br />
                  Limpieza y destape de tuberías, lavaderos, inodoros y cajas de
                  registro. <br />
                  Instalaciones sanitarias: Montaje de griferías, duchas,
                  sanitarios, termas y tanques elevados. <br />
                  Instalación o mantenimiento de bomba rotoplas y trampas.
                </p>
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
              <div className="lg:w-1/4 py-10">
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

              <div className="lg:w-3/4 grid lg:grid-cols-3 gap-5 py-10">
                <div>1</div>
                <div>
                  <div className="relative w-full h-[300] mb-4 ">
                    <Image
                      className="rounded-4xl"
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
                  <h1>hello</h1>
                </div>

                <div>
                  <div className="relative w-full h-[300] mb-4 ">
                    <Image
                      className="rounded-4xl"
                      src={`/images/rack/monitor.jpg`} //"/images/electricidad.jpg"
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
                  <h1>hello</h1>
                </div>

                <div>
                  <div className="relative w-full h-[300] mb-4 ">
                    <Image
                      className="rounded-4xl"
                      src={`/images/rack/monitor.jpg`} //"/images/electricidad.jpg"
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
                  <h1>hello</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mayolica" className="w-full">
        <div
          className="min-h-[600] bg-[#141414] text-gray-300 lg:w-4/6"
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
    </section>
  );
}
