var list=document.getElementById("list")

function addTodo()
{
    var todo_item=document.getElementById('todo')
    var li = document.createElement('li')
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext)



    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class","butt")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)

    var editbt=document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editbt.appendChild(editText)
    editbt.setAttribute("class","butt1")
    editbt.setAttribute("onclick","editItem(this)")


    li.appendChild(delBtn)
    li.appendChild(editbt)

    list.appendChild(li)
    
}
function deleteItem(e)
{
    e.parentNode.remove();
}
function deleteAll()
{
    list.innerHTML=""
}
function editItem(e)
{
    
    var value=prompt("enter edit value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = value
}