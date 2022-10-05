window.onload = function() {
    var url = "file:///private/etc/apache2/html5/sales.json";
    var request = new XMLHttpRequest();
    request.open ("GET", url);
    request.onload = function() {
        if (request.status = 200) {
            updateSales(request.responseText);
        }
    };
    request.send(null);
}

function updateSales(responseText) {
    var salesDiv = document.getElementById("sales");
    salesDiv.innerHTML = responseText;
}