const Calc = require("calc-js").Calc;
const path = require("path");
// const fs = require("fs");
const fs = require("fs").promises;

// const { sumNumber } = require("./src/calc.js");
// const a = "Hello !";
// console.log("process.argv ===> ", process.argv);
// console.log(process.env);
// console.log(__dirname);

// console.log(sumNumber(0.1, 0.2));

// console.log(process.argv);
// const [, , a, b] = process.argv;
// console.log(process.argv);

// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish(), "  ", 0.1 + 0.2);

// const sumNumber = (a, b) => new Calc(a).sum(b).finish();

// console.log(path.resolve("index.js"));

// fs.readFile(path.resolve("./src/data.txt"), "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(data);
// });

// const data = fs.readFileSync(path.resolve("./src/data.txt"), "utf-8");

// console.log("data === ", data);
// console.log("first1111");

(async () => {
  try {
    const data = await fs.readFile(path.resolve("./src/data.txt"), "utf-8");

    fs.writeFile(
      path.resolve("./src/newData.txt"),
      JSON.stringify({ [Date.now()]: data }),
      "utf-8"
    );

    // fs.rename(path.resolve("./src/data!.js"), "./src/data_3.js");

    const srcDir = await fs.readdir(path.resolve("./src"));
    console.log("srcDir===>", srcDir);

    if (srcDir.includes("data_3.js")) {
      fs.rename(path.resolve("./src/data_3.js"), "./src/data_4.js");
    }

    if (srcDir.includes("data_4.js")) {
      fs.unlink(path.resolve("./src/data_4.js"));
    }

    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();
