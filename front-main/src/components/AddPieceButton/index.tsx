interface AddPieceButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const AddPieceButton = ({ onClick, disabled = false }: AddPieceButtonProps) => {
  return (
    <div className="flex justify-center w-full">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          ${
            disabled
              ? "cursor-not-allowed border-gray-300 text-gray-400"
              : "cursor-pointer border-[#8c9b96] text-[#7eccb3]"
          }
          w-full py-2 mt-4
          border-2 border-[#E1E1E1] bg-white 
          text-center text-2xl text-[#6F757E] font-normal rounded-lg 
          transition-colors duration-300 ease-in-out
          hover:bg-[#f0fdf4] 
          disabled:bg-gray-200
        `}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center">
            <span className="text-3xl">+</span>
          </div>
          <span className="text-xl">Adicionar peça</span>
        </div>
      </button>
    </div>
  );
};

export default AddPieceButton;
