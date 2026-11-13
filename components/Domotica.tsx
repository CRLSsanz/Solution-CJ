import Image from "next/image";
import Link from "next/link";
import React from "react";

//REFERENCIA WEB: https://mainframeltda.com/hogar-inteligente/#proyecs

const Domotica = () => {
  const card1 = [
    {
      id: "1",
      title: "Iluminación inteligente",
      text: "Integramos iluminación automatizada para viviendas creando escenas, ambientes y controles adaptados a cada espacio.",
    },
    {
      id: "2",
      title: "WiFi y conectividad",
      text: "Diseñamos redes WiFi estables y de alto rendimiento para soportar sistemas de domótica y dispositivos inteligentes.",
    },
    {
      id: "3",
      title: "Seguridad inteligente",
      text: "Integramos cámaras, control de acceso y soluciones de seguridad dentro de proyectos de casas inteligentes.",
    },
    {
      id: "4",
      title: "Sonido para el hogar",
      text: "Diseñamos sistemas de sonido residencial y audio multiroom para casas y apartamentos, integrados con la automatización del hogar.",
    },
  ];

  return (
    <section id="domotica" className="w-full">
      <div
        className="w-full h-[500] flex justify-center Xbg-[#141414]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url('/images/domotica/fondo.jpg')`,
          backgroundSize: "cover",
          //backgroundAttachment: "fixed",
          backgroundPosition: "50%",
        }}
      >
        <div className="w-full lg:w-[1024] flex items-center">
          <div className="w-full lg:w-[600] text-gray-100 px-5 lg:px-0">
            <h1 className="lg:text-4xl text-2xl mb-5">Proyectos de Demótica</h1>
            <p className="w-80 font-medium mb-10 Xspace-y-3 ">
              Conectando iluminación, sonido, seguridad, WiFi y control
              inteligente en una sola experiencia.
            </p>

            <div className="w-full lg:w-[1200] flex lg:flex-row flex-col gap-3 text-white text-center text-sm">
              <Link
                href="https://api.whatsapp.com/send?phone=+51939065454&text=Hola, he llegado desde la página de Proyectos de domótica y me gustaría recibir más información para mi proyecto de hogar inteligente."
                target="_blank"
                rel="noopener noreferrer"
                className="w-60 lg:py-3 py-2.5 bg-teal-600/90 hover:bg-teal-500  flex flex-row items-center justify-center gap-x-2 animate-bounce2"
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
                <span className="xfam-manrope">Cuéntanos tu proyecto</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center py-20  text-gray-100">
        <p className="w-full lg:w-[800] px-5 lg:px-0 text-center text-sm">
          Tecnología para una vida mejor
        </p>
        <h1 className="w-full lg:w-[800] px-5 lg:px-0 text-xl text-center mb-10">
          Soluciones que podemos integrar
        </h1>
        <div className="w-full lg:w-[800] grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 lg:px-0 mb-10 ">
          {card1.map((item, index) => (
            <div
              key={index}
              className="w-full border bg-gray-100 border-gray-600"
            >
              <div className="relative w-full h-[200] lg:col-span-1 col-span-2">
                <Image
                  src={`/images/domotica/0${item.id}.jpg`} //"/images/electricidad.jpg"
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
                  imagen
                </h1>
              </div>
              <div className="p-5">
                <h1 className="font-medium text-gray-700 text-lg mb-4">
                  {item.title}
                </h1>
                <p className="text-gray-500 mb-4">{item.text} </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-[800] grid grid-cols-1 lg:grid-cols-2 gap-5">
          <h1 className="px-5 lg:px-0 text-2xl mb-5">
            Una casa inteligente es mucho más que instalar dispositivos
          </h1>
          <div className="px-5 lg:px-0">
            <p className="mb-10">
              Cada proyecto se adapta al espacio, a las necesidades de sus
              habitantes y al nivel de automatización que se quiera alcanzar,
              desde soluciones específicas hasta una integración completa de la
              vivienda.
            </p>
            <Link
              href="https://api.whatsapp.com/send?phone=+51939065454&text=Hola, he llegado desde la página de Proyectos de domótica y me gustaría recibir más información para mi proyecto de hogar inteligente."
              target="_blank"
              className="lg:py-3 py-2.5 bg-teal-600/90 hover:bg-teal-500 flex flex-row items-center justify-center gap-x-2 animate-bounce2 text-sm"
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
              <span className="text-gray-100">Cuentanos tu proyecto</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domotica;
