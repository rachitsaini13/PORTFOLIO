"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-500/40 my-24 h-16 w-1 rounded-full hidden sm:block  dark:bg-white/20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.225 }}
    ></motion.div>
  );
}