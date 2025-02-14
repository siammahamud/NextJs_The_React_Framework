export const wait = (delayTime: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delayTime);
  });
};
