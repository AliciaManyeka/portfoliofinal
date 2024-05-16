const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
    bodyEl.style.color="white";
  } else {
    bodyEl.style.background = "white";
    bodyEl.style.color="black";
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}

  let words=document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span=document.createElement("span")
        span.textContent=letter;
        span.className="letter";
        word.append(span)
    })
})
let currentWordIndex =0;
let maxWordIndex= words.length -1;
words[currentWordIndex].style.opacity="1";
let text=  ()=>{
    let currentWord=words[currentWordIndex];
    let nextWORD=currentWordIndex===maxWordIndex ? words[0]:words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{setTimeout(()=>{
        letter.className="letter out"
    }, i*80);
      
        
    });
    nextWORD.style.opacity=1
    Array.from(nextWORD.children).forEach((letter,i)=>{let className="letter behind";
        setTimeout(()=>{
            letter.className= "letter in"

        },340 + i * 80);
    })
    currentWordIndex=currentWordIndex===maxWordIndex ? 0: currentWordIndex + 1;
};

text();
setInterval(text,3000)


var closeBtn = document.querySelectorAll(".close"),
    card = document.querySelectorAll(".card"),
    btnActions = document.querySelectorAll(".btn");

closeBtn.forEach(function(el) {
  el.addEventListener("click", closeCard);
});

card.forEach(function(el) {
  el.addEventListener("click", openCard);
});

btnActions.forEach(function(el) {
  el.addEventListener("click", clickBtn);
});

function closeCard(event) {
  event.stopPropagation();
  event.target.closest(".card").classList.add("closed");

}

function openCard(event) {
  if (event.currentTarget.classList.contains("closed")) {
    event.currentTarget.classList.remove("closed");
  } 
}

function clickBtn(event) {
  if (event.currentTarget.classList.contains("clicked")) {
    event.currentTarget.classList.remove("clicked");
  } else {
    event.currentTarget.classList.add("clicked");
  }
}



// $(document).ready(function(){
// 	progress_bar();
// });

// function progress_bar() {
// 	var speed = 30;
// 	var items = $('.progress_bar').find('.progress_bar_item');
	
//     items.each(function() {
//         var item = $(this).find('.progress');
//         var itemValue = item.data('progress');
//         var i = 0;
//         var value = $(this);
		
//         var count = setInterval(function(){
//             if(i <= itemValue) {
//                 var iStr = i.toString();
//                 item.css({
//                     'width': iStr+'%'
//                 });
//                 value.find('.item_value').html(iStr +'%');
//             }
//             else {
//                 clearInterval(count);
//             }
//             i++;
//         },speed);
//     });
// }

// projects

var modalInfo = {
  1: {
    title: "Project 1",
    info: "...",
    link: "#",
    github: "#"
  },
  2: {
    title: "Project 2",
    info: "...",
    link: "#",
    github: "#"
  },
  3: {
    title: "Project 3",
    info: "...",
    link: "#",
    github: "#"
  },
  4: {
    title: "Project 4",
    info: "....",
    link: "#",
    github: "#"
  },
  5: {
    title: "Project 5",
    info: "...",
    link: "#",
    github: "#"
  },
  6: {
    title: "Project 6",
    info: "...",
    link: "#",
    github: "#"
  }
};

var modal = document.getElementById('preview');


var btn = document.getElementsByClassName("button");


var span = document.getElementsByClassName("close")[0];

 
for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener("click", function() {
    var project = btn[i].parentElement;
    openModal(project);
  })
};

function openModal(project){
  var id = project.id;
  var img = project.getElementsByTagName("img")[0].src;
  fillOut(id, img);
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].classList.add("scale");
}

function fillOut(id, img){
  document.getElementById("title").innerHTML = modalInfo[id].title;
  document.getElementById("info").innerHTML = modalInfo[id].info;
  document.getElementById("img").src = img;
  document.getElementById("live").onclick = function(){
    window.open(modalInfo[id].link,'_blank');
  }
  document.getElementById("github").onclick = function(){
    window.open(modalInfo[id].github,'_blank');
  }
}


span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


