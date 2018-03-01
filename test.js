function myPrint(evt)
{	 
	//if (window.File && window.FileReader && window.FileList && window.Blob)
	//{
		var f = evt[0]; 
		var content = "";
		alert(f);
		if (f) {
			var r = new FileReader();
						alert("got here");

			r.onload = function(e) { 
				var contents = e.target.result;
				content = contents;
				alert( "Got the file\n" 
					  +"name: " + f.name + "\n"
					  +"type: " + f.type + "\n"
					  +"size: " + f.size + " bytes\n"
					  + "starts with: " + contents.substr(0, 50)
				);  
			}
			alert("reading");
			r.readAsText(f);
		} else { 
			alert("Failed to load file");
			return;
		}
		alert("5");
		
		var letters = {};
		for (int i = 0; i < 16; i++)
		{
			for (int j = 0; j < 16; j++)
			{
				
			}
		}
		
		

	document.getElementById('demo').addEventListener('change', readSingleFile, false);
		 
}

