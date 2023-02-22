let form=document.getElementById("form")

form.addEventListener("submit",addtoLocalStorage);
form.addEventListener("submit",showData);
function addtoLocalStorage(e){
     e.preventDefault();
    // let name=document.getElementById("name").value
    // localStorage.setItem("Name",name)
    // let email=document.getElementById("email").value
    // localStorage.setItem("Email",email)
    // let mob=document.getElementById("mob").value
    // localStorage.setItem("Contact",mob)
    // let date = document.getElementById("date").value
    // localStorage.setItem("Date",date)
    
    //by creating Object

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


    let ol=document.getElementById("ol")
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(details))
    ol.appendChild(li)
    
}