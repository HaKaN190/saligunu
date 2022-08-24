function kaydet() {
    var i = document.getElementById("isim").value;
    var p = document.getElementById("soyisim").value;
    localStorage.setItem('isim',i);
    localStorage.setItem('soyisim',p);

}


function kontrol()
{
if(localStorage.getItem('soyisim')==document.getElementById("soyisim").value &&
   localStorage.getItem('isim')==document.getElementById("isim").value ){
    window.location.assign("ikinci.html");
}
else {
    alert("giriş başaraısız");
}
}

function hesapla(){
    var ort, harfnot;
    s1 = parseFloat(document.getElementById('sinav1').value);
    s2 = parseFloat(document.getElementById('sinav2').value);
    s3 = parseFloat(document.getElementById('sinav3').value);

    var isim= localStorage.getItem('isim');
    var soyisim= localStorage.getItem('soyisim');

    ort=(s1+s2+s3)/3.0;

    if (ort>=85 && ort<=100)
        harfnot='AA';
    else if (ort>=70 && ort<85)
        harfnot='BB';
    else if (ort>=55 && ort<70)
        harfnot='CC';
    else if (ort>=45 && ort<55)
        harfnot='DD';
    else if (ort>=0 && ort<45)
        harfnot='FF';

    document.getElementById("sonuc").innerHTML="Sayın"+ " " +isim + " "+ soyisim + " harf notunuz ve ort: " + ort  + " " + harfnot

}


