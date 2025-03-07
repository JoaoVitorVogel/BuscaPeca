import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBuyerRegisterStore } from "../../stores/useBuyerRegisterStore";
import { useState } from "react";


const cepRegex = /^\d{8}$/;

const createUserAddressSchema = z.object({
    estado: z.string().min(2, { message: "Estado é obrigatório" }),
    cidade: z.string().min(2, { message: "Cidade é obrigatória" }),
    bairro: z.string().min(2, { message: "Bairro é obrigatório" }),
    rua: z.string().min(2, { message: "Rua é obrigatória" }),
    numero: z.string().min(1, { message: "Número é obrigatório" }),
    complemento: z.string().optional(),
    cep: z.string().regex(cepRegex, { message: 'CEP deve ter 8 dígitos numéricos' }),
});

type AddressFormData = z.infer<typeof createUserAddressSchema>;

const BuyerRegisterStep2 = () => {
    const {
        cadastroComprador,
        setCadastroComprador,
        setStepCadastroComprador,
    } = useBuyerRegisterStore();

    const initialFormData: AddressFormData = {
        estado: cadastroComprador.state || '',
        cidade: cadastroComprador.city || '',
        bairro: cadastroComprador.neighborhood || '',
        rua: cadastroComprador.street || '',
        numero: cadastroComprador.number || '',
        complemento: cadastroComprador.complement || '',
        cep: cadastroComprador.postal_code || '',
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddressFormData>({
        resolver: zodResolver(createUserAddressSchema),
        defaultValues: initialFormData,
    });

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const onSubmit = (data: AddressFormData) => {
        setErrorMessage(null);
        setCadastroComprador({
            state: data.estado,
            city: data.cidade,
            neighborhood: data.bairro,
            street: data.rua,
            number: data.numero,
            complement: data.complemento,
            postal_code: data.cep,
        });
        setStepCadastroComprador(3); // Atualiza o setStep pro proximo passo do cadastro
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm flex flex-col space-y-6">
            <div>
                <Input
                    label="Estado"
                    name="estado"
                    register={register("estado")}
                    placeholder="Digite o estado"
                    borderRadius="rounded-md"
                />
                {errors.estado && (
                    <p className="text-red-500 text-xs mt-1">{errors.estado.message}</p>
                )}
            </div>
            <div>
                <Input
                    label="Cidade"
                    name="cidade"
                    register={register("cidade")}
                    placeholder="Digite a cidade"
                    borderRadius="rounded-md"
                />
                {errors.cidade && (
                    <p className="text-red-500 text-xs mt-1">{errors.cidade.message}</p>
                )}
            </div>
            <div>
                <Input
                    label="Bairro"
                    name="bairro"
                    register={register("bairro")}
                    placeholder="Digite o bairro"
                    borderRadius="rounded-md"
                />
                {errors.bairro && (
                    <p className="text-red-500 text-xs mt-1">{errors.bairro.message}</p>
                )}
            </div>
            <div>
                <Input
                    label="Rua"
                    name="rua"
                    register={register("rua")}
                    placeholder="Digite a rua"
                    borderRadius="rounded-md"
                />
                {errors.rua && (
                    <p className="text-red-500 text-xs mt-1">{errors.rua.message}</p>
                )}
            </div>
            <div>
                <Input
                    label="Número"
                    name="numero"
                    register={register("numero")}
                    placeholder="Digite o número"
                    borderRadius="rounded-md"
                />
                {errors.numero && (
                    <p className="text-red-500 text-xs mt-1">{errors.numero.message}</p>
                )}
            </div>
            <div>
                <Input
                    label="Complemento"
                    name="complemento"
                    register={register("complemento")}
                    placeholder="Digite o complemento (opcional)"
                    borderRadius="rounded-md"
                />
            </div>
            <div>
                <Input
                    label="CEP"
                    name="cep"
                    register={register("cep")}
                    placeholder="Digite o CEP"
                    borderRadius="rounded-md"
                />
                {errors.cep && (
                    <p className="text-red-500 text-xs mt-1">{errors.cep.message}</p>
                )}
            </div>
            <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition mt-60 mb-2"
            >
                Próximo
            </button>
            {errorMessage && <p className="text-red-500 text-sm mt-4">{errorMessage}</p>}
        </form>
    );
};

export default BuyerRegisterStep2;
