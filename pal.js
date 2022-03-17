function pal(){
    var p = document.getElementById('check').value;
    var p = p.toLowerCase()
    var g = document.querySelector('h3');
    len = p.length;
    console.log(len);
    for(let i = 0;i<len/2;i++){
        if(p[i] !== p[len-1-i]){
            g.innerHTML = "<h3>no, it is not a palindrome</h3>"
            return;
            
        

        }
    }
    g.innerHTML = '<h3>yes, it is a palindrome</h3>'
            
}