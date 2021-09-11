var sl_nhanxet = 20,
kt_nhanxet = 70;
// Recent Comment
function nhanxetmoi(json) {
    var entry, commurl, commsum;
    document.write('<ul class="nxmoi">');
    for (var i = 0; i < sl_nhanxet; i++) {
        entry = json.feed.entry[i];
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                commurl = entry.link[k].href;
                break;
            }
        }
        commsum = ("content" in entry) ? entry.content.$t : ("summary" in entry) ? entry.summary.$t : "";
        commsum = commsum.replace(/<.*?>/g, "");
        if (commsum.length > kt_nhanxet) commsum = commsum.substring(0, kt_nhanxet) + "...";
        document.write('<li><span><a href="' + commurl + '" rel="nofollow">' + entry.author[0].name.$t + ':</a></span> <span>' + commsum + '</span></li>');
    }
    document.write('</ul>');
}