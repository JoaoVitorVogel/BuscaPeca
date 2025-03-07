import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import api from '../../services/api';

interface CarPart {
  id: string;
  name: string;
  status: 'Em estoque' | 'Encomendada' | 'Vendida';
  price: number;
  date: string;
}

interface CarPartsTableProps {
  carId: string; // Adicionei carId para compor a rota de edição
  parts: CarPart[];
  carName: string;
  carYear: string;
  purchaseDate: string;
  cost: number;
  expectedReturn: number;
  currentReturn: number;
  totalPartsValue: number;
  onStatusChange: () => void; // Função para atualizar o estado no componente pai
}

const CarPartsTable: React.FC<CarPartsTableProps> = ({
  carId,
  parts,
  carName,
  carYear,
  purchaseDate,
  cost,
  expectedReturn,
  currentReturn,
  totalPartsValue,
  onStatusChange,
}) => {
  const navigate = useNavigate();
  const totalRegisteredParts = parts.length;

  // Total de peças vendidas
  const totalSoldParts = parts.filter(
    (part) => part.status === 'Vendida'
  ).length;

  const formatCurrency = (value: number): string =>
    value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  const expectedReturnFormatted = formatCurrency(expectedReturn);
  const currentReturnFormatted = formatCurrency(currentReturn);
  const costFormatted = formatCurrency(cost);
  const totalPartsValueFormatted = formatCurrency(totalPartsValue);

  const handleEditClick = () => {
    navigate(`/estoque/${carId}/editar`);
  };
  
  const statusColor ={
    "Em estoque": "bg-yellow-100 text-yellow-800",
    "Encomendada": 'bg-green-100 text-green-800',
    "Vendida": 'bg-green-100 text-green-800'
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md mx-auto w-full md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Carro</h2>
        <h3 className="text-4xl font-bold text-gray-900">
          {carName} - {carYear}
        </h3>
      </div>

      <div className="flex flex-wrap justify-between bg-gray-50 p-6 rounded-lg mb-8">
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <span className="text-base text-gray-600">Peças cadastradas</span>
          <span className="text-2xl font-semibold text-gray-800 mt-1">
            {totalRegisteredParts}
          </span>
        </div>
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <span className="text-base text-gray-600">Comprado em</span>
          <span className="text-2xl font-semibold text-gray-800 mt-1">
            {purchaseDate}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-base text-gray-600">Peças vendidas</span>
          <span className="text-2xl font-semibold text-gray-800 mt-1">
            {totalSoldParts}
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="max-h-[50vh] overflow-y-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="sticky top-0 bg-gray-100 z-10 px-4 py-4 text-left text-base font-medium text-gray-600 uppercase tracking-wider">
                  Nome da peça
                </th>
                <th className="sticky top-0 bg-gray-100 z-10 px-4 py-4 text-left text-base font-medium text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="sticky top-0 bg-gray-100 z-10 px-4 py-4 text-left text-base font-medium text-gray-600 uppercase tracking-wider">
                  Preço
                </th>
                <th className="sticky top-0 bg-gray-100 z-10 px-4 py-4 text-left text-base font-medium text-gray-600 uppercase tracking-wider">
                  Data
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {parts.map((part) => (
                <tr key={part.id} className="hover:bg-gray-100">
                  <td className="px-4 py-4 whitespace-nowrap text-base text-gray-800">
                    {part.name}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-base">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor[part.status as 'Em estoque' | 'Encomendada' | 'Vendida']}`}
                    >
                      {part.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-base text-gray-800">
                    {formatCurrency(part.price)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-base text-gray-800">
                    {part.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-start justify-between w-full">
        <Button
          className="bg-orange-500 text-white hover:bg-orange-600 w-56 h-12 text-lg font-bold flex items-center justify-center rounded-full mb-4 md:mb-0"
          onClick={handleEditClick}
        >
          Editar
        </Button>

        <div className="flex flex-col md:flex-row items-start">
          <div className="flex items-center">
            <p className="text-xl text-gray-800">
              Custo: <strong>{costFormatted}</strong>
            </p>
          </div>
          <div className="hidden md:block border-l border-gray-300 mx-6 self-stretch"></div>
          <div className="flex flex-col">
            <p className="text-lg text-gray-800">
              Valor total das peças:{' '}
              <strong>{totalPartsValueFormatted}</strong>
            </p>
            <p className="text-lg text-gray-800">
              Lucro esperado: <strong>{expectedReturnFormatted}</strong>
            </p>
            <p className="text-xl text-gray-800">
              Balanço atual:{' '}
              <strong
                className={`${
                  currentReturn >= 0 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {currentReturnFormatted}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPartsTable;
