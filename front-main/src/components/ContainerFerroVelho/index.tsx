import React from "react";
import { Seller } from "../../utils/types/entities";

interface ContainerFerroVelhoProps {
    seller: Partial<Seller>;
    isLoading: boolean;
}

const ContainerFerroVelho: React.FC<ContainerFerroVelhoProps> = ({ seller }) => {
    console.log(seller);
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-6xl mt-6 border mx-auto border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Informações do Vendedor</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-gray-600">
                {/* Left Column */}
                <div className="space-y-4">
                    <div className="flex justify-start gap-2">
                        <p className="font-medium">ID do Usuário:</p>
                        <p className="font-bold">{seller.user_id}</p>
                    </div>
                    <div className="flex justify-start gap-2">
                        <p className="font-medium">Código do Vendedor:</p>
                        <p className="font-bold">{seller.seller_code}</p>
                    </div>
                    <div className="flex justify-start gap-2">
                        <p className="font-medium">Nome da Empresa:</p>
                        <p className="font-bold">{seller.company_name}</p>
                    </div>
                    <div className="flex justify-start gap-2">
                        <p className="font-medium">Nome Comercial:</p>
                        <p className="font-bold">{seller.trading_name}</p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    <div className="flex justify-start gap-2">
                        <p className="font-medium">CNPJ:</p>
                        <p className="font-bold">{seller.document_number}</p>
                    </div>
                    <div className="flex justify-start gap-2">
                        <p className="font-medium">Telefone:</p>
                        <p className="font-bold">
                            {seller.phone_country_code} {seller.phone_area_code} {seller.phone_number}
                        </p>
                    </div>
                    <div className="flex justify-start gap-2">
                        <p className="font-medium">Email:</p>
                        <p className="font-bold">{seller.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default ContainerFerroVelho;
