import { zodResolver } from "@hookform/resolvers/zod";
import Cookie from "js-cookie";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";
import api from "../../../api/axiosConfig";
import { getExceptionMessageFromError } from "../../../utils/errorUtils";
import { formatCpf } from "../../../utils/formatter";

const loginSchema = z.object({
  cpf: z
    .string()
    .min(14, "CPF é obrigatório")
    .refine((val) => {
      return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(val);
    }, "CPF inválido"),
  password: z.string().min(1, "Senha é obrigatória"),
});

const LoginRestaurant: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const [cpfValue, setCpfValue] = useState("");

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const response = await api.post("/auth/login", data);

      const responseData = response.data;
      Cookie.set("token", responseData.token, {
        expires: responseData.expiresIn,
      });
      toast.success("Login realizado com sucesso!");
    } catch (e: unknown) {
      toast.error(getExceptionMessageFromError(e));
    }
  };

  return (
    <div className="flex max-h-screen ">
      <div className="w-1/2">
        <img
          src="/assets/login-page.png"
          alt="Imagem de Cozinha"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-12">
          <h1 className="text-terracota-500 text-5xl font-semibold">
            Entrar como Funcionario
          </h1>
          <form
            className="w-full max-w-3/4 space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-2 flex flex-col items-center">
              <fieldset className="fieldset w-full ">
                <legend className="fieldset-legend text-lg">CPF/CNPJ</legend>
                <input
                  {...register("cpf")}
                  type="text"
                  maxLength={14}
                  value={cpfValue}
                  onChange={(e) => {
                    const formatted = formatCpf(e.target.value);
                    setCpfValue(formatted);
                  }}
                  className={`input border-0 w-full input-lg rounded-lg bg-[#F3F3F3] placeholder:text-[#C4C4C4]
                    ${errors.password ? "input-error" : ""}`}
                  placeholder="Digite seu CPF ou CNPJ"
                />
                <div className="text-error">
                  {errors.cpf && <p>{errors.cpf.message}</p>}
                </div>
              </fieldset>
              <fieldset className="fieldset w-full ">
                <legend className="fieldset-legend text-lg">Senha</legend>
                <input
                  type="text"
                  {...register("password")}
                  className={`input border-0 w-full input-lg rounded-lg bg-[#F3F3F3] placeholder:text-[#C4C4C4]
                    ${errors.password ? "input-error" : ""}`}
                  placeholder="Digite sua senha"
                />
                <div className="text-error">
                  {errors.password && <p>{errors.password.message}</p>}
                </div>
              </fieldset>
            </div>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-sm underline text-[#747474] hover:text-terracota-500 hover:underline-offset-2 transition-all duration-300"
              >
                Esqueci minha senha
              </a>
            </div>
            <button
              type="submit"
              className="cursor-pointer bg-terracota-500 hover:bg-terracota-600 hover:scale-[1.01] duration-300 text-white px-4 py-2 rounded-xl w-full"
            >
              Entrar
            </button>
          </form>
          <div className="text-center">
            <p className="text-sm">
              Não tem uma conta?{" "}
              <a
                href="#"
                className="text-terracota-500 hover:text-terracota-700 hover:underline"
              >
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRestaurant;
