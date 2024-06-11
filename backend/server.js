const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const registerUserRouter = require('./routes/userRoutes');
const registerStepRouter = require('./routes/stepRoutes');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://bosconogueira01:teste1234@joaobosco.dxw25lr.mongodb.net/?retryWrites=true&w=majority&appName=joaobosco', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

router = express.Router();
registerUserRouter(router);
registerStepRouter(router);

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
