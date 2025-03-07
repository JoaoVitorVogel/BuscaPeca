import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBuyerRegisterStore } from "../../stores/useBuyerRegisterStore";
import { useState } from "react";

const cnpjRegex = /^\d{14}$/;

const createUserFormSchema = z.object({
    email: z
        .string()
        .nonempty("O email é obrigatório")
        .email("Formato de email inválido")
        .toLowerCase(),
    nomeEmpresa: z.string().min(3, { message: 'Nome muito pequeno' }),
    cnpj: z.string().regex(cnpjRegex, { message: 'CNPJ deve ter 14 dígitos numéricos' }),

});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

const BuyerRegisterStep1 = () => {
    const {
        cadastroComprador,
        setCadastroComprador,
        setStepCadastroComprador,
    } = useBuyerRegisterStore();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema),
        defaultValues: cadastroComprador,
    });

    const [errorMessage, setErrorMessage] = useState<string | null>(null);


    const onSubmit = (data: CreateUserFormData) => {
        setErrorMessage(null);
        setCadastroComprador(data);
        setStepCadastroComprador(2); //Atualiza o setStep pro proximo passo do cadastro
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm flex flex-col space-y-6">
            <div>
                <Input
                    label="Nome empresa"
                    name="nomeEmpresa"
                    register={register("nomeEmpresa")}
                    placeholder="Digite o nome da empresa"
                    borderRadius="rounded-md"
                />
                {errors.nomeEmpresa && (
                    <p className="text-red-500 text-xs mt-1">{errors.nomeEmpresa.message}</p>
                )}
            </div>
            <div>
                <Input
                    type="email"
                    label="Email"
                    name="email"
                    register={register("email")}
                    placeholder="Digite seu email"
                    borderRadius="rounded-md"
                    icon="logoemail.svg"
                />
                {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
            </div>
            <div>
                <Input
                    label="CNPJ"
                    name="cnpj"
                    placeholder="Digite o CNPJ"
                    register={register('cnpj')}
                    autoComplete="off"
                    borderRadius="rounded-md"
                />
                {errors.cnpj && (
                    <p className="text-red-500 text-xs mt-1">{errors.cnpj.message}</p>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition mt-60 mb-2"
            >
                Próximo
            </button>
            <button
                type="button"
                onClick={event => {
                    event.preventDefault();
                    setStepCadastroComprador(2);
                }}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-400 transition mt-60 mb-2"
            >
                Não possuo CNPJ
            </button>
            {errorMessage && <p className="text-red-500 text-sm mt-4">{errorMessage}</p>}
        </form>
    );
};

export default BuyerRegisterStep1;
