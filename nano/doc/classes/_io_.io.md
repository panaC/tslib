[@panac/nano](../README.md) > ["io"](../modules/_io_.md) > [Io](../classes/_io_.io.md)

# Class: Io

## Type parameters
#### T 
## Hierarchy

**Io**

## Implements

* `MaybeDocument`

## Index

### Constructors

* [constructor](_io_.io.md#constructor)

### Properties

* [_db](_io_.io.md#_db)
* [_id](_io_.io.md#_id)
* [_rev](_io_.io.md#_rev)

### Accessors

* [id](_io_.io.md#id)
* [json](_io_.io.md#json)

### Methods

* [del](_io_.io.md#del)
* [get](_io_.io.md#get)
* [processAPIResponse](_io_.io.md#processapiresponse)
* [save](_io_.io.md#save)
* [sync](_io_.io.md#sync)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Io**(_id: *`string`*, db: *`string`*, dbName: *`string`*): [Io](_io_.io.md)

*Defined in [io.ts:17](https://github.com/panaC/tslib/blob/7807dca/nano/src/io.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _id | `string` |
| db | `string` |
| dbName | `string` |

**Returns:** [Io](_io_.io.md)

___

## Properties

<a id="_db"></a>

### `<Private>` _db

**● _db**: *`Nano.DocumentScope`<`T`>*

*Defined in [io.ts:17](https://github.com/panaC/tslib/blob/7807dca/nano/src/io.ts#L17)*

___
<a id="_id"></a>

###  _id

**● _id**: *`string`*

*Defined in [io.ts:19](https://github.com/panaC/tslib/blob/7807dca/nano/src/io.ts#L19)*

___
<a id="_rev"></a>

###  _rev

**● _rev**: *`string`*

*Defined in [io.ts:15](https://github.com/panaC/tslib/blob/7807dca/nano/src/io.ts#L15)*

___

## Accessors

<a id="id"></a>

###  id

**get id**(): `string`

*Defined in [io.ts:42](https://github.com/panaC/tslib/blob/7807dca/nano/src/io.ts#L42)*

**Returns:** `string`

___
<a id="json"></a>

###  json

**get json**(): `T`

*Defined in [io.ts:36](https://github.com/panaC/tslib/blob/7807dca/nano/src/io.ts#L36)*

**Returns:** `T`

___

## Methods

<a id="del"></a>

###  del

▸ **del**(): `Promise`<`void`>

*Defined in [io.ts:55](https://github.com/panaC/tslib/blob/7807dca/nano/src/io.ts#L55)*

**Returns:** `Promise`<`void`>

___
<a id="get"></a>

###  get

▸ **get**(): `Promise`<`void`>

*Defined in [io.ts:46](https://github.com/panaC/tslib/blob/7807dca/nano/src/io.ts#L46)*

**Returns:** `Promise`<`void`>

___
<a id="processapiresponse"></a>

### `<Private>` processAPIResponse

▸ **processAPIResponse**(response: *`Nano.DocumentInsertResponse`*): `void`

*Defined in [io.ts:59](https://github.com/panaC/tslib/blob/7807dca/nano/src/io.ts#L59)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| response | `Nano.DocumentInsertResponse` |

**Returns:** `void`

___
<a id="save"></a>

###  save

▸ **save**(): `Promise`<`void`>

*Defined in [io.ts:50](https://github.com/panaC/tslib/blob/7807dca/nano/src/io.ts#L50)*

**Returns:** `Promise`<`void`>

___
<a id="sync"></a>

###  sync

▸ **sync**(): `Promise`<`void`>

*Defined in [io.ts:24](https://github.com/panaC/tslib/blob/7807dca/nano/src/io.ts#L24)*

**Returns:** `Promise`<`void`>

___

