const stringToBase64 = (data:string) => Buffer.from(data).toString("base64");
const base64ToSring = (data:string) =>
  Buffer.from(data, "base64").toString("ascii");

  export default  {
    stringToBase64,
    base64ToSring
  }
