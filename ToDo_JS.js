const inputTask= document.getElementById("task");
const listItems= document.getElementById("List-items");
function addTask(){
    if(inputTask.value ==='')
        {
            alert("Enter some Task!");
        }
        else{
            let li = document.createElement("li");
            li.innerHTML = inputTask.value;
            listItems.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML ="&#x2716";
            li.appendChild(span);
        }
        inputTask.value="";
        saveData();
}
listItems.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
        {
            e.target.classList.toggle("Checked");
            saveData();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
},false);

function saveData(){
    localStorage.setItem("data",listItems.innerHTML);
}
function showTask(){
    listItems.innerHTML=localStorage.getItem("data");
}
showTask();