const { Router } = require("express")

const router = Router()

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get("/", (req, res) => {
    res.render("index", { messages : messages})
})

router.get("/new", (req, res) => {
  res.render("form")
})

router.post("/new", (req, res) => {
  console.log(req.body.messageText)
  const messageText = req.body.messageText;
  const messageUser = req.body.author;
  messages.push({ text: messageText, user: messageUser, added: new Date() })
  res.redirect("/")
})

router.post("/details", (req, res) => {
  const { user, text, added} = req.body
  res.render("details", {message : {user, text, added}})
})

module.exports = router