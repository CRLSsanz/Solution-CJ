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

            <div className="w-full lg:w-[1440] text-yellow-500">
              <div className="lg:w-[600]  text-sm lg:text-xl bg-gray-800/50 p-10 mb-5 flex lg:flex-row flex-col">
                <div className="hidden ">
                  <span>Experiencia</span> <br />
                  <span className="text-5xl">23</span>
                </div>

                <div className="w-full flex flex-row gap-x-5 justify-between items-center ">
                  <div>
                    <svg
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      className="bi bi-person"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <span className="text-5xl fam-number">23</span>
                  <span>Clientes</span> <br />
                </div>

                <div className="hidden ">
                  <span>Proyectos</span> <br />
                  <span className="text-5xl">13</span>
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
