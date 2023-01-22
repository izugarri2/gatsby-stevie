import React from "react";
import Heading from "../../components/Heading";
import { FaInfoCircle } from "../../components/Icons";
import Social from "../../components/Social";

const Footer = () => {
  return (
    <section id="footer">
      <Heading icon={FaInfoCircle} title="Contact Me" />

      <div className="w-full md:w-auto h-6 my-6">{<Social />}</div>
    </section>
  );
};

export default Footer;
