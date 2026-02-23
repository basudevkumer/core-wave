import React from "react";
import Container from "./Container";
import { allImages } from "../../helper/imageProvider";
import allIcon from "../../helper/iconProvider";
import { help, services } from "../../helper/ProjectArryObj";
import Button from "./Button";

const Footer = () => {
  // for icon and images
  const { navlogo } = allImages;
  const { footerSocialLinks } = allIcon;
  return (
    <footer className="pt-[100px] pb-[14px]">
      <Container>
        <div className="grid grid-cols-5 items-start gap-x-[100px]">
          <div className="">
            <figure>
              <img src={navlogo} alt="navlogo" />
            </figure>
            <div className="pt-[26px] pb-5">
              <p className="font-lato  font-normal text-[14px]/[22px] text-bodyText ">
                mukimsdesign@gmail.com
              </p>
              <p className=" mt-1 font-lato  font-normal text-[14px]/[22px] text-bodyText ">
                +88 01767630044
              </p>
            </div>
            <ul className="flex gap-x-4 ">
              {footerSocialLinks.map((items) => {
                return (
                  <li key={items.id}>
                    <a
                      href={items.url}
                      target="_blank"
                      className="text-lg inline-block bg-primary text-white rounded-full p-2"
                    >
                      {items.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <ul className="space-y-1">
              <li className="mb-5 text-blackText font-lato font-semibold text-xl">
                Services
              </li>

              {services.map((items) => {
                return (
                  <li className="text-bodyText cursor-pointer text-[14px]/[22px] " key={items.id}>
                    {items.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="  ">
             <ul className="space-y-1">
              <li className="mb-5 text-blackText font-lato font-semibold text-xl">
                Help
              </li>

              {help.map((items) => {
                return (
                  <li className="text-bodyText cursor-pointer text-[14px]/[22px] " key={items.id}>
                    {items.name}
                  </li>
                );
              })}
            </ul>       
          </div>
          <div className=" col-span-2">
            <p className="mb-5 text-blackText font-lato font-semibold text-xl">Contact Us</p>
            <input type="text" className=" rounded-lg border border-[#DDDDDD] text-[#DDDDDD] placeholder:text-[#DDDDDD] p-[14px] w-full " placeholder="Enter your mail" />
            <div className="mt-[14px]">
                <Button children={"Request & Callback"} />
            </div>
          </div>
        </div>
        <div className="pt-[14px]">
            <p className=" text-center pt-[14px] border-t-2 border-[#BDBDBD] font-lato  font-medium text-[14px]/[22px] text-bodyText ">@2023 CoreWave. All copyrights reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
