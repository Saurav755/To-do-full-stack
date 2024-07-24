import express from "express";
import * as todoService from "../services/todoService.js";

var router = express.Router();

router.get("/", async function (req, res, next) {
  const todos = await todoService.getAllTodos();
  res.status(201).json({ data: todos });
  res.send("get all to dos");
});
router.get("/:id", async function (req, res, next) {
  const id = req.params.id;
  const todo = await todoService.getTodoById(id);
  if (todo) {
    return res.status(200).json({ data: todo });
  } else {
    return res.status(404).json({ message: "Todo not found" });
  }
});

router.post("/", async function (req, res, next) {
  const data = req.body;
  const todo = await todoService.addTodo(data);
  res.status(201).json({
    message: "New todo created successfully",
    data: todo,
  });
});

router.put("/:id", async function (req, res, next) {
  const id = req.params.id;
  const data = req.body;
  const todo = await todoService.updateTodo(id, data);
  res.status(200).json({ message: "todo updated successfully" });
});

router.delete("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const data = req.body;
    const todo = await todoServices.deleteTodo(id);
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
});

export default router;
