const express = require('express')
const app = express()
const port = 3000
const Sequelize = require('sequelize');


//middleware que converte o body para json string
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const sequelize = new Sequelize('ficha9', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch((error) => {
    console.error('Não foi possível conectar ao banco de dados:', error);
  });


  const Person = sequelize.define('Person', {
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    profession: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  sequelize.sync()
  .then(() => {
    console.log('Modelo "Person" criado com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao criar o modelo "Person":', error);
  });

  /* FOI USADO PARA INTRODUZIR OS DADOS NA BASE DE DADOS , SE NAO COMENTARES , SEMPRE QUE INICIARES ELE VAI DAR ADD A BASE DE DADOS.
  
  Person.bulkCreate([
      {firstname: 'Pedro',lastname:'Jardim', profession:'IT', age:62},
      {firstname: 'Manuel',lastname:'Matos', profession:'IT', age:12},
      {firstname: 'Maria',lastname:'Figueira', profession:'IT', age:32},
      {firstname: 'Ana',lastname:'Duarte', profession:'IT', age:82},
      {firstname: 'Luis',lastname:'Faria', profession:'IT', age:42}
  ]).then(function(){
      return Person.findAll();
  }).then(function(persons){
      console.log(persons);
  });

    */





app.use(express.json());

  
// Rota para obter todas as pessoas
app.get('/people', (req, res) => {
    Person.findAll(req.body)
      .then((people) => {
        res.json(people);
      })
      .catch((error) => {
        console.error('Erro ao obter pessoas:', error);
        res.status(500).json({ error: 'Erro ao obter pessoas.' });
      });
  });


  // Rota para criar uma nova pessoa
app.post('/people', (req, res) => {      
    Person.create(req.body)
      .then((person) => {
        res.status(201).json(person);
      })
      .catch((error) => {
        console.error('Erro ao criar pessoa:', error);
        res.status(500).json({ error: 'Erro ao criar pessoa.' });
      });
  });


  // Rota para apagar uma pessoa pelo ID(body)
app.delete('/people/:id', (req, res) => {
    const personId = req.body.id;
  
    Person.destroy({ where: { id: personId } })
      .then((rowsAffected) => {
        if (rowsAffected === 0) {
          res.status(404).json({ error: 'Pessoa não encontrada.' });
        } else {
          res.json({ rowsAffected });
        }
      })
      .catch((error) => {
        console.error('Erro ao apagar pessoa:', error);
        res.status(500).json({ error: 'Erro ao apagar pessoa.' });
      });
  });
  


  // Rota para apagar uma pessoa pelo ID (params)
app.delete('/people/:id', (req, res) => {
    const personId = req.params.id;
  
    Person.destroy({ where: { id: personId } })
      .then((rowsAffected) => {
        if (rowsAffected === 0) {
          res.status(404).json({ error: 'Pessoa não encontrada.' });
        } else {
          res.json({ rowsAffected });
        }
      })
      .catch((error) => {
        console.error('Erro ao apagar pessoa:', error);
        res.status(500).json({ error: 'Erro ao apagar pessoa.' });
      });
  });


  // Rota para selecionar uma pessoa pelo ID
app.get('/people/:id', (req, res) => {
    const personId = req.params.id;
  
    Person.findByPk(personId) //O método Person.findByPk() é utilizado para buscar a pessoa pelo ID fornecido. Ele retorna o resultado como um objeto que representa a pessoa encontrada ou null se a pessoa não for encontrada.
      .then((person) => {
        if (!person) {
          res.status(404).json({ error: 'Pessoa não encontrada.' });
        } else {
          res.json(person);
        }
      })
      .catch((error) => {
        console.error('Erro ao obter pessoa:', error);
        res.status(500).json({ error: 'Erro ao obter pessoa.' });
      });
  });
  

  // Rota para selecionar pessoas pela idade e profissão
app.get('/people/:age/:profession', (req, res) => {
    const { age, profession } = req.params;

    Person.findAll({ where: { age, profession } })
      .then((people) => {
        if (people.length === 0) {
          res.status(404).json({ error: 'Nenhuma pessoa encontrada.' });
        } else {
          res.json(people);
        }
      })
      .catch((error) => {
        console.error('Erro ao obter pessoas:', error);
        res.status(500).json({ error: 'Erro ao obter pessoas.' });
      });
  });
  
  
  // Rota para atualizar os detalhes de uma pessoa pelo ID
app.put('/people/:id', (req, res) => {
    const personId = req.params.id;
    const { firstname, lastname, profession, age } = req.body;
  
    Person.findByPk(personId) //O método Person.findByPk() é utilizado para buscar a pessoa pelo ID fornecido. Ele retorna o resultado como um objeto que representa a pessoa encontrada ou null se a pessoa não for encontrada.
      .then((person) => {
        if (!person) {
          res.status(404).json({ error: 'Pessoa não encontrada.' });
        } else {
          return person.update({ firstname, lastname, profession, age });
        }
      })
      .then((updatedPerson) => {
        res.json(updatedPerson);
      })
      .catch((error) => {
        console.error('Erro ao atualizar pessoa:', error);
        res.status(500).json({ error: 'Erro ao atualizar pessoa.' });
      });
  });
  

