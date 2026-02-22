import React from "react";
import Container from "./Container";
import { allImages } from "../../helper/imageProvider";
import { navItems } from "../../helper/projectArryObj";
import Button from "./Button";

const Navbar = () => {
      
    // for images 
    const {navlogo} = allImages
  return (
    <nav className="py-8 bg-[#daf6ebc3]">
      <Container>
        <div className="flex justify-between items-center
        ">
            <figure>
                <img src={navlogo} alt="navlogo" />
            </figure>

            <div className="flex items-center gap-x-[110px]">
              <ul className="flex gap-x-[45px]">
                {
                 navItems.map(items=>{
                    return <li className=" cursor-pointer text-blackText font-lato font-medium text-base hover:text-primary transition duration-300 ease-in-out" key={items.id}>{items.name}</li>
                 })
                }
              </ul>
              <Button children={"Register"}/>
            </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
