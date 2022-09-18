/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الفصل الدراسي الاول
// الاجازه الاولى
function term_makeTimer() {

		var term1_e1_endTime = new Date("21 Sep 2022");
		term1_e1_endTime = (Date.parse(term1_e1_endTime) / 1000);

		var term1_e1_now = new Date();
		term1_e1_now = (Date.parse(term1_e1_now) / 1000);
		var term1_e1_timeLeft = term1_e1_endTime - term1_e1_now;

			var term1_e1_days = Math.floor(term1_e1_timeLeft / 86400);
			var term1_e1_hours = Math.floor((term1_e1_timeLeft - (term1_e1_days * 86400)) / 3600);
			var term1_e1_minutes = Math.floor((term1_e1_timeLeft - (term1_e1_days * 86400) - (term1_e1_hours * 3600 )) / 60);
			var term1_e1_seconds = Math.floor((term1_e1_timeLeft - (term1_e1_days * 86400) - (term1_e1_hours * 3600) - (term1_e1_minutes * 60)));


			if (term1_e1_hours < "10") { term1_e1_hours = "0" + term1_e1_hours; }
			if (term1_e1_minutes < "10") { term1_e1_minutes = "0" + term1_e1_minutes; }
			if (term1_e1_seconds < "10") { term1_e1_seconds = "0" + term1_e1_seconds; }


			$("#daysTerm1-1").html(term1_e1_days + "<span>يوم</span>");
			$("#hoursTerm1-1").html(term1_e1_hours + "<span>ساعة</span>");
			$("#minutesTerm1-1").html(term1_e1_minutes + "<span>دقيقة</span>");
			$("#secondsTerm1-1").html(term1_e1_seconds + "<span>ثانية</span>");

			if (term1_e1_days< "7" ) {
					$("div.term1_E1_TIME").toggleClass("soon")&& $(".T1-E1").addClass("pulse");
			}

			if (term1_e1_timeLeft < "0" ) {
				$("div.term1_E1_TIME").replaceWith( "<h3>انتهى ✅</h3>" )
				 && $("hr.term1_E1_TIME").addClass("finishTIME")
						&& $(".T1-E1").removeClass("pulse");
			}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الاجازه الثانيه
	var term1_e2_endTime = new Date("16 Oct 2022");
	term1_e2_endTime = (Date.parse(term1_e2_endTime) / 1000);

	var term1_e2_now = new Date();
	term1_e2_now = (Date.parse(term1_e2_now) / 1000);
	var term1_e2_timeLeft = term1_e2_endTime - term1_e2_now;

		var term1_e2_days = Math.floor(term1_e2_timeLeft / 86400);
		var term1_e2_hours = Math.floor((term1_e2_timeLeft - (term1_e2_days * 86400)) / 3600);
		var term1_e2_minutes = Math.floor((term1_e2_timeLeft - (term1_e2_days * 86400) - (term1_e2_hours * 3600 )) / 60);
		var term1_e2_seconds = Math.floor((term1_e2_timeLeft - (term1_e2_days * 86400) - (term1_e2_hours * 3600) - (term1_e2_minutes * 60)));


		if (term1_e2_hours < "10") { term1_e2_hours = "0" + term1_e2_hours; }
		if (term1_e2_minutes < "10") { term1_e2_minutes = "0" + term1_e2_minutes; }
		if (term1_e2_seconds < "10") { term1_e2_seconds = "0" + term1_e2_seconds; }


		$("#daysTerm1-2").html(term1_e2_days + "<span>يوم</span>");
		$("#hoursTerm1-2").html(term1_e2_hours + "<span>ساعة</span>");
		$("#minutesTerm1-2").html(term1_e2_minutes + "<span>دقيقة</span>");
		$("#secondsTerm1-2").html(term1_e2_seconds + "<span>ثانية</span>");

		if (term1_e2_days< "7" ) {
				$("div.term1_E2_TIME").toggleClass("soon")&& $(".T1-E2").addClass("pulse");
		}

		if (term1_e2_timeLeft < "0" ) {
			$("div.term1_E2_TIME").replaceWith( "<h3>انتهى ✅</h3>" )
			 && $("hr.term1_E2_TIME").addClass("finishTIME")
					&& $(".T1-E2").removeClass("pulse");
		}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الاجازه الثالثه
	var term1_e3_endTime = new Date("10 Nov 2022");
	term1_e3_endTime = (Date.parse(term1_e3_endTime) / 1000);

	var term1_e3_now = new Date();
	term1_e3_now = (Date.parse(term1_e3_now) / 1000);
	var term1_e3_timeLeft = term1_e3_endTime - term1_e3_now;

		var term1_e3_days = Math.floor(term1_e3_timeLeft / 86400);
		var term1_e3_hours = Math.floor((term1_e3_timeLeft - (term1_e3_days * 86400)) / 3600);
		var term1_e3_minutes = Math.floor((term1_e3_timeLeft - (term1_e3_days * 86400) - (term1_e3_hours * 3600 )) / 60);
		var term1_e3_seconds = Math.floor((term1_e3_timeLeft - (term1_e3_days * 86400) - (term1_e3_hours * 3600) - (term1_e3_minutes * 60)));


		if (term1_e3_hours < "10") { term1_e3_hours = "0" + term1_e3_hours; }
		if (term1_e3_minutes < "10") { term1_e3_minutes = "0" + term1_e3_minutes; }
		if (term1_e3_seconds < "10") { term1_e3_seconds = "0" + term1_e3_seconds; }


		$("#daysTerm1-3").html(term1_e3_days + "<span>يوم</span>");
		$("#hoursTerm1-3").html(term1_e3_hours + "<span>ساعة</span>");
		$("#minutesTerm1-3").html(term1_e3_minutes + "<span>دقيقة</span>");
		$("#secondsTerm1-3").html(term1_e3_seconds + "<span>ثانية</span>");

		if (term1_e3_days< "7" ) {
				$("div.term1_E3_TIME").toggleClass("soon")&& $(".T1-E3").addClass("pulse");
		}

		if (term1_e3_timeLeft < "0" ) {
			$("div.term1_E3_TIME").replaceWith( "<h3>انتهى ✅</h3>" )
			 && $("hr.term1_E3_TIME").addClass("finishTIME")
					&& $(".T1-E3").removeClass("pulse");
		}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الاجازه الرابعة
	var term1_e4_endTime = new Date("24 Nov 2022");
	term1_e4_endTime = (Date.parse(term1_e4_endTime) / 1000);

	var term1_e4_now = new Date();
	term1_e4_now = (Date.parse(term1_e4_now) / 1000);
	var term1_e4_timeLeft = term1_e4_endTime - term1_e4_now;

		var term1_e4_days = Math.floor(term1_e4_timeLeft / 86400);
		var term1_e4_hours = Math.floor((term1_e4_timeLeft - (term1_e4_days * 86400)) / 3600);
		var term1_e4_minutes = Math.floor((term1_e4_timeLeft - (term1_e4_days * 86400) - (term1_e4_hours * 3600 )) / 60);
		var term1_e4_seconds = Math.floor((term1_e4_timeLeft - (term1_e4_days * 86400) - (term1_e4_hours * 3600) - (term1_e4_minutes * 60)));


		if (term1_e4_hours < "10") { term1_e4_hours = "0" + term1_e4_hours; }
		if (term1_e4_minutes < "10") { term1_e4_minutes = "0" + term1_e4_minutes; }
		if (term1_e4_seconds < "10") { term1_e4_seconds = "0" + term1_e4_seconds; }


		$("#daysTerm1-4").html(term1_e4_days + "<span>يوم</span>");
		$("#hoursTerm1-4").html(term1_e4_hours + "<span>ساعة</span>");
		$("#minutesTerm1-4").html(term1_e4_minutes + "<span>دقيقة</span>");
		$("#secondsTerm1-4").html(term1_e4_seconds + "<span>ثانية</span>");

		if (term1_e4_days< "7" ) {
				$("div.term1_E4_TIME").toggleClass("soon")&& $(".T1-E4").addClass("pulse");
		}

		if (term1_e4_timeLeft < "0" ) {
			$("div.term1_E4_TIME").replaceWith( "<h3>انتهى ✅</h3>" )
			 && $("hr.term1_E4_TIME").addClass("finishTIME")
					&& $(".T1-E4").removeClass("pulse");
		}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الفصل الدراسي الثاني
// الاجازه الاولى
		var term2_e1_endTime = new Date("18 Dec 2022");
		term2_e1_endTime = (Date.parse(term2_e1_endTime) / 1000);

		var term2_e1_now = new Date();
		term2_e1_now = (Date.parse(term2_e1_now) / 1000);
		var term2_e1_timeLeft = term2_e1_endTime - term2_e1_now;

			var term2_e1_days = Math.floor(term2_e1_timeLeft / 86400);
			var term2_e1_hours = Math.floor((term2_e1_timeLeft - (term2_e1_days * 86400)) / 3600);
			var term2_e1_minutes = Math.floor((term2_e1_timeLeft - (term2_e1_days * 86400) - (term2_e1_hours * 3600 )) / 60);
			var term2_e1_seconds = Math.floor((term2_e1_timeLeft - (term2_e1_days * 86400) - (term2_e1_hours * 3600) - (term2_e1_minutes * 60)));


			if (term2_e1_hours < "10") { term2_e1_hours = "0" + term2_e1_hours; }
			if (term2_e1_minutes < "10") { term2_e1_minutes = "0" + term2_e1_minutes; }
			if (term2_e1_seconds < "10") { term2_e1_seconds = "0" + term2_e1_seconds; }


			$("#daysTerm2-1").html(term2_e1_days + "<span>يوم</span>");
			$("#hoursTerm2-1").html(term2_e1_hours + "<span>ساعة</span>");
			$("#minutesTerm2-1").html(term2_e1_minutes + "<span>دقيقة</span>");
			$("#secondsTerm2-1").html(term2_e1_seconds + "<span>ثانية</span>");

			if (term2_e1_days< "7" ) {
					$("div.term2_E1_TIME").toggleClass("soon")&& $(".T2-E1").addClass("pulse");
			}

			if (term2_e1_timeLeft < "0" ) {
				$("div.term2_E1_TIME").replaceWith( "<h3>انتهى ✅</h3>" )
				 && $("hr.term2_E1_TIME").addClass("finishTIME")
						&& $(".T2-E1").removeClass("pulse");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الاجازه الثانيه
	var term2_e2_endTime = new Date("15 Jan 2023");
	term2_e2_endTime = (Date.parse(term2_e2_endTime) / 1000);

	var term2_e2_now = new Date();
	term2_e2_now = (Date.parse(term2_e2_now) / 1000);
	var term2_e2_timeLeft = term2_e2_endTime - term2_e2_now;

		var term2_e2_days = Math.floor(term2_e2_timeLeft / 86400);
		var term2_e2_hours = Math.floor((term2_e2_timeLeft - (term2_e2_days * 86400)) / 3600);
		var term2_e2_minutes = Math.floor((term2_e2_timeLeft - (term2_e2_days * 86400) - (term2_e2_hours * 3600 )) / 60);
		var term2_e2_seconds = Math.floor((term2_e2_timeLeft - (term2_e2_days * 86400) - (term2_e2_hours * 3600) - (term2_e2_minutes * 60)));


		if (term2_e2_hours < "10") { term2_e2_hours = "0" + term2_e2_hours; }
		if (term2_e2_minutes < "10") { term2_e2_minutes = "0" + term2_e2_minutes; }
		if (term2_e2_seconds < "10") { term2_e2_seconds = "0" + term2_e2_seconds; }


		$("#daysTerm2-2").html(term2_e2_days + "<span>يوم</span>");
		$("#hoursTerm2-2").html(term2_e2_hours + "<span>ساعة</span>");
		$("#minutesTerm2-2").html(term2_e2_minutes + "<span>دقيقة</span>");
		$("#secondsTerm2-2").html(term2_e2_seconds + "<span>ثانية</span>");

		if (term2_e2_days< "7" ) {
				$("div.term2_E2_TIME").toggleClass("soon")&& $(".T2-E2").addClass("pulse");
		}

		if (term2_e2_timeLeft < "0" ) {
			$("div.term2_E2_TIME").replaceWith( "<h3>انتهى ✅</h3>" )
			 && $("hr.term2_E2_TIME").addClass("finishTIME")
					&& $(".T2-E2").removeClass("pulse");
		}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الاجازه الثالثه
	var term2_e3_endTime = new Date("22 Feb 2023");
	term2_e3_endTime = (Date.parse(term2_e3_endTime) / 1000);

	var term2_e3_now = new Date();
	term2_e3_now = (Date.parse(term2_e3_now) / 1000);
	var term2_e3_timeLeft = term2_e3_endTime - term2_e3_now;

		var term2_e3_days = Math.floor(term2_e3_timeLeft / 86400);
		var term2_e3_hours = Math.floor((term2_e3_timeLeft - (term2_e3_days * 86400)) / 3600);
		var term2_e3_minutes = Math.floor((term2_e3_timeLeft - (term2_e3_days * 86400) - (term2_e3_hours * 3600 )) / 60);
		var term2_e3_seconds = Math.floor((term2_e3_timeLeft - (term2_e3_days * 86400) - (term2_e3_hours * 3600) - (term2_e3_minutes * 60)));


		if (term2_e3_hours < "10") { term2_e3_hours = "0" + term2_e3_hours; }
		if (term2_e3_minutes < "10") { term2_e3_minutes = "0" + term2_e3_minutes; }
		if (term2_e3_seconds < "10") { term2_e3_seconds = "0" + term2_e3_seconds; }


		$("#daysTerm2-3").html(term2_e3_days + "<span>يوم</span>");
		$("#hoursTerm2-3").html(term2_e3_hours + "<span>ساعة</span>");
		$("#minutesTerm2-3").html(term2_e3_minutes + "<span>دقيقة</span>");
		$("#secondsTerm2-3").html(term2_e3_seconds + "<span>ثانية</span>");

		if (term2_e3_days< "7" ) {
				$("div.term2_E3_TIME").toggleClass("soon")&& $(".T2-E3").addClass("pulse");
		}

		if (term2_e3_timeLeft < "0" ) {
			$("div.term2_E3_TIME").replaceWith( "<h3>انتهى ✅</h3>" )
			 && $("hr.term2_E3_TIME").addClass("finishTIME")
					&& $(".T2-E3").removeClass("pulse");
		}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الاجازه الرابعة
	var term2_e4_endTime = new Date("2 Mar 2023");
	term2_e4_endTime = (Date.parse(term2_e4_endTime) / 1000);

	var term2_e4_now = new Date();
	term2_e4_now = (Date.parse(term2_e4_now) / 1000);
	var term2_e4_timeLeft = term2_e4_endTime - term2_e4_now;

		var term2_e4_days = Math.floor(term2_e4_timeLeft / 86400);
		var term2_e4_hours = Math.floor((term2_e4_timeLeft - (term2_e4_days * 86400)) / 3600);
		var term2_e4_minutes = Math.floor((term2_e4_timeLeft - (term2_e4_days * 86400) - (term2_e4_hours * 3600 )) / 60);
		var term2_e4_seconds = Math.floor((term2_e4_timeLeft - (term2_e4_days * 86400) - (term2_e4_hours * 3600) - (term2_e4_minutes * 60)));


		if (term2_e4_hours < "10") { term2_e4_hours = "0" + term2_e4_hours; }
		if (term2_e4_minutes < "10") { term2_e4_minutes = "0" + term2_e4_minutes; }
		if (term2_e4_seconds < "10") { term2_e4_seconds = "0" + term2_e4_seconds; }


		$("#daysTerm2-4").html(term2_e4_days + "<span>يوم</span>");
		$("#hoursTerm2-4").html(term2_e4_hours + "<span>ساعة</span>");
		$("#minutesTerm2-4").html(term2_e4_minutes + "<span>دقيقة</span>");
		$("#secondsTerm2-4").html(term2_e4_seconds + "<span>ثانية</span>");

		if (term2_e4_days< "7" ) {
				$("div.term2_E4_TIME").toggleClass("soon")&& $(".T2-E4").addClass("pulse");
		}

		if (term2_e4_timeLeft < "0" ) {
			$("div.term2_E4_TIME").replaceWith( "<h3>انتهى ✅</h3>" )
			 && $("hr.term2_E4_TIME").addClass("finishTIME")
					&& $(".T2-E4").removeClass("pulse");
		}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الفصل الدراسي الثالث
// الاجازه الاولى
				var term3_e1_endTime = new Date("14 Apr 2023");
				term3_e1_endTime = (Date.parse(term3_e1_endTime) / 1000);

				var term3_e1_now = new Date();
				term3_e1_now = (Date.parse(term3_e1_now) / 1000);
				var term3_e1_timeLeft = term3_e1_endTime - term3_e1_now;

					var term3_e1_days = Math.floor(term3_e1_timeLeft / 86400);
					var term3_e1_hours = Math.floor((term3_e1_timeLeft - (term3_e1_days * 86400)) / 3600);
					var term3_e1_minutes = Math.floor((term3_e1_timeLeft - (term3_e1_days * 86400) - (term3_e1_hours * 3600 )) / 60);
					var term3_e1_seconds = Math.floor((term3_e1_timeLeft - (term3_e1_days * 86400) - (term3_e1_hours * 3600) - (term3_e1_minutes * 60)));


					if (term3_e1_hours < "10") { term3_e1_hours = "0" + term3_e1_hours; }
					if (term3_e1_minutes < "10") { term3_e1_minutes = "0" + term3_e1_minutes; }
					if (term3_e1_seconds < "10") { term3_e1_seconds = "0" + term3_e1_seconds; }


					$("#daysTerm3-1").html(term3_e1_days + "<span>يوم</span>");
					$("#hoursTerm3-1").html(term3_e1_hours + "<span>ساعة</span>");
					$("#minutesTerm3-1").html(term3_e1_minutes + "<span>دقيقة</span>");
					$("#secondsTerm3-1").html(term3_e1_seconds + "<span>ثانية</span>");

					if (term3_e1_days< "7" ) {
							$("div.term3_E1_TIME").toggleClass("soon")&& $(".T3-E1").addClass("pulse");
					}

					if (term3_e1_timeLeft < "0" ) {
						$("div.term3_E1_TIME").replaceWith( "<h3>انتهى ✅</h3>" )
						 && $("hr.term3_E1_TIME").addClass("finishTIME")
								&& $(".T3-E1").removeClass("pulse");
		}

		/////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// الاجازه الثانيه
			var term3_e2_endTime = new Date("26 Apr 2023");
			term3_e2_endTime = (Date.parse(term3_e2_endTime) / 1000);

			var term3_e2_now = new Date();
			term3_e2_now = (Date.parse(term3_e2_now) / 1000);
			var term3_e2_timeLeft = term3_e2_endTime - term3_e2_now;

				var term3_e2_days = Math.floor(term3_e2_timeLeft / 86400);
				var term3_e2_hours = Math.floor((term3_e2_timeLeft - (term3_e2_days * 86400)) / 3600);
				var term3_e2_minutes = Math.floor((term3_e2_timeLeft - (term3_e2_days * 86400) - (term3_e2_hours * 3600 )) / 60);
				var term3_e2_seconds = Math.floor((term3_e2_timeLeft - (term3_e2_days * 86400) - (term3_e2_hours * 3600) - (term3_e2_minutes * 60)));


				if (term3_e2_hours < "10") { term3_e2_hours = "0" + term3_e2_hours; }
				if (term3_e2_minutes < "10") { term3_e2_minutes = "0" + term3_e2_minutes; }
				if (term3_e2_seconds < "10") { term3_e2_seconds = "0" + term3_e2_seconds; }


				$("#daysTerm3-2").html(term3_e2_days + "<span>يوم</span>");
				$("#hoursTerm3-2").html(term3_e2_hours + "<span>ساعة</span>");
				$("#minutesTerm3-2").html(term3_e2_minutes + "<span>دقيقة</span>");
				$("#secondsTerm3-2").html(term3_e2_seconds + "<span>ثانية</span>");

				if (term3_e2_days< "7" ) {
						$("div.term3_E2_TIME").toggleClass("soon")&& $(".T3-E2").addClass("pulse");
				}

				if (term3_e2_timeLeft < "0" ) {
					$("div.term3_E2_TIME").replaceWith( "<h3>انتهى ✅</h3>" )
					 && $("hr.term3_E2_TIME").addClass("finishTIME")
							&& $(".T3-E2").removeClass("pulse");
				}

		/////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// الاجازه الثالثه
			var term3_e3_endTime = new Date("28 May 2023	");
			term3_e3_endTime = (Date.parse(term3_e3_endTime) / 1000);

			var term3_e3_now = new Date();
			term3_e3_now = (Date.parse(term3_e3_now) / 1000);
			var term3_e3_timeLeft = term3_e3_endTime - term3_e3_now;

				var term3_e3_days = Math.floor(term3_e3_timeLeft / 86400);
				var term3_e3_hours = Math.floor((term3_e3_timeLeft - (term3_e3_days * 86400)) / 3600);
				var term3_e3_minutes = Math.floor((term3_e3_timeLeft - (term3_e3_days * 86400) - (term3_e3_hours * 3600 )) / 60);
				var term3_e3_seconds = Math.floor((term3_e3_timeLeft - (term3_e3_days * 86400) - (term3_e3_hours * 3600) - (term3_e3_minutes * 60)));


				if (term3_e3_hours < "10") { term3_e3_hours = "0" + term3_e3_hours; }
				if (term3_e3_minutes < "10") { term3_e3_minutes = "0" + term3_e3_minutes; }
				if (term3_e3_seconds < "10") { term3_e3_seconds = "0" + term3_e3_seconds; }


				$("#daysTerm3-3").html(term3_e3_days + "<span>يوم</span>");
				$("#hoursTerm3-3").html(term3_e3_hours + "<span>ساعة</span>");
				$("#minutesTerm3-3").html(term3_e3_minutes + "<span>دقيقة</span>");
				$("#secondsTerm3-3").html(term3_e3_seconds + "<span>ثانية</span>");

				if (term3_e3_days< "7" ) {
						$("div.term3_E3_TIME").toggleClass("soon")&& $(".T3-E3").addClass("pulse");
				}

				if (term3_e3_timeLeft < "0" ) {
					$("div.term3_E3_TIME").replaceWith( "<h3>انتهى ✅</h3>" )
					 && $("hr.term3_E3_TIME").addClass("finishTIME")
							&& $(".T3-E3").removeClass("pulse");
				}

		/////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// الاجازه الرابعة
			var term3_e4_endTime = new Date("26 Jun 2023");
			term3_e4_endTime = (Date.parse(term3_e4_endTime) / 1000);

			var term3_e4_now = new Date();
			term3_e4_now = (Date.parse(term3_e4_now) / 1000);
			var term3_e4_timeLeft = term3_e4_endTime - term3_e4_now;

				var term3_e4_days = Math.floor(term3_e4_timeLeft / 86400);
				var term3_e4_hours = Math.floor((term3_e4_timeLeft - (term3_e4_days * 86400)) / 3600);
				var term3_e4_minutes = Math.floor((term3_e4_timeLeft - (term3_e4_days * 86400) - (term3_e4_hours * 3600 )) / 60);
				var term3_e4_seconds = Math.floor((term3_e4_timeLeft - (term3_e4_days * 86400) - (term3_e4_hours * 3600) - (term3_e4_minutes * 60)));


				if (term3_e4_hours < "10") { term3_e4_hours = "0" + term3_e4_hours; }
				if (term3_e4_minutes < "10") { term3_e4_minutes = "0" + term3_e4_minutes; }
				if (term3_e4_seconds < "10") { term3_e4_seconds = "0" + term3_e4_seconds; }


				$("#daysTerm3-4").html(term3_e4_days + "<span>يوم</span>");
				$("#hoursTerm3-4").html(term3_e4_hours + "<span>ساعة</span>");
				$("#minutesTerm3-4").html(term3_e4_minutes + "<span>دقيقة</span>");
				$("#secondsTerm3-4").html(term3_e4_seconds + "<span>ثانية</span>");

				if (term3_e4_days< "7" ) {
						$("div.term3_E4_TIME").toggleClass("soon")&& $(".T3-E4").addClass("pulse");
				}

				if (term3_e4_timeLeft < "0" ) {
					$("div.term3_E4_TIME").replaceWith( "<h3>انتهى ✅</h3>" )
					 && $("hr.term3_E4_TIME").addClass("finishTIME")
							&& $(".T3-E4").removeClass("pulse");
				}


}

setInterval(function() {
	term_makeTimer()
}, 1000);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
