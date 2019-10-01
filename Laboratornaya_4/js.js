function showargs()
{ 
	// var n = 0;
	var arglist = "Hello";
	// for (var n=0; n < arguments.length; n++) 
	// {
	// 	arglist += n +"." + arguments[n] + "\n";
	// }
	alert(arglist); 
}
var delay = 100;
	var count = 1;
function animation()
{
	var string;
	string = "works/s";
	var end;
	end = ".gif";
	var full_url = string + count + end;
	document.animations.src = full_url;// + string + ".gif";
	count++;
	if (count == 13){count = 1;}
}

function freeze()
{
	delay += 100;
}
function stop()
{
	var cmd = "animation()";
	idTimer=setTimeout(cmd, delay);

}
