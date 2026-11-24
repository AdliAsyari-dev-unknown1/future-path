import React from 'react';

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  size?: 'md' | 'lg';
  fullWidth?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  icon,
  size = 'md',
  fullWidth = false,
  className = '',
  disabled = false,
  ...props
}) => {
  const sizeClasses = {
    md: 'py-2.5 px-5 text-sm md:text-base min-h-[44px]',
    lg: 'py-3.5 px-7 text-base md:text-lg min-h-[50px] font-semibold'
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md shadow-blue-500/20 transition-all duration-150 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
