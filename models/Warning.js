'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const warningSchema = new Schema({
	guild:       { type: String, required: true, index: true },
	user:        { type: Object, required: true },
	mod:         { type: Object, required: false },
	reason:      { type: String },
	createdAt:   { type: Date, default: Date.now },
});

module.exports = { name :'Warning', schema: warningSchema }
