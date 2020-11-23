/* NAVIGATIE: scrollen naar beneden = scrollen naar rechts, navigatie met pijltjes, reageren op toetsenbord */

scrollConverter.activate(function (offset) {
	//console.log(offset); // Logs the current horizontal scroll offset
});

var alleSchermen = document.querySelectorAll("header, section, footer");
var i = 0;
while (i < alleSchermen.length) {
      var mijnDiv = document.createElement("div");
      mijnDiv.className = "pijlenNavigatie"
      mijnDiv.innerHTML = '<a class="naarLinks" href="#">&larr;</a><a class="naarRechts" href="#">&rarr;</a>';
      alleSchermen[i].appendChild(mijnDiv);
      i++;      
}

var mijnLinksNaarRechts = document.getElementsByClassName("naarRechts");
i = 0;
while(i < mijnLinksNaarRechts.length) {
      mijnLinksNaarRechts[i].onclick = function() {
            window.scrollBy({top: 0, left: window.innerWidth, behavior: 'smooth'});
            return false;
      }
      i++;      
}

var mijnLinksNaarLinks = document.getElementsByClassName("naarLinks");
i = 0;
while(i < mijnLinksNaarLinks.length) {
      mijnLinksNaarLinks[i].onclick = function() {
            window.scrollBy({top: 0, left: -window.innerWidth, behavior: 'smooth'});
            return false;
      }
      i++;      
}

document.onkeydown = function(e) {
      if (e.keyCode === 39 || e.keyCode === 32) {
            var currentState = window.history.state;
            var numberOfEntries = window.history.length;
            console.log(numberOfEntries);
            var stateObj = { foo: "bar" };
history.pushState(stateObj, "page 2", "bar.html");
            window.scrollBy({top: 0, left: window.innerWidth, behavior: 'smooth'});
            return false;
      }
      if (e.keyCode === 37) {
            window.scrollBy({top: 0, left: -window.innerWidth, behavior: 'smooth'});
            return false;
      }
}

var url = new URL(window.location.href);
var pagina = url.searchParams.get("p");
if (pagina !== null ) {
      window.scrollTo({top: 0, left: (window.innerWidth*pagina), behavior: 'smooth'});
}