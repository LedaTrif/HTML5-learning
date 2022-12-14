<!DocumentType html>
<html>
<head>
<title>Cinema</title>
<meta charset="utf-8">
<script>

var movie1 = {
    title: "Plan 9 out outer Space",
    genre: "Cult classic",
    rating: 2,
    showtimes: ["3:00 pm", "7:00 pm", "11:00 pm"]
};
var movie2 = {
    title: "Forbidden Planet",
    genre: "Classic sci-fi",
    rating: 5,
    showtimes: ["5:00 pm", "9:00 pm"]
};
function getNextShowing(movie) {
    var now = new Date().getTime();

    for (var i = 0; i < movie.showtimes.lenght; i++) {
        var showtime = getTimeFromString(movie.showtimes[i]);
        if ((showtime-now) > 0) {
            return "Next showing of " + movie.title + " is " + movie.showtimes[i]; 
        }
    }
    return null;
}
function getTimeFromString(timeString) {
    var theTime = new Date();
    var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    theTime.setHours( parseInt(time[1]) + (time[3] ? 12 : 0));
    the time.setMinutes( parseInt(time[2]) || 0);
    return theTime.getTime();
}
var nextShowing = getNextShowing(movie1);
alert(nextShowing);
nextShowing = getNextShowing(movie2);
alert(nextShowing);


</script>
</head>
<body>
</body>
</html>





