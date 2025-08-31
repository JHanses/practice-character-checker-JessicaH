// Exercise 1 //

{
	let inputString = "Jessica";
	let codePoint1 = inputString.charCodeAt(0);
	let codePoint2 = inputString.charCodeAt(1);
	let sumCodePoints = codePoint1 + codePoint2;
	console.log(sumCodePoints);
}

// Exercise 2 //

{
	let codePoint1 = 91;
	let codePoint2 = 121;
	let combinedString = String.fromCharCode(codePoint1) + 	String.fromCharCode(codePoint2);
	console.log(combinedString);
}

// Exercise 3 //

{
	let inputString = "Jessica";
	let index1 = 3;
	let index2 = 5;
	let codePointDifference = Math.abs(inputString.charCodeAt (index1) - 	inputString.charCodeAt (index2));
	console.log(codePointDifference);
}

// Task 1 //

{
	let inputString = "Code";
	let firstCodePoint = inputString.charCodeAt(0);
	let thirdCodePoint = inputString.charCodeAt(2)
	console.log(firstCodePoint, thirdCodePoint);
}

// Task 2 //

{
	let codes = [72,101,108, 108];
	let wordFromCodePoints = String.fromCharCode(...codes);
	console.log(wordFromCodePoints);
}	

// Task 3 //

{
	let inputString = "Launch";
	let firstCode = inputString.charCodeAt(0);
	let lastCode= inputString.charCodeAt(inputString.length - 1);
	let swappedString = String.fromCharCode(lastCode) + inputString.slice(1, 	inputString.length -1) + String.fromCharCode(firstCode);
	console.log(swappedString);
}


