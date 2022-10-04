window.onload = function() {
    var url = "htpp://localhost/sales.json";
    var request = new XMLHttpRequest();
    request.open ("GET", url);
    request.onload = function() {
        if (request.status = 200) {
            updateSales(request.responseText);
        }
    };
    request.send(null);
}