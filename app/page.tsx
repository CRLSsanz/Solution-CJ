import Image from "next/image";
import Link from "next/link";
//bg-cover bg-fixed bg-[0%] bg-[url('/images/piggy-mobile.jpg')] min-h-screen

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

  return (
    <section className="w-full flex flex-col justify-center items-center ">
      <div className="w-full h-[800] bg-cover Xbg-fixed bg-[50%] bg-[url('https://ceicid.es/wp-content/uploads/2023/07/banner-curso-mantenimiento-23.jpg')]">
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

      <div className="w-full md:w-[1024] -mt-20 grid grid-cols-1 md:grid-cols-3 bg-zinc-50 text-gray-500 mb-20">
        <div className="md:hidden py-5 font-semibold uppercase">Nuestros Servicios</div>
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

      <div className="md:w-[1024] w-full px-5 mb-20">
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

      <div className="w-full md:w-[1024] grid grid-cols-1 md:grid-cols-3 bg-zinc-50 text-gray-500 mb-20">
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
                <h1 className="hidden md:block font-bold my-5">{item.subtitle}</h1>
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
    </section>
  );
}
