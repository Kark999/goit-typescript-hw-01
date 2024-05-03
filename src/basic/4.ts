function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}
// console.log(calc(2, 3));
function customError(): never {
  throw new Error("Error");
}
