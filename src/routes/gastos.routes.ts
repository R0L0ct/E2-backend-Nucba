import { Router, Response, Request } from "express";
import { prisma } from "../db";

const router = Router();

router.get("/gasto", async (req, res: Response) => {
  const gasto = await prisma.gasto.findMany();
  res.json(gasto);
});

router.get("/gasto/:id", async (req: Request, res: Response) => {
  const gasto = await prisma.gasto.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
    include: {
      user: true,
    },
  });
  res.json(gasto);
});

router.post("/gasto", async (req: Request, res: Response) => {
  const newGasto = await prisma.gasto.create({
    data: req.body,
  });
  res.json(newGasto);
});

router.delete("/gasto/:id", async (req: Request, res: Response) => {
  const deleteGasto = await prisma.gasto.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(deleteGasto);
});

router.put("/gasto/:id", async (req: Request, res: Response) => {
  const updateGasto = await prisma.gasto.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: req.body,
  });
  res.json(updateGasto);
});

export default router;
