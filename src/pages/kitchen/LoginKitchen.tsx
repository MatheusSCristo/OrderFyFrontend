import React from 'react';

const LoginKitchen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Login Cozinha</h1>
      {/* Formulário de login */}
      <form className="w-full max-w-xs">
        <input type="text" placeholder="Usuário" className="mb-2 p-2 border rounded w-full" />
        <input type="password" placeholder="Senha" className="mb-4 p-2 border rounded w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Entrar</button>
      </form>
    </div>
  );
};

export default LoginKitchen;
