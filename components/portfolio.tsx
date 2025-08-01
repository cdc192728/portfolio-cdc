import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Portfolio = () => {
  return (
    <div className="p-4 max-w-4xl -my-40 mx-auto" id="portfolio">
      <Title title="Portafolio" subtitle="Trabajos realizados" />

      <div className="grid md:grid-cols-3 gap-14 mt-4">
        <div>
          <h3 className="text-xl mb-4"> {"Video Juegos (Ninja Dragon)"} </h3>
          <Image
            src={"/Juegos.webp"}
            alt="Image"
            width={300}
            height={300}
            className="rounded-2xl w-full"
          />

          <div className="mt-5 flex gap-5">
            <Link
              className={buttonVariants()}
              href={
                "https://play.google.com/store/apps/details?id=com.ZGames.NinjaDragon"
              }
              target="_blank"
            >
              Play Store
            </Link>
            {/* 
                            <Link className={buttonVariants()} href={data.urlDemo} target="_blank">
                                Live demo
                            </Link> */}
          </div>
        </div>

        <div>
          <h3 className="text-xl mb-4"> {"Aplicaciones"} </h3>
          <Image
            src={"/programas.jpg"}
            alt="Image"
            width={300}
            height={300}
            className="rounded-2xl w-full"
          />

          <div className="mt-5 flex gap-5">
            <Link
              className={buttonVariants({ variant: "outline" })}
              href={"https://github.com/cdc192728"}
              target="_blank"
            >
              Gitub
            </Link>

            <Link
              className={buttonVariants()}
              href={
                "https://drive.google.com/drive/folders/1v0N481xz2nWrKubxWUj8ScZZzlUNOhOH"
              }
              target="_blank"
            >
              Estuario Pez
            </Link>

            <Link
              className={buttonVariants()}
              href={
                "https://drive.google.com/drive/folders/1a28qO_aV7vw0E_SpPb0mwY1IRbH96xYq?usp=sharing"
              }
              target="_blank"
            >
              Punto de venta
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl mb-4"> {"Desarrollo Web"} </h3>
          <Image
            src={"/image-3.jpg"}
            alt="Image"
            width={300}
            height={300}
            className="rounded-2xl w-full"
          />

          <div className="mt-5 flex gap-5">
            <Link
              className={buttonVariants({ variant: "outline" })}
              href={"https://github.com/cdc192728"}
              target="_blank"
            >
              Gitub
            </Link>
            {/* 
                            <Link className={buttonVariants()} href={data.urlDemo} target="_blank">
                                Live demo
                            </Link> */}
          </div>
        </div>

        <div>
          <h3 className="text-xl mb-4"> {"3D"} </h3>
          <Image
            src={"/3D.webp"}
            alt="Image"
            width={300}
            height={300}
            className="rounded-2xl w-full"
          />

          <div className="mt-5 flex gap-5">
            <Link
              className={buttonVariants()}
              href={"https://z-games-art.netlify.app/"}
              target="_blank"
            >
              Portafolio 3D
            </Link>
            {/* 
                            <Link className={buttonVariants()} href={data.urlDemo} target="_blank">
                                Live demo
                            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
