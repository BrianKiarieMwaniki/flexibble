import React, { MouseEventHandler } from "react";
import Image from 'next/image';

type Props = {
  title: string;
  type?: "button" | "submit";
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  bgColor?: string;
  textColor?: string;
};
const Button = ({
  title,
  type,
  leftIcon,
  rightIcon,
  isSubmitting,
  handleClick,
  bgColor,
  textColor,
}: Props) => {
  return (
    <button
      type={type || "button"}
      disabled={isSubmitting}
      //TODO: bgColor and textColor
      className={`flexCenter gap-3 px-4 py-3
      ${textColor || 'text-white'}
      ${isSubmitting? 'bg-black/50': bgColor ||'bg-primary-purple' } rounded-xl text-sm font-medium max-md:w-full`}
      onClick={handleClick}
    >
        {leftIcon && <Image src={leftIcon} height={12} width={14} alt="left"/>}
        {title}
        {rightIcon && <Image src={rightIcon} height={12} width={14} alt="left"/>}
    </button>
  );
};

export default Button;
