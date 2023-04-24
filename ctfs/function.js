// [Convert]::ToBase64String([System.Text.Encoding]::Unicode.GetBytes($Text))
// doesn't work right
var change;
change = true;

function getting(srcs) {

    // document.write(x)
    // alert(x)
    if (srcs == 'lsb') {
        var flag = 'ZmxhZ3tmdW5fdzF0aF9MU0J9';
    }
    
    
    else if (srcs == 'huffpuff') {
        var flag = 'ZmxhZ3t2M3J5UDFja3lIdWZmM3J9';
    }

    else if (srcs == 'lookclosely1') {
        var flag = 'ZmxhZzF7VzBybGRfZzAzc19SMHVuZF9hbmRfcjB1bmR9';
    }

    else if (srcs == 'lookclosely2') {
        var flag = 'ZmxhZzJ7bjB0aDFuZ19iM3R0M3JfdGhhbl9iMzFuZ19TM2N1cjN9';
    }

    else if (srcs == 'contexthidden') {
        var flag = 'ZmxhZzN7TDF0dGwzX2JhczFuZ30=';
    }

    else if (srcs == 'yingyang') {
        var flag = 'ZmxhZzR7V3V4aV9GaW5nZXJfSG9sZH0=';
    }

    else if (srcs == 'cifercrackzip') {
        var flag = 'ZmxhZzV7SUVFRV9jMG1wM3QxdDF2M30=';
    }   

    else if(srcs =='paintpeel'){
        var flag ='ZmxhZ3tJMzMzX1NwYXJrbDFuZ18xbm4wdmF0MTBufQ==';
    }

    // miscellaneous

    else if (srcs == 'beginnerflag'){
        var flag = 'ZmxhZ3tIb29yYXlfRmlyc3RfRmxhZ30=';
    }
    else if (srcs == 'blind') {
        var flag = 'ZmxhZ3tOMHdfWTB1X1MzM19NM30=';
    }
    else if (srcs == 'idle') {
        var flag = 'ZmxhZ3tEMG50X1N0MHBfTTNfTjB3fQ==';
    }
    else if (srcs == 'breakout') {
        var flag = 'ZmxhZ3tUaDFzXzNzY2FsM3RlZF9xdTFjbHl9';
    }

    // Cryptography

    else if (srcs=='spinning'){
        var flag ='ZmxhZ3tZb3Vfc3Bpbl9teV9oZWFkX3JvdW5kX3JvdW5kfQ==';
    }
    else if (srcs=='base'){
        var flag = 'ZmxhZ3tCYXMzZF8wbl9DdXJyM250XzN2MWQzbmMzXzFtX0F3czBtM30=';
    }
    

    var sect = srcs + 'check';
    var chall = srcs + 'flag';
    var x = document.getElementById(chall).value;
    el = document.getElementById(sect);
    
    // original = document.getElementById(sect);
    
    // alert(b64_to_utf8(flag))
    if (x == b64_to_utf8(flag)) {
        el.innerHTML = '<h3 class="submitted" style="color: rgb(255, 0, 212);">Completed!!</h3>';
    }
    else {
        // alert('Nope, Try again');
        // window.confirm('Nope, Try again');
        if (window.change){
            el.innerHTML+='<p class="wronganswer" style="color: red;">Nope, Try Again</p>';
            window.change = false;
        }
        setTimeout(function(){const docs =document.querySelectorAll(".wronganswer");docs.forEach(box=>{box.remove()});window.change=true;},1500);
        
        // clearing();
        // setTimeout(clearing,5000);
        // window.change = true;
        // el.innerHTML-='<h4 style="color: red;">Nope, Try Again</h4>';
        // document.getElementById("wronganswer").innerHTML='ss';
        // // el.innerHTML+='<div id="dialog" title="Basic dialog">;<p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the x icon.</p></div>'
        // el.innerHTML+='<div class="alert"><span class="closebtn" onclick="this.parentElement.style.display="none";">&times;</span>This is an alert box.</div>'
        
    }
}

function clearing(){
    document.getElementById("wronganswer").innerHTML='';}

function b64_to_utf8(str) {
    return decodeURIComponent(window.atob(str));
}


function show(tag){
    if (tag=='ALL'){
        document.getElementById('IEEEDAY').style.display='block';
        document.getElementById('mediumTuesday').style.display='block';
        document.getElementById('IEEEChallenge').style.display='block';
    }
    
    else if (tag=='IEEEDAY'){
        document.getElementById('IEEEDAY').style.display='block';
        document.getElementById('mediumTuesday').style.display='none';
        document.getElementById('IEEEChallenge').style.display='none';
    }

    else if (tag=='mediumTuesday'){
        document.getElementById('IEEEDAY').style.display='none';
        document.getElementById('mediumTuesday').style.display='block';
        document.getElementById('IEEEChallenge').style.display='none';
    }

    else if (tag=='IEEEChallenge'){
        document.getElementById('IEEEDAY').style.display='none';
        document.getElementById('mediumTuesday').style.display='none';
        document.getElementById('IEEEChallenge').style.display='block';
    }

}


