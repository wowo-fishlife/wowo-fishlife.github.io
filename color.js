var time= new Date();
var hour = time.getHours();
var wpr = document.getElementById('wrapper');
var hdr = document.getElementsByTagName('header');
var link = document.getElementsByTagName('a');
var acnt = document.getElementsByClassName('accent')

/*Dawn*/
if (hour<6) {
    wpr.style.backgroundColor ='#D9D7D7';
    hdr[0].style.backgroundColor ='#D90D32';
    hdr[0].style.color ='white';
    for(var i = 0; i < link.length; ++i){
        link[i].style.color ='#F28972';
    }
    acnt[0].style.color ='#F2ADA7';
}
/*Morning*/
else if (hour<12) {
    wpr.style.backgroundColor ='#F2EA7E';
    hdr[0].style.backgroundColor ='#049DD9';
    hdr[0].style.color ='white';
    for(var i = 0; i < link.length; ++i){
        link[i].style.color ='#F29829';
    }
    acnt[0].style.color ='#F29829';
}
/*Afternoon*/
else if (hour<18) {
    wpr.style.backgroundColor ='#F2E3D5';
    hdr[0].style.backgroundColor ='#734058';
    hdr[0].style.color ='white';
    for(var i = 0; i < link.length; ++i){
        link[i].style.color ='#D98566';
    }
    acnt[0].style.color ='#F2505D';
}
/*Night*/
else {
    wpr.style.backgroundColor ='#F2E7DC';
    hdr[0].style.backgroundColor ='#4E4873';
    hdr[0].style.color ='white';
    for(var i = 0; i < link.length; ++i){
        link[i].style.color ='#F28157';
    }
    acnt[0].style.color ='#F2ADA7';
}
