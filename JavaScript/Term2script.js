/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الترم الثاني
// الاجازه الاولى
function term2_makeTimer() {

		var term2_endTime = new Date("2 Feb 2022");
		term2_endTime = (Date.parse(term2_endTime) / 1000);

		var term2_now = new Date();
		term2_now = (Date.parse(term2_now) / 1000);
		var term2_timeLeft = term2_endTime - term2_now;

			var term2_days = Math.floor(term2_timeLeft / 86400);
			var term2_hours = Math.floor((term2_timeLeft - (term2_days * 86400)) / 3600);
			var term2_minutes = Math.floor((term2_timeLeft - (term2_days * 86400) - (term2_hours * 3600 )) / 60);
			var term2_seconds = Math.floor((term2_timeLeft - (term2_days * 86400) - (term2_hours * 3600) - (term2_minutes * 60)));


			if (term2_hours < "10") { term2_hours = "0" + term2_hours; }
			if (term2_minutes < "10") { term2_minutes = "0" + term2_minutes; }
			if (term2_seconds < "10") { term2_seconds = "0" + term2_seconds; }


			$("#term2_days").html(term2_days + "<span>يوم</span>");
			$("#term2_hours").html(term2_hours + "<span>ساعة</span>");
			$("#term2_minutes").html(term2_minutes + "<span>دقيقة</span>");
			$("#term2_seconds").html(term2_seconds + "<span>ثانية</span>");

			if (term2_days< "7" ) {
					$("div.term2_TIME").toggleClass("soon")&& $(".E1").addClass("pulse");
			}

			if (term2_timeLeft < "0" ) {
				$("div.term2_TIME").replaceWith( "<h3>انتهى ✅</h3>" )
				 && $("hr.term2_E1").addClass("finishTIME")
				 	&& $(".E1").addClass("order-last")
						&& $(".E1").removeClass("pulse");
			}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الاجازه الثانيه
  	var term2_endTime2 = new Date("22 Feb 2022");
    term2_endTime2 = (Date.parse(term2_endTime2) / 1000);

    var term2_now2 = new Date();
    term2_now2 = (Date.parse(term2_now2) / 1000);
    var term2_timeLeft2 = term2_endTime2 - term2_now2;

		var term2_days2 = Math.floor(term2_timeLeft2 / 86400);
		var term2_hours2 = Math.floor((term2_timeLeft2 - (term2_days2 * 86400)) / 3600);
		var term2_minutes2 = Math.floor((term2_timeLeft2 - (term2_days2 * 86400) - (term2_hours2 * 3600 )) / 60);
		var term2_seconds2 = Math.floor((term2_timeLeft2 - (term2_days2 * 86400) - (term2_hours2 * 3600) - (term2_minutes2 * 60)));

		if (term2_hours2 < "10") {term2_hours2 = "0" + term2_hours2; }
		if (term2_minutes2 < "10") {term2_minutes2 = "0" + term2_minutes2; }
		if (term2_seconds2 < "10") {term2_seconds2 = "0" + term2_seconds2; }

		$("#term2_days2").html(term2_days2 + "<span>يوم</span>");
		$("#term2_hours2").html(term2_hours2 + "<span>ساعة</span>");
		$("#term2_minutes2").html(term2_minutes2 + "<span>دقيقة</span>");
		$("#term2_seconds2").html(term2_seconds2 + "<span>ثانية</span>");

		if (term2_days2< "7" ) {
				$("div.term2_TIME2").toggleClass("soon")&& $(".E2").addClass("pulse");
		}

	  if (term2_timeLeft2 < "0" ) {
      $("div.term2_TIME2").replaceWith( "<h3>انتهى ✅</h3>" )
				&& $("hr.term2_E2").addClass("finishTIME")
					&& $(".E2").addClass("order-last")
						&& $(".E2").removeClass("pulse");
		}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الاجازه الثالثه
  	var term2_endTime3 = new Date("10 March 2022");
    term2_endTime3 = (Date.parse(term2_endTime3) / 1000);

    var term2_now3 = new Date();
    term2_now3 = (Date.parse(term2_now3) / 1000);
    var term2_timeLeft3 = term2_endTime3 - term2_now3;

		var term2_days3 = Math.floor(term2_timeLeft3 / 86400);
		var term2_hours3 = Math.floor((term2_timeLeft3 - (term2_days3 * 86400)) / 3600);
		var term2_minutes3 = Math.floor((term2_timeLeft3 - (term2_days3 * 86400) - (term2_hours3 * 3600 )) / 60);
		var term2_seconds3 = Math.floor((term2_timeLeft3 - (term2_days3 * 86400) - (term2_hours3 * 3600) - (term2_minutes3 * 60)));

		if (term2_hours3 < "10") { term2_hours3 = "0" + term2_hours3; }
		if (term2_minutes3 < "10") { term2_minutes3 = "0" + term2_minutes3; }
		if (term2_seconds3 < "10") { term2_seconds3 = "0" + term2_seconds3; }

		$("#term2_days3").html(term2_days3 + "<span>يوم</span>");
		$("#term2_hours3").html(term2_hours3 + "<span>ساعة</span>");
		$("#term2_minutes3").html(term2_minutes3 + "<span>دقيقة</span>");
		$("#term2_seconds3").html(term2_seconds3 + "<span>ثانية</span>");

		if (term2_days3< "7" ) {
				$("div.term2_TIME3").toggleClass("soon")&& $(".E3").addClass("pulse");
		}

	  if (term2_timeLeft3 < "0" ) {
      $("div.term2_TIME3").replaceWith( "<h3>انتهى ✅</h3>" )
				&& $("hr.term2_E3").addClass("finishTIME")
					&& $(".E3").addClass("order-last")
						&& $(".E3").removeClass("pulse");
		}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الاجازه الرابعة
  	var term2_endTime4 = new Date("21 April 2022 03:01 PM");
    term2_endTime4 = (Date.parse(term2_endTime4) / 1000);

    var term2_now4 = new Date();
    term2_now4 = (Date.parse(term2_now4) / 1000);
    var term2_timeLeft4 = term2_endTime4 - term2_now4;

		var term2_days4 = Math.floor(term2_timeLeft4 / 86400);
		var term2_hours4 = Math.floor((term2_timeLeft4 - (term2_days4 * 86400)) / 3600);
		var term2_minutes4 = Math.floor((term2_timeLeft4 - (term2_days4 * 86400) - (term2_hours4 * 3600 )) / 60);
		var term2_seconds4 = Math.floor((term2_timeLeft4 - (term2_days4 * 86400) - (term2_hours4 * 3600) - (term2_minutes4 * 60)));

		if (term2_hours4 < "10") { term2_hours4 = "0" + term2_hours4; }
		if (term2_minutes4 < "10") { term2_minutes4 = "0" + term2_minutes4; }
		if (term2_seconds4 < "10") { term2_seconds4 = "0" + term2_seconds4; }

		$("#term2_days4").html(term2_days4 + "<span>يوم</span>");
		$("#term2_hours4").html(term2_hours4 + "<span>ساعة</span>");
		$("#term2_minutes4").html(term2_minutes4 + "<span>دقيقة</span>");
		$("#term2_seconds4").html(term2_seconds4 + "<span>ثانية</span>");

		if (term2_days4< "7" ) {
				$("div.term2_TIME4").toggleClass("soon")&& $(".E4").addClass("pulse");
		}

	  if (term2_timeLeft4 < "0" ) {
      $("div.term2_TIME4").replaceWith( "<h3>انتهى ✅</h3>" )
				&& $("hr.term2_E4").addClass("finishTIME")
					&& $(".E4").addClass("order-last")
						&& $(".E4").removeClass("pulse");
		}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الاجازه الخامسة
  	var term2_endTime5 = new Date("25 May 2022");
    term2_endTime5 = (Date.parse(term2_endTime5) / 1000);

    var term2_now5 = new Date();
    term2_now5 = (Date.parse(term2_now5) / 1000);
    var term2_timeLeft5 = term2_endTime5 - term2_now5;

		var term2_days5 = Math.floor(term2_timeLeft5 / 86400);
		var term2_hours5 = Math.floor((term2_timeLeft5 - (term2_days5 * 86400)) / 3600);
		var term2_minutes5 = Math.floor((term2_timeLeft5 - (term2_days5 * 86400) - (term2_hours5 * 3600 )) / 60);
		var term2_seconds5 = Math.floor((term2_timeLeft5 - (term2_days5 * 86400) - (term2_hours5 * 3600) - (term2_minutes5 * 60)));

		if (term2_hours5 < "10") { term2_hours5 = "0" + term2_hours5; }
		if (term2_minutes5 < "10") { term2_minutes5 = "0" + term2_minutes5; }
		if (term2_seconds5 < "10") { term2_seconds5 = "0" + term2_seconds5; }

		$("#term2_days5").html(term2_days5 + "<span>يوم</span>");
		$("#term2_hours5").html(term2_hours5 + "<span>ساعة</span>");
		$("#term2_minutes5").html(term2_minutes5 + "<span>دقيقة</span>");
		$("#term2_seconds5").html(term2_seconds5 + "<span>ثانية</span>");

		if (term2_days5< "7" ) {
				$("div.term2_TIME5").toggleClass("soon")&& $(".E5").addClass("pulse");
		}

	  if (term2_timeLeft5 < "0" ) {
      $("div.term2_TIME5").replaceWith( "<h3>انتهى ✅</h3>" )
				&& $("hr.term2_E5").addClass("finishTIME")
					&& $(".E5").addClass("order-last")
						&& $(".E5").removeClass("pulse");
		}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الاجازه السادسة
	  var term2_endTime6 = new Date("16 June 2022");
    term2_endTime6 = (Date.parse(term2_endTime6) / 1000);

    var term2_now6 = new Date();
    term2_now6 = (Date.parse(term2_now6) / 1000);
    var term2_timeLeft6 = term2_endTime6 - term2_now6;

		var term2_days6 = Math.floor(term2_timeLeft6 / 86400);
		var term2_hours6 = Math.floor((term2_timeLeft6 - (term2_days6 * 86400)) / 3600);
		var term2_minutes6 = Math.floor((term2_timeLeft6 - (term2_days6 * 86400) - (term2_hours6 * 3600 )) / 60);
		var term2_seconds6 = Math.floor((term2_timeLeft6 - (term2_days6 * 86400) - (term2_hours6 * 3600) - (term2_minutes6 * 60)));

		if (term2_hours6 < "10") { term2_hours6 = "0" + term2_hours6; }
		if (term2_minutes6 < "10") { term2_minutes6 = "0" + term2_minutes6; }
		if (term2_seconds6 < "10") { term2_seconds6 = "0" + term2_seconds6; }

		$("#term2_days6").html(term2_days6 + "<span>يوم</span>");
		$("#term2_hours6").html(term2_hours6 + "<span>ساعة</spسan>");
		$("#term2_minutes6").html(term2_minutes6 + "<span>دقيقة</span>");
		$("#term2_seconds6").html(term2_seconds6 + "<span>ثانية</span>");

		if (term2_days6< "7" ) {
				$("div.term2_TIME6").toggleClass("soon")&& $(".E6").addClass("pulse");
		}

	  if (term2_timeLeft6 < "0" ) {
      $("div.term2_TIME6").replaceWith( "<h3>انتهى ✅</h3>" )
				&& $("hr.term2_E6").addClass("finishTIME")
					&& $(".E6").addClass("order-last")
						&& $(".E6").removeClass("pulse");
		}
}
	setInterval(function() { term2_makeTimer(); }, 1000);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
