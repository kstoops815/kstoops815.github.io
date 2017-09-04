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
		domString+=		`<article class="cards col-md-4">`;
		domString+=		`<div class="title">`;
		domString+=			`<h4>${myThoughts[i].title}</h4>`;
		domString+=			`<span>${myThoughts[i].date}</span>`;
		domString+=		`</div>`;
		domString+=		`<section>`;
		domString+=			`<p>${myThoughts[i].content}</p>`;				
		domString+=		`</section>`;
		domString+=		`</article>`;
	}

	//console.log("I am on the blog page.", domString);
	writeToDom(domString);
}

const writeToDom = (entries) => {
	document.getElementById("blogHolder").innerHTML = entries;
}