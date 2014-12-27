JS Utils
=========

Personal JS utilities.

## Core
Top level utilities.

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

#### mixin
Add custom functions to the `u` namespace.

```javascript
// Add a greeting utility
u.mixin({
  greet: function() {
    return 'Hi! The day today is: ' + this.getDayName(); // `this` here is the `u` object
  }
});

// Now use it
u.greet(); //=> 'Hi! The day today is: Friday'
```




## String
_..._




## Number
_..._




## Date
_..._
