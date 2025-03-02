document.addEventListener("DOMContentLoaded", function () {
    const completeButtons = document.querySelectorAll("#complete-btn");
    const assignedTaskElement = document.getElementById("assigned");
    const checkBox = document.getElementById("checkBox");

    let assignedTaskCount = parseInt(assignedTaskElement.innerText);
    let checkBoxCount = parseInt(checkBox.innerText);

    completeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            if (assignedTaskCount > 0) {
                assignedTaskCount--;
                checkBoxCount ++;
                assignedTaskElement.innerText = assignedTaskCount;
                checkBox.innerText = checkBoxCount;
                

               
                button.disabled = true;
                button.classList.add("btn-disabled"); 
                alert('Board Updated Successfully')
            }

            
            if (assignedTaskCount === 0) {
                alert("All tasks are completed!");
            }
            const select = button.closest('.max-w-80').querySelector('h2').innerText
            const container = document.getElementById('p-container')
            const livetime = new Date().toLocaleTimeString();

            const p= document.createElement('p')
            p.innerText = `
            you have completed the task ${select} at ${livetime}`
            container.appendChild(p)


        });
    });
  

});
