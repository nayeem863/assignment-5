document.addEventListener("DOMContentLoaded", function() {
    
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F8FF33", "#FF33F6", "#F633FF",];

    let currentIndex = 0;

   
    const themeButton = document.getElementById("theme");

    themeButton.addEventListener("click", function () {
      
        document.body.style.backgroundColor = colors[currentIndex];

        
        currentIndex = (currentIndex + 1) % colors.length;
    });
});


