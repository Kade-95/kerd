const {
    Base,
    Func,
    NeuralNetwork,
    Matrix,
    Template,
    Components,
    Compression,
    ColorPicker,
} = require('@thekade/base');

const Server = require('./classes/Server');
const SessionsManager = require('./classes/SessionsManager');
const AppLibrary = require('./functions/AppLibrary');
const IndexedLibrary = require('./functions/IndexedLibrary');
const MongoLibrary = require('./functions/MongoLibrary');

module.exports = {
    Base,
    Func,
    NeuralNetwork,
    Matrix,
    Template,
    Components,
    Compression,
    ColorPicker,
    SessionsManager,
    Server,
    MongoLibrary,
    IndexedLibrary,
    AppLibrary
}
