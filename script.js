var url = "https://api.minetools.eu/ping/tometo.cf";
$.getJSON(url, function (r) {
    if (r.error) {
        $('.box').css('background', '#e74c3c');
        $('h2').html('서버 닫힘');
        $('#status').html('(_　_)。゜zｚＺ');
        return false;
    } else {
        $('.box').css('background', '#2fcc66');
        $('h2').html('서버 열림');
        $('#status').html('플레이어: ' + r.players.online + '/' + r.players.max);
    }
});
