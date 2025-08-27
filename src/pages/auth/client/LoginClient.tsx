import { AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Plus,
  RefreshCw,
  Settings,
  Users,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import CreateClient from "./CreateClient";

const LoginClient = () => {
  const [createClientVisible, setCreateClientVisible] = useState(false);
  const [orders] = useState([
    {
      id: 1,
      customerName: "Matheus",
      orderCount: 5,
      orderTime: "12min",
    },
    {
      id: 2,
      customerName: "Sarah",
      orderCount: 3,
      orderTime: "8min",
    },
  ]);

  const handleNewOrder = () => {
    setCreateClientVisible(true);
  };

  const handleRefresh = () => {
    toast.loading("Atualizando...");
  };

  const totalOrders = orders.reduce((sum, order) => sum + order.orderCount, 0);

  return (
    <>
      <div className="min-h-screen bg-beige-100 ">
        <div className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-10">
          <div className="max-w-md mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-terracota-500 to-terracota-300 bg-clip-text text-transparent">
                PedeFácil
              </h1>
              <div className="flex items-center gap-2">
                <button
                  className="text-black hover:text-terracota-500"
                  onClick={handleRefresh}
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button className="text-black hover:text-terracota-500">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-md mx-auto px-4 py-6">
          {/* Table Info */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2  rounded-lg px-4 py-2 border border-black">
              <Users className="w-5 h-5 text-terracota-500" />
              <span className="font-semibold text-lg text-black">Mesa #1</span>
            </div>

            <div className="flex items-center justify-center gap-4 mt-3">
              <span className="badge bg-success/70 text-white border-success/20">
                {totalOrders} pedidos ativos
              </span>
              <div className="flex items-center gap-1 text-sm text-black ">
                <Clock className="w-4 h-4" />
                <span>Ativo há 25min</span>
              </div>
            </div>
          </div>

          {/* Orders Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
              Comandas Abertas
              <span className="text-sm text-gray-500 font-normal">
                ({orders.length} clientes)
              </span>
            </h2>

            <div className="space-y-3">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white/80 rounded-xl group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-terracota-500/20"
                >
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start  flex-1 flex-col">
                        <h3 className="font-semibold group-hover:text-terracota-500 transition-colors">
                          {order.customerName}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="badge text-xs bg-black text-white">
                            {order.orderCount} pedidos
                          </span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span>{order.orderTime}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => {}}
                        className="hover:bg-terracota-500/10 hover:text-terracota-500 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="sticky bottom-6">
            <button
              onClick={handleNewOrder}
              className="w-full text-base flex items-center justify-center gap-2 bg-terracota-400 text-white btn font-semibold"
            >
              <Plus className="w-5 h-5" />
              Nova Comanda
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {createClientVisible && (
          <CreateClient
            key="create-client-modal" // É uma boa prática adicionar uma key
            handleClose={() => setCreateClientVisible(false)}
          />
        )}
      </AnimatePresence>  
    </>
  );
};

export default LoginClient;
