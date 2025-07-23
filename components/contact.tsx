import { dataContact } from "@/data";
import Title from "./shared/title";
import Link from "next/link";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <div className="p-6 md:px-36 md:py-60 max-w-2xl mx-auto" id="contact">
      <Title title="Contacta conmigo" subtitle="Ponte en contacto conmigo" />

      <div className="grid grid-col-1 md:grid-col-3 md:gap-2 mt-8">
        <div>
          {dataContact.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center dark:bg-slate-800 rounded-lg mb-5 p-4"
            >
              {data.icon}
              <p> {data.title} </p>
              <p> {data.subtitle} </p>
              <Link href={data.link} target="_blank">
                Enviar mensaje
              </Link>
            </div>
          ))}
        </div>
        {/* <div className="col-span-2 ">
                    <ContactForm />
                </div> */}
      </div>
    </div>
  );
};

export default Contact;
