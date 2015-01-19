Javascript Test
Please complete this at your earliest convenience and the test should be self explanatory,
however if you have any questions please contact me.
You should complete the task to product a working solution and if you can email me with you
completed piece of work.
/*
$$$$$$$$$$$$$$$$""$o$o$o$o$o$oo$$""$$$$$$$$$$$$$$$
$$$$$$$$$$$$""o$$$$$$$$$$"$"$$$$$$$o$"$$$$$$$$$$$$
$$$$$$$$$"$o$$$$""$oo $ "" """$$$oo"$$$$$$$$$
$$$$$$$"o$$$$" ""o $oo o o ""$$$o"$$$$$$$
$$$$$"o$$$" oo$$$$$$$$$$o "$$$o"$$$$$
$$$$"o$$$ $ o$$$$$$$$$$$$$$"$$oo "$$$ $$$$
$$$"$$$" "$$$$$$$$$$$$$$$$o$o$$$" $$$o$$$
$$ $$$ o$$$$$$$$$$$$$$$$$$$$$$$$o o o "$$o"$
$"$$$" o$$$$$$$$$"$$$$$$"" "$$$$$$"$$$$$ $$$"$
$o$$" o$$$$$$$$$$o""$$$""""ooo"$$$$$$$$" $$$"
$o$$" o$$$$$$$$$$ ""oo"$"$o"" $$$o
o$$$ o$$$$$$$$$$ """""$ o$$o
o$$$ o$$$$$$$$$$$$o "o "oo$$o
o$$$ oo$$$$$$$$$$$$$$$$ooooooo$$$$$oo $"$ "$$o
o$$$" "" $$$$$$$$$$$$$$$$$$$$$$$$$$$$o " $$$
$ $$$ "$$$$$$$$$$$$$$$$$$$$$$$$$$$o o$$"$
$$"$$o "$$$$$$$$$$$$$$$$$$$$$$$$$$$o $$$o$
$$o$$$o $$""$$$$$$$$$$$$$$$$$$$$$$$o $$$ $$
$$$o"$$o "$"" "$""$$$$$$$$$$$$$$$$$$$oo$$$"$$$
$$$$o"$$$o " $$$$$$$$$$$$$$$$$o$$"o$$$$
$$$$$$o"$$$o oo$$$$$$$$$$$$$$$$$$$$"o$$$$$
$$$$$$$$o"$$$$ooooo$$$$$$$$$$$$$$$$$$$$$$"o$$$$$$$
$$$$$$$$$$o""$$$$$$$$$$$$$$$$$$$$$$$$$"oo$$$$$$$$$
$$$$$$$$$$$$$o$""$$$$$$$$$$$$$$$$$""oo$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$o$o$"$"$"$"$oo$o$$$$$$$$$$$$$$$$========================================================================
========
Frontend Developer Test
========================================================================
===== */
var yourName = 'leopoldkwok',
 dateCompleted = '18/01/2015';
//
========================================================================
=====
// 1) Define the function 'camelCase', which takes a string parameter
// for example 'your soul is mine', and returns 'yourSoulIsMine'
//
 camelCase('your soul is mine');
 // -> 'yourSoulIsMine'
 camelCase(' Get over here! ');
 // -> 'getOverHere!'
//
//

function camelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

camelCase('your soul is mine');
--> 'yourSoulIsMine'


========================================================================
=====
//
========================================================================
=====
// 2) Place the 'camelCase' function directly on the 'String' object so that:
//
 'your soul is mine'.camelCase()
 // -> 'yourSoulIsMine'
 ' Get over here! '.camelCase()
 // -> 'getOverHere!'
//


String.prototype.camelCase = function() {
  return this.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}


' Get over here! '.camelCase()



//========================================================================
=====
//
========================================================================
=====
// 3) The function 'masterSum' below can take any number of 'Integer' arguments
// and return the sum:
 function masterSum () {
 var result = 0;
 for (var i = 0; i < arguments.length; i++) {
 result += arguments[i];
 }
 return result;
 }
// Define a new function 'sum' that wraps around 'masterSum' and passes its
// arguments on to 'masterSum', so that
 sum(1,2,3,4,5,6);
 // -> 21
//
========================================================================
=====
//  

function sum(args) {		
		
		function masterSum(){var result = 0; for (var i = 0; i < arguments.length; i++) {result += arguments[i];} return result;};
		return masterSum.apply(null, arguments);  //Return masterSum arguments to the wrapping function
	}

	 sum(1,2,3,4,5,6);
	 -> 21
========================================================================
=====
// 4) Rewrite the 'masterSum' function so it uses Array.prototype.reduce()
//

 function masterSum () {
 	var result = 0;
 	for (var i = 0; i < arguments.length; i++) {
 	result += arguments[i];
 }
 	return result;
 }


var masterSum = [0, 1, 2, 3].reduce(function(a, b){ return a + b; });
document.write("total is : " + masterSum ); 



========================================================================
=====//
========================================================================
=====
// 5) Given the following object what will the output logs be
//
========================================================================
=====
 var Hero = {
 	hitPoints: 100,
 	getLife: function () {
 	return this.hitPoints;
 			}
 };
 console.log(Hero.getLife());
 // a) -> 100
 var LinksLife = Hero.getLife;
 console.log(LinksLife());
 // b) -> undefined
//
========================================================================
=====
// 6) 5b is incorrect, use Function.prototype.bind to make it return the same
// result as 5a:
// console.log(Hero.getLife());
//
========================================================================
=====

var Hero = {
               hitPoints: 100,
               getLife: function () {
               return this.hitPoints;
               }
};
var LinksLife = Hero.getLife.bind(Hero);
console.log(LinksLife());         









========================================================================
=====// 7) The function 'bind' isn't available in older browsers create a shim for it
//
========================================================================
=====
//

if (typeof Function.prototype.bind != 'function') {

    Function.prototype.bind = function (bind) {
      var self = this;
      return function () {
        var args = Array.prototype.slice.call(arguments);
        return self.apply(bind || null, args);
      };
    };  
      
  }

========================================================================
=====
// 8) PROJECT
//
========================================================================
=====
// Using a clientside framework of your choice, create a simple single page
// address book application.
//
// The user will be able to see their contacts listed out in alphabetical order.
//
// A contact can be added, edited and removed.
//
// A contact has attributes:
// - first_name * required
// - surname * required
// - address
// - phone_number
// - email
//
// The user can use a search field to find a certain contact.
//
// A backend api is availble to use at:
// http://fast-gorge.herokuapp.com
//
// GET /contacts - lists all contacts
// GET /contacts/:id - shows a single contact
// POST /contacts - send JSON data object to create a new contact
// PUT /contacts/:id - send JSON data object to update an existing
// contact
// DELETE /contacts/:id - deletes an existing contact
//
// or feel free to use any means of persistance; browser memory, local storage,// database and backend technology of your choice.