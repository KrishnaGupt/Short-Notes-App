giveNotes();
const addBtn = document.getElementById("addbtn");

addBtn.addEventListener("click", addNote);

function addNote(e) {
  const addtitle = document.getElementById("addtitle");
  const addtxt = document.getElementById("addtxt");
  const title = localStorage.getItem("title");
  const notes = localStorage.getItem("notes");
  if (addtxt.value == "" || addtitle.vlaue == "") {
    let messege = document.querySelector('#message')
    messege.innerHTML = `<div class="alert-danger">
    <p id="alert">Sorry, you cannot add note. please enter correct data to add note!</p>
  </div>`
// automatically disappear of the error
    setTimeout(() => {
        messege.innerHTML = '';
    }, 10000);
}
else{
  if (title == null) {
    titleObj = [];
  } else {
    titleObj = JSON.parse(title);
  }
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let noteObj = {
    title: addtitle.value,
    text: addtxt.value,
  };
  notesObj.push(noteObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addtitle.value = "";
  addtxt.value = "";

  giveNotes();
}
}
function giveNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let html = "";

  notesObj.forEach(function (element, index) {
    html += `<div class="noteCard card" style=" font-size: 15px;">
            <div class="card-body">
                <p class="card-title box">${element.title}</p>
                <hr>
                <p class="card-text box">${element.text}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn delbtn">Delete now</button>
            </div>
        </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `It looks that you didn't added any note here. Add a note from above!`;
  }
}

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1)
  localStorage.setItem("notes", JSON.stringify(notesObj));
    giveNotes();
}

setInterval(timer , 1000);

function timer() {
  const body = document.querySelector('body')
  const btn = document.querySelector('.btn')
  const hr = document.querySelector('hr')
  const date = new Date().getHours()
    if (date >= 19 || date <5) {
    // console.log('it is night');
      body.style.background = 'url(Backgrounds/night.jpg)'
      body.style.backgroundSize = 'cover'
      body.style.color = 'white'
      btn.style.color = 'white'
      btn.style.borderColor = 'white'
      hr.style.background = 'white'
  }
  else if (date >= 5 && date <7) {
    // console.log('it is sunrise');
    body.style.background = 'url(Backgrounds/sunrise.jpg)'
      body.style.backgroundSize = 'cover'
  }
  else if (date >= 7 && date <16) {
    // console.log('it is day');
    body.style.background = 'url(Backgrounds/day.jpg)'
      body.style.backgroundSize = 'cover'
  }
  else if (date >= 16 && date <19) {
    // console.log('it is sunset');
    body.style.background = 'url(Backgrounds/sunset.jpg)'
      body.style.backgroundSize = 'cover'
  }
}
timer()
