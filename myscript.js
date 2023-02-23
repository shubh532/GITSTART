let form=document.getElementById("form")
let ol=document.getElementById("ol")

form.addEventListener("submit",addtoLocalStorage);
form.addEventListener("submit",showData);
ol.addEventListener("click", removeData)


function addtoLocalStorage(e){
     e.preventDefault();

    let user_Details = {
        Name:document.getElementById("name").value,
        Email: document.getElementById("email").value,
        Contact:document.getElementById("mob").value,
        date:document.getElementById("date").value
    }
    localStorage.setItem(document.getElementById("email").value,JSON.stringify(user_Details))

}

function showData(e){
    e.preventDefault()
    let Name=document.getElementById("name").value
    let Email=document.getElementById("email").value
    let Contact=document.getElementById("mob").value

    let details =`${Name} - ${Email} - ${Contact}`


    
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(details))
    ol.appendChild(li)
    
    let delBtn=document.createElement("button")
    delBtn.className="del"
    delBtn.appendChild(document.createTextNode("Delete"))
    li.appendChild(delBtn)
    ol.appendChild(li)

    let editBtn =document.createElement("button")
    editBtn.className="del"
    editBtn.appendChild(document.createTextNode("Edit"))
    li.appendChild(editBtn)
    ol.appendChild(li)

}

function removeData(e){
    if (e.target.classList.contains("del")){
        let li = e.target.parentElement;
        ol.removeChild(li);
        localStorage.removeItem(document.getElementById("email").value)
    }
}