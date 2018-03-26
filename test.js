
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
			var array = tripleFrequency(letters, contents);
				alert("calling");

			saveFrequency(array);
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

function saveFrequency(myArray)
{
	/*	alert("writing");

	var fs = require('fs');

	var file = fs.createWriteStream('array.txt');
	file.on('error', function(err) { });
	myArray.forEach(function(v) { file.write(v.join(', ') + '\n'); });
	file.end();
	alert("written");*/
	/*alert("create file");
	var blob= new Blob([content], {type: "text/plain;charset=utf-8"});
	
	saveAs(blob, frequency.text);
	alert("created file");*/
	var string = "";
	for (var i = 0; i < myArray.length; i++)
	{
		string += "\n" + myArray[i];
	}
	document.getElementById("demo").innerHTML = string;

	alert(string);
	
}

function removeUnused(count, letters) 
{
	var newCount = [];
	var newLetters = [];
	var index = 0;
	for (var i = 0; i < count.length; i++) 
	{
		if (count[i] <= 8) continue;
		else 
		{
			newCount[index] = count[i];
			newLetters[index] = letters[i];
			index++;
		}
	}
	var returnArr = [];
	returnArr[0] = newCount;
	returnArr[1] = newLetters;
	return returnArr;
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

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, letters, left, right) {

    var pivot   = items[Math.round((-.5 + left + right) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (items[i] > pivot) {
            i++;
        }

        while (items[j] < pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
			swap(letters, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function quickSort(items, letters, left, right) {

    var index = 0;
    if (items.length > 1) {
        index = partition(items, letters, left, right);

        if (left < index - 1) {
            quickSort(items, letters, left, index - 1);
        }

        if (index < right) {
            quickSort(items, letters, index, right);
        }

    }
	var val = [];
	val[0] = items;
	val[1] = letters;
    return val;
}


function singleFrequency(letters, text)
{
	//begin freq analysis
	var finalArray = [];
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

	index = 0;
	for (var i = 0; i < sortedCount.length; i++)
	{
		if (sortedCount[i] <= 5) continue;
		//alert(i + " : " + tripleLetters[i] + ": " + count[i]); //print frequency of each hex
		var temp = (i + " : " + sortedChars[i] + ": " + sortedCount[i]);
		finalArray[index] = temp;
		index++;
	}
	return finalArray;
}

function doubleFrequency(letters, text)
{
	//begin doublefreq analysis
	var array = text.split(" ");
	var count = [];
	var finalArray = [];
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
	alert("counting");
	var index = 0;
	for (var i = 0; i < array.length - 1; i++)
	{
		//index = doubleLetters.indexOf(array[i] + array[i + 1]);
		index = indexOf(doubleLetters, (array[i] + array[i + 1]));
		count[index]++;
	}
	/*alert("done counting");
	for (var i = 0; i < count.length - 1; i++)
	{
		if (count[i] == 0) continue;
		alert(i + " : " + doubleLetters[i] + ": " + count[i]); //print frequency of each hex
	}*/
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
		sortedChars[i] = doubleLetters[temp];
	}
	
	index = 0;
	for (var i = 0; i < sortedCount.length; i++)
	{
		if (sortedCount[i] <= 5) continue;
		//alert(i + " : " + tripleLetters[i] + ": " + count[i]); //print frequency of each hex
		var temp = (i + " : " + sortedChars[i] + ": " + sortedCount[i]);
		finalArray[index] = temp;
		index++;
	}
	return finalArray;
}


function tripleFrequency(letters, text)
{
	//begin triplefreq analysis

	var array = text.split(" ");
	var finalArray = [];
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
		var index = 0;
		for (var i = 0; i < array.length - 2; i++)
		{
			index = indexOf(tripleLetters, (array[i] + array[i + 1] + array[i + 2]));
			count[index]++;
		}
		var trimmedArr = removeUnused(count, tripleLetters);
		
		alert("trimmed length is " + trimmedArr[0].length);
		
		var tmp = quickSort(trimmedArr[0], trimmedArr[1], 0, trimmedArr[0].length - 1);
		var sortedCount = tmp[0];
		var sortedChars = tmp[1];
		
		index = 0;
		for (var i = 0; i < sortedCount.length; i++)
		{
			var temp = (i + " : " + sortedChars[i] + ": " + sortedCount[i]);
			finalArray[index] = temp;
			index++;
		}
		//end sorting
			
		return finalArray;
	}
	catch (ex)
	{
		alert(ex.message);
	}
}