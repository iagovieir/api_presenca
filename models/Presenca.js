const mongoose = require('mongoose');

const PresencaSchema = new mongoose.Schema({
    aluno: { type: String, required: true},
    resumo: { type: String, required: true},
    criadoEm: { type: Date, default: Date.now}
});

module.exports = mongoose.model('Presenca', PresencaSchema);
