let btnSend = document.querySelector(".btn_send")
let hover_effect_inp1 = document.querySelector("#hover_effect_inp1")
let hover_effect_inp2 = document.querySelector("#hover_effect_inp2")
let hover_effect_inp3 = document.querySelector("#hover_effect_inp3")
let txt_langueg = document.querySelector(".txt_langueg")
let languege_type_eng_ru = document.querySelector(".languege_type_eng_ru")
let div_languege = document.querySelector(".div_languege")
let lang_div = document.querySelector(".lang_div")
let lang_div2 = document.querySelector(".lang_div2")
let lang_div3 = document.querySelector(".lang_div3")
let key_item1 = document.querySelector("#key_item1")
let key_item2 = document.querySelector("#key_item2")
let key_item3 = document.querySelector("#key_item3")
let key_item4 = document.querySelector("#key_item4")
let key_item5 = document.querySelector("#key_item5")
let modalka = document.querySelector(".modalka")
let send_btn = document.querySelector(".send_btn")
let send_inp1 = document.querySelector(".send_inp1")
let send_inp2 = document.querySelector(".send_inp2")
let send_inp3 = document.querySelector(".send_inp3")
let x = document.querySelector(".x")

btnSend.onclick = () => {
    hover_effect_inp1.value = ""
    hover_effect_inp2.value = ""
    hover_effect_inp3.value = ""
}

div_languege.onclick = () => {
    languege_type_eng_ru.classList.toggle("active")
}

lang_div.onclick = () => {
    languege_type_eng_ru.classList.toggle("active")    
}

lang_div2.onclick = () => {
    languege_type_eng_ru.classList.toggle("active")
}

lang_div3.onclick = () => {
    languege_type_eng_ru.classList.toggle("active")
}

key_item1.onclick = () => {
    modalka.classList.add("modal_display")
}

key_item2.onclick = () => {
    modalka.classList.add("modal_display")
}

key_item3.onclick = () => {
    modalka.classList.add("modal_display")
}

key_item4.onclick = () => {
    modalka.classList.add("modal_display")
}

key_item5.onclick = () => {
    modalka.classList.add("modal_display")
}

x.onclick = () => {
    modalka.classList.remove("modal_display")
    send_inp1.value = ""
    send_inp2.value = ""
    send_inp3.value = ""
}

send_btn.onclick = () => {
    send_inp1.value = ""
    send_inp2.value = ""
    send_inp3.value = ""
}