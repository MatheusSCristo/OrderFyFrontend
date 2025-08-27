import { motion } from "framer-motion";
interface CreateClientProps {
  handleClose: () => void;
}

const CreateClient = ({ handleClose }: CreateClientProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute flex items-end bg-[#c4c4c4ae] top-0 left-0 w-screen h-screen"
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        transition={{ duration: 0.2 }}
        className="bg-beige-300 relative w-full gap-4 min-h-1/5 p-4 rounded-t-4xl flex flex-col items-center"
      >
        <button
          className="absolute top-4 right-4 text-xl active:scale-105"
          onClick={handleClose}
        >
          X
        </button>
        <div className="h-[3px] w-1/4 bg-black rounded-md"></div>
        <span className="text-xl text-black">Adicionar Comanda</span>
        <input
          className="border border-black rounded-md p-2 bg-gray-100"
          placeholder="Nome"
        />
        <button className="bg-terracota-500 text-white btn w-1/2 rounded-2xl">
          Concluir
        </button>
      </motion.div>
    </motion.div>
  );
};

export default CreateClient;
