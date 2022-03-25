var formEl = document.getElementById("form");
var inputValues = {
    indreD: parseFloat(document.getElementById("indreD").value),
    ytreD: parseFloat(document.getElementById("ytreD").value),
    lengde: parseFloat(document.getElementById("rørL").value),
    pi: Math.pi,
    betong: 12500,
    result: document.getElementById("result")

}


formEl.addEventListener("submit", function(e) {
    e.preventDefault();
    var data = formEl.elements

    Volum()

    console.log(indreR)
});


function Volum(inputValues) {
    var indreR = inputValues.indreD / 2;
    var ytreR = ytreD / 2;

    indreVolum = computation(indreR, inputValues.lengde);
    ytreVolum = computation(ytreR, inputValues.lengde);
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