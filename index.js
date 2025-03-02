document.getElementById('discover').addEventListener('click',function(){
    window.location.href = "page_2.html"; 
});

document.addEventListener("DOMContentLoaded",function(){
    const completedButtons  = document.getElementsByClassName("completed-btn");
    const taskAssigned = document.getElementById("taskAssigned");
    const topRightNumber = document.getElementById("topRightNumber");
    const activityLog = document.getElementById("activityLog");

    for(let i = 0; i< completedButtons.length; i++){
        completedButtons[i].addEventListener("click",function(){
            // alert("you are on the way😉");
            let unserConfirmed = confirm("are you really wanna add this ?🙄");
            
            if (unserConfirmed ) {
                let currentTaskCount = parseInt(taskAssigned.innerText);
                taskAssigned.innerText =currentTaskCount > 0 ? currentTaskCount - 1 : 0;


                let currentTopRightCount = parseInt(topRightNumber.innerText);
                topRightNumber.innerText = currentTopRightCount + 1;


          let currentTime = new Date().toLocaleTimeString();
                let taskName = this.getAttribute("data-task-name");

                let logEntry = document.createElement("p");
                  logEntry.innerText = `You have completed the task '${taskName}' at ${currentTime}`;
                activityLog.appendChild(logEntry);


                 this.disabled = true;
                this.classList.add("opacity-50", "cursor-not-allowed");

            }
        })
    }

})