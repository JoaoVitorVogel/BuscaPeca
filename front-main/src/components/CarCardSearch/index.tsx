import React from "react";
import { formatStringIsoDateYYYY } from "../../utils/handlers/date";

interface ProductCardProps {
  index: number;
  name: string;
  price: number;
  model: string;
  year: string;
  onClick: () => void;
  alreadyInCart: boolean;
}

const CarCardSearch: React.FC<ProductCardProps> = ({
  index,
  name,
  price,
  model,
  year,
  onClick,
  alreadyInCart,
}) => {
  return (
    <div
      className={`w-full border rounded-lg p-4 shadow-sm ${
        index !== 0 ? "mt-4" : ""
      }`}
    >
      <div className="flex justify-between mb-2">
        <h3 className="font-semibold">{name}</h3>
        <span className="font-semibold text-gray-600">R$ {price}</span>
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <span>Modelo veículo</span>
        <span>Ano</span>
      </div>
      <div className="flex justify-between font-semibold mt-1">
        <span>{model}</span>
        <span>{formatStringIsoDateYYYY(year)}</span>
      </div>
      <button
        className={`mt-4 bg-[#FF8E29] text-white w-full py-2 rounded-lg flex justify-center items-center transition ${alreadyInCart ? "opacity-70" : "opacity-100"}`}
        onClick={() => {
          if (!alreadyInCart) {
            onClick();
          }
        }}
      >
        {alreadyInCart ? "Adicionado ao carrinho" : "Adicionar ao carrinho +"}
      </button>
    </div>
  );
};

export default CarCardSearch;
