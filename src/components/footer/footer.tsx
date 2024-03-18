import { siteConfig } from "@/config";
import { Button, Separator } from "../ui";
import Image from 'next/image';
import { ILinks } from "@/types";

const links = siteConfig.links

export const Footer = async () => {

  return (
    <>
    <div className="container mx-auto mt-12 pb-1">
      <Separator />
      <div className="flex flex-col-reverse items-start justify-between py-4 sm:flex-row">
        <div>
          <p>
            &copy; Copyright 2024 {" "}
              {siteConfig.name}.
            All Right Reserved.
          </p>
        </div>
        <div className="flex space-x-1">
          {Object.keys(links).map((key) => {
            const imageUrl = `/icons/${key}.svg`;
            if (links[key as keyof ILinks]) {
              return (
                <a key={key} href={links[key as keyof ILinks]} target="_blank">
                  <Button size="icon" variant="ghost">
                    <Image src={imageUrl} alt={key}  width="28" height="28" priority/>
                  </Button>
                </a>
              )
            }
          })}
        </div>
      </div>
    </div>
    </>
  )
}