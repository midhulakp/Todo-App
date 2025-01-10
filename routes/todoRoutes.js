// import express from "express";
// import Todo from "../models/Todo.js";

// let router = express.Router();

// router.post("/", async (req, res, next) => {
//   let { todoName } = req.body;
//   try {
//     if (!todoName) {
//       return res.status(400).send("todoname cant be empty");
//     }
//     let newTodo = await Todo.create({
//       todoName: todoName,
//     });
//     res.status(201).send(newTodo);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// router.get("/", async (req, res, next) => {
//   try {
//     let todos = await Todo.find();
//     res.status(201).send(todos);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// router.get("/:id", async (req, res, next) => {
//   let { id } = req.params;
//   console.log(id);

//   try {
//     let todo = await Todo.findById(id);
//     res.status(201).json(todo);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// router.put("/:id", async (req, res, next) => {
//   let { id } = req.params;
//   try {
//     let updatedTodo = await Todo.findByIdAndUpdate(
//       id,
//       {
//         isComplete: req.body.isComplete,
//       },
//       { new: true }
//     );
//     res.status(201).json(updatedTodo);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// router.delete("/:id", async (req, res, next) => {
//   let { id } = req.params;
//   try {
//     let deletedTodo = await Todo.findByIdAndDelete(id);
//     res.status(201).json(deletedTodo);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });
// export default router;

import express from "express";
import {
  deleteTodo,
  getTodo,
  getTodos,
  postTodo,
  updateTodo,
} from "../controllers/todoControllers.js";

let router = express.Router();

router.post("/", postTodo);
router.get("/", getTodos);
router.get("/:id", getTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
