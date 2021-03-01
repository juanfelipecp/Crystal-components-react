const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;

 app.use("/usuario" , require('./routes/usuarios'));
 app.use("/contactanos" , require('./routes/contactanos'));
 app.use("/mv" , require('./routes/m_v'));
 app.use("/noticias" , require('./routes/noticias'));
 app.use("/precios" , require('./routes/precios'));
 app.use("/productos" , require('./routes/productos'));
 app.use("/proveedores" , require('./routes/proveedores'));
 app.use("/redes" , require('./routes/redes'));
 app.use("/term" , require('./routes/term'));
 app.use("/ventas" , require('./routes/ventas'));
 app.use("/tipros" , require('./routes/tipros'));
 app.use("/rol" , require('./routes/rol'));

app.listen(PORT, () => {
    console.log("localhost:" + PORT);
})