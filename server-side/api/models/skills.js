'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  SkillsSchema = new Schema({
    id: {
      type: Number,
      required: [true, 'Укажите id']
    },
    name: {
      type: String,
      required: [true, 'Укажите имя технологии']
    },
    percents: {
      type: Number,
      required: [true, 'Навык владения']
		},
		type: {
      type: Number,
      required: [true, 'Какая область?']
    }
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('skills', SkillsSchema);