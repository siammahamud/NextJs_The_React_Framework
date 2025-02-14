import { wait } from "@/app/lib/wait";

const articleSlot = async () => {
  await wait(1000);
  return (
    <div className="bg-gray-300 border-black flex justify-center items-center">
      articleSlot
    </div>
  );
};

export default articleSlot;
