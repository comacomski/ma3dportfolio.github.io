var biografija = "bio";
var projekti ="projects"
var freeworld="fw";
var contact = "contact"


function startAp() {
    navbarFocusiranje();
    txtfild.addEventListener("focus", console.log("focus"));
    txtfild.addEventListener("keyup", tastatura);
    wrapper.addEventListener("click", navbarFocusiranje);
    //preporuke.style.visibility="hidden";
 //   npreporuka[0].style.backgroundColor = "green";
 //   npreporuka[0].style.color = "black";
    provjera();
    komentar.innerHTML = "<b>://ma></b>";
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        alert("Hello! This site is fully functional only for PC users, sorry.");
      }
}
function tastatura(e) {
    e = e || window.event;

    if (e.keyCode == '38') //up
        hittedUp();
    else if (e.keyCode == '40') //down
        hittedDown();
    else if (e.keyCode == '37') //l
        hittedL();
    else if (e.keyCode == '39') //r
        hittedR();
    else if (e.keyCode == '13') //enter
        hittedEnter();
    if(e.keyCode!='13')
        promjenaDir();
    provjera();
}
function provjera() {
    console.log("provjera");
    var cmdtext = txtfild.value;
    dirs = [];
    var flag = 0, f2 = 0;


    //   txtfild.value = dirs[kursorX];
    if (kursorY === 0) {
        dirs = ["../", "://ma/bio", "://ma/projects", "://ma/freeworld", "://ma/contact"];
    }
    else if (kursorY === 1) {
        dirs = ["../", "://ma/bio/downloadCV"];
      //  console.log(dirs.length+"dirsleng");
    }
    else if (kursorY === 2) {
        dirs = ["../", "://ma/projects/front-end", "://ma/projects/embedded&C", "://ma/projects/java&android"];
    }
    else if (kursorY === 3) {
        dirs = ["../"];
    }
    else if (kursorY === 4) {
        dirs = ["../"];
    }
    else if (kursorY === 5) {
        dirs = ["../"];
    }
    else if (kursorY === 6) {
        dirs = ["../"];
    }
    else if (kursorY === 7) {
        dirs = ["../"];
    }
    else if (kursorY === 8) {
        dirs = ["../"];
    }

    for (var i = 0; i < dirs.length; i++) 
    {
        /* npreporuka[kursorX].style.backgroundColor="black";
         npreporuka[kursorX].style.color="green";*/
        for (var ii = 0; ii < cmdtext.length; ii++) {
            if (dirs[i].charAt(ii) === cmdtext.charAt(ii)) {
                flag = 1;
            }
            else
                flag = 0;
        }
        if (flag === 1)
            f2 = 1;


    }
    if(kursorX!=-1)
    {
    npreporuka[kursorX].style.backgroundColor = "green";
    npreporuka[kursorX].style.color = "black";
    }   
    if (f2 === 1) {
        preporuke.style.visibility = "visible";
        for (var i = 0; i < dirs.length; i++) {
            npreporuka[i].innerHTML = "<b>" + dirs[i] + "</b>";
            npreporuka[i].style.visibility = "visible";
        }
        flag = 0;
    }
    else {
        for (var i = 1; i < dirs.length; i++) {
            npreporuka[i].innerHTML = "";
                npreporuka[i].style.visibility="hidden";
        }
    }
    document.getElementById("preporuke").style.height=document.getElementById("pp").offsetHeight+document.getElementById("pp").offsetHeight*0.13+"px";
}
var dir = [
    "://ma",
    "://ma/bio",
    "://ma/projects",
    "://ma/freeworld",
    "://ma/contact",
    "://ma/bio/downloadCV",
    "://ma/projects/front-end",
    "://ma/projects/embedded&C",
    "://ma/projects/java&android"

];
function hittedEnter() {
    console.log("enter");



    if (txtfild.value === "../") {
        var ime;
      //  if(kursorY>=0 && kursorY<5)
       
        if (kursorY >= 0 && kursorY < 5)
        {
          //  console.log("udjee00")
            sakrijSadrzaj();
            
            ime = "://ma";
            
        }
        else if (kursorY === 5)
            ime = "://ma/bio";
        else if (kursorY >= 6 && kursorY <= 8)
            ime = "://ma/projects";
        komentar.innerHTML = ime + ">";
        txtfild.value = ime;
        if (kursorY >= 0 && kursorY < 5)
            promjenaDir();
        
  //      kursorY = 0;//treba i
        for (var i = 0; i < 5; i++) {
            npreporuka[i].innerHTML = "";
            npreporuka[i].style.visibility = "hidden";
        }
        
    }


    var f = 0;
    for (var i = 0; i < dir.length; i++) {
        if (txtfild.value === dir[i]) 
        {
            komentar.innerHTML = txtfild.value + ">";
            kursorY = i;//treba i
           // document.getElementById("preporuke").style.height=document.getElementById("pp").offsetHeight+15+"px";
        //    kursorX=-1;
     //       txtfild.value = "../";
     //    kursorX=-1;
                
                
            for (var ii = 0; ii < 5; ii++) {
                npreporuka[ii].innerHTML = "";
                npreporuka[ii].style.visibility = "hidden";
            }
            /*     preporuke.style.visibility="hidden";
                 preporuke2.style.visibility="hidden"; */
            for (var z = 0; z < 5; z++) {
                npreporuka[z].style.backgroundColor = "black";
                npreporuka[z].style.color = "green";
            }
            npreporuka[0].innerHTML = "../";
            npreporuka[0].style.visibility = "visible";

        }
        kursorX = -1;
    }
}
function hittedUp() {
    console.log("up");
    setCaretPosition(txtfild, txtfild.value.length);
    if (kursorX > 0) {
        npreporuka[kursorX].style.backgroundColor = "black";
        npreporuka[kursorX].style.color = "green";
        kursorX--;
        npreporuka[kursorX].style.backgroundColor = "green";
        npreporuka[kursorX].style.color = "black";
        txtfild.value = dirs[kursorX];
        // primaKomandu(kursorX, kursorY, 0);
    }
}
function hittedDown() {
    console.log("down");
    if (kursorX < dirs.length - 1) {
        if(kursorX!==-1)
        {
        npreporuka[kursorX].style.backgroundColor = "black";
        npreporuka[kursorX].style.color = "green";
        }
        kursorX++;
        npreporuka[kursorX].style.backgroundColor = "green";
        npreporuka[kursorX].style.color = "black";
        txtfild.value = dirs[kursorX];
        //  primaKomandu(kursorX, kursorY, 0);
    }
}

function hittedR() {
    console.log("r");
}
function hittedL() {
    console.log("l");
}
function navbarFocusiranje() {
    //console.log("navbar");
    txtfild.focus();
    setCaretPosition(txtfild, txtfild.value.length);
    provjera();
}
function setCaretPosition(ctrl, pos) {
    // Modern browsers
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);

        // IE8 and below
    } else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}
function velicinaSadrzaja() {
    if (podesavajSadrzaj === 1) {
        var sadrzajH = (window.innerHeight - prviRed.offsetHeight - 40) + "px";
        sadrzaj.style.height = sadrzajH;
        //  console.log(prviRed.offsetHeight+"height");
    }
}


function sakrijSadrzaj() {
    podesavajSadrzaj = 0;
      sadrzaj.style.visibility="hidden";
    sadrzaj.style.height = "0%";
  //  sadrzaj2.innerHTML="";
  document.getElementById("preporuke").style.height=document.getElementById("pp").offsetHeight+document.getElementById("pp").offsetHeight*0.13+"px";
 // document.getElementById("preporuke").style.height="100px";
 document.getElementById("bio").style.visibility="hidden";
document.getElementById("projects").style.visibility="hidden";
 document.getElementById("fw").style.visibility="hidden";
 document.getElementById("contact").style.visibility="hidden";
console.log("sakrijsadrzaj")
}
function prikaziSadrzaj(string) {

    sadrzaj.style.visibility="visible";
   // sadrzaj2.innerHTML=string;
   /*fetch(string)
    .then(data => data.text())
    .then(html => sadrzaj2.innerHTML = html);*/
//document.getElementById("bios").style.visibility="visible";
    var sadrzajH = (window.innerHeight - prviRed.offsetHeight - 40) + "px";
    sadrzaj.style.height = sadrzajH;
    podesavajSadrzaj = 1;
    document.getElementById("preporuke").style.height=sadrzajH;
    document.getElementById(string).style.visibility="visible";
}
function trepTrepTrepni(o)
{

}

//----------------------------------------------------------Malo navbar pa 3D
var txtfild = document.getElementById("fname");
var npreporuka = [
    document.getElementById("p1"),
    document.getElementById("p2"),
    document.getElementById("p3"),
    document.getElementById("p4"),
    document.getElementById("p5"),
];
var komentar = document.getElementById("comment");
var wrapper = document.getElementById("wrapper");
var preporuke = document.getElementById("preporuke0");
var preporuke2 = document.getElementById("preporuke");
var sadrzaj = document.getElementById("sadrzaj");
var sadrzaj2 = document.getElementById("sadrzaj2");
var prviRed = document.getElementById("prvired");
var tijelo = document.getElementById("home-heading");
var bioo = document.getElementById("bio");
var kursorX = 0;
var kursorY = 0;
var dirs = [];
var podesavajSadrzaj = 0;

startAp();
velicinaSadrzaja();
sakrijSadrzaj();
//    prikaziSadrzaj();
//tijelo.style.height = bioo.offsetHeight;




var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 90;
camera.position.y = 50;
camera.position.x = 50;
camera.lookAt(new THREE.Vector3(10, 0, 0));
//     camera.rotation.x=Math.PI*0.2;
//    camera.rotation.y=0;
//    camera.rotation.z=0;
//camera.rotation.x = -Math.PI*0.2;
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setClearColor("black");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//3. SVJETLO
var light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(0, 70, 0);
var light2 = new THREE.PointLight(0xFFFFFF, 1, 500);
light2.position.set(-50, 70, 0);
var light3 = new THREE.PointLight(0xFFFFFF, 1, 500);
light3.position.set(50, 70, 0);
var light4 = new THREE.PointLight(0xFFFFFF, 1, 500);
light4.position.set(00, 70, -50);
scene.add(light);
scene.add(light2);
scene.add(light3);
var podloga = new THREE.BoxGeometry(40, .3, 40);
var mat2 = new THREE.MeshLambertMaterial({ color: "#1a1a1a" })//materijal podloge
var podlogaO = new THREE.Mesh(podloga, mat2);
podlogaO.position.set(10, 0, 10);
scene.add(podlogaO);



var canvas = document.createElement("canvas");// KANVAS TEXT I TEXTURA
var ctx = canvas.getContext("2d");

canvas.width = canvas.height = 256;
var texture = new THREE.Texture(canvas);
var mat3 = new THREE.MeshBasicMaterial({
    map: texture,
    opacity: 0.7,
    transparent: true,
});//kanvas materijal
var canvas4 = document.createElement("canvas");// KANVAS TEXT I TEXTURA
var ctx4 = canvas4.getContext("2d");

canvas4.width = canvas4.height = 256;
var texture4 = new THREE.Texture(canvas4);
var mat4 = new THREE.MeshBasicMaterial({
    map: texture4,
    opacity: 0.7,
    transparent: true,
});
var canvas5 = document.createElement("canvas");// KANVAS TEXT I TEXTURA
var ctx5 = canvas5.getContext("2d");

canvas5.width = canvas5.height = 256;
var texture5 = new THREE.Texture(canvas5);
var mat5 = new THREE.MeshBasicMaterial({
    map: texture5,
    opacity: 0.7,
    transparent: true,
});
var canvas6 = document.createElement("canvas");// KANVAS TEXT I TEXTURA
var ctx6 = canvas6.getContext("2d");

canvas6.width = canvas6.height = 256;
var texture6 = new THREE.Texture(canvas6);
var mat6 = new THREE.MeshBasicMaterial({
    map: texture6,
    opacity: 0.7,
    transparent: true,
});
var zgrada = new THREE.BoxGeometry(8, 20, 8);
var zgradaO = new THREE.Mesh(zgrada, mat6);//contact
zgradaO.position.set(0, 10, 0);
scene.add(zgradaO);

//var zgrada2 = new THREE.BoxGeometry(5,20,5);
var zgradaO2 = new THREE.Mesh(zgrada, mat4);//fw
zgradaO2.position.set(20, 10, 0);
scene.add(zgradaO2);

//var zgrada3 = new THREE.BoxGeometry(5,20,5);
var zgradaO3 = new THREE.Mesh(zgrada, mat3);
zgradaO3.position.set(0, 10, 20);
scene.add(zgradaO3);

//var zgrada4 = new THREE.BoxGeometry(5,20,5);
var zgradaO4 = new THREE.Mesh(zgrada, mat5);
zgradaO4.position.set(20, 10, 20);
scene.add(zgradaO4);

var render = function () {
    requestAnimationFrame(render);

    //   camera.position.z+=0.3;
    changeCanvas();
    velicinaSadrzaja();
    document.getElementById("preporuke").style.height=document.getElementById("pp").offsetHeight+document.getElementById("pp").offsetHeight*0.13+"px";
   // camera.aspect= window.innerWidth/window.innerHeight;
    renderer.render(scene, camera);
    kameraUKrug();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
render();
var stage = 0;
var jednom = 0;
var dozvola = 1;
var ugao = 0;
function kameraUKrug() {//50,90


    if (dozvola === 1) {
        ugao += 0.01110;
        if (stage === 0) {
            if (jednom === 0) {
                camera.position.z = 90;
                camera.position.y = 50;
                camera.position.x = 10;
                jednom = 1;
            }
            camera.position.z -= 0.05;
            camera.position.x += 0.05;
            // camera.position.x= Math.tan(ugao)*camera.position.z;
            camera.lookAt(new THREE.Vector3(10, 0, 0));
            console.log("stage0");
            if (camera.position.z < 0)
                stage = 1;

        }
        else if (stage === 1) {
            camera.position.z -= 0.05;
            camera.position.x -= 0.05;
            camera.lookAt(new THREE.Vector3(10, 0, 0));
            console.log("stage1");
            if (camera.position.z < -90)
                stage = 2;
        }
        else if (stage === 2) {
            camera.position.z += 0.05;
            camera.position.x -= 0.05;
            camera.lookAt(new THREE.Vector3(10, 0, 0));
            console.log("stage2");
            if (camera.position.z > 0)
                stage = 3;
        }
        else if (stage === 3) {
            camera.position.z += 0.05;
            camera.position.x += 0.05;
            camera.lookAt(new THREE.Vector3(10, 0, 0));
            console.log("stage3");
            if (camera.position.z > 90) {
                stage = 0;
                jednom = 0;
            }
        }
        else if (stage === 4) {
            camera.position.z -= 0.05;
            camera.position.x += 0.05;
            camera.lookAt(new THREE.Vector3(10, 0, 0));
            console.log("stage4");
            if (camera.position.z < 9 && camera.position.x > 1)
                stage = 0;
            jednom = 0;
        }
    }

}

function changeCanvas() {

    //
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 12pt Arial';
    ctx.fillStyle = 'black';
    ctx.fillRect(10, 10, canvas.width - 20, canvas.height - 20);
    ctx.fillStyle = 'green';
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    //ctx.fillText(new Date().getTime(), canvas.width / 2, canvas.height / 2);
    ctx.fillText("://ma/bio/"+(new Date().getTime()-1576589732000), canvas.width / 2, (0.08 * canvas.height));
    //tekst
    ctx.font = '4pt Arial';
    ctx.fillStyle = 'green';
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    //-
    ctx4.fillStyle = 'black';
    ctx4.fillRect(0, 0, canvas.width, canvas.height);
    ctx4.font = 'bold 12pt Arial';
    ctx4.fillStyle = 'black';
    ctx4.fillRect(10, 10, canvas.width - 20, canvas.height - 20);
    ctx4.fillStyle = 'green';
    ctx4.textAlign = "right";
    ctx4.textBaseline = "middle";
    //ctx.fillText(new Date().getTime(), canvas.width / 2, canvas.height / 2);
    ctx4.fillText("://ma/fw/"+(new Date().getTime()-1577084232000), canvas.width / 2, (0.08 * canvas.height));
    //tekst
    ctx4.font = '4pt Arial';
    ctx4.fillStyle = 'green';
    ctx4.textAlign = "left";
    ctx4.textBaseline = "middle";
    //-
    //-
    ctx5.fillStyle = 'black';
    ctx5.fillRect(0, 0, canvas.width, canvas.height);
    ctx5.font = 'bold 12pt Arial';
    ctx5.fillStyle = 'black';
    ctx5.fillRect(10, 10, canvas.width - 20, canvas.height - 20);
    ctx5.fillStyle = 'green';
    ctx5.textAlign = "right";
    ctx5.textBaseline = "middle";
    //ctx.fillText(new Date().getTime(), canvas.width / 2, canvas.height / 2);
    ctx5.fillText("://ma/projects/"+(new Date().getTime()-1577076660000), canvas.width / 2, (0.08 * canvas.height));
    //tekst
    ctx5.font = '4pt Arial';
    ctx5.fillStyle = 'green';
    ctx5.textAlign = "left";
    ctx5.textBaseline = "middle";
    //-
    //-
    ctx6.fillStyle = 'black';
    ctx6.fillRect(0, 0, canvas.width, canvas.height);
    ctx6.font = 'bold 12pt Arial';
    ctx6.fillStyle = 'black';
    ctx6.fillRect(10, 10, canvas.width - 20, canvas.height - 20);
    ctx6.fillStyle = 'green';
    ctx6.textAlign = "right";
    ctx6.textBaseline = "middle";
    //ctx.fillText(new Date().getTime(), canvas.width / 2, canvas.height / 2);
    ctx6.fillText("://ma/contact/"+(new Date().getTime()-1577083452000), canvas.width / 2, (0.08 * canvas.height));
    //tekst
    ctx6.font = '4pt Arial';
    ctx6.fillStyle = 'green';
    ctx6.textAlign = "left";
    ctx6.textBaseline = "middle";
    //-
    var sat = new Date().getTime();
    var sat2 = sat.toString();
    sat2 = sat2.concat(sat2);
    sat2 = sat2.concat(sat2);
    sat2 = sat2.concat(sat2);
    sat2 = sat2.concat(sat2);


    var visina = 0.17;
    for (var i = 0; i < 22; i++) {
        var pom = "123";
      //  sat2 = pom.concat(sat2);
        ctx.fillText(sat2, 0, (visina * canvas.height));
        ctx4.fillText(sat2, 0, (visina * canvas4.height));
        ctx5.fillText(sat2, 0, (visina * canvas4.height));
        ctx6.fillText(sat2, 0, (visina * canvas4.height));
        visina += 0.04
    }
    texture.needsUpdate = true;
    texture4.needsUpdate=true;
    texture5.needsUpdate=true;
    texture6.needsUpdate=true;
}
var tajm;
function promjenaDir() {

    console.log("udheee0.1111")
    for (var i = 0; i < dir.length; i++) 
    {
        if (txtfild.value === dir[i]) 
        {
            /*
            kada upises direktorij da se on selektuje  u prijedlozima
            */
           if((i>=0 && i<5 && kursorY===0))
           {
           npreporuka[i].style.backgroundColor = "green";
           npreporuka[i].style.color = "black";
            if(kursorX!=-1)
            {
                npreporuka[kursorX].style.backgroundColor = "black";
                npreporuka[kursorX].style.color = "green";
            }
            kursorX=i;
           }
           else if(i===5 && kursorY===1)
           {
            npreporuka[i-4].style.backgroundColor = "green";
            npreporuka[i-4].style.color = "black";
            if(kursorX!=-1)
            {
                npreporuka[kursorX].style.backgroundColor = "black";
                npreporuka[kursorX].style.color = "green";
            }
            kursorX=i-4; 
           
           }
           else if((i===6 || i===7 || i===8) && kursorY===2)
           {
            npreporuka[i-5].style.backgroundColor = "green";
            npreporuka[i-5].style.color = "black";
            if(kursorX!=-1)
            {
            npreporuka[kursorX].style.backgroundColor = "black";
            npreporuka[kursorX].style.color = "green";
            }
            kursorX=i-5; 
            console.log(kursorX+"aaaas")
           }

            //-------------------
        //    sakrijSadrzaj();
            
            if (i === 0) 
            {//-------------------------------da se vrti u krug kao
                TweenMax.killAll(false, true, false);
                clearTimeout(tajm);
      //      this.tl = new TimelineMax();
                camera.position.z = 90;
                camera.position.y = 50;
                camera.position.x = 50;
                camera.lookAt(new THREE.Vector3(10, 0, 0));
                dozvola = 1;
                stage = 0;
              //  sakrijSadrzaj();
                console.log("UDJEEE")
            }
            else if (i === 1)//do biografije i ovo ostalo dok ne bude
            {
                TweenMax.killAll(false, true, false);
            this.tl = new TimelineMax();
                dozvola = 0;
                stage = 0;
                camera.position.z = 90;
                camera.position.y = 50;
                camera.position.x = 50;
                this.tl.to(this.camera.position, 1, { x: 0, y: 22, z: 50, ease: Expo.easeOut });
                this.tl.to(this.camera.position, 1, { x: 0, y: 22, z: 40, ease: Expo.easeOut });
                this.tl.to(this.camera.position, 1, { x: 0, y: 10, z: 40, ease: Expo.easeOut });
                this.tl.to(this.camera.position, 1, { x: 0, y: 22, z: 40, ease: Expo.easeOut });
                this.tl.to(this.camera.position, 1, { x: 0, y: 15, z: 30, ease: Expo.easeOut });
                camera.lookAt(new THREE.Vector3(50, 20, 0));
                clearTimeout(tajm);
                sakrijSadrzaj();
               tajm= setTimeout(prikaziSadrzaj.bind(null,biografija), 5000);
               
              

            }
            else if (i === 2) {//-----------------------------do projekata
                TweenMax.killAll(false, true, false);
            this.tl = new TimelineMax();
                dozvola = 0;
                camera.position.z = 90;
                camera.position.y = 50;
                camera.position.x = 50;
                this.tl.to(this.camera.position, 1, { x: 20, y: 22, z: 50, ease: Expo.easeOut });
                this.tl.to(this.camera.position, 1, { x: 20, y: 22, z: 40, ease: Expo.easeOut });
                this.tl.to(this.camera.position, 1, { x: 20, y: 10, z: 40, ease: Expo.easeOut });
                this.tl.to(this.camera.position, 1, { x: 20, y: 22, z: 40, ease: Expo.easeOut });
                this.tl.to(this.camera.position, 1, { x: 20, y: 15, z: 30, ease: Expo.easeOut });
                camera.lookAt(new THREE.Vector3(50, 20, 0));
                clearTimeout(tajm);
                sakrijSadrzaj();
                tajm=setTimeout(prikaziSadrzaj.bind(null,projekti), 5000);


            }
            else if (i === 3) {//---------------------------fw, prepraviti
                TweenMax.killAll(false, true, false);
            this.tl = new TimelineMax();
                dozvola = 0;
                camera.position.z = 90;
                camera.position.y = 50;
                camera.position.x = 50;
                this.tl.to(this.camera.position, 1, { x: 10, y: 20, z: 50, ease: Expo.easeOut });
                this.tl.to(this.camera.position, 1, { x: 10, y: 21, z: 20, ease: Expo.easeOut });
                this.tl.to(this.camera.position, 1, { x: 18, y: 18, z: 15, ease: Expo.easeOut });
                this.tl.to(this.camera.position, 1, { x: 18, y: 21, z: 10, ease: Expo.easeOut });
                this.tl.to(this.camera.position, 1, { x: 18, y: 15, z: 10, ease: Expo.easeOut });
                camera.lookAt(new THREE.Vector3(50, 20, 0));
                clearTimeout(tajm);
                sakrijSadrzaj();
                tajm=setTimeout(prikaziSadrzaj.bind(null,freeworld), 5000);

            }
            else if (i === 4) 
            {//--------------------------------------------contact
                TweenMax.killAll(false, true, false);
            this.tl = new TimelineMax();
                dozvola = 0;
                camera.position.z = 90;
                camera.position.y = 50;
                camera.position.x = 50;
                this.tl.to(this.camera.position, 1, { x: 10, y: 20, z: 50, ease: Expo.easeOut });
                this.tl.to(this.camera.position, 1, { x: 10, y: 21, z: 20, ease: Expo.easeOut });
                this.tl.to(this.camera.position, 1, { x: -2, y: 18, z: 15, ease: Expo.easeOut });
                this.tl.to(this.camera.position, 1, { x: -2, y: 21, z: 10, ease: Expo.easeOut });
                this.tl.to(this.camera.position, 1, { x: -2, y: 15, z: 10, ease: Expo.easeOut });
                camera.lookAt(new THREE.Vector3(50, 20, 0));
                clearTimeout(tajm);
                sakrijSadrzaj();
                tajm=setTimeout(prikaziSadrzaj.bind(null,contact), 5000);

            }
            else if(i===5 || i===6 || i ===7 || i==8)
            {}
        }
        else if (txtfild.value === "../" && kursorY === 0) 
        {//isto u krug
            TweenMax.killAll(false, true, false);
            camera.position.z = 90;
            camera.position.y = 50;
            camera.position.x = 50;
            camera.lookAt(new THREE.Vector3(10, 0, 0));
            dozvola = 1;
            stage = 0;
            clearTimeout(tajm);
            sakrijSadrzaj();
        }
    }

}