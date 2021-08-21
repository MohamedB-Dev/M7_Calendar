/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الاجازه الاولى
function makeTimer() {

		var endTime = new Date("22 Sep 2021");
		endTime = (Date.parse(endTime) / 1000);

		var now = new Date();
		now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400);
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));


			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }


			$("#days").html(days + "<span>يوم</span>");
			$("#hours").html(hours + "<span>ساعة</span>");
			$("#minutes").html(minutes + "<span>دقيقة</span>");
			$("#seconds").html(seconds + "<span>ثانية</span>");

		if (timeLeft < "0" ) {
			$("div.TIME").replaceWith( "<h3>انتهى ✅</h3>" );
		}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الاجازه الثانيه
  var endTime2 = new Date("17 Oct 2021");
    endTime2 = (Date.parse(endTime2) / 1000);

    var now2 = new Date();
    now2 = (Date.parse(now2) / 1000);
    var timeLeft2 = endTime2 - now2;

		var days2 = Math.floor(timeLeft2 / 86400);
		var hours2 = Math.floor((timeLeft2 - (days2 * 86400)) / 3600);
		var minutes2 = Math.floor((timeLeft2 - (days2 * 86400) - (hours2 * 3600 )) / 60);
		var seconds2 = Math.floor((timeLeft2 - (days2 * 86400) - (hours2 * 3600) - (minutes2 * 60)));

		if (hours2 < "10") { hours2 = "0" + hours2; }
		if (minutes2 < "10") { minutes2 = "0" + minutes2; }
		if (seconds2 < "10") { seconds2 = "0" + seconds2; }

		$("#days2").html(days2 + "<span>يوم</span>");
		$("#hours2").html(hours2 + "<span>ساعة</span>");
		$("#minutes2").html(minutes2 + "<span>دقيقة</span>");
		$("#seconds2").html(seconds2 + "<span>ثانية</span>");

    if (timeLeft2 < "0" ) {
      $("div.TIME2").replaceWith( "<h3>انتهى ✅</h3>" );
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الاجازه الثالثه
  var endTime3 = new Date("4 Nov 2021");
    endTime3 = (Date.parse(endTime3) / 1000);

    var now3 = new Date();
    now3 = (Date.parse(now3) / 1000);
    var timeLeft3 = endTime3 - now3;

		var days3 = Math.floor(timeLeft3 / 86400);
		var hours3 = Math.floor((timeLeft3 - (days3 * 86400)) / 3600);
		var minutes3 = Math.floor((timeLeft3 - (days3 * 86400) - (hours3 * 3600 )) / 60);
		var seconds3 = Math.floor((timeLeft3 - (days3 * 86400) - (hours3 * 3600) - (minutes3 * 60)));

		if (hours3 < "10") { hours3 = "0" + hours3; }
		if (minutes3 < "10") { minutes3 = "0" + minutes3; }
		if (seconds3 < "10") { seconds3 = "0" + seconds3; }

		$("#days3").html(days3 + "<span>يوم</span>");
		$("#hours3").html(hours3 + "<span>ساعة</span>");
		$("#minutes3").html(minutes3 + "<span>دقيقة</span>");
		$("#seconds3").html(seconds3 + "<span>ثانية</span>");

    if (timeLeft3 < "0" ) {
      $("div.TIME3").replaceWith( "<h3>انتهى ✅</h3>" );
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الاجازه الرابعة
  var endTime4 = new Date("25 Nov 2021");
    endTime4 = (Date.parse(endTime4) / 1000);

    var now4 = new Date();
    now4 = (Date.parse(now4) / 1000);
    var timeLeft4 = endTime4 - now4;

		var days4 = Math.floor(timeLeft4 / 86400);
		var hours4 = Math.floor((timeLeft4 - (days4 * 86400)) / 3600);
		var minutes4 = Math.floor((timeLeft4 - (days4 * 86400) - (hours4 * 3600 )) / 60);
		var seconds4 = Math.floor((timeLeft4 - (days4 * 86400) - (hours4 * 3600) - (minutes4 * 60)));

		if (hours4 < "10") { hours4 = "0" + hours4; }
		if (minutes4 < "10") { minutes4 = "0" + minutes4; }
		if (seconds4 < "10") { seconds4 = "0" + seconds4; }

		$("#days4").html(days4 + "<span>يوم</span>");
		$("#hours4").html(hours4 + "<span>ساعة</span>");
		$("#minutes4").html(minutes4 + "<span>دقيقة</span>");
		$("#seconds4").html(seconds4 + "<span>ثانية</span>");

    if (timeLeft4 < "0" ) {
      $("div.TIME4").replaceWith( "<h3>انتهى ✅</h3>" );
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الاجازه الخامسة
  var endTime5 = new Date("19 Dec 2021");
    endTime5 = (Date.parse(endTime5) / 1000);

    var now5 = new Date();
    now5 = (Date.parse(now5) / 1000);
    var timeLeft5 = endTime5 - now5;

		var days5 = Math.floor(timeLeft5 / 86400);
		var hours5 = Math.floor((timeLeft5 - (days5 * 86400)) / 3600);
		var minutes5 = Math.floor((timeLeft5 - (days5 * 86400) - (hours5 * 3600 )) / 60);
		var seconds5 = Math.floor((timeLeft5 - (days5 * 86400) - (hours5 * 3600) - (minutes5 * 60)));

		if (hours5 < "10") { hours5 = "0" + hours5; }
		if (minutes5 < "10") { minutes5 = "0" + minutes5; }
		if (seconds4 < "10") { seconds4 = "0" + seconds4; }

		$("#days5").html(days5 + "<span>يوم</span>");
		$("#hours5").html(hours5 + "<span>ساعة</span>");
		$("#minutes5").html(minutes5 + "<span>دقيقة</span>");
		$("#seconds5").html(seconds5 + "<span>ثانية</span>");

    if (timeLeft5 < "0" ) {
      $("div.TIME5").replaceWith( "<h3>انتهى ✅</h3>" );
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الاجازه السادسة
  var endTime6 = new Date("6 Jan 2022");
    endTime6 = (Date.parse(endTime6) / 1000);

    var now6 = new Date();
    now6 = (Date.parse(now6) / 1000);
    var timeLeft6 = endTime6 - now6;

		var days6 = Math.floor(timeLeft6 / 86400);
		var hours6 = Math.floor((timeLeft6 - (days6 * 86400)) / 3600);
		var minutes6 = Math.floor((timeLeft6 - (days6 * 86400) - (hours6 * 3600 )) / 60);
		var seconds6 = Math.floor((timeLeft6 - (days6 * 86400) - (hours6 * 3600) - (minutes6 * 60)));

		if (hours6 < "10") { hours6 = "0" + hours6; }
		if (minutes6 < "10") { minutes6 = "0" + minutes6; }
		if (seconds6 < "10") { seconds6 = "0" + seconds6; }

		$("#days6").html(days6 + "<span>يوم</span>");
		$("#hours6").html(hours6 + "<span>ساعة</spسan>");
		$("#minutes6").html(minutes6 + "<span>دقيقة</span>");
		$("#seconds6").html(seconds6 + "<span>ثانية</span>");

    if (timeLeft6 < "0" ) {
      $("div.TIME6").replaceWith( "<h3>انتهى ✅</h3>" );
    }
}
	setInterval(function() { makeTimer(); }, 1000);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//modal
$(window).on('load', function() {$('#Modal').modal('show')});
//modal

// 2nd-modal
$('.modal-2nd-open').click(function(){
	$('body').css("overflow" , "hidden");
});
$('.modal-2nd-close').click(function(){
	$('body').css("overflow" , "auto");
});
// 2nd-modal

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Color Switcher
$('#blueButton').click(switchBlue);
$('#redButton').click(switchRed);
$('#greenButton').click(switchGreen);
$('#tiffanyButton').click(switchTiffany);
$('#yellowButton').click(switchYellow);
$('#orangeButton').click(switchOrange);
$('#purpleButton').click(switchPurple);
$('#greyButton').click(switchGrey);
$('#darkButton').click(switchDark);


function switchBlue() {
  $('body').attr('class', 'blue') && $('path').attr('fill', '#3498db');
}

function switchRed() {
  $('body').attr('class', 'red') && $('path').attr('fill', '#e74c3c');
}

function switchGreen() {
  $('body').attr('class', 'green') && $('path').attr('fill', '#218c74');
}

function switchTiffany() {
  $('body').attr('class', 'tiffany') && $('path').attr('fill', '#1abc9c');
}

function switchYellow() {
  $('body').attr('class', 'yellow') && $('path').attr('fill', '#f1c40f');
}

function switchOrange() {
  $('body').attr('class', 'orange') && $('path').attr('fill', '#f39c12');
}

function switchPurple() {
  $('body').attr('class', 'purple') && $('path').attr('fill', '#8e44ad');
}

function switchGrey() {
  $('body').attr('class', 'grey') && $('path').attr('fill', '#7f8c8d');
}

function switchDark() {
  $('body').attr('class', 'dark') && $('path').attr('fill', '#343a40');
}
//Color Switcher

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
