import { wait } from "@/app/lib/wait";

const notificationSlot = async () => {
  await wait(3000);
  // throw error("An error occurred");
  return (
    <div className="bg-gray-300 border-blue-800 border-2 row-span-2 flex justify-center items-center">
      notificationSlot
    </div>
  );
};

export default notificationSlot;
