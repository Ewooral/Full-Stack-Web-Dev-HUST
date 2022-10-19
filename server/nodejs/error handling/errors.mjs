import {readFile} from "fs"

readFile(new URL("../modules/app.mjs", import.meta.url), "utf8", (err, data) => {
    if (err) {
       throw err;
        return;
    }
    console.log(data);
});

try{
    const result = readFile(new URL("../modules/app.mjs", import.meta.url), "utf8", (err, data) => {return data});
    console.log(result);
}
catch(err){
    console.log(err);
    console.log("Hello, Everybody")
}