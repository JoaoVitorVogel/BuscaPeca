import React from 'react';

interface CardDetalhePagamentoProps {
  total: string;
  desconto?: string;
  taxaEntrega?: string;
  valorTotal: string;
  numItens: number;
}

const CardDetalhePagamento: React.FC<CardDetalhePagamentoProps> = ({ total, desconto, taxaEntrega, valorTotal, numItens }) => {
  return (
    <div className="bg-white border rounded-lg p-6 w-full">
      <h2 className="text-center font-semibold text-lg mb-4">Detalhes do Pagamento</h2>
      
      <div className="flex justify-between mb-2">
        <span className="text-gray-700">Total ({numItens} {numItens === 1 ? 'item' : 'items'})</span>
        <span className="text-gray-800 font-semibold">{total}</span>
      </div>
      
      <div className="flex justify-between mb-2">
        {
          desconto &&
          <>
            <span className="text-gray-700">Desconto</span>
            <span className="text-green-500 font-semibold">{desconto}</span>
          </>
        }
      </div>
      
      <div className="flex justify-between mb-2">
        {
          taxaEntrega &&
          <>
            <span className="text-gray-700">Taxa de Entrega</span>
            <span className="text-gray-800 font-semibold">{taxaEntrega}</span>
          </>
        }
      </div>
      
      <div className="border-t border-gray-300 my-4"></div>
      
      <div className="flex justify-between">
        <span className="text-gray-900 font-bold">Valor Total</span>
        <span className="text-gray-900 font-bold">{valorTotal}</span>
      </div>
    </div>
  );
};

export default CardDetalhePagamento;