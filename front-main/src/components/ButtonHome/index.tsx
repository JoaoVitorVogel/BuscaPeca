interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    isFluid?: boolean;
    customClass?: string;
    icon?: string;  
  }
  
  export default function ButtonHome({
    isFluid = false,
    disabled = false,
    children,
    onClick,
    customClass = "",
    icon,  
  }: ButtonProps) {
    return (
        <button
          className={`bg-[#FF8E29] text-white text-xl font-poppins border-none rounded-3xl  ${
            isFluid ? "w-full" : "w-auto"
          } p-10 ${customClass}`}  
          onClick={onClick}
          disabled={disabled}
        >
          <div className="flex flex-col items-center">
            {icon && <img src={icon} alt="icon" className="ml-6 mr-6 mb-6 w-24 h-24" />}
            {children}
          </div>
        </button>
      );
  }
  
