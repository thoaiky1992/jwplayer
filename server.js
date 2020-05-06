const express = require('express');
const app = express();
const fs = require('fs');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', './');
app.use(express.static('./public'));
app.listen(3000);
app.get('/', (req, res) => {
  res.render('mp3.html');
  fs.readFile('db.json', 'utf8', function (err, data) {
    if (err) throw err;
    let result = JSON.parse(data);
    result.users.push({ name: 'Tran Hieu', age: 20 });
    // console.log(result)
    fs.writeFile('db.json', JSON.stringify(result), 'utf8',function(){
		
	});
  });
});
