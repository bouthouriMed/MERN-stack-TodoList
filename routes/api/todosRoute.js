const express = require("express");
const router = express.Router();

// requiring the Todo model
const Todo = require("../../models/Todos");

// @route  GET api/todos
// @desc   Get all the todos
// @access Public

router.get("/", (req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.json({ msg: "failed to load todos", err }));
});

// @route  POST api/todos
// @desc   post a new todo
// @access Public

router.post("/", (req, res) => {
  const newTodo = new Todo({
    todo: req.body.todo,
  });

  newTodo.save().then((todo) => res.json(todo));
});

// @route  DELETE api/todos/:id
// @desc   delete a todo
// @access Public

router.delete("/:id", (req, res) => {
  Todo.findById(req.params.id)
    .then((todo) =>
      todo.remove().then(() => res.json({ msg: "todo successfullt deleted" }))
    )
    .catch((err) => console.log("todo not found"));
});

// @route  UPDATE api/todos/:id
// @desc   delete a todo
// @access Public

router.put("/:id", (req, res) => {
  Todo.findById(req.params.id).then((todo) =>
    todo
      .overwrite({ todo: req.body.todo })
      .save()
      .then((todo) => res.json(todo))
      .catch(err => console.log(err))
  );
});

module.exports = router;
