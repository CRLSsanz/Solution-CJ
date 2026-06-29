import { Navbar } from "@/components/Navbar";
import { Oswald, Raleway } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
//bg-cover bg-fixed bg-[0%] bg-[url('/images/piggy-mobile.jpg')] min-h-screen

const oswald = Oswald({
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
      <div className="hidden w-full h-[800] bg-cover Xbg-fixed bg-[50%] bg-[url('https://ceicid.es/wp-content/uploads/2023/07/banner-curso-mantenimiento-23.jpg')]">
        <div className="w-full flex justify-center items-center h-full bg-black/50 ">
          <div className="md:w-[1024] w-full">
            <div className="md:w-[500] w-full px-5 md:px-0 font-bold -mt-36">
              <div className="flex justify-end">
                <span className="px-4 h-10 border-t-8 border-r-8 border-amber-400"></span>
              </div>
              <div className="text-3xl md:text-5xl mb-10 md:mb-16 tracking-wider ">
                Reformas de <span className="text-amber-400">viviendas </span> y{" "}
                <br />
                locales
              </div>

              <span className="bg-purple-700 text-xs md:text-sm py-1 px-2 uppercase md:tracking-wider">
                Asesoramiento profesional sin compromiso
              </span>
              <h1 className="my-3 text-5xl font-bold fam-number">
                939 065 454
              </h1>
              <h1 className="mb-16">Llamanos o escribe por WhatsApp</h1>
              <div className="mb-10">
                <span className="py-5 px-16 bg-gray-800 text-amber-400 uppercase">
                  Contacto
                </span>
              </div>
              <span className="px-4 py-2 border-b-8 border-l-8 border-amber-400 md:-ml-10"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden w-full md:w-[1024] -mt-20 Xgrid grid-cols-1 md:grid-cols-3 bg-zinc-50 text-gray-500 mb-20">
        <div className="md:hidden py-5 font-semibold uppercase">
          Nuestros Servicios
        </div>
        {card1.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative w-full bg-gray-200 h-80">
              <Image
                src={`/images/${item.ima}`} //"/images/electricidad.jpg"
                alt="Amigurumi"
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
            <div
              className={` flex flex-col justify-between md:h-80 p-5 md:p-10 ${item.id === "02" ? "bg-amber-400 text-gray-600" : "bg-gray-900 text-gray-200"}  `}
            >
              <div className="mb-5">
                <h1 className="uppercase font-bold mb-5">{item.title}</h1>
                <h1>{item.text}</h1>
              </div>

              <Link
                href={`/${item.link2}`}
                className={` ${item.id === "02" ? "text-gray-600 " : "text-amber-400"}`}
              >
                {item.link}
                <span className="ml-3"> {` >`} </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:w-[1024] w-full px-5 mb-20">
        <div className="text-center mb-20">
          <h1 className="text-purple-600 font-bold text-2xl md:text-3xl mb-5">
            ¿Por qué elegir{" "}
            <span className="text-amber-400">Servicios Generales C&J </span>
            para hacer la reforma de tu vivienda o local?
          </h1>
          <h1 className="text-purple-600 font-semibold text-xs md:text-base">
            Contamos con un equipo de profesionales de diferentes ramas de
            contrastada experiencia.
          </h1>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 bg-zinc-50 text-gray-700 text-center">
          <div className="">
            <h1>
              <svg
                className="m-auto"
                width="64px"
                height="64px"
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
                    d="M11.3103 1.77586C11.6966 1.40805 12.3034 1.40805 12.6897 1.77586L20.6897 9.39491L23.1897 11.7759C23.5896 12.1567 23.605 12.7897 23.2241 13.1897C22.8433 13.5896 22.2103 13.605 21.8103 13.2241L21 12.4524V20C21 21.1046 20.1046 22 19 22H14H10H5C3.89543 22 3 21.1046 3 20V12.4524L2.18966 13.2241C1.78972 13.605 1.15675 13.5896 0.775862 13.1897C0.394976 12.7897 0.410414 12.1567 0.810345 11.7759L3.31034 9.39491L11.3103 1.77586ZM5 10.5476V20H9V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V20H19V10.5476L12 3.88095L5 10.5476ZM13 20V15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V20H13Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
            </h1>
            <h1 className="font-bold uppercase my-3">Viviendas</h1>
            <h1>
              Estamos dispuestos a ayudarlo en las labores de mantenimiento de
              su vivienda con reformas integrales.
            </h1>
          </div>

          <div className="">
            <h1>
              <svg
                className="m-auto"
                width="64px"
                height="64px"
                viewBox="0 0 24.00 24.00"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                stroke="#000000"
                strokeWidth="0.00024000000000000003"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M0 0h24v24H0z" fill="none"></path>{" "}
                    <path d="M22 21H2v-2h1V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5h2v10h1v2zm-5-2h2v-8h-6v8h2v-6h2v6zm0-10V5H5v14h6V9h6zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm0-8h2v2H7V7z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </h1>
            <h1 className="font-bold uppercase my-3">Locales comerciales</h1>
            <h1>
              Especialistas en transformacion y reforma de locales para uso
              comercial o casas rurales.
            </h1>
          </div>

          <div className="">
            <h1>
              <svg
                className="m-auto"
                width="64px"
                height="64px"
                viewBox="-3.2 -3.2 38.40 38.40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.192"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g clipPath="url(#clip0_901_2595)">
                    {" "}
                    <path
                      d="M1 31C1 31 1.687 27.379 2 26C2.208 25.083 3 23 11 22C11 22 12 25 16 25C20 25 21 22 21 22C29 23 29.792 25.021 30 26C30.294 27.384 31 31 31 31M10 11C10 14.866 13 18 16 18C19 18 22 14.866 22 11M8 30V31M24 30V31M6 8H23C23 4.134 19.866 1 16 1C12.134 1 9 4.134 9 8"
                      stroke="#000000"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <clipPath id="clip0_901_2595">
                      {" "}
                      <rect width="32" height="32" fill="white"></rect>{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                </g>
              </svg>
            </h1>
            <h1 className="font-bold uppercase my-3">Profesionales</h1>
            <h1 className="hidden">
              Reforma, reparacion y mantenimiento de zonas comunes, escaleras,
              terrazas o fachadas.
            </h1>
            <h1>
              Para acometer las reformas contamos con expertos en fontaneria,
              carpinteria o electricidad.
            </h1>
          </div>
        </div>
      </div>
      <div className="hidden w-full md:w-[1024] Xgrid grid-cols-1 md:grid-cols-3 bg-zinc-50 text-gray-500 mb-20">
        {card2.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative w-full bg-gray-200 h-80">
              <Image
                src={`/images/${item.ima}`} //"/images/electricidad.jpg"
                alt="Amigurumi"
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
            <div
              className={` flex flex-col justify-between md:h-80 p-5 md:p-10 ${item.id === "02" ? "bg-amber-400 text-gray-600" : "bg-gray-900 text-gray-200"}  `}
            >
              <div className="mb-5">
                <span className="p-2 bg-gray-200 uppercase text-gray-600 font-bold">
                  {item.title}
                </span>
                <h1 className="hidden md:block font-bold my-5">
                  {item.subtitle}
                </h1>
                <h1 className="pt-5 md:pt-0">{item.text}</h1>
              </div>

              <Link
                href={`/${item.link2}`}
                className={` ${item.id === "02" ? "text-gray-600 " : "text-amber-400"}`}
              >
                {item.link}
                <span className="ml-3"> {` >`} </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full fixed z-50 top-0">
        <Navbar />
      </div>

      <section id="home" className="w-full">
        <div
          className="h-screen bg-[#141414] text-gray-300"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url(${fondoHome})`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "70%",
          }}
        >
          <div className="w-full h-screen flex flex-col items-center justify-between font-bold p-5 lg:p-0 lg:py-5">
            <div className="w-full lg:w-[1440] flex flex-row justify-between">
              <div className="hidden lg:flex flex-row gap-4 uppercase text-sm">
                <div>servicios</div>
                <div>nosotros</div>
                <div>proyectos</div>
                <div>contacto</div>
              </div>
              <div
                className={` ${oswald.className} antialiased w-full flex justify-center font-extrabold tracking-widest`}
              >
                JOTA
              </div>
            </div>

            <div className="w-full lg:w-[1440] ">
              <div className="lg:w-[600] text-3xl lg:text-6xl mb-5 lg:mb-20 uppercase text-yellow-600">
                Soluciones Generales
              </div>
              <div className="lg:w-[600] text-base lg:text-3xl pr-10">
                <span className="">Nos dedicamos a ofrecer</span> <br />
                soluciones internas para su negocio o vivienda,
                <span className="font-bold text-teal-300">
                  {" "}
                  nuestro equipo de profesionales
                </span>{" "}
                esta capacitado para brindar servicios de alta calidad.
              </div>
            </div>

            <div className="w-full lg:w-[1440] ">
              <Link
                href="/"
                className="px-10 py-3 border-b border border-gray-200 bg-gray-800/50 uppercase text-xs tracking-widest"
              >
                Contactanos
              </Link>
            </div>

            <div className="w-full lg:w-[1440] text-gray-500">
              <div className="lg:w-[600] w-full text-sm lg:text-xl bg-gray-800/90 p-10 flex lg:flex-row flex-col">
                <div className="hidden ">
                  <span>Experiencia</span> <br />
                  <span className="text-5xl">23</span>
                </div>

                <div className="w-full flex flex-row gap-2 items-center justify-center mb-5">
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
                  <span className="w-20 text-center text-5xl fam-number">127</span>
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
                  <span className="w-16 text-center text-5xl fam-number">12</span>
                  <span>Años <br />Experiencia</span> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="camaras" className="w-full">
        <div
          className="min-h-screen bg-[#141414] text-gray-300 w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/camaras/fondo.jpg')`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="p-5">
            <div>
              <h2 className="uppercase mb-5">
                Instalacion de camaras de vigilancia
              </h2>
              <ul>
                <li className="flex flex-row gap-x-2">
                  <svg
                    className="w-8 mt-1.5"
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
                <li className="flex flex-row justify-items-start gap-x-2">
                  <svg
                    className="w-8 mt-1.5"
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
                    2 a 8 Cámaras de interior y exterior con visión nocturna,
                    resistente al agua.
                  </span>
                </li>
                <li className="flex flex-row gap-x-2">
                  <svg
                    className="w-8 mt-1.5"
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
                  <span className="w-full">Instalación</span>
                </li>
                <li className="flex flex-row gap-x-2">
                  <svg
                    className="w-8 mt-1.5"
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
                <li className="flex flex-row gap-x-2">
                  <svg
                    className="w-8 mt-1.5"
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
                <li className="flex flex-row gap-x-2">
                  <svg
                    className="w-8 mt-1.5"
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
            </div>
          </div>
        </div>
      </section>

      <section id="cerrajeria" className="w-full">
        <div
          className="min-h-screen bg-[#141414] text-gray-300 w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/cerrajeria/fondo.jpg')`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="XXw-80">camaras</div>
        </div>
      </section>

      <section id="domotica" className="w-full">
        <div
          className="min-h-screen bg-[#141414] text-gray-300"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/domotica/fondo.jpg')`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="">domotica</div>
        </div>
      </section>
      <section id="drywall" className="w-full">
        <div
          className="min-h-screen bg-[#141414] text-gray-300"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/drywall/fondo.jpg')`,
            backgroundSize: "cover",
            //backgroundAttachment: "fixed",
            backgroundPosition: "50%",
          }}
        >
          <div className="">Drywall</div>
        </div>
      </section>

      <section
        id="electricidad"
        className={` ${oswald.className} antialiased w-full`}
      >
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
          <div className="w-full flex lg:flex-row flex-col">
            <div className="w-full lg:w-1/2 flex flex-col Xitems-center px-5 py-10 lg:py-20">
              <div className="text-4xl mb-10 lg:mb-20 lg:ml-20 tracking-widest">
                Electricidad
              </div>
              <div className="lg:w-[400] mb-10 tracking-wider">
                Brindamos servicios de electricidad desde instalaciones
                domiciliarias hasta proyectos comerciales. Incorporamos la
                tecnología en tu residencia mediante la domótica.
              </div>
              <div className="relative w-full lg:w-96 px-5 h-80 lg:h-96">
                <Image
                  src="/images/electri4.jpg" //"/images/electricidad.jpg"
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
