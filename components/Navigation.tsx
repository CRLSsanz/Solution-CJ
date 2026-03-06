import Link from "next/link";
import React from "react";

function Navigation() {
  const category = [
    { id: "01", name: "Electricidad", link: "electricidad" },
    { id: "02", name: "Drywall", link: "drywall" },
    { id: "03", name: "Melamina", link: "melamina" },

    { id: "04", name: "Pintura", link: "pintura" },
    { id: "05", name: "Mayolica", link: "mayolica" },
    { id: "06", name: "Extructuras Metalicas", link: "metales" },

    { id: "07", name: "Gasfiteria", link: "gasfiteria" },
    { id: "08", name: "Sistema de seguridad", link: "camara" },
    { id: "09", name: "Instalacion de Rack TV", link: "rack" },
  ];

  return (
    <section className="container mx-auto ">
      <ul className="flex flex-col py-4 text-gray-700">
        <li className="bg-gray-700 text-gray-200 uppercase px-5 py-3">
          Categoria
        </li>
        {category.map((item, index) => (
          <li key={index} className=" py-4 border-b-2 border-gray-200">
            <Link href={`/${item.link}`} className="p-5 bg-teal-500X hover:font-bold hover:-ml-1">
              {item.name}
            </Link>
          </li>
        ))}
        <li className="hidden py-4">
          <Link href="/" className="px-4 py-5 bg-teal-500X hover:bg-teal-600">
            Sobre Nosotros
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Navigation;
