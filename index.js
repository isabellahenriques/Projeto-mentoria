const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./resources/swagger.json');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const shoppingListRoutes = require('./routes/shoppingListRoutes');
const { authenticateJWT } = require('./service/authService');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/user', userRoutes);
app.use('/product', authenticateJWT, productRoutes);
app.use('/shopping-list', authenticateJWT, shoppingListRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
