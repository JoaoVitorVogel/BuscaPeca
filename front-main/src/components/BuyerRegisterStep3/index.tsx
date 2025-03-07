import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBuyerRegisterStore } from "../../stores/useBuyerRegisterStore";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const createUserCredentialsSchema = z.object({
    emailPessoal: z
        .string()
        .nonempty("O email é obrigatório")
        .email("Formato de email inválido")
        .toLowerCase(),
    cpf: z.string().length(11, "CPF deve ter 11 dígitos numéricos"),
    telefone: z.string().min(13, { message: 'Telefone inválido' }),
    usuario: z.string().min(4, "O usuário precisa de pelo menos 4 caracteres"),
    senha: z.string().min(4, "A senha precisa de pelo menos 4 caracteres"),
    confirmarSenha: z.string().min(4, "A confirmação de senha precisa de pelo menos 4 caracteres"),
}).refine((data) => data.senha === data.confirmarSenha, {
    path: ['confirmarSenha'],
    message: 'As senhas não coincidem',
});

type UserCredentialsFormData = z.infer<typeof createUserCredentialsSchema>;

const BuyerRegisterStep3 = () => {
    const {
        cadastroComprador,
        setCadastroComprador,
    } = useBuyerRegisterStore();

    // Mapeia os dados para corresponder ao tipo UserCredentialsFormData
    const initialFormData: UserCredentialsFormData = {
        emailPessoal: '',
        cpf: '',
        telefone: '',
        usuario:  '',
        senha: '',
        confirmarSenha: '',
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserCredentialsFormData>({
        resolver: zodResolver(createUserCredentialsSchema),
        defaultValues: initialFormData,
    });

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [telefone, setTelefone] = useState(cadastroComprador.phone_number || '');

    const handleTelefoneChange = (event: { target: { value: string; }; }) => {
        const input = event.target.value.replace(/\D/g, ''); // Remove qualquer coisa que não seja número
        const ddd = input.slice(0, 2);
        const numero = input.slice(2);

        let formatted = '';
        if (ddd) formatted += `(${ddd})`;
        if (numero) formatted += numero.slice(0, 9);

        setTelefone(formatted);
        setCadastroComprador({ phone_number: formatted });
    };


    const onSubmit = async (data: UserCredentialsFormData) => {
        setErrorMessage(null);
        setIsLoading(true);

        // Mapeia os dados do formulário para o objeto que será enviado
        const payload = {
            ...cadastroComprador, // Inclui os dados já existentes
            email: data.emailPessoal,
            document_number: data.cpf,
            phone_area_code: data.telefone.slice(1, 3),
            phone_country_code: "+55",
            phone_number: data.telefone.slice(5),
            user: {
                username: data.usuario,
                password: data.senha,
            },
        };

        try {
            // Envia os dados diretamente
            await axios.post('/api/buyer', payload);

            setCadastroComprador({}); // Limpa os dados da store após o sucesso

            navigate('/mecanico', {
                state: { createdBuyer: true }
            });

        } catch (error) {
            if (axios.isAxiosError(error)) {
                setErrorMessage(error.response?.data?.message || "Falha no envio do cadastro");
            } else {
                setErrorMessage("Falha no envio do cadastro");
            }
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm flex flex-col space-y-6">
            <div>
                <Input
                    type="email"
                    label="Email"
                    name="emailPessoal"
                    register={register("emailPessoal")}
                    placeholder="Digite seu email"
                    borderRadius="rounded-md"
                />
                {errors.emailPessoal && (
                    <p className="text-red-500 text-xs mt-1">{errors.emailPessoal.message}</p>
                )}
            </div>
            <div>
                <Input
                    label="CPF"
                    name="cpf"
                    register={register("cpf")}
                    placeholder="Digite o CPF"
                    borderRadius="rounded-md"
                />
                {errors.cpf && (
                    <p className="text-red-500 text-xs mt-1">{errors.cpf.message}</p>
                )}
            </div>

            <div>
                <Input
                    label="Telefone"
                    name="telefone"
                    type="tel"
                    placeholder="Digite o telefone"
                    value={telefone}
                    onChange={handleTelefoneChange}
                    register={register('telefone')}
                    autoComplete="tel"
                    borderRadius="rounded-md"
                />
                {errors.telefone && (
                    <p className="text-red-500 text-xs mt-1">{errors.telefone.message}</p>
                )}
            </div>

            <div>
                <Input
                    label="Usuário"
                    name="usuario"
                    register={register("usuario")}
                    placeholder="Digite seu usuário"
                    borderRadius="rounded-md"
                />
                {errors.usuario && (
                    <p className="text-red-500 text-xs mt-1">{errors.usuario.message}</p>
                )}
            </div>
            <div>
                <Input
                    type="password"
                    label="Senha"
                    name="senha"
                    register={register("senha")}
                    placeholder="Digite sua senha"
                    borderRadius="rounded-md"
                />
                {errors.senha && (
                    <p className="text-red-500 text-xs mt-1">{errors.senha.message}</p>
                )}
            </div>
            <div>
                <Input
                    type="password"
                    label="Confirmar Senha"
                    name="confirmarSenha"
                    register={register("confirmarSenha")}
                    placeholder="Confirme sua senha"
                    borderRadius="rounded-md"
                />
                {errors.confirmarSenha && (
                    <p className="text-red-500 text-xs mt-1">{errors.confirmarSenha.message}</p>
                )}
            </div>
            <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition mt-60 mb-2"
                disabled={isLoading}
            >
                {isLoading ? "Carregando..." : "Finalizar Cadastro"}
            </button>
            {errorMessage && <p className="text-red-500 text-sm mt-4">{errorMessage}</p>}
        </form>
    );
};

export default BuyerRegisterStep3;
