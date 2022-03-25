var formEl = document.getElementById("form");
var inputValues = {
    indreD: document.getElementById("indreD").value,
    ytreD: document.getElementById("ytreD").value,
    lengde: document.getElementById("rørL").value,
    pi: Math.pi,
    betong: 12500,
    result: document.getElementById("result")

}


formEl.addEventListener("submit", function(e) {
    e.preventDefault();
    var data = formEl.elements

    Volum()

    console.log(ytreVolum)

});


function Volum(indreD, ytreD) {
    var indreR = indreD / 2;
    var ytreR = ytreD / 2;

    indreVolum = computation(indreR, inputValues.lengde);
    ytreVolum = computation(ytreR, inputValues.lengde.value);
    volum = indreVolum - ytreVolum;

    var mengde = Math.ceil(volum/inputValues.betong)
    var totalPris = mengde * 89;

    result.innerHTML = `Alfreds Betong AS, ifølge utregningen vil dere trenge ${totalPris} for å kjøpe ${mengde} sekker med B25 betong`
};




function computation(radius, height) {
    return inputValues.pi*(radius*radius)*height;
}













// function Cylinder(height, diameter) {
//     this.height = height;
//     this.diameter = diameter;
// }

// Cylinder.prototype.volume = function () {
//     var radius =  this.diameter / 2;
//     var height = this.height;

//     var computation = Math.PI * radius * radius * height;
//     return computation;
// }