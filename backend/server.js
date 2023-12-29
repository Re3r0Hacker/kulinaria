const express = require('express');
const app = express();

app.get('/', (req, res) => 
{
	res.sendFile("C:/MAIN/kulinaria/frontend/index.html");
})

app.listen(3000);