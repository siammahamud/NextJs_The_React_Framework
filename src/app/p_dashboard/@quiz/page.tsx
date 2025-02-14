import { wait } from "@/app/lib/wait";

const quizSlot = async () => {
  await wait(2000);
  return (
    <div className="bg-gray-300 border-black flex justify-center items-center">
      quizSlot
    </div>
  );
};

export default quizSlot;
