import { LogIn } from "lucide-react";
import { useState } from "react";

interface Tab {
  id: number;
  name: string;
  orders: number;
}

interface TableData {
  id: number;
  number: number;
  tabs: Tab[];
}

const mockData: TableData = {
  id: 1,
  number: 1,
  tabs: [
    { id: 1, name: "Matheus", orders: 5 },
    { id: 2, name: "Sarah", orders: 3 },
  ],
};

const LoginClient = () => {
  const [tableData] = useState<TableData>(mockData);

  return (
    <div className="w-full h-screen bg-beige-500 flex flex-col items-center gap-8 pt-[20%]">
      <h1 className="text-5xl font-bold text-black font-lobster ">PedeFácil</h1>
      <div className="space-y-2 w-full p-4">
        <div className="w-full flex flex-col justify-start">
          <h2 className="text-2xl">Comandas Abertas</h2>
          <h3 className="px-2 text-gray-600 text-xl">Mesa #{tableData.number}</h3>
        </div>
        <div className="bg-beige-300  p-4 rounded-2xl shadow-md space-y-2">
          {tableData.tabs.map((tab) => (
            <div
              className="flex justify-between items-center border-black border-b p-1"
              key={tab.id}
            >
              <div className="">
                <h4 className="text-lg">{tab.name}</h4>
                <p className="pl-2 text-md text-beige-100">
                  {tab.orders} Pedidos
                </p>
              </div>
              <LogIn />
            </div>
          ))}
          <div className="flex justify-center">
            <button
              className="bg-terracota-500 text-white py-2 px-4 rounded-lg cursor-pointer active:scale-105 duration-300"
              role="button"
            >
              Nova Comanda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginClient;
