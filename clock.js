<script type="text/javascript">
    function realtime() {
    var hr = document.getElementById('hrs');
    var mint = document.getElementById('mint');
    var sec = document.getElementById('sec');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s 

    hr.innerHTML = h;
    mint.innerHTML = m;
    sec.innerHTML = s;

    var dd = document.getElementById('dd');
    var mm = document.getElementById('mm');
    var yy = document.getElementById('yy');

    var d = new Date().getDate();
    var m = new Date().getMonth() + 1;
    var y = new Date().getFullYear();

    d = (d < 10) ? "0" + d : d
    m = (m < 10) ? "0" + m : m
    y = y : y

    dd.innerHTML = d;
    mm.innerHTML = m;
    yy.innerHTML = y;

}

var interval = setInterval(realtime, 0);
var dateInterval = setInterval(datetime, 0);

</script>
