import express from 'express';
import router from './router';
import swaggerUi from "swagger-ui-express";

const app = express();

app.use(router);

app.use(express.static("public"));
const swaggerOptions = {
    swaggerOptions: {
        url: "/swagger.json",
    }
};
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, swaggerOptions)
  );

app.listen(3000, () => console.log('app started on port: 3000'))