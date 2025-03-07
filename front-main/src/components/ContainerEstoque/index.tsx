import { ReactNode } from "react";
import "../../styles/globals.css";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

interface ContainerProps {
  children: ReactNode;
  isAdmin?: boolean;
}

export const ContainerEstoque = ({ children, isAdmin = false }: ContainerProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-orange-100 p-6">
      <div className="bg-white rounded-lg p-4 shadow-md w-full max-w-6xl mt-6 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold mr-auto">Meu Estoque</h1>
          {
            !isAdmin &&
            <Button customClass="bg-accent text-white lg:w-1/3" onClick={() => navigate('/cadastro-carro')}>
              Cadastrar novo carro
            </Button>
          }
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {children}
        </div>
      </div>
    </div>
  );
};
