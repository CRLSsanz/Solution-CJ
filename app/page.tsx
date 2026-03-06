import Image from "next/image";
//bg-cover bg-fixed bg-[0%] bg-[url('/images/piggy-mobile.jpg')] min-h-screen

export default function Home() {
  const card1 = [
    {
      id: "01",
      title: "Electricidad",
      text: "Brindamos servicios de electricidad desde instalaciones domiciliarias hasta proyectos comerciales. Incorporamos la tecnología en tu residencia mediante la domótica.",
      link: "+ info servicio electrico",
      ima: "electricidad.jpg",
    },
    {
      id: "02",
      title: "Drywall",
      text: "Transforma tus espacios, ampliacion y remodelacion de oficinas, casas, departamentos. Tendencia actual en decoracion de interiores.",
      link: "+ info servicio drywall",
      ima: "drywall.jpg",
    },
    {
      id: "03",
      title: "Melamina",
      text: "Diseño y fabricación de muebles en melamina. Mantenimiento y remodelacion para sus espacios u oficina, armado de closet y mas.",
      link: "+ info servicio melamina",
      ima: "melamina.jpg",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center ">
      <div className="w-full h-[800] bg-cover Xbg-fixed bg-[50%] bg-[url('https://ceicid.es/wp-content/uploads/2023/07/banner-curso-mantenimiento-23.jpg')]">
        <div className="w-full flex justify-center items-center h-full bg-black/50 ">
          <div className="w-[1024]">
            <div className="w-[500] font-bold text-2xl">
              <div className="flex justify-end">
                <span className="px-4 h-10 border-t-8 border-r-8 border-amber-400"></span>
              </div>
              <div className=" text-6xl mb-5">
                Servicios <span className="text-amber-400">Generales</span> en
                casa
              </div>
              <span className="bg-purple-700 py-1 px-2 text-base uppercase">
                Asesoramiento profesional sin compromiso
              </span>
              <h1 className="my-5 text-4xl">929 499 720</h1>
              <h1 className="mb-5">Llamanos o escribe por WhatsApp</h1>
              <div className="mb-5">
                <span className="py-5 px-10 bg-gray-800 text-amber-400 text-base uppercase">
                  Contacto
                </span>
              </div>
              <div className="hidden">
                Estamos dispuestos a ayudarlo en las labores de mantenimiento de
                su casa departamento o comercio{" "}
              </div>
              <span className="px-4 h-6 border-b-8 border-l-8 border-amber-400 -ml-10"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1024] -mt-20 grid grid-cols-3 bg-zinc-50 text-gray-500 mb-20">
        <div className="hidden p-5">
          <ul>
            <li>Electricidad </li>
            <li>Drywal</li>
            <li>Melamina</li>

            <li>Pintura</li>
            <li>Mayolica, "Albañileria, construccion"</li>
            <li>Extructuras metalicas, Soldadura en general</li>
            
            <li>Gasfiteria</li>
            <li>Sistema de seguridad, camaras vilgilancia</li>
            <li>Instalacion de Rack TV</li>
            
            <li>Reparacion de Computadoras</li>
            <li></li>
            <li></li>
          </ul>
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
              className={` flex flex-col justify-between h-80 p-10 ${item.id === "02" ? "bg-amber-400 text-gray-600" : "bg-gray-900 text-gray-200"}  `}
            >
              <div className="mb-5">
                <h1 className="uppercase font-bold mb-5">{item.title}</h1>
                <h1>{item.text}</h1>
              </div>
              <h1
                className={` ${item.id === "02" ? "text-gray-600 " : "text-amber-400"}`}
              >
                {item.link}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[1024] mb-20">
        <div className="text-center mb-10">
          <h1 className="text-gray-600 font-bold text-2xl">
            Elige para hacer la reforma de tu vivienda o local
          </h1>
          <h1 className="text-gray-600 ">
            Contamos con un equipo de profesionales de diferentes ramas de
            constractada experiencia
          </h1>
        </div>
        <div className=" grid grid-cols-3 bg-zinc-50 text-gray-500 text-center">
          <div className="text-center ">
            <img src="" alt="" />
            <h1 className="font-bold uppercase mb-3">Viviendas</h1>
            <h1>
              reformas integrales para pisos, viviendas unifamiliares, chalets o
              casas rurales.
            </h1>
          </div>
          <div className="">
            <img src="" alt="" />
            <h1 className="font-bold uppercase mb-3">Locales comerciales</h1>
            <h1>
              Especialistas en transformacion y reforma de locales para uso
              comercial.
            </h1>
          </div>
          <div className="">
            <img src="" alt="" />
            <h1 className="font-bold uppercase mb-3">Comunidades</h1>
            <h1>
              Reforma, reparacion y mantenimiento de zonas comunes, escaleras,
              terrazas o fachadas.
            </h1>
          </div>
        </div>
      </div>

      <div className="w-[1024] grid grid-cols-3 bg-zinc-50 text-gray-500 mb-20">
        <div className="flex flex-col">
          <div className="relative w-full bg-gray-200 h-80">
            <Image
              src="/images/gasfiteria.jpg"
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
          <div className="bg-gray-900 text-gray-200 p-10">
            <span className="p-2 bg-gray-200 uppercase text-gray-600 font-bold">
              Fontaneria
            </span>
            <h1 className="font-bold my-5">Bañera por ducha</h1>
            <h1>
              Brindamos servicios de electricidad desde instalaciones
              domiciliarias hasta proyectos comerciales. Incorporamos la
              tecnología en tu residencia mediante la domótica.
            </h1>
            <h1 className="text-amber-400 mt-10">
              + info reforma de viviendas
            </h1>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="relative w-full bg-gray-200 h-80 ">
            <Image
              src="/images/drywall1.jpg"
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
          <div className="bg-amber-400 text-gray-700 p-10">
            <h1 className="uppercase font-bold mb-5">Drywall </h1>
            <h1>
              Transforma tus espacios, ampliacion y remodelacion de oficinas,
              casas, departamentos. Tendencia actual en decoracion de
              interiores.
            </h1>
            <h1 className="font-bold mt-10">+ info reforma de viviendas</h1>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="relative w-full bg-gray-200 h-80">
            <Image
              src="/images/gasfiteria.jpg"
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
          <div className="bg-gray-900 text-gray-200 p-10">
            <h1 className="uppercase font-bold mb-5">Melamina</h1>
            <h1>
              Diseño y fabricación de muebles en melamina. Mantenimiento y
              remodelacion para sus espacios u oficina, armado de closet y mas.
            </h1>
            <h1 className="text-amber-400 mt-10">
              + info reforma de viviendas
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
