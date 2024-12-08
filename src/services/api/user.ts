export const updateName = async (name: string): Promise<string> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (name === "error") {
        rej("Error");
      } else {
        res("Success");
      }
    }, 1000);
  });
};
