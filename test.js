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
			frequency(letters, contents);
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

function frequency(letters, text)
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
		index = letters.indexOf(array[i]);
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
