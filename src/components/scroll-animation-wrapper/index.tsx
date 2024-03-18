'use client'

import React, { ReactNode } from 'react';
import { motion } from "framer-motion";

interface scrollAnimationProps {
    children?: ReactNode;
    className?: string;
}

export default function ScrollAnimationWrapper({ children, className, ...props }: Readonly<scrollAnimationProps>) {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}
