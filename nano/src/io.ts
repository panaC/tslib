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

import * as Nano from 'nano';

export abstract class Io<T> implements Nano.MaybeDocument {
  _rev!: string;

  private _db: Nano.DocumentScope<T>;

  constructor(public _id: string, db: string, dbName: string) {
    const n = Nano(db);
    this._db = n.db.use<T>(dbName);
  }

  sync(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.get()
        .then(() => resolve())
        .catch(e =>
          this.save()
            .then(() => resolve())
            .catch(e2 => reject(e2))
        );
    });
  }

  get json() {
    const data = Object.assign({}, this);
    delete data._db;
    return (data as unknown) as T;
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

  private processAPIResponse(response: Nano.DocumentInsertResponse) {
    if (response.ok === true) {
      this._id = response.id;
      this._rev = response.rev;
    } else {
      throw new Error('[Io]: Nano sync response');
    }
  }
}
