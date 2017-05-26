const parser = require('./scsSyntax');

ObjectType = {
    'Alias': 0,
    'FilePath': 1,
    'Link': 2
};

class Object {


};

class SCsParser {

    constructor() {
        this.fileName = null;
    }

    parse(fileName) {
        this.fileName = fileName;
    }
};