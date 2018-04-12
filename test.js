String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

function myPrint(evt)
{
	var gramCount = 6; //CHANGE THIS TO INCREASE GRAM ANALYSIS
	div = document.getElementById('replaceme');
	console.log(div);
	div.innerHTML = "Index : Machine Code Set : Frequency";
	var f = evt[0];
	if (f) {
		var r = new FileReader();
		r.onload = function(e) {
			var contents = e.target.result;
			for (var i = 1; i <= gramCount; i++)
			{
				printFrequency(Frequency(letters, contents, i), i);
			}
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
}

function printFrequency(array, gram)
{
	var string = "<li>" + gram + "-Gram</li>";
	for (var i = 0; i < array.length; i++)
	{
		string += "<li>" + array[i] + "</li>";
	}
	var div = document.getElementById(gram);
	console.log(div);
	div.innerHTML = string;
}

function removeUnused(count, letters) //function not called but could be useful for later
{
	var MINIMUM_COUNT = 1;
	var newCount = [];
	var newLetters = [];
	var index = 0;
	for (var i = 0; i < count.length; i++)
	{
		if (count[i] <= MINIMUM_COUNT) continue;
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



function Frequency(letters, text, gram)
{
	var array = text.split(" ");
	var finalArray = [];
	var count = [];
	var Letters = [];

	try {
		var index = 0;
		for (var i = 0; i < array.length - gram + 1; i++)
		{
			var temp = "";
			for (var j = 0; j < gram; j++)
			{
				temp += array[i + j];
			}
			index = Letters.indexOf(temp);
			if (index == -1)
			{
				Letters[Letters.length] = temp;
				count[Letters.length] = 1;
			}
			else count[index]++;
		}
		var tmp = quickSort(count, Letters, 0, count.length - 1);
		var sortedCount = tmp[0];
		var sortedChars = tmp[1];
		index = 0;
		for (var i = 0; i < sortedChars.length; i++)
		{
			var temp = (i + " : " + sortedChars[i] + ": " + sortedCount[i]);
			finalArray[index] = temp;
			index++;
		}
		Letters = [];
		return finalArray;
	}
	catch (ex)
	{
		alert(ex.message);
	}
}
