var time= new Date();
var hour = time.getHours();
var hdr = document.getElementsByTagName('header');
var link = document.getElementsByTagName('a');

if (hour<6) {
    document.body.style.backgroundColor ='#D9D7D7';
        hdr[0].style.backgroundColor ='#D90D32';
        hdr[0].style.color ='white';
        for(var i = 0; i < link.length; ++i){
            link[i].style.color ='#F28972';
        }
}
else if (hour<12) {
    document.body.style.backgroundColor ='#D2D3D9';
        hdr[0].style.backgroundColor ='#05C7F2';
        hdr[0].style.color ='white';
        for(var i = 0; i < link.length; ++i){
            link[i].style.color ='#05DBF2';
        }
}
else if (hour<18) {
    document.body.style.backgroundColor ='#BF9780';
        hdr[0].style.backgroundColor ='#A61B40';
        hdr[0].style.color ='white';
        for(var i = 0; i < link.length; ++i){
            link[i].style.color ='#590212';
        }
}
else {
    document.body.style.backgroundColor ='#F2E7DC';
        hdr[0].style.backgroundColor ='#4E4873';
        hdr[0].style.color ='white';
        for(var i = 0; i < link.length; ++i){
            link[i].style.color ='#F2ADA7';
        }
}
