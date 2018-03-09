function myPrint(evt)
{	 
	//reading file
	var f = evt[0]; 
	alert(f);
	if (f) {
		var r = new FileReader();
		r.onload = function(e) { 
			var contents = e.target.result;
			alert( "Got the file\n" 
				  +"name: " + f.name + "\n"
				  +"type: " + f.type + "\n"
				  +"size: " + f.size + " bytes\n"
				  + "starts with: " + contents.substr(0, 50)
			);  
			tripleFrequency(letters, contents);
		}
		r.readAsText(f);
	} else { 
		alert("Failed to load file");
		return;
	}
	//end read file
	
	//making list of machine code hex values - individual pairs for now
	var hexChars = ["0", "1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
	var letters = [];
	for (var i = 0; i < 16; i++)
	{
		for (var j = 0; j < 16; j++)
		{
			var index = i * 16 + j;
			letters[index] = hexChars[i] + hexChars[j];
		}
	}
	//end list of machine code hex values		 
}


function indexOf(letters, code)
{
	var start = 0;
	var end = letters.length;
	var mid = 0;
	//should only go lg2(letters.length) times but this guarantees a return just in case
	for (var i = 0; i < letters.length / 2; i++) 
	{
		mid = Math.round((start + end) / 2);
		//alert("letters mid " + letters[mid]);
		//alert("code is " + code);
		if (letters[mid] == code)
		{
			return mid;
		}
		else if (letters[mid] > code)
		{
			end = mid - 1;
			continue;
		}
		else start = mid + 1;
	}
	return -1;
}

function singleFrequency(letters, text)
{
	//begin freq analysis
	var array = text.split(" "); //all pairs are now parts of an array
	var count = []; //frequency counter
	for (var i = 0; i < letters.length; i++)
	{
		count[i] = 0; //initialize every count to 0;
	}
	var index = 0;
	for (var i = 0; i < array.length; i++)
	{
		//index = letters.indexOf(array[i]);
		index = indexOf(letters, array[i]);
		count[index]++;
	}
	//end freq analysis
	
	//sorting
	var sortedCount = [];
	var sortedChars = [];
	for (var i = 0; i < count.length; i++)
	{
		var max = 0;
		var temp = 0;
		for (var j = 0; j < count.length; j++)
		{
			if (count[j] >= max)
			{
				max = count[j];
				temp = j;
			}
		}
		count[temp] = 0;
		sortedCount[i] = max;
		sortedChars[i] = letters[temp];
	}
	//end sorting
	
	for (var i = 0; i < sortedChars.length; i++)
	{
		alert(i + " : " + sortedChars[i] + ": " + sortedCount[i]); //print frequency of each hex
	}
}

function doubleFrequency(letters, text)
{
	//begin doublefreq analysis
	var array = text.split(" ");
	var count = [];
	var length = letters.length * letters.length;
	var doubleLetters = [];
	for (var i = 0; i < letters.length; i++)
	{
		for (var j = 0; j < letters.length; j++)
		{
			var index = i * letters.length + j;
			doubleLetters[index] = letters[i] + letters[j];
			count[index] = 0;
		}
	}

	var index = 0;
	for (var i = 0; i < length - 1; i++)
	{
		//index = doubleLetters.indexOf(array[i] + array[i + 1]);
		index = indexOf(doubleLetters, (array[i] + array[i + 1]));
		count[index]++;
	}
	
	for (var i = 0; i < count.length - 1; i++)
	{
		if (count[i] == 0) continue;
		alert(i + " : " + doubleLetters[i] + ": " + count[i]); //print frequency of each hex
	}
}


function tripleFrequency(letters, text)
{
	//begin doublefreq analysis

	var array = text.split(" ");
	var count = [];
	var lengthCubed = letters.length * letters.length * letters.length;
	var lengthSquared = letters.length * letters.length;
	var lengthSingle = letters.length;
	
	var Iindex = 0;
	var Ichar = "";
	var Jindex = 0;
	var Jchar = "";
	
	var tripleLetters = [];
	try {
		for (var i = 0; i < lengthSingle; i++)
		{
			Iindex = i * lengthSquared;
			Ichar = letters[i];
			for (var j = 0; j < lengthSingle; j++)
			{
				Jindex = j * lengthSingle;
				Jchar = letters[j];
				for (var k = 0; k < lengthSingle; k++)
				{

					var index = Iindex + Jindex + k;
					tripleLetters[index] = Ichar + Jchar + letters[k];
					count[index] = 0;
				}
			}
		}
		alert("starting to count");
		var index = 0;
		for (var i = 0; i < lengthCubed - 2; i++)
		{
			//index = tripleLetters.indexOf(array[i] + array[i + 1] + array[i + 2]);
			if (i % 10000 == 0) alert(i);
			index = indexOf(tripleLetters, (array[i] + array[i + 1] + array[i + 2]));
			count[index]++;
		}
		alert("done counting");
		for (var i = 0; i < count.length - 1; i++)
		{
			//if (count[i] == 0) continue;
			alert(i + " : " + tripleLetters[i] + ": " + count[i]); //print frequency of each hex
		}
	}
	catch (ex)
	{
		alert("I DIED");
	}
}