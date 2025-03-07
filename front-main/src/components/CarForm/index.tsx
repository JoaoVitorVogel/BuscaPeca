import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";

interface DropdownOption {
  value: string;
  label: string;
}


export interface CarData {
  marca: string | number;
  ano: string;
  valor: string;
  modelo: string | number;
  data_de_compra: string;
}

interface CarFormProps {
  carData: CarData;
  carErrors: Partial<CarData>;
  carBrand: DropdownOption[];
  carModel: DropdownOption[];
  onCarInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBrandSelect: (option: DropdownOption) => void;
}

const CarForm = ({
  carData,
  carErrors,
  carBrand,
  carModel,
  onCarInputChange,
  onBrandSelect,
}: CarFormProps) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 70 }, (_, i) => ({
    value: (currentYear - i).toString(),
    label: (currentYear - i).toString(),
  }));

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  // Usage
  const formattedDate = formatDate(carData.data_de_compra);
  
  
  return (
    <div className="border-[1px] rounded-lg shadow-sm">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4 ">Informações do carro</h3>
        <div className="grid grid-cols-3 gap-x-12 gap-y-6 ">
          <div>
            <Dropdown
              placeholder={"Marca"}
              options={carBrand}
              name="marca"
              value={carData.marca as string}
              onOptionSelect={(option) => {
                onBrandSelect(option);
                onCarInputChange({
                  target: { name: "marca", value: option.value },
                } as unknown as React.ChangeEvent<HTMLInputElement>);
              }}
            />
            {carErrors.marca && (
              <p className="text-red-500 mt-1">{carErrors.marca}</p>
            )}
          </div>
          <div>
            <Dropdown
              placeholder={"Ano"}
              options={years}
              name="ano"
              value={carData.ano}
              onOptionSelect={(option) =>
                onCarInputChange({
                  target: { name: "ano", value: option.value },
                } as unknown as React.ChangeEvent<HTMLInputElement>)
              }
            />
            {carErrors.ano && (
              <p className="text-red-500 mt-1">{carErrors.ano}</p>
            )}
          </div>
          <div>
            <Input
              name="valor"
              placeholder="Valor"
              type="number"
              value={carData.valor}
              onChange={onCarInputChange}
            />
            {carErrors.valor && (
              <p className="text-red-500 mt-1">{carErrors.valor}</p>
            )}
          </div>
          <div>
            <Dropdown
              placeholder={"Modelo"}
              options={carModel}
              name="modelo"
              value={carData.modelo as string}
              onOptionSelect={(option) =>
                onCarInputChange({
                  target: { name: "modelo", value: option.value },
                } as unknown as React.ChangeEvent<HTMLInputElement>)
              }
            />
            {carErrors.modelo && (
              <p className="text-red-500 mt-1">{carErrors.modelo}</p>
            )}
          </div>
          <div>
            <Input
              name="data_de_compra"
              type="date"
              placeholder="Data de Compra"
              value={formattedDate}
              onChange={onCarInputChange}
            />
            {carErrors.data_de_compra && (
              <p className="text-red-500 mt-1">{carErrors.data_de_compra}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarForm;
