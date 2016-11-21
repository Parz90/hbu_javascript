function showHelloWorld() {
    alert('Hello World!');
	var myTest = 'ich bin irgend ein lustiger string';
	return myTest;
};


var returnValue = showHelloWorld();
alert("ich bin der return value " + returnValue);