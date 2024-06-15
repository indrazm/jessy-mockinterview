export function uploadFiles(callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
      callback();
    }, 6000);
  });
}
