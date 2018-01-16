const mongoose = require('mongoose');

module.exports.getSkills = (req, res) => {
  const skill = mongoose.model('skills');

  skill.find().then(items => {
    res.status(200).json({ skills: items });
  });
};




// module.exports.createArticle = (req, res) => {
//   //создаем новую запись блога и передаем в нее поля из формы
//   const Model = mongoose.model('skills');

//   let item = new Model({
//     title: req.body.title,
//     date: new Date(req.body.date),
//     body: req.body.text
//   });
//   //сохраняем запись в базе
//   item
//     .save()
//     .then(item => {
//       return res.status(201).json({ message: 'Запись успешно добавлена' });
//     })
//     .catch(err => {
//       res.status(400).json({
//         message: `При добавление записи произошла ошибка:  + ${err.message}`
//       });
//     });
// };