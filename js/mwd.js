/* From http://www.jplayer.org/latest/demo-04/ */
$(document).ready(function(){
	var	my_jPlayer = $("#jquery_jplayer"),
		my_trackName = $("#jp_container .track-name"),
		my_playState = $("#jp_container .play-state"),
		my_extraPlayInfo = $("#jp_container .extra-play-info");
	var	opt_play_first = false, // If true, will attempt to auto-play the default track on page loads; no effect on mobile devices
		opt_auto_play = true, // If true, when a track is selected, it will auto-play
		opt_text_playing = "Current clip", // Text when playing
		opt_text_selected = "Current clip"; // Text when not playing
	var first_track = true;
	$.jPlayer.timeFormat.padMin = true;
	$.jPlayer.timeFormat.padSec = true;
	$.jPlayer.timeFormat.sepMin = " min ";
	$.jPlayer.timeFormat.sepSec = " sec";
	my_playState.text(opt_text_selected);my_jPlayer.jPlayer({ready: function () {$("#jp_container .track-default").click();}, timeupdate: function(event) {my_extraPlayInfo.text(parseInt(event.jPlayer.status.currentPercentAbsolute, 10) + "%");}, play: function(event) {my_playState.text(opt_text_playing);}, pause: function(event) {my_playState.text(opt_text_selected);}, 	ended: function(event) {my_playState.text(opt_text_selected);}, swfPath: "../dist/jplayer", cssSelectorAncestor: "#jp_container", supplied: "mp3", wmode: "window"}); $("#jp_container .track").click(function(e) {my_trackName.text($(this).text()); my_jPlayer.jPlayer("setMedia", {mp3: $(this).attr("href")}); if((opt_play_first && first_track) || (opt_auto_play && !first_track)) {my_jPlayer.jPlayer("play");} first_track = false; $(this).blur(); return false;}); $("#jplayer_inspector").jPlayerInspector({jPlayer:$("#jquery_jplayer")});
});
	
/* From W3C */
window.onscroll = function() {scrollFunction()}; function scrollFunction() {if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {document.getElementById("backtotop").style.display = "block";} else {document.getElementById("backtotop").style.display = "none";}} function topFunction() {document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}

$(document).ready(function() {
    var options = {  lng : 'en', fallbackLng : 'pt'}

    i18n.init( options, function(t) { $("#content").i18n(); });

    $('select.language-select').on('change', function(evt) {
        var selectedLanguage = $(this).find('option:selected').val();
        i18n.setLng(selectedLanguage, function(t) {
          $("#content").i18n();
        });
    });
});
