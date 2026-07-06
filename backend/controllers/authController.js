const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  db.query(
    "INSERT INTO users (email, password) VALUES (?, ?)",
    [email, hashedPassword],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Utilisateur créé" });
    }
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, results) => {
      if (err) return res.status(500).json(err);
      if (results.length === 0) return res.status(404).json("User not found");

      const user = results[0];
      const valid = bcrypt.compareSync(password, user.password);

      if (!valid) return res.status(401).json("Wrong password");

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

      res.json({ token });
    }
  );
};
