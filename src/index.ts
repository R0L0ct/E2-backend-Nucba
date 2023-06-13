import express from "express";
import usersRoutes from "./routes/users.routes";
import gastosRoutes from "./routes/gastos.routes";

const app = express();

app.use(express.json());

app.use("/", usersRoutes);
app.use("/", gastosRoutes);

app.listen("3000");
console.log("Server on port ", 3000);
