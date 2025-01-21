import Todo from "../models/Todo.js";

let postTodo = async (req, res, next) => {
  let { todoName } = req.body;
  try {
    if (!todoName) {
      return res.status(400).send("todo name can't be empty");
    }
    await Todo.create({
      todoName: todoName,
    });
    res.redirect("/api/v1/todo");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getTodos = async (req, res, next) => {
  try {
    let todos = await Todo.find();
    res.render("home", { todos });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getTodo = async (req, res, next) => {
  let { id } = req.params;
  try {
    let todo = await Todo.findById(id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateTodo = async (req, res, next) => {
  let { id } = req.params;
  try {
    let updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { isCompleted: req.body.isCompleted },
      { new: true }
    );
    res.redirect("/api/v1/todo");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteTodo = async (req, res, next) => {
  let { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id);
    res.redirect("/api/v1/todo");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { postTodo, getTodos, getTodo, updateTodo, deleteTodo };
