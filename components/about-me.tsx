import { Phone } from "lucide-react";

import { dataAboutMe, dataSlider } from "@/data";

import Title from "./shared/title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="p-80 md:px-12 my-20 max-w-5xl mx-auto" id="about-me">
      <Title title="Sobre mi" subtitle="Conóceme" />

      <div className="grid md:grid-cols-2">
        <div className="py-12 md:py-0 flex items-center justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full max-w-xs h-fit"
          >
            <CarouselContent className="-mt-1 h-[200px]">
              {dataSlider.map((data) => (
                <CarouselItem key={data.id}>
                  <div className="flex items-center justify-center">
                    <Image
                      src={data.url}
                      alt="Image"
                      width={250}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div>
          <div className="grid md:grid-cols-3 mt-7 gap-4">
            {dataAboutMe.map((data) => (
              <div
                key={data.id}
                className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800"
              >
                {data.icon}
                <p className="my-2"> {data.name} </p>
                <p className="text-gray-400"> {data.description} </p>
              </div>
            ))}
          </div>

          <p className="my-8">
            Soy un desarrollador apasionado con más de 4 años de experiencia
            autodidacta, tanto en el apartado de videojuegos como el de
            aplicativos informáticos y el 3D. Soy creativo y muy dedicado, con
            un alto interés por mantenerme a la vanguardia y no dejar de
            aprender. Cuando no estoy inmerso en la programación y la creación,
            disfruto del aire libre y el deporte, creyendo firmemente en
            mantener un equilibrio entre mente y cuerpo. Soy muy autodidacta,
            cuando me dedico a aprender una tecnología, busco las mejores
            fuentes de aprendizaje para llevar a cabo proyectos que afianzan mi
            aprendizaje.
          </p>

          {/* <Button >
                        <Phone size={20} className="mr-2" /> Hablamos
                    </Button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
