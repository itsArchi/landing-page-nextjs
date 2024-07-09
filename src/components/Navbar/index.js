import React from "react";
import Image from "next/image";
import LogoImg from "../../../public/logo.png";

const Navbar = () => {
  return (
    <section>
      <div>
        <nav className="pt-10 pr-10 pl-10 pb-5 mb-12 flex justify-between">
          <Image src={LogoImg} />
          <div>
            <form></form>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
