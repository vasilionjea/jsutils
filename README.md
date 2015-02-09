JS Utils
=========

<blockquote>Various JavaScript utilities (<i>work in progress</i>).</blockquote>

## Core

Core utilities live under the `u` namespace.

#### getType(obj)
Retuns the object's type.
```javascript
u.getType(1.5); //=> Number
u.getType('hi'); //=> String
u.getType(alert); //=> Function
...
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

#### extend(target, [, source1] [, sourceN])
Copies all properties (_shallow_) from source(s) over to the target object if the target doesn't already contain those properties.
```javascript
var note = {title: 'Untitled', body: 'lorem ipsum dolor...'};
u.extend(note, {views: 1132, user: 'joe'}, {date: (new Date).toString(), completed: false});

console.log(noted);
//=> {title: "Untitled", body: "lorem ipsum dolor...", views: 1132, user: "joe", date: "Mon Feb 09 2015 16:50:46 GMT-0500 (EST)"…}
```




## String
String utilities live under the `u.string` namespace.

#### stripTags(str)
```javascript
u.string.stripTags("Hello <script>alert('world')</script>");

// Result:
//=> "Hello alert('world')"
```

#### repeat(str, times)
```javascript
u.string.repeat('hello!', 3); //=> 'hello!hello!hello!'
```

#### format(str, data)
Using a data object:
```javascript
u.string.format("Hello, my name is ${fullName} and I'm ${age} years old.", {
  firstName: 'John',
  lastName: 'Smith',
  age: 28,
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
});

// Result:
//=> "Hello, my name is John Smith and I'm 28 years old."
```

Using a data array:
```javascript
u.string.format("Hello, my name is ${0} and I'm ${1} years old.", ['Jane', 40]);

// Result:
//=> "Hello, my name is Jane and I'm 40 years old."
```




## Number
Number utilities live under the `u.number` namespace.




## Date
Date utilities live under the `u.date` namespace.


