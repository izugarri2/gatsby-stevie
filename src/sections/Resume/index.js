import React from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import { IoIosDocument } from "../../components/Icons";

const Resume = () => {
  return (
    <section id="resume">
      <Heading icon={IoIosDocument} title="Resume" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8 items-center">
        <div className="col-span-1 md:col-span-3">
          <h5 className="text-lg lg:text-xl font-semibold">
            If you'd like to check out my Resume, you can access the PDF here!
          </h5>

          <Button
            className="mt-8"
            icon={IoIosDocument}
            title="Preview Resume"
            onClick={() =>
              window.open(
                "https://bilgehangecici.dev/x/intro/Resume.pdf",
                "_blank"
              )
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
