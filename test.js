import  print  from "pdf-to-printer";
import express from 'express'
import bodyParser from 'body-parser'
import fs from "fs"

const app = express()
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true,limit: '50mb' }));

const data = ''

app.post('/', function (req, res) {
    console.log('start ')
    
    let data = req.body.data
    data = data.slice(data.indexOf('JVB'))
    console.log(data)
  res.send('Hello World')
//   console.log(print)
  // const options = {
  //     printer: "oscar",
  //   };
    fs.writeFile("out.pdf",data, 'base64', function(err) {
      console.log(err);
    });
  print.print("out.pdf").then(console.log);
  // Here is how I get user to download it nicely as PDF bytes instead of base64 string.
//   res.type('application/pdf');
//   res.header('Content-Disposition', `attachment; filename="${id}.pdf"`);
//   res.send(Buffer.from(base64str, 'base64'));
})

app.listen(3000)
