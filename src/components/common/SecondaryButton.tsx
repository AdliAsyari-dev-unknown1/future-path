import React from 'react';

export interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  size?: 'md' | 'lg';
  fullWidth?: boolean;
  variant?: 'outline' | 'subtle';
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  icon,
  size = 'md',
  fullWidth = false,
  variant = 'outline',
  className = '',
  disabled = false,
  ...props
}) => {
  const sizeClasses = {
    md: 'py-2.5 px-5 text-sm md:text-base min-h-[44px]',
    lg: 'py-3.5 px-7 text-base md:text-lg min-h-[50px] font-semibold'
  };

  const variantClasses = {
    outline: 'bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 border border-slate-300 hover:border-slate-400 shadow-xs',
    subtle: 'bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 border border-transparent'
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl font-medium transition-all duration-150 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
