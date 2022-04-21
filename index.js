const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views','./pugs');
app.set('view engine', 'pug');

app.get('/',(req,res)=>{
	res.render('index');
})

app.listen(5000, () => {
	console.log(`Server started at port 5000`);
});