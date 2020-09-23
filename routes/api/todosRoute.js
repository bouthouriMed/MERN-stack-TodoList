const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth')

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
    content: req.body.content,
  });

  newTodo
    .save()
    .then((todo) => res.json(todo))
    .catch((err) => console.log("this is the error : ", err));
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

// @route  PUT api/todos/:id
// @desc   Edit a todo
// @access Public

router.put("/:id", (req, res) => {
  Todo.findByIdAndUpdate(
    req.params.id,
    { content: req.body.content },
    { new: true }
  )
    .then((todo) => todo.save().then((todo) => res.json(todo)))
    .catch((err) => res.status(300).json({ msg: "failed to modify", err }));
});

// @route  PUT api/todos/todo/:id
// @desc   finish a todo
// @access Public

router.put("/todo/:id", (req, res) => {

  Todo.findById(req.params.id, (err,todo) => {
    if(err) console.log(err);
    else {
      todo.isComplete = !todo.isComplete ;
      todo.save((err,newTodo) => {
        if(err) console.log(err);
        else {
          res.json(newTodo)
        }
      })
    }
  })

});

// @route  DELETE api/todos
// @desc   Delete all todos
// @access Private
router.delete("/", auth, (req, res) => {
  Todo.remove({}, (err) => {
    if (err) throw err;
  }).then(() => Todo.find().then((todos) => res.json(todos)));
});


module.exports = router;   
