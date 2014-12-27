JS Utils
=========

Personal JS utilities.

## Core
Top level utilities.

### getType(obj)
Retuns the object's type.

### isObject(obj)
### isArray(obj)
### isFunction(obj)
### isString(obj)
### isNumber(obj)
### isDate(obj)
All the "isSomething" helpers return the internall **[[Class]]** of an object.

```javascript
// The following all return `true`
u.isObject({text: 'lorem ipsum'});
u.isArray([1,2,3]);
u.isFunction(alert);
u.isString('lorem ipsum');
u.isNumber(123);
u.isDate(new Date);


### functions(obj)
Returns an object's functions/methods.

### mixin
Add custom functions to the `u` namespace.




## String
_..._




## Number
_..._




## Date
_..._
