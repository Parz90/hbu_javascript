	function sortieren() {
		var eingabeElement = document.getElementById("eingabe");
		var ausgabeElement = document.getElementById("ausgabe");
		var zahlen = eingabeElement.value.split(",");

		for(i = 0; i < zahlen.length; i++){
			for(j = 0; j < zahlen.length-1; j++){
				if(zahlen[j] > zahlen[j+1]){
					var tmp = zahlen[j];
					zahlen[j] = zahlen[j+1];
					zahlen[j+1] = tmp;
				}
			}
		}
		
		ausgabeElement.value = zahlen;
	}