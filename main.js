let allBlogs = [];

function putMyBlogsInDom(){
	var blogsData = JSON.parse(this.responseText);
	//console.log("blog posts", blogsData.blogs);
	allBlogs = blogsData.blogs;
	blogDomString(blogsData.blogs);
}

const ifLoadFails = () => {
	console.log("it's broken");
}

const myBlogs = new XMLHttpRequest();
myBlogs.addEventListener("load", putMyBlogsInDom);
myBlogs.addEventListener("error", ifLoadFails);
myBlogs.open("GET", "blogPosts.json");
myBlogs.send();

const blogDomString = (myThoughts) => {
	let domString = "";
	for(let i = 0; i < myThoughts.length; i++) {
		domString+=		`<article class="cards col-md-3">`;
		domString+=			`<div id="blogHeading_${i}" class="title child">`;
		domString+=				`<h4>${myThoughts[i].title}</h4>`;
		domString+=				`<span>${myThoughts[i].date}</span>`;
		domString+=			`</div>`;
		domString+=			`<div id="blogContent_${i}" class="content child">`;
		domString+=				`<p>${myThoughts[i].content}</p>`;				
		domString+=			`</section>`;
		domString+=			`</article>`;
	}

	//console.log("I am on the blog page.", domString);
	writeToDom(domString);
}

const writeToDom = (entries) => {
	document.getElementById("blogHolder").innerHTML = entries;
}

//Whenever the user clicks on a specific blog post card, that blog should
//appear in a special div (that spans all 12 columns) above all of the blog
//posts and should show the full content of the blog. When the user clicks on
//another blog post, it should replace the content of this special div with
//the content of the new blog post the user selected.

document.getElementById("blogHolder").addEventListener("click", function(e){
	console.log("click event", e);
	blogBox(e);
	printSelectedBlog(e);
	});

let selectedBlogCard;

const blogBox = (e) => {
	if(e.target.classList.contains("child")){
		selectedBlogCard = e.target.parentNode;
	} else if(e.target.parentNode.parentNode.classList.contains("cards")){
		selectedBlogCard = e.target.parentNode.parentNode;
	} else if(e.target.classList.contains("cards")){
		selectedBlogCard = e.target;
	}
	console.log("in blogBox function", selectedBlogCard);
}

const printSelectedBlog = (myStuff) => {
	let blogHeading = selectedBlogCard.childNodes[0].childNodes;
	let blogText = selectedBlogCard.childNodes[1].childNodes;
	// console.log("heading in printedSelectedBlog", selectedBlogCard.childNodes[0].childNodes[0]);
	// console.log("date in printedSelectedBlog", selectedBlogCard.childNodes[0].childNodes[1].childNodes[0])//childNodes[0]);
	// console.log("title contents", selectedBlogCard.childNodes[0].childNodes);
	console.log("in printedSelectedBlog", blogHeading);
	console.log("in printSelectedBlog", blogText);

	selectedBlogCard.childNodes[0].childNodes.innerText = `${forHeader}`;
	//selectedBlogCard.childNodes[1].childNodes[0].innerHTML = `${function() {}orContent}`;
	//console.log("blogHeading", blogHeading, "blogText", blogText );
}
