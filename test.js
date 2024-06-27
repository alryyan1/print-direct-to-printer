import  print  from "pdf-to-printer";
console.log(print)
const options = {
    printer: "oscar",
  };
print.print("assets/sample.pdf",options).then(console.log);