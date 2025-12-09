import React from "react";
import Header from "./components/Header";
import NavButtons from "./components/NavButtons";
import SocialLinks from "./components/SocialLinks";
import Experiencia from "./components/Exp";
import Estudios from "./components/Estudios";
import Skills from "./components/Skills";
import Newsletter from "./components/NewsLetter";
import Contacto from "./components/Contacto";

export default function Cv() {
  return (
    <div>
      <Header />
      <Skills />
      <Experiencia />
      <Contacto />
      <Newsletter />
      <SocialLinks />
    </div>
  );
}
