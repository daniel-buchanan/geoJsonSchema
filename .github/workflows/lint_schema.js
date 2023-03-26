const fs = require('fs');
const Ajv = require("ajv");
const ajv = new Ajv();
const excludeDirectories = [
    "dereferenced",
    "nuget",
    ".github",
    "node_modules"
];

var directory = __dirname + "/../../";
console.log(directory);
require('node-dir').files(directory, function(err, files) {
    if(files === null || files === undefined || files.length === 0)
        return;

    files.forEach(function(f, i, a) {
        var canProcess = true;
        excludeDirectories.forEach(function(d) {
            if(f.indexOf(d) > 0 || f.endsWith(".json") === false)
            {
                canProcess = false;
            }
        });

        if(!canProcess) return;

        console.log("Processing Schema: " + f);
        var buff = fs.readFileSync(f);
        var schema = JSON.parse(buff.toString());
        try {
            var valid = ajv.validateSchema(schema);
            if(!valid)
            {
                console.error(schema);
                console.error("  => Lint Errors:")
                console.error(ajv.errors);
            } else {
                console.log("  => Schema Valid!");
            }
        } catch (e) {
            console.error("  => Validation Failed!")
            console.error("     " + e.message);
        }
    });
});