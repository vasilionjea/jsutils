JS Utils
=========

Various JS utilities (_work in progress_).

## Core

Core utilities live under the `u` namespace.

#### getType(obj)
Retuns the object's type.
```javascript
u.getType(1.5); //=> Number
u.getType('hi'); //=> String
```

#### isObject(obj)
```javascript
u.isObject({text: 'lorem ipsum'}); //=> true
```

#### isArray(obj)
```javascript
u.isArray([1,2,3]); //=> true
```

#### isFunction(obj)
```javascript
u.isFunction(alert); //=> true
```

#### isString(obj)
```javascript
u.isString('lorem ipsum'); //=> true
```

#### isNumber(obj)
```javascript
u.isNumber(123); //=> true
```

#### isDate(obj)
```javascript
u.isDate(new Date); //=> true
```

#### functions(obj)
Returns an array of an object's functions/methods.
```javascript
u.functions({
  first: 'john',
  last: 'smith',

  fullName: function() {
    this.first + ' ' + this.last;
  },

  greet: function() {
    return 'Hi there!';
  }
});

// Result:
//=> [ 'fullName', 'greet' ]
```




## String
String utilities live under the `u.string` namespace.




## Number
Number utilities live under the `u.number` namespace.




## Date
Date utilities live under the `u.date` namespace.


