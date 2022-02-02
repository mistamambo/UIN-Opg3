//Fikk hjelp av Jennie-Lovise N. Bjerke og Leonard Mjekiqi
//Opg1

const del_tex = document.getElementById("remove");
const del_but = document.getElementById("remove-btn");

const Del_tex_lin = () => {
  del_tex.innerHTML = null;
};

del_but.addEventListener("click", Del_tex_lin);

// opg2

const tex_ed = document.getElementById("change");
const ed_but = document.getElementById("change-btn");

const Ed_tex = () => {
  tex_ed.innerHTML = "Jadaaa masaaa";
};

ed_but.addEventListener("click", Ed_tex);

//opg3

const text_inp = document.getElementById("input-text");
const inp = document.getElementById("input");

const DeleteTex = () => {
  text_inp.innerHTML = null;
};

DeleteTex();

const upd_Ui = (event) => {
  let letter = event.key;
  text_inp.innerHTML += letter;
};

inp.addEventListener("keyup", upd_Ui);

//opg4

const myList = ["item one", "item two", "item three"];

const UL = document.getElementById("ul");
const print_but = document.getElementById("write-list");

const create_list = () => {
  const ele_ls = myList.map((new_ele_ls) => `<li>${new_ele_ls}</li>`);
  UL.innerHTML = ele_ls.join("");
};

print_but.addEventListener("click", create_list);

//opg5

const text = document.getElementById("text");
const create_BUT = document.getElementById("create");
const select = document.getElementById("select");
const htmlPlaceHolder = document.getElementById("placeholder");

const create_element = () => {
  const htmlEl = select.value;
  const message = text.value;
  htmlPlaceHolder.innerHTML += `<${htmlEl}>${message}</${htmlEl}>`;
};

create_BUT.addEventListener("click", create_element);

//opg6

const main_Ul = document.getElementById("list");
const delete_but = document.getElementById("remove-li");

const Delete_Li = () => {
  const last_el = main_Ul.lastElementChild;
  if (last_el) {
    main_Ul.removeChild(last_el);
  }
};

delete_but.addEventListener("click", Delete_Li);

//opg7

const inp_cont = document.getElementById("name");
const order_but = document.getElementById("order");

const Dis_key_red = () => {
  const content = inp_cont.value;
  if (content && content.length >= 5) {
    order_but.disabled = true;
    order_but.style = "border: 1px solid red";
  } else {
    order_but.disabled = false;
    order_but.style = "border: 1px solid black";
  }
};

inp_cont.addEventListener("keyup", Dis_key_red);

//oppg8

const ul_Parent = document.querySelector(".children");
const ul_ParentChildren = ul_Parent.querySelectorAll("li");
const color_but = document.getElementById("color");

const add_border = () => {
  Array.from(ul_ParentChildren).forEach((li, index) => {
    if ((index + 1) % 2 === 0) {
      li.style = "border: 1px solid orange; margin-bottom: 10px; padding: 5px;";
    } else {
      li.style = "border: 1px solid blue; margin-bottom: 10px; padding: 5px;";
    }
  });
};

color_but.addEventListener("click", add_border);
