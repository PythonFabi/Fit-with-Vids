// compleate button check off workout and adds to progression
// add workout button adds new section tab to div
// body weight calculates weight gain or lost

var nwsect = document.createElement("section");
var nwinpt1 = document.createElement("input");
var nwinpt2 = document.createElement("input");
var nwinpt3 = document.createElement("input");
var nwcpltbt = document.createElement("button");
var nwaddbt = document.createElement("button");
var chestdiv = document.body.children[1].children[1];
var bicepdiv = document.body.children[1].children[2];
var tricepdiv = document.body.children[1].children[3];
var forearmdiv = document.body.children[1].children[4];
var shoulderdiv = document.body.children[1].children[5];
var upperdiv = document.body.children[1].children[6];
var lowerdiv = document.body.children[1].children[7];
var abstdiv = document.body.children[1].children[8];
var legstdiv = document.body.children[1].children[9];

var adchst = 0
var adbscp = 0
var adtrcp = 0
var adfrarm = 0
var adshldr = 0
var aduppr = 0
var adlwr = 0
var adabs = 0
var adleg = 0

nwinpt1.placeholder ="Your Workout..."
nwinpt2.placeholder ="Reps..."
nwinpt3.placeholder ="Sets..."
nwcpltbt.textContent = "Compleated"
nwaddbt.textContent ="Add Workout"


function addsectionchest() {
    adchst++
    chestdiv.appendChild(nwsect);
    nwsect.appendChild(nwinpt1);
    nwsect.appendChild(nwinpt2);
    nwsect.appendChild(nwinpt3);
    nwsect.appendChild(nwcpltbt);
};

function addsectionbicep() {
    adbscp++
    bicepdiv.appendChild(nwsect);
    nwsect.appendChild(nwinpt1);
    nwsect.appendChild(nwinpt2);
    nwsect.appendChild(nwinpt3);
    nwsect.appendChild(nwcpltbt);
};

function addsectiontricep() {
    adtrcp++
    tricepdiv.appendChild(nwsect);
    nwsect.appendChild(nwinpt1);
    nwsect.appendChild(nwinpt2);
    nwsect.appendChild(nwinpt3);
    nwsect.appendChild(nwcpltbt);
};

function addsectionforearm() {
    adfrarm++
    forearmdiv.appendChild(nwsect);
    nwsect.appendChild(nwinpt1);
    nwsect.appendChild(nwinpt2);
    nwsect.appendChild(nwinpt3);
    nwsect.appendChild(nwcpltbt);
};

function addsectionshoulder() {
    adshldr++
    shoulderdiv.appendChild(nwsect);
    nwsect.appendChild(nwinpt1);
    nwsect.appendChild(nwinpt2);
    nwsect.appendChild(nwinpt3);
    nwsect.appendChild(nwcpltbt);
};

function addsectionupper() {
    aduppr++
    upperdiv.appendChild(nwsect);
    nwsect.appendChild(nwinpt1);
    nwsect.appendChild(nwinpt2);
    nwsect.appendChild(nwinpt3);
    nwsect.appendChild(nwcpltbt);
};

function addsectionlower() {
    adlwr++
    lowerdiv.appendChild(nwsect);
    nwsect.appendChild(nwinpt1);
    nwsect.appendChild(nwinpt2);
    nwsect.appendChild(nwinpt3);
    nwsect.appendChild(nwcpltbt);
};

function addsectionsabs() {
    adabs++
    absdiv.appendChild(nwsect);
    nwsect.appendChild(nwinpt1);
    nwsect.appendChild(nwinpt2);
    nwsect.appendChild(nwinpt3);
    nwsect.appendChild(nwcpltbt);
};

function addsectionslegs() {
    adleg++
    legsdiv.appendChild(nwsect);
    nwsect.appendChild(nwinpt1);
    nwsect.appendChild(nwinpt2);
    nwsect.appendChild(nwinpt3);
    nwsect.appendChild(nwcpltbt);
};

for (let index = 0; index < adchst; index++) {
    addsectionchest()
};

(function($){
    $(function(){
  
      $('.nav-button').sideNav({
        edge: 'left', 
        closeOnClick: true, 
        draggable: true
      }
      );
  
    }); 
  })(jQuery);

// var weightcrn = document.getElementById("crntwght");
// var weightsrt = document.getElementById("srtwght");
// var loss = document.getElementById("wghtloss");

// var weightloss = (weightsrt - weightcrn);
// loss.textContent = weightloss