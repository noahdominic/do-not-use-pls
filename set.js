//written by Noah Dominic Miranda Silvio on 05-12-2017
//DISCLAIMER: This code snippet was written for experimental and not practical purposes.
//I do not encourage using this to actually evaluate your professors, UP Cebu students. Evaluation of professors is an essential part of the academe. It helps professors identify weak points in their teaching methods and it helps them improve upon those points. 

//Rating values:
// 1 - Excellent
// 2 - Very Good
// 3 - Good
// 4 - Fair
// 5 - Poor

//experiment with these values
var bias = 2;		//is the value the rating is most likely to lean on
var influence = 1.0; 	//can be set from 0.0 to 1.0 (may go over 1.0 but may produce unpredicatble results)
var min = 1;		//minimum value for rating 
var max = 5;		//maximum value for rating 

var eles = [];

var inputs = document.getElementsByTagName("input");

for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].name.indexOf('answers[') == 0) {
        eles.push(inputs[i]);
    }
}

var rating;
for(var i = 0; i < eles.length; i = i + 5) {
	rating = getRndBias(1, 5, bias, 1);
	eles[i + rating - 1].click();
}

//Credits to stackoverflow user @K3n
//More at https://stackoverflow.com/questions/29325069/how-to-generate-random-numbers-biased-towards-one-value-in-a-range
function getRndBias(min, max, bias, influence) {	
	var rnd = Math.random() * (max - min) + min,
	    mix = Math.random() * influence;
	return Math.round(rnd * (1 - mix) + bias * mix);
}
