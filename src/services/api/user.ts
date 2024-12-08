export const updateName = async (name: string): Promise<string> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (name === "error") {
        rej("Error");
      } else {
        res(name);
      }
    }, 1000);
  });
};

export const getUsers = async (): Promise<string[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(["John", "Jane", "Jim"]);
    }, 2000);
  });
};
