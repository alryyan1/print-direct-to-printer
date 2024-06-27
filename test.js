import  print  from "pdf-to-printer";
import express from 'express'
import bodyParser from 'body-parser'
import fs from "fs"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));



app.post('/', function (req, res) {
    console.log('start ')
    console.log(req.body)
  res.send('Hello World')
//   console.log(print)
  const options = {
      printer: "oscar",
    };
//   print.print("assets/sample.pdf",options).then(console.log);
  // Here is how I get user to download it nicely as PDF bytes instead of base64 string.
//   res.type('application/pdf');
//   res.header('Content-Disposition', `attachment; filename="${id}.pdf"`);
//   res.send(Buffer.from(base64str, 'base64'));
})

app.listen(3000)
