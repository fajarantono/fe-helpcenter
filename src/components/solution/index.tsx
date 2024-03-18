'use client'

import React, { useMemo } from 'react';
import ScrollAnimationWrapper from "../scroll-animation-wrapper";
import BoxSolution from "./box-solution";
import { motion } from "framer-motion";
import getScrollAnimation from '@/utils/get-scroll-animation';

const Solution = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    const solutions = [
        {
            _id: 1,
            label: "Musyawarah",
            icon: "icon/ic-people.svg",
            desc: "Our membership management software provides full automation of membership renewals and payments"
        },
        {
            _id: 2,
            label: "Datang ke Kantor Pusat",
            icon: "icon/ic-building.svg",
            desc: "Our membership management software provides full automation of membership renewals and payments"
        },
        {
            _id: 3,
            label: "Kekeluargaan",
            icon: "icon/ic-hand.svg",
            desc: "Our membership management software provides full automation of membership renewals and payments"
        }
    ]

    return (
        <ScrollAnimationWrapper>
            <motion.div className="mt-20  md:mt-32 flex flex-col justify-center items-center" variants={scrollAnimation}>
                <h1 className="text-2xl font-semibold">Layanan Solusi dari Kami</h1>
                <p className="text-gray-700 text-sm text-center mt-2">Kami memberikan layanan solusi untuk berbagai <br className="inline-block lg:hidden" />kenyamanan Anda</p>
                <motion.div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid sm:grid-cols-3 grid-cols-1 gap-3 lg:gap-10 mt-10" variants={scrollAnimation}>
                    {
                        solutions.map((item) => {
                            return (
                                <BoxSolution
                                    key={item._id} 
                                    icon={item.icon} 
                                    label={item.label}
                                    desc={item.desc}
                                />
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </ScrollAnimationWrapper>
    )
}

export default Solution;