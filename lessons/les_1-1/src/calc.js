const Calc = require("calc-js").Calc;

const sumNumber = (a, b) => new Calc(a).sum(b).finish();

module.export = {
  sumNumber,
};
