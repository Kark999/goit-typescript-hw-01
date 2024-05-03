let age: number = 50;
let username: string = "Max";
let toggle: boolean = true;
let empty: null = null;

// або залишаємо без змін, тому що явно вказані типи змінних.

// const age = 50;
// const username = "Max";
// const toggle = true;
// const empty = null;

type CallbackArg = (a: number) => number;
const callback: CallbackArg = (a) => {
  return 100 + a;
};

console.log(callback(40));

// Generic типи //
