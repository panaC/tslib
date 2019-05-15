"use strict";
/*
 * File: io.ts
 * Project: @panac/nano
 * File Created: Wednesday, 15th May 2019 2:58:12 pm
 * Author: pierre (p.leroux@gmx.com)
 * -----
 * Last Modified: Wednesday, 15th May 2019 2:58:14 pm
 * Modified By: pierre (p.leroux@gmx.com>)
 * -----
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Nano = require("nano");
class Io {
    constructor(_id, db, dbName) {
        this._id = _id;
        const n = Nano(db);
        this._db = n.db.use(dbName);
    }
    sync() {
        return new Promise((resolve, reject) => {
            this.get()
                .then(() => resolve())
                .catch(e => this.save()
                .then(() => resolve())
                .catch(e2 => reject(e2)));
        });
    }
    get json() {
        const data = Object.assign({}, this);
        delete data._db;
        return data;
    }
    get id() {
        return this._id;
    }
    async get() {
        Object.assign(this, await this._db.get(this._id));
    }
    async save() {
        const response = await this._db.insert(this.json);
        this.processAPIResponse(response);
    }
    async del() {
        await this._db.destroy(this._id, this._rev);
    }
    processAPIResponse(response) {
        if (response.ok === true) {
            this._id = response.id;
            this._rev = response.rev;
        }
        else {
            throw new Error('[Io]: Nano sync response');
        }
    }
}
exports.Io = Io;
//# sourceMappingURL=io.js.map