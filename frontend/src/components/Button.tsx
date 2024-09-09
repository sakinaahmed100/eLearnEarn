import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ className,text,  ...props }) => {
  return (
    <button className={className} {...props}>
      {text}
    </button>
  );
};

export default Button;

