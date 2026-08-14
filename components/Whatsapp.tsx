import Image from "next/image";

export const Whatsapp = () => {
  return (
    <div className="fixed bottom-3 right-3 lg:bottom-6 lg:right-6 bg-green-500 hover:bg-emerald-500 shadow-md shadow-black rounded-full p-1.5">
      <div className="relative ">
        {/** BUTTON WHATSAPP */}
        <div className="flex flex-row justify-between">
          <a
            href={`https://api.whatsapp.com/send?phone=${939065454}&text=${"Hola, estoy interesado en sus servicios."}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full flex justify-center items-center cursor-pointer"
          >
            <Image
              src={require(`../public/whatsapp.png`)}
              alt="Amigurumi"
              //fill
              //sizes=""
              width={45}
              height={45}
              //style={{ objectFit: "cover",objectPosition: "50% 50%",}}
            />
          </a>
        </div>
        <div className="absolute -top-2 -right-2 h-5 w-5 text-xs bg-red-500 text-white font-bold rounded-full flex justify-center items-center">
          2
        </div>
      </div>
    </div>
  );
};
