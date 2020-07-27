var paremeters = {
    numOfBolts: 4,
    outerDia: 0.0,
    boltDia: 0.0,
    thickness: 0.0
};

function getInput() {
    var _numOfBolts = document.getElementById("numOfBolts").value;
    var _outerDia = document.getElementById("outerDia").value;
    var _boltDia = document.getElementById("boltDia").value;
    var _thickness = document.getElementById("thickness").value;
    paremeters.numOfBolts = _numOfBolts;
    paremeters.outerDia = _outerDia;
    paremeters.boltDia = _boltDia;
    paremeters.thickness = _thickness;
    updateInput();
}

function updateInput() {
    document.getElementById("input numOfBolts").innerHTML = paremeters.numOfBolts;
    document.getElementById("input outerDia").innerHTML = paremeters.outerDia;
    document.getElementById("input boltDia").innerHTML = paremeters.boltDia;
    document.getElementById("input thickness").innerHTML = paremeters.thickness;
}
