import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
}

export const ScrollCard: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  isActive,
}) => {
  return (
    <motion.div
      className={`flex-shrink-0 w-80 h-[500px] mx-4 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
        isActive ? "opacity-100 scale-105" : "opacity-50 scale-95"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isActive ? 1 : 0.5, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : "100%" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
          <p className="text-white text-sm">{description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};
//i just added a comment
