import { direBonjour } from "./lib.js";

//direBonjour("Christian");
//console.log(uuid.v4());

const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const elems = e.target.elements;
  const tbody = document.querySelector("#table tbody");

  let valid = true;

  for (let i = 0; i < elems.length; i++) {
    if (elems[i].type !== "submit" && !elems[i].value) {
      valid = false;
    }
  }

  if (valid) {
    const error = document.querySelector("#error");
    error.innerHTML = "";

    const tr = document.createElement("tr");

    let td = document.createElement("td");
    td.innerText = uuid.v4();
    tr.append(td);

    td = document.createElement("td");
    const nom = elems.nom;
    td.innerText = nom.value;
    tr.append(td);

    td = document.createElement("td");
    const prenom = elems.prenom;
    td.innerText = prenom.value;
    tr.append(td);

    td = document.createElement("td");
    const email = elems.email;
    td.innerText = email.value;
    tr.append(td);

    td = document.createElement("td");
    td.innerHTML = "<button>Del</button><button>Edit</button>";
    tr.append(td);
    tr.addEventListener("click", function () {
      this.remove();
    });

    tbody.append(tr);

    elems.nom.value = "";
    elems.prenom.value = "";
    elems.email.value = "";
  } else {
    console.log("test");
    const h1 = document.querySelector("h1");
    h1.innerHTML +=
      '<div id="error" style="color:red;font-weight:bold;font-size:15px">Erreur : Tous les champs doivent être remplis !</div>';
  }
});
