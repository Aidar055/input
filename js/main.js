let API = "http://localhost:8000/posts";

let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");
let inp3 = document.querySelector(".inp3");
let inp4 = document.querySelector(".inp4");
let container = document.querySelector(".smal_container");
let add = document.querySelector(".add");
let btn1 = document.querySelector("#btn");
btn1.addEventListener("click", (e) => {
  container.style.display = "block";
  add.style.display = "block";
});
add.addEventListener("click", (e) => {
  if (
    !inp1.value.trim() ||
    !inp2.value.trim() ||
    !inp3.value.trim() ||
    !inp4.value.trim()
  ) {
    alert("Внимательно заполните");
  }
  let newObj = {
    name: inp1.value,
    lastname: inp2.value,
    age: inp3.value,
    image: inp4.value,
  };
  creat(newObj);
  inp1.value = "";
  inp2.value = "";
  inp3.value = "";
  inp4.value = "";
});

function creat(obj) {
  fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(obj),
  }).then(() => readTask());
}
let clis = document.querySelector(".clis");
function readTask() {
  fetch(API)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      clis.innerHTML = "";
      data.forEach((element) => {
        clis.innerHTML += ` <div class="smi_container">
        <img src="${element.image}" alt="">
        <div class="cardName">Имя: ${element.name}</div>
        <div class="cardSurnName">Фамилия: ${element.lastname}</div>
        <div class="cardAge">Возраст: ${element.age}</div>
        <button id=${element.id} class="delate_btn">Delete</button>
        <button id=${element.id} class="btnEdit">edit</button></li>
      </div>`;
      });
    });
}
readTask();
document.addEventListener("click", (e) => {
  let del_class = [...e.target.classList];
  if (del_class.includes("delate_btn")) {
    let del_id = e.target.id;
    fetch(`${API}/${del_id}`, {
      method: "DELETE",
    }).then(() => readTask());
  }
});

let ipnEdit = document.querySelector(".edit_btn1");
let ipnEdit2 = document.querySelector(".edit_btn2");
let ipnEdit3 = document.querySelector(".edit_btn3");
let btnEditSave = document.querySelector(".btnEditSave");
let containerInp = document.querySelector(".inputs");
document.addEventListener("click", (e) => {
  let editClass = [...e.target.classList];
  if (editClass.includes("btnEdit")) {
    containerInp.style.display = "block";
    let id = e.target.id;
    fetch(`${API}/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        ipnEdit.value = data.name;
        btnEditSave.setAttribute("id", data.id);
      });
  }
});
btnEditSave.addEventListener("click", (e) => {
  let editTask = {
    name: ipnEdit.value,
  };
  editedTask(editTask, btnEditSave.id);
  containerInp.style.display = "none";
});
function editedTask(editTask, id) {
  fetch(`${API}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(editTask),
  }).then(() => readTask());
}
// !
document.addEventListener("click", (e) => {
  let editClass = [...e.target.classList];
  if (editClass.includes("btnEdit")) {
    containerInp.style.display = "block";
    let id = e.target.id;
    fetch(`${API}/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        ipnEdit2.value = data.lastname;
        btnEditSave.setAttribute("id", data.id);
      });
  }
});
btnEditSave.addEventListener("click", (e) => {
  let editTask = {
    lastname: ipnEdit2.value,
  };
  editedTask2(editTask, btnEditSave.id);
  containerInp.style.display = "none";
});
function editedTask2(editTask, id) {
  fetch(`${API}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(editTask),
  }).then(() => readTask());
}
// !
document.addEventListener("click", (e) => {
  let editClass = [...e.target.classList];
  if (editClass.includes("btnEdit")) {
    containerInp.style.display = "block";
    let id = e.target.id;
    fetch(`${API}/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        ipnEdit3.value = data.age;
        btnEditSave.setAttribute("id", data.id);
      });
  }
});
btnEditSave.addEventListener("click", (e) => {
  let editTask = {
    age: ipnEdit3.value,
  };
  editedTask2(editTask, btnEditSave.id);
  containerInp.style.display = "none";
});
function editedTask2(editTask, id) {
  fetch(`${API}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(editTask),
  }).then(() => readTask());
}
