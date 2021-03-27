import {StorageService} from './StorageService.js';

let storage = new StorageService();

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


storage.add();
storage.getById();
storage.deleteById();
storage.replaceById();
storage.updateById();
console.log("\n\n");


storage.add(1);
storage.add(["test1", 2]);
storage.add([3, {value: 4, value2: "5"}]);
storage.add(null);
for (let i = 0; i < 10; i++) {
    storage.add("test" + i);
}


console.log(`updateById:(${1}) " + ${storage.updateById(1, 6)}`);
console.log(`updateById:(${2}) " + ${storage.updateById(2, "update" + 2)}`);
console.log(`updateById:(${2}) " + ${storage.updateById(2, ["update" + 2])}`);
console.log(`updateById:(${3}) " + ${storage.updateById(3, {value: "newValue" + 3})}`);
console.log(`updateById:(${6}) " + ${storage.updateById(6, "update" + 6)}`);
console.log("\n\n");


const keys = storage.collection.keys();
for (let id of keys) {
    switch (randomInteger(1, 3)) {
        case 1:
            console.log(`getById:(${id}) " + ${storage.getById(id)}`);
            break;
        case 2:
            console.log(`replaceById:(${id}) " + ${storage.replaceById(id, "replace" + id)}`);
            break;
        case 3:
            console.log(`deleteById:(${id}) " + ${storage.deleteById(id)}`);
            break;
        default:
            console.log(storage.getById(id));
    }
}
console.log("\n\n");


for (let [key, value] of storage.getAll()) {
    console.log("id: " + key + "; value: " + value);
}



