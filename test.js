
function myPrint(evt)
{
	var f = evt[0];
	if (f) {
		var r = new FileReader();
		r.onload = function(e) {
			var contents = e.target.result;
			saveFrequency(singleFrequency(letters, contents), doubleFrequency(letters, contents), tripleFrequency(letters, contents));

		}
		r.readAsText(f);
	} else {
		alert("Failed to load file");
		return;
	}
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

function saveFrequency(single, double, triple)
{
	var leftString = "";
	var midString = "";
	var rightString = "";
	for (var i = 0; i < single.length; i++)
	{
		leftString += "<li>" + single[i] + "</li>";
	}
	for (var i = 0; i < double.length; i++)
	{
		midString += "<li>" + double[i] + "</li>";
	}
	for (var i = 0; i < triple.length; i++)
	{
		rightString += "<li>" + triple[i] + "</li>";
	}
	var div = document.getElementById('leftCol');
	console.log(div);
	div.innerHTML = leftString;
	div = document.getElementById('middleCol');
	console.log(div);
	div.innerHTML = midString;
	div = document.getElementById('rightCol');
	console.log(div);
	div.innerHTML = rightString;

}


function removeUnused(count, letters)
{
	var newCount = [];
	var newLetters = [];
	var index = 0;
	for (var i = 0; i < count.length; i++)
	{
		if (count[i] == 0) continue;
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
	var array = text.split(" ");
	var finalArray = [];
	var count = [];
	var singleLetters = letters;

	try {
		for (var i = 0; i < singleLetters.length; i++)
		{
				count[i] = 0;
		}
		var index = 0;
		for (var i = 0; i < array.length; i++)
		{
			index = indexOf(singleLetters, (array[i]));
			count[index]++;
		}
		var trimmedArr = removeUnused(count, singleLetters);
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
		return finalArray;
	}
	catch (ex)
	{
		alert(ex.message);
	}
}

function doubleFrequency(letters, text)
{
	var array = text.split(" ");
	var finalArray = [];
	var count = [];
	var lengthSingle = letters.length;
	var lengthSquared = lengthSingle * lengthSingle;
	var Iindex = 0;
	var Ichar = "";
	var doubleLetters = [];

	try {
		for (var i = 0; i < lengthSingle; i++)
		{
			Iindex = i * lengthSingle;
			Ichar = letters[i];
			for (var j = 0; j < lengthSingle; j++)
			{
				var index = Iindex + j;
				doubleLetters[index] = Ichar + letters[j];
				count[index] = 0;
			}
		}
		var index = 0;
		for (var i = 0; i < array.length - 1; i++)
		{
			index = indexOf(doubleLetters, (array[i] + array[i + 1]));
			count[index]++;
		}
		var trimmedArr = removeUnused(count, doubleLetters);
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
		return finalArray;
	}
	catch (ex)
	{
		alert(ex.message);
	}
}


function tripleFrequency(letters, text)
{
	var array = text.split(" ");
	var finalArray = [];
	var count = [];
	var lengthSingle = letters.length;
	var lengthSquared = lengthSingle * lengthSingle;
	var lengthCubed = lengthSingle * lengthSquared;
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
		return finalArray;
	}
	catch (ex)
	{
		alert(ex.message);
	}
}
