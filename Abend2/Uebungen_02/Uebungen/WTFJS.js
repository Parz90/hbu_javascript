//Erkennen was ist wahr oder falsch ist.
true;
!true;
!!true;
!!(true);
!!('');
!!({});
!!([]);

// Coercion is bad thing
//Abstract Equality Operator
[] == false;
"" == false;
null == false;

Number(true)
+true //einfache Variante um etwas in eine Zahl zu wandeln
true + true;

!!("0" && {});
!!("0");
!!({});

!!(0 && {});
!!(0);

0 == "0";
null == undefined;


[1,2] == "1,2"

//do not use ==


"I am a string";
"I am a string" instanceof String;
typeof "ASDASD";
typeof String('a') == 'string';
String("a") == "a";
new String("a") == "a";
typeof new String("A");
new String("A");
(new String("A")).toString();


//rechnen
"4" / "2" 
"4" - "2"
"4" * "2"
"4" + "2"
10 * 3 + "px"
"px" + 1 - 2

"foo" + + "abc"
+"abc";

//typen, wie findet man heraus was es ist
typeof [];
typeof {};
typeof new Date()
Object.prototype.toString.call([])
// {}.toString.call([])

//Numbers
99999999999999999 //16 * 9
0.1 +0.2 === 0.3;
0.1 +0.2;
0.1 + 0.3;
0.1 + 0.9 == 1
//IEEE 754 Standard

3 > 2 > 1
3 > 2; //  = true
true > 1
1 > 1;
3 > 2 >= 1
"2" + 1
"2" - 1
"2" - -1

//NaN
typeof NaN
NaN == NaN
isNaN(null) // null is auch eine number
+null;

//kleiner Hinweis zu parseInt( ... ) Bei alten Browsern war dieser oktal-basierend (Auf IE V5 wechseln)
010
0x16
parseInt( "06 ")
parseInt( "09")
parseInt( "09", 10);
parseInt("0x10");
parseInt("0x10",10);

//Infinitiy
Number(Infinity)
parseFloat(Infinity);
parseInt(Infinity)

Math.floor(5.2);
Math.floor(5.2) == ~~5.2; //funktioniert, da bit operationen den Float in einen int32 ändern.
Math.floor(NaN) == ~~NaN//Achtung
//Vorteil: schneller aber unverständlicher, verhalten ev. komisch.

1/0 //Was gibt das?
//1/0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001

Infinity - 1;
1 - Infinity ;
-0 == 0;
-Infinity == Infinity;

Number.MAX_VALUE
Number.MIN_VALUE > 0 // Was gibts?

Math.max(2,3,4);
Math.min(2,3,4);

Math.max() > Math.min();
Math.max();

//Arrays
[] == []
// [] == ![] //booeln auf der rechten seite, wird zu einer Zahl convertiert
![];
+![]; //boolean auf der rechten Seite => number casten
// 0 = 0;
+[] === +![]
2 == [2]
+[2]
+[2,4]

typeof(null);