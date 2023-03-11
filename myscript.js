const submitBtn = document.getElementById("Submit")


submitBtn.onclick = (e) => {
    e.preventDefault()
    let data = {
        Name: document.forms["myform"]["name"].value,
        Gmail: document.forms["myform"]["gmail"].value,
        Mob: document.forms["myform"]["mob"].value

    }
    axios.post("https://crudcrud.com/api/b14f414d8f54416c9aaff74e4cb0b078/userData", data)
        .then((response) => {
            showData(response.data)
        })
        .catch(err => {
            document.body.innerHTML += "<h6> SOMETHING WENT WRONG<h6>"
        })

    //berlow cose is to store data in Local Storage
    // let day = prompt("which Days Expense?")
    // localStorage.setItem(day, JSON.stringify(data))


}
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/b14f414d8f54416c9aaff74e4cb0b078/userData")
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                showData(response.data[i])
            }
        })
        .catch(err => {
            document.body.innerHTML += "<h6> SOMETHING WENT WRONG<h6>"
        })
})

function showData(data) {
    let details = `${data.Name}-${data.Gmail}-${data.Mob}`
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(details))


    let delBtn = document.createElement("button")
    delBtn.className = "btn btn-danger"
    delBtn.appendChild(document.createTextNode("Delete"))
    document.getElementById("info").appendChild(delBtn)
    li.appendChild(delBtn)
    document.getElementById("info").appendChild(li)


    delBtn.onclick = (e) => {
        e.preventDefault()
        axios.get("https://crudcrud.com/api/b14f414d8f54416c9aaff74e4cb0b078/userData")
        .then((response)=>{
            console.log(response.data[0]._id)
            axios.delete(`https://crudcrud.com/api/b14f414d8f54416c9aaff74e4cb0b078/userData/${response.data[0]._id}`)
        }) 
            .catch(err => {
                console.log(err)
                document.body.innerHTML += "<h6> SOMETHING WENT WRONG<h6>"
            })
        document.getElementById("info").removeChild(li)

    }

    let editBtn = document.createElement("button")
    editBtn.className = "btn btn-success"
    editBtn.appendChild(document.createTextNode("Edit"))
    li.appendChild(editBtn)
    document.getElementById("info").appendChild(li)

    editBtn.onclick = (e) => {
        e.preventDefault()
        localStorage.removeItem(day)
        document.getElementById("info").removeChild(li)
        document.getElementById("name").value = day[expense]
        document.getElementById("gmail").value = day[Description]
    }
}