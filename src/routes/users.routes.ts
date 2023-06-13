import { Router } from "express";
import { prisma } from "../db";

const router = Router();

router.get("/user", async (req, res) => {
  const user = await prisma.user.findMany();
  res.json(user);
});

router.get("/user/:id", async (req, res) => {
  const findUser = await prisma.user.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
    include: {
      gastos: true,
    },
  });
  res.json(findUser);
});

router.post("/user", async (req, res) => {
  const newUser = await prisma.user.create({
    data: req.body,
  });
  res.json(newUser);
});

router.put("/user/:id", async (req, res) => {
  const updateUser = await prisma.user.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: req.body,
  });
  res.json(updateUser);
});

router.delete("/user/:id", async (req, res) => {
  const deleteUser = await prisma.user.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(deleteUser);
});
export default router;
