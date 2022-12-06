

// var obj = document.getElementById("台南一");



// var obj = document.getElementById("台南二");

// function getReqParam(variable) {
//     console.log(window.location.search);
//     var query = window.location.search.substring(1);
//     var vars = query.split("&");
//     for (var i = 0; i < vars.length; i++) {
//         var pair = vars[i].split("=");
//         if (pair[0] == "台南一") {
//             var obj = document.getElementById("台南一").src = "img/pic.png";
//         }
//     }
// }

if (window.location.search == "?town=台南一") {
    var obj = document.getElementById("台南").src = "img/pic.png";
}
