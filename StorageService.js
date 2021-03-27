import * as Console from "console";

export class StorageService {

    constructor() {
        this.collection = new Map;
    }

    add(object) {
        if (object === undefined) {
            return Console.log("Передано 0 параметров. Ожидается 1 параметр: object");
        }
        this.collection.set(String(this.collection.size + 1), object);
    }

    getAll() {
        return this.collection;
    }

    getById(id) {
        if (id === undefined) return Console.log("Передано 0 параметров. Ожидается 1 параметр: id");
        id = String(id);
        return this.collection.get(id);
    }

    updateById(id, object) {
        let paramNames = [];
        if (id === undefined) paramNames.push("id");
        if (object === undefined) paramNames.push("object");
        if (paramNames.length !== 0) return console.log("Передано 0 параметров. Ожидается 1 параметр: " + paramNames.toString());
        id = String(id);
        if (typeof object !== typeof this.collection.get(id))
            return console.log("Тип изменяемого объека не совпадает с целевым");

        if (typeof object !== "object")
            this.collection.set(id, object);
        else
            for (const i in object) {
                this.collection.get(id)[i] = object[i];
            }


        return this.collection.get(id);
    }

    replaceById(id, object) {
        let paramNames = [];
        if (id === undefined) paramNames.push("id");
        if (object === undefined) paramNames.push("object");
        if (paramNames.length !== 0) return Console.log("Передано 0 параметров. Ожидается 1 параметр: " + paramNames.toString());
        id = String(id);
        this.collection.set(id, object);
        return this.collection.get(id);
    }

    deleteById(id) {
        if (id === undefined) return Console.log("Передано 0 параметров. Ожидается 1 параметр: id");
        id = String(id);
        const elem = this.getById(id);
        this.collection.delete(id);
        return elem;
    }
}