"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Tu plataforma para</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#006da5] via-[#00c7df] to-[#00f8cb]">
          <TypewriterComponent
            options={{
              strings: [
                "centralización de etiquetas.",
                "creación de experiencias.",
                "gestión de contenido.",
                "connectar con el cliente."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Gestiona el contenido de tus etiquetas y cumple la normativa vigente.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Comienza con la prueba gratuita
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No se requiere tarjeta de crédito.
      </div>
    </div>
  );
};
