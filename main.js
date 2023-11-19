function myFunction(val) {
   
    var x = document.getElementById('show');
    console.log(val)
    x.innerHTML = "Entered Value is: " + val;
    x.className = "blue"
   /*  if (typeof val === 'number') {
        x.className = 'red';
    } else {
        x.className = 'blue';
    } */
    
}