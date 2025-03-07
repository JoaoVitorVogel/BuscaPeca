import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "../Modal";

interface Order {
  id: string;
  item: string;
  price: number;
  date: string;
  buyer: string;
  status: number;
  part_id: number;
}

interface ContainerPedidosProps {
  orders: Order[];
  handleConfirmation: (orderId: string) => void;
  handleCancel: (partId: number) => void;
  isLoading: boolean;
}

const ContainerPedidos: React.FC<ContainerPedidosProps> = ({
  isLoading,
  orders,
  handleConfirmation,
  handleCancel,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [deletePartId, setDeletePartId] = useState(-1);
  const statusFormatter = (status: number) => {
    switch (status) {
      case 1:
        return "Compra cancelada";
      case 2:
        return "Pronto para entrega";
      case 3:
        return "Entregue";
      default:
        return "Status desconhecido";
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-6xl mt-6 border mx-auto border-gray-200">
      <Modal
        isOpen={showModal}
        title="Cancelar venda"
        content="Você tem certeza que deseja cancelar essa venda?"
        onCancel={() => setShowModal(false)}
        onConfirm={() => {
          handleCancel(deletePartId);
          setShowModal(false);
        }}
      />

      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Pedidos de compra
      </h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-600">Não há pedidos no momento.</p>
      ) : (
        <table className="table-fixed border-gray-200 border min-w-full bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/4 px-2 py-2 text-left font-semibold text-gray-700">
                Peça
              </th>
              <th className="w-1/7 px-2 py-2 text-left font-semibold text-gray-700">
                Valor
              </th>
              <th className="w-1/7 px-2 py-2 text-left font-semibold text-gray-700">
                Data
              </th>
              <th className="w-1/7 px-2 py-2 text-left font-semibold text-gray-700">
                Compador
              </th>
              <th className="w-1/7 px-2 py-2 text-left font-semibold text-gray-700">
                Status
              </th>
              <th className="w-1/4 px-2 py-2 text-left font-semibold text-gray-700"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="px-2 py-2 text-left text-gray-800 break-words border-r-[1px] border-r-gray-100">
                  {order.item}
                </td>
                <td className="px-2 py-2 text-left text-gray-800 border-r-[1px] border-r-gray-100">
                  R$ {order.price.toFixed(2)}
                </td>
                <td className="px-2 py-2 text-left text-gray-800 border-r-[1px] border-r-gray-100">
                  {order.date}
                </td>
                <td className="px-2 py-2 text-left text-gray-800 border-r-[1px] border-r-gray-100">
                  {order.buyer}
                </td>
                <td
                  className={`px-2 py-2 text-left border-r-[1px] border-r-gray-100 ${
                    order.status !== 1 ? "text-green-600" : "text-gray-800"
                  }`}
                >
                  {statusFormatter(order.status)}
                </td>
                <td className="flex items-center justify-center px-2 py-2 text-left">
                  {order.status === 2 && (
                    <>
                      <DeleteIcon
                        className="text-red-500 cursor-pointer mr-3"
                        fontSize="large"
                        onClick={() => {
                          setShowModal(true);
                          setDeletePartId(order.part_id);
                        }}
                      />

                      <button
                        onClick={() => handleConfirmation(order.id)}
                        className={`w-full flex items-center justify-center px-2 py-2 rounded-full whitespace-nowrap transition-clors bg-accent text-white ${
                          order.status !== 2
                            ? "opacity-45 cursor-not-allowed"
                            : "hover:bg-accent"
                        }`}
                        disabled={order.status !== 2}
                      >
                        {isLoading ? "Confirmando venda" : "Confirmar venda"}
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContainerPedidos;
