


document.addEventListener('DOMContentLoaded',function(){
    const clearHistory = document.getElementById('clear-history')
    const container = document.getElementById('p-container')
    clearHistory.addEventListener('click',function(){
        container.innerHTML=`
         <div class="flex justify-center items-center gap-2 my-5">  <img class="h-6 w-6" src="assets/activity.png" alt="">
            <h2 class="text-2xl">Activity Log</h2></div>
            <div class="flex justify-center">
                <button id="clear-history" class="btn btn-primary mx-auto">Clear History</button>

            </div>`


            document.getElementById('clear-history').addEventListener('click',function(){
                container.innerHTML=`
                <div class="flex justify-center items-center gap-2 my-5">  <img class="h-6 w-6" src="assets/activity.png" alt="">
            <h2 class="text-2xl">Activity Log</h2></div>
            <div class="flex justify-center">
                <button id="clear-history" class="btn btn-primary mx-auto">Clear History</button>

            </div>`
            })
    })
})


