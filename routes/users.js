const router = require("express").Router();
let User = require("../models/user.model");
// Routes
router.route("/").get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("ERROR: " + err));
});

router.route("/:id").get((req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json("ERROR: " + err));
});

router.route("/add").post((req, res) => {
    const fullName = req.body.fullName;
    const emailAddress = req.body.emailAddress;
    const password = req.body.password;

    const newUser = new User({
        fullName,
        emailAddress,
        password
    });

    newUser.save()
    .then(() => res.json("New user added"))
    .catch(err => res.status(400).json("ERROR: " + err));
});

//
module.exports = router;