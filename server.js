const express = require('express');
const app = express();

app.engine('html',require('ejs').renderFile);
app.set('view engine','html');
app.set('views','./');
app.use(express.static('./public'))
app.listen(3000);
app.get('/',(req,res) => {
	res.render('mp3.html');
})