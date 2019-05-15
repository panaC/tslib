import * as Nano from 'nano';
export declare abstract class Io<T> implements Nano.MaybeDocument {
    _id: string;
    _rev: string;
    private _db;
    constructor(_id: string, db: string, dbName: string);
    sync(): Promise<void>;
    readonly json: T;
    readonly id: string;
    get(): Promise<void>;
    save(): Promise<void>;
    del(): Promise<void>;
    private processAPIResponse;
}
