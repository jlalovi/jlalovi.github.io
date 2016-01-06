window.onload=runAll;
function runAll() {
	var nav_btns = document.getElementsByClassName("nav_btn");
	for(var i = 0; i < nav_btns.length; i++){
		nav_btns[i].addEventListener("click", changeContent);
	}
}

function changeContent() {

	/* Hide all containers */
	var content_containers = document.getElementsByClassName("content_container");
	for(var i = 0; i < content_containers.length; i++){
		content_containers[i].className="content_container invisible";
	}

	/* Visible container */
	var visible_container = document.getElementById(this.id + "Container");
	visible_container.className="content_container";
	
	/* Left column invisible or visible */
	var left_col = document.getElementById("left_col");
	if (this.id=="featuredProjects") left_col.className="invisible";
	else left_col.className="";

	/* Reset color buttons */
	var nav_btns = document.getElementsByClassName("nav_btn");
	for(var j = 0; j < nav_btns.length; j++){
		if (j===0) nav_btns[0].className="nav_btn no_border";
		else nav_btns[j].className="nav_btn";
	}

	if (this.id=="featuredProjects") this.className="nav_btn purple no_border";
	else this.className="nav_btn purple";

}