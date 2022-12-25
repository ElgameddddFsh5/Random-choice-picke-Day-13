let TextArea = document.getElementById("textarea"),
  choices = document.querySelector(".choices");
TextArea.focus();
TextArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if(e.key === 'Enter'){
    setTimeout(() => {
        e.target.value = ''
    }, 10);
    randomSelect()
  }
});
function createTags(input) {
  let tags = input.split(",").filter((tag)=>tag.trim()!=='').map(tag=>tag.trim());
  choices.innerHTML ='';
tags.forEach(tag => {
    let tagEl = document.createElement('p')
    tagEl.classList.add("tag");
    tagEl.innerText = tag
    choices.appendChild(tagEl)
});
}
function randomSelect(){
    let times = 30,
     interval = setInterval(() => {
        let randomTag = pickRandomTag()
        HighlightTag(randomTag);
        setTimeout(() => {
            UnHighlightTag(randomTag);
        }, 100);
    }, 100);
    setTimeout(() => {
            clearInterval(interval);
            setTimeout(() => {
                let randomTag=pickRandomTag()
                HighlightTag(randomTag)
            }, 100);
    }, times *100);
}
function pickRandomTag(){
    let tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}
function HighlightTag(tag){
    tag.classList.add("highlight");
}
function UnHighlightTag(tag) {
  tag.classList.remove("highlight");
}