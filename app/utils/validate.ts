export const validateStep = (data: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(true);
      } else {
        reject('Validation failed');
      }
    }, 1000);
  });
};
  