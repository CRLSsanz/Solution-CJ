"use client";
import { Montserrat_Alternates, Oswald } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

/*const bag3 = "https://github.com/CRLSsanz/trade/blob/main/panal1.jpg?raw=true";
const bag0 =
  "https://r4.wallpaperflare.com/wallpaper/583/42/546/blue-lines-digital-art-abstract-wallpaper-29e0087dd13a4dcb6657089fd0c1869d.jpg"; */
const f1 =
  "https://r4.wallpaperflare.com/wallpaper/510/682/484/abstract-hexagon-wallpaper-38f67d08c0007c68604cf15ea8c2c44a.jpg";
//"https://r4.wallpaperflare.com/wallpaper/681/554/339/abstract-planet-space-purple-wallpaper-6970a84df14a9dbb16f7683f30a186ad.jpg";
//"https://r4.wallpaperflare.com/wallpaper/580/191/825/space-planet-abstract-space-art-wallpaper-8b76cc7df351ff090594eba99d9c7c80.jpg";
//"https://r4.wallpaperflare.com/wallpaper/853/586/450/universe-abstract-cube-gradient-wallpaper-6920483dc13a7d2b3657880f4071d63d.jpg";
//"https://c0.wallpaperflare.com/path/91/628/867/adolescent-beautiful-brunette-buy-2475da7e0a113381084dbb5becb8962a.jpg";

const oswald = Oswald({
  weight: ["400"],
  style: "normal",
  variable: "--font-Montserrat",
  subsets: ["latin"],
});

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const list = [
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
      title: "camara de vigilancia",
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
    {
      id: "04",
      title: "Pintura",
      subtitle: "Interior y Exterior",
      text: "Ofrecemos soluciones personalizadas para cualquier necesidad de pintura para mejorar la apariencia de tu vivienda o darle un nuevo look a tu oficina.",
      link: "+ info servicio pintura",
      link2: "pintura",
      ima: "pintura.jpg",
    },
    {
      id: "05",
      title: "instalacion de ract tv ",
      subtitle: "Instalacion de Tanques",
      text: "Servicio de gasfiteria en general ofrecemos inspección, reparación e instalación de sanitarios y tuberias en cualquier ambiente de su vivienda o negocio.",
      link: "+ info servicio gasfiteria",
      link2: "gasfiteria",
      ima: "gasfiteria.jpg",
    },
    {
      id: "06",
      title: "Vigilancia",
      subtitle: "Camaras de Seguridad",
      text: "Cuida lo que mas quieres desde cualquier lugar remoto con un sistema profesional de video vigilancia de alta calidad para tu hogar o negocio.",
      link: "+ info servicio vigilancia",
      link2: "camara",
      ima: "camara.jpg",
    },
    {
      id: "07",
      title: "Electricidad",
      text: "Brindamos servicios de electricidad desde instalaciones domiciliarias hasta proyectos comerciales. Incorporamos la tecnología en tu residencia mediante la domótica.",
      link: "+ info servicio electrico",
      link2: "electricidad",
      ima: "electricidad.jpg",
    },
    {
      id: "08",
      title: "Drywall",
      text: "Transforma tus espacios, ampliacion y remodelacion de oficinas, casas, departamentos. Tendencia actual en decoracion de interiores.",
      link: "+ info servicio drywall",
      link2: "drywall",
      ima: "drywall.jpg",
    },
  ];
  const list2 = [
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
    {
      id: "04",
      title: "camara de vigilancia",
      subtitle: "Interior y Exterior",
      text: "Ofrecemos soluciones personalizadas para cualquier necesidad de pintura para mejorar la apariencia de tu vivienda o darle un nuevo look a tu oficina.",
      link: "+ info servicio pintura",
      link2: "camaras",
      ima: "Xpintura.jpg",
    },
  ];

  return (
    <section className={` ${oswald.className} antialiased `}>
      <div className="w-full">
        <nav className="fixed right-0 z-30 h-14 p-2 m-auto lg:h-full flex justify-between items-center Xbg-transparent bg-[#ccd0cf77] rounded-bl-md ">
          <button
            onClick={() => setNavbar(!navbar)}
            className="z-50XX w-12 lg:w-14 h-14 text-gray-700 rounded-full active:bg-none active:bg-transparent active:animate-ping focus:outline-none flex justify-center items-center"
          >
            <div className="flex flex-col items-center">
              <svg
                width="30px"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(1, 0, 0, 1, 0, 0)"
              >
                <path d="M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z" />
                <path d="M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z" />
                <path d="M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z" />
              </svg>
              <h1 className="hidden lg:block">MENU</h1>
            </div>
          </button>
          <Link
            hidden
            href="/formulario"
            className="w-16 h-16 text-purple-700 bg-gray-50 text-2xl rounded-full uppercase font-medium flex shadow-lg shadow-purple-300"
          >
            <span className="active:animate-ping m-auto">$</span>
          </Link>
        </nav>

        {/** FONDO NEGRO */}
        <div
          className={`fixed z-40 top-0 w-full h-screen bg-gray-500/50 ${
            navbar
              ? " opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {" "}
        </div>
        {/** MENU  */}
        <ul
          className={`fixed z-50 text-white bg-[#222222ee] h-full w-6/6 min-hHH-[400px] transform transition-all duration-1000 flex flex-col rounded-b-md text-center
        ${
          navbar
            ? " opacity-100 pointer-events-auto right-0"
            : "opacity-0 pointer-events-none -right-5/6"
        }`}
        >
          {/** TITLE-1 */}
          <div className="flex flex-row justify-between p-2">
            <li></li>
            <li className="flex flex-col items-center justify-center text-center">
              <img hidden src="logo" width="50px" />
              <span className="py-4 text-green-100 tracking-[5px] text-sm lg:text-base font-bold uppercase">
                Nuestros <span className="text-yellow-300/60 ">servicios</span>
              </span>
            </li>
            {/** BOTON CERRAR */}
            <li className="flex justify-center">
              <button
                onClick={() => setNavbar(!navbar)}
                className="w-10 h-10 text-gray-200 active:bg-none hover:rotate-90 hover:scale-75 transition-transform duration-500 active:animate-ping focus:outline-none flex justify-center items-center"
              >
                {navbar ? (
                  <svg
                    width="30px"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" />
                  </svg>
                ) : (
                  <span className="text-xl"></span>
                )}
              </button>
            </li>
          </div>

          {/** LIST-1 */}
          <div className="Xlg:w-[1800px] lg:w-full lg:m-auto text-gray-100 p-0 lg:py-16 grid grid-cols-4 lg:grid-cols-5 lg:gap-4">
            {list.map((item, index) => (
              <li
                key={index}
                className="w-full h-50 p-3 Xbg-gradient-to-r from-green-500/20 to-transparent hover:font-bold"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(255,255,255,0.2)), url(/images/${item.ima})`,
                  backgroundSize: "cover",
                  //backgroundAttachment: "fixed",
                  backgroundPosition: "50%",
                }}
              >
                {" "}
                <Link
                  href={`#${item.link2}`}
                  className="flex flex-row items-center text-2xl"
                  onClick={() => setNavbar(!navbar)}
                >
                  <h1 className="text-[10px] lg:text-base text-left uppercase tracking-widest">
                    {item.title}
                  </h1>
                </Link>
              </li>
            ))}
          </div>
          {/** TITLE-2 */}
          <li className="flex flex-col items-center justify-center border-b py-5 border-gray-700 text-center">
            <img hidden src="logo" width="50px" />
            <span className="pt-1 text-green-100 tracking-[5px] text-sm lg:text-base font-bold uppercase">
              our <span className="text-yellow-300/60 ">projects</span>
            </span>
          </li>
          {/** LIST-2 */}
          <div className="Xlg:w-[1800px] lg:w-full lg:m-auto text-gray-100 p-0 lg:py-16 grid grid-cols-4 lg:grid-cols-5 lg:gap-4">
            {list2.map((item, index) => (
              <li
                key={index}
                className="w-full h-50 p-3 Xbg-gradient-to-r from-green-500/20 to-transparent hover:font-bold"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(255,255,255,0.2)), url(/images/${item.ima})`,
                  backgroundSize: "cover",
                  //backgroundAttachment: "fixed",
                  backgroundPosition: "50%",
                }}
              >
                {" "}
                <Link
                  href={`#${item.link2}`}
                  className="flex flex-row items-center text-2xl"
                  onClick={() => setNavbar(!navbar)}
                >
                  <h1 className="text-xs lg:text-base uppercase tracking-widest">
                    {item.title}
                  </h1>
                </Link>
              </li>
            ))}
          </div>
          {/** LINEA */}
          <p className="w-8 border-t-2 animate__animated animate__bounceInRight animate__slower animate__infinite"></p>
          <li className="py-9 text-gray-200 text-xs border-t border-gray-700 text-center">
            Copyright <span className="font-numero font-light">@ 2023</span>{" "}
            Inc. All rights reserved.{" "}
          </li>
        </ul>
      </div>
    </section>
  );
};
