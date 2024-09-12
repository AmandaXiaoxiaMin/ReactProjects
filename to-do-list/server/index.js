const express = require('express');
const app = express();

const cors = require('cors');
app.use(express.json()); // For parsing JSON requests
app.use(cors());

const port = 3001;
// command to run server: node index.js
app.listen(port, () => console.log(`Server running on port ${port}`));

const mysql = require('mysql');
const db_config = require('./config/db.js');
const db = mysql.createConnection({
	host: db_config.host,
	user: db_config.user,
	password: db_config.password,
	database: db_config.database,
});

app.post('/addItem', function (req, res) {
	const { name } = req.body;
	db.query('INSERT INTO to_do_list (name) VALUES (?)', [name], (err, result) => {
		if (err) throw err;
		res.send({ message: 'Item added successfully' });
	});
});

app.get('/getAllItems', function (req, res) {
	db.query('SELECT * FROM to_do_list', (err, result) => {
		if (err) throw err;
		res.send(result);
	});
});

app.post('/updateItemName', function (req, res) {
	const { id, name } = req.body;
	db.query('UPDATE to_do_list SET name =? WHERE id =?', [name, id], (err, result) => {
		if (err) throw err;
		res.send({ message: 'Item updated successfully' });
	});
});

app.post('/markItemDone', function (req, res) {
	const { id } = req.body;
	db.query('UPDATE to_do_list SET is_done = 1 WHERE id =?', [id], (err, result) => {
		if (err) throw err;
		res.send({ message: 'Item marked as done successfully' });
	});
});

app.post('/removeItem', function (req, res) {
	const { id } = req.body;
	db.query('DELETE FROM to_do_list WHERE id =?', [id], (err, result) => {
		if (err) throw err;
		res.send({ message: 'Item removed successfully' });
	});
});

app.post('/clearCompletedItems', function (req, res) {
	db.query('DELETE FROM to_do_list WHERE is_done = 1', (err, result) => {
		if (err) throw err;
		res.send({ message: 'Completed items removed successfully' });
	});
});
