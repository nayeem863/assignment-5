document.addEventListener('DOMContentLoaded',function(){
const createDate = new Date()
const formatDate = createDate.toLocaleDateString('en-GB',{
    day : '2-digit',
    month : 'long',
    year : 'numeric'
})
document.getElementById('currentDate').innerText = formatDate

});