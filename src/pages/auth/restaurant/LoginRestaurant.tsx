import React from "react";

const LoginRestaurant: React.FC = () => {
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
          <form className="w-full max-w-3/4 space-y-4">
            <div className="space-y-2 flex flex-col items-center">
              <fieldset className="fieldset w-full ">
                <legend className="fieldset-legend text-lg">CPF/CNPJ</legend>
                <input
                  type="text"
                  className="input border-0 w-full input-lg rounded-lg bg-[#F3F3F3] placeholder:text-[#C4C4C4]"
                  placeholder="Digite seu CPF ou CNPJ"
                />
              </fieldset>
              <fieldset className="fieldset w-full ">
                <legend className="fieldset-legend text-lg">Senha</legend>
                <input
                  type="text"
                  className="input border-0 w-full input-lg rounded-lg bg-[#F3F3F3] placeholder:text-[#C4C4C4]"
                  placeholder="Digite sua senha"
                />
              </fieldset>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="mr-2 checkbox border-terracota-500 leading-tight"
                />
                <label htmlFor="rememberMe" className="text-sm">
                  Lembrar de mim
                </label>
              </div>
              <a
                href="#"
                className="text-sm underline text-[#747474] hover:text-terracota-500 hover:underline-offset-2 transition-all duration-300"
              >
                Esqueci minha senha
              </a>
            </div>
            <button
              type="submit"
              className="bg-terracota-500 hover:bg-terracota-600 hover:scale-[1.01] duration-300 text-white px-4 py-2 rounded-xl w-full"
            >
              Entrar
            </button>
          </form>
          <div className="text-center">
            <p className="text-sm">
              Não tem uma conta?{" "}
              <a href="#" className="text-terracota-500 hover:text-terracota-700 hover:underline">
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
