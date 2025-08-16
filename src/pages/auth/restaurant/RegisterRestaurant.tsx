import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import restaurantImage from "/assets/login-page.png";

const restaurantRegisterSchema = z.object({
  name: z.string().min(1, "Nome do restaurante é obrigatório"),
  cnpj: z
    .string()
    .min(18, "CNPJ é obrigatório")
    .max(18, "CNPJ inválido")
    .refine((value) => {
      const numbers = value.replace(/\D/g, "");
      return numbers.length === 14;
    }, "CNPJ inválido"),
  managerName: z.string().min(1, "Nome do gerente é obrigatório"),
  managerCpf: z
    .string()
    .min(11, "CPF do gerente é obrigatório")
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/, "CPF inválido"),
  managerPassword: z
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres"),
});

type RestaurantRegisterForm = z.infer<typeof restaurantRegisterSchema>;

const RegisterRestaurant = () => {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<RestaurantRegisterForm>({
    resolver: zodResolver(restaurantRegisterSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: RestaurantRegisterForm) => {
    try {
      // Simular chamada da API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Conta criada com sucesso! Bem-vindo ao sistema Orderfy.");

      console.log("Dados do registro:", data);
    } catch {
      toast.error("Erro ao criar conta. Tente novamente mais tarde.");
    }
  };

  const formatCpf = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    return value;
  };

  const formatcnpj = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    return numbers.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5"
    );
  };

  // Função para avançar para o próximo passo após validação
  const handleNextStep = async () => {
    const valid = await trigger(["name", "cnpj"]);
    if (valid) setStep(2);
  };

  // Função para voltar ao passo anterior
  const handlePrevStep = () => setStep(1);

  return (
    <div className="max-h-screen bg-background flex">
      {/* Left side - Restaurant image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src={restaurantImage}
          alt="Interior de restaurante acolhedor"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-warm-brown/20" />
      </div>

      {/* Right side - Registration form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-terracota-500 text-warm-brown mb-1">
              Criar sua conta
            </h1>
            <p className="text-muted-foreground">
              Cadastre seu restaurante no PedeFácil
            </p>
          </div>

          <div className="border border-border shadow-lg rounded-lg bg-white p-6">
            <div className="space-y-1 mb-4">
              <h2 className="text-xl text-center text-foreground font-bold">
                Dados do Restaurante
              </h2>
              <p className="text-center text-muted-foreground">
                Preencha as informações para criar sua conta
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
              autoComplete="off"
            >
              {step === 1 && (
                <>
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium">
                      Nome do Restaurante
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Digite o nome do restaurante"
                      {...register("name")}
                      className={`w-full p-2 border rounded input bg-[#F3F3F3] placeholder:text-[#C4C4C4] ${
                        errors.name ? "border-error" : "border-gray-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-sm text-error">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="cnpj" className="block font-medium">
                      CNPJ
                    </label>
                    <input
                      id="cnpj"
                      type="text"
                      placeholder="Digite o CNPJ"
                      {...register("cnpj")}
                      maxLength={17}
                      minLength={17}
                      onChange={(e) => {
                        e.target.value = formatcnpj(e.target.value);
                        register("cnpj").onChange(e);
                      }}
                      className={`w-full p-2 border rounded input bg-[#F3F3F3] placeholder:text-[#C4C4C4] ${
                        errors.cnpj ? "border-error" : "border-gray-300"
                      }`}
                    />
                    {errors.cnpj && (
                      <p className="text-sm text-error">
                        {errors.cnpj.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    className="w-full bg-terracota-500 hover:bg-terracota-600 text-white font-bold py-2 px-4 rounded"
                    onClick={handleNextStep}
                  >
                    Próximo
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="space-y-2">
                    <label htmlFor="managerName" className="block font-medium">
                      Nome do Gerente
                    </label>
                    <input
                      id="managerName"
                      type="text"
                      placeholder="Digite o nome do gerente"
                      {...register("managerName")}
                      className={`w-full p-2 border rounded input bg-[#F3F3F3] placeholder:text-[#C4C4C4] ${
                        errors.managerName ? "border-error" : "border-gray-300"
                      }`}
                    />
                    {errors.managerName && (
                      <p className="text-sm text-error">
                        {errors.managerName.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="managerCpf" className="block font-medium">
                      CPF do Gerente
                    </label>
                    <input
                      id="managerCpf"
                      type="text"
                      maxLength={14}
                      placeholder="Digite o CPF do gerente"
                      {...register("managerCpf")}
                      onChange={(e) => {
                        e.target.value = formatCpf(e.target.value);
                        register("managerCpf").onChange(e);
                      }}
                      className={`w-full p-2 border rounded input bg-[#F3F3F3] placeholder:text-[#C4C4C4] ${
                        errors.managerCpf ? "border-error" : "border-gray-300"
                      }`}
                    />
                    {errors.managerCpf && (
                      <p className="text-sm text-error">
                        {errors.managerCpf.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="managerPassword"
                      className="block font-medium"
                    >
                      Senha
                    </label>
                    <input
                      id="managerPassword"
                      type="password"
                      placeholder="Digite sua senha"
                      {...register("managerPassword")}
                      className={`w-full p-2 border rounded input bg-[#F3F3F3] placeholder:text-[#C4C4C4]${
                        errors.managerPassword
                          ? "border-error"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.managerPassword && (
                      <p className="text-sm text-error">
                        {errors.managerPassword.message}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                      onClick={handlePrevStep}
                    >
                      Voltar
                    </button>
                    <button
                      type="submit"
                      className="w-1/2 bg-terracota-500 hover:bg-terracota-600 text-white font-bold py-2 px-4 rounded"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Criando conta..." : "Criar conta"}
                    </button>
                  </div>
                </>
              )}
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Já tem uma conta?{" "}
                <a
                  href="/login"
                  className="text-terracota-500 hover:text-terracota-600 font-medium"
                >
                  Entre aqui
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterRestaurant;
