import Link from "next/link";
import Image from "next/image";
import { Mail, Paperclip } from "lucide-react";

import { buttonVariants } from "./ui/button";

import Container from "./shared/container";

const Introduction = () => {
  return (
    <Container>
      <div className="text-center -my-20" id="home">
        <h3 className="text-xl mb-3">Hola! Soy</h3>
        <h1 className="text-4xl font-bold mb-3">Cristian </h1>
        <h2 className="text-2xl text-gray-400">Desarrollador de software</h2>
        <div className="flex items-center">
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
            <Link className={buttonVariants()} href="#contact">
              <Mail className="mr-2" /> Contacta conmigo
            </Link>

            <Link
              className={buttonVariants({ variant: "secondary" })}
              href="/cv.png"
              target="_blank"
            >
              <Paperclip className="mr-2" /> Descargar CV
            </Link>
          </div>
        </div>
        <Image
          className="absolute top-23 bottom-13 left-30 right-90 mx-12 my-7"
          src="/profile.png"
          alt="Profile pic"
          width={350}
          height={350}
        />
      </div>
    </Container>
  );
};

export default Introduction;
