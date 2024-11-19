const express = require('express');
const cors = require('cors');
const connection = require('./db_config');
const app = express();

app.use(cors());
app.use(express.json());

const port = 3030;

// app.post('/usuario/cadastrar', (request, response) => {
//     let params = Array(  
//         request.body.name,
//         request.body.phone,
//         request.body.adress,
//         request.body.password
//     );
//     let query = "INSERT INTO users(name,phone,adress,password) VALUES(?,?,?,?);";
//     connection.query(query, params, (err, results) => {
//         if(results) {
//             response
//              .status(201) 
//              .json({
//                 success: true,
//                 message: "Sucesso!",
//                 data: results  
//              })
//         } else {
//             response
//              .status(400)
//              .json({
//                 success: false,
//                 message: "Ops, não obteve sucesso",
//                 data: err
//              })
//         }
//     })
// })
app.post('/usuario/cadastrar', (req, res) => {
  const { name, phone, adress, password } = req.body;
  const query = 'INSERT INTO users (name, phone, adress, password) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, phone, adress, password], (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Erro ao cadastrar usuário.' });
    }
    res.json({ success: true, message: 'Usuário cadastrado com sucesso!', id: result.insertId });
  });
});

app.get('/usuario', (req, res) => {
  const query = 'SELECT * FROM users';
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Erro ao buscar usuário.' });
    }
    res.json({ success: true, users: results });
  });
});


app.put('/usuario/:id', (req, res) => {
  const {id_user} = req.params;
  const { name, phone, adress, password  } = req.body;
  const query = 'UPDATE users SET name = ?, phone = ?, adress = ?, password = ? WHERE id_user = ?';
  connection.query(query, [name, phone, adress, password], (err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Erro ao atualizar registro.' });
    }
    res.json({ success: true, message: 'Registro atualizado com sucesso!' });
  });
});

// Endpoint para deletar um produto
app.delete('/usuario/:id', (req, res) => {
  const { id_user } = req.params;
  const query = 'DELETE FROM users WHERE id_user = ?';
  connection.query(query, [id_user], (err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Erro ao deletar registro.' });
    }
    res.json({ success: true, message: 'Registro deletado com sucesso!' });
  });
});

app.post('/pets/cadastrar', (req, res) => {
  const { name_pet, type, age, owner } = req.body;
  const query = 'INSERT INTO pets (name_pet, type, age, owner) VALUES (?, ?, ?)';
  connection.query(query, [name_pet, type, age, owner], (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Erro ao cadastrar seu pet.' });
    }
    res.json({ success: true, message: 'Pet cadastrado com sucesso!', id: result.insertId });
  });
});


app.get('/pets', (req, res) => {
  const query = 'SELECT * FROM pets';
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Erro ao buscar pet.' });
    }
    res.json({ success: true, pets: results });
  });
});


app.put('/pets/:id', (req, res) => {
  const {id_pet} = req.params;
  const { name_pet, type, age, owner } = req.body;
  const query = 'UPDATE pets SET name_pet = ?, type = ?, age = ?, owner = ? WHERE id_pet = ?';
  connection.query(query, [name_pet, type, age, owner], (err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Erro ao atualizar registro.' });
    }
    res.json({ success: true, message: 'Registro atualizado com sucesso!' });
  });
});

// Endpoint para deletar um produto
app.delete('/pets/:id', (req, res) => {
  const { id_pet } = req.params;
  const query = 'DELETE FROM pets WHERE id_pet = ?';
  connection.query(query, [id_pet], (err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Erro ao deletar registro.' });
    }
    res.json({ success: true, message: 'Registro deletado com sucesso!' });
  });
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));