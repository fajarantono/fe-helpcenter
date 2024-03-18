import React from 'react';
import Image from 'next/image';
import ICGMaps from '/public/icon/ic-googlemap.svg';
import ICEmail from '/public/icon/ic-email-white.svg';
import ICWA from '/public/icon/ic-whatsapp-white.svg';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function Footer() {
  return (
    <section>
      <div className="bg-[#202124] w-full md:h-[300px] pt-5 md:pt-0 pb-10 md:pb-0">
        <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto md:grid md:grid-cols-3 flex flex-col pt-10">
          <div className="flex flex-row md:flex-col justify-between">
            <div className="flex flex-col">
              <h1 className="font-semibold mb-2 text-white">Unduh Aplikasi Kami</h1>
              <Image
                src="/icon/ic-googleplay.svg"
                alt="icon"
                quality={100}
                width={0}
                height={0}
                className="w-[120px] h-auto"
              />
            </div>
            <div className="flex flex-col mt-0 md:mt-5">
              <h1 className="font-semibold text-white mb-2">Ikuti Kami</h1>
              <div className="flex w-full mt-2 mb-8 -mx-2">
                <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                  <Image
                    src="/icon/ic-facebook.svg"
                    alt="facebook"
                    width={30}
                    height={30}
                    className="h-6 w-6"
                  />
                </div>
                <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                  <Image
                    src="/icon/ic-twitter.svg"
                    alt="facebook"
                    width={30}
                    height={30}
                    className="h-6 w-6"
                  />
                </div>
                <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                  <Image
                    src="/icon/ic-instagram.svg"
                    alt="facebook"
                    width={30}
                    height={30}
                    className="h-6 w-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex md:flex-col hidden">
            <h1 className="font-semibold text-white mb-2">KLIK Indonesia</h1>
            <ul>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:underline">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:underline">
                  Hubungi Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:underline">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:underline">
                  Syarat dan Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:underline">
                  Pusat Bantuan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="md:flex md:flex-col hidden">
            <h1 className="font-semibold text-white mb-2">Kontak Kami</h1>
            <ul className="flex flex-col gap-5">
              <li className="flex flex-row items-start gap-2">
                <Image src={ICGMaps} alt="icon" quality={100} width={28} height={28} />
                <p className="text-gray-400 text-sm">
                  Jl. Suryodiningratan No. 26, Suryodiningratan, Mantrijeron, Kota Yogyakarta, D.I.
                  Yogyakarta
                </p>
              </li>
              <li className="flex flex-row items-start gap-2">
                <Image src={ICWA} color="white" alt="icon" quality={100} width={22} height={22} />
                <p className="text-gray-400 text-sm">+62882007399087</p>
              </li>
              <li className="flex flex-row items-start gap-2">
                <Image src={ICEmail} alt="icon" quality={100} width={22} height={22} />
                <p className="text-gray-400 text-sm">cs@eklik.com</p>
              </li>
            </ul>
          </div>
          <Accordion className="inline-block md:hidden">
            <AccordionTab header="KLIK Indonesia">
              <ul>
                <li>
                  <a href="#" className="text-gray-400 text-sm hover:underline">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 text-sm hover:underline">
                    Hubungi Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 text-sm hover:underline">
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 text-sm hover:underline">
                    Syarat dan Ketentuan
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 text-sm hover:underline">
                    Pusat Bantuan
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 text-sm hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab header="Kontak Kami">
              <ul className="flex flex-col gap-5">
                <li className="flex flex-row items-start gap-2">
                  <Image src={ICGMaps} alt="icon" quality={100} width={28} height={28} />
                  <p className="text-gray-400 text-sm">
                    Jl. Suryodiningratan No. 26, Suryodiningratan, Mantrijeron, Kota Yogyakarta,
                    D.I. Yogyakarta
                  </p>
                </li>
                <li className="flex flex-row items-start gap-2">
                  <Image src={ICWA} alt="icon" quality={100} width={22} height={22} />
                  <p className="text-gray-400 text-sm">+62882007399087</p>
                </li>
                <li className="flex flex-row items-start gap-2">
                  <Image src={ICEmail} alt="icon" quality={100} width={22} height={22} />
                  <p className="text-gray-400 text-sm">cs@eklik.com</p>
                </li>
              </ul>
            </AccordionTab>
          </Accordion>
        </div>
      </div>
      <div className="bg-[#d9d9d9] w-full h-8">
        <p className="text-gray-400 text-center">©{new Date().getFullYear()} - KMP Aryadhana</p>
      </div>
    </section>
  );
}
