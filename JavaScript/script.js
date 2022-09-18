// up-arrow
$(window).scroll(function() {
    if ($(this).scrollTop()>400){$('.up-arrow').fadeIn(500);
    }
    else{$('.up-arrow').fadeOut(500);
	}
 });

 // up-arrow
 $(".up-arrow").click(function() {
   $("html, body").animate({ scrollTop: 0 }, "slow");
   return false;
 });
 // up-arrow

// select_Term
$('#select_box').change(function () {
  var select=$(this).find(':selected').val();
   $(".hide").hide();
   $('#' + select).show();
}).change();

var select = document.querySelector("#select_box");
var selectOption = select.options[select.selectedIndex];
var lastSelected = localStorage.getItem('select');

if(lastSelected) {
    select.value = lastSelected;
    $('#select_box').change(function () {
      var select=$(this).find(':selected').val();
       $('#' + select).show();
    }).change()

}

select.onchange = function () {
   lastSelected = select.options[select.selectedIndex].value;
   console.log(lastSelected);
   localStorage.setItem('select', lastSelected);
}

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
  localStorage.setItem('Color', 'blue');
  localStorage.setItem('colorFill', '#3498db');
}

function switchRed() {
  $('body').attr('class', 'red') && $('path').attr('fill', '#e74c3c');
  localStorage.setItem('Color', 'red');
  localStorage.setItem('colorFill', '#e74c3c');
}

function switchGreen() {
  $('body').attr('class', 'green') && $('path').attr('fill', '#218c74');
  localStorage.setItem('Color', 'green');
  localStorage.setItem('colorFill', '#218c74');
}

function switchTiffany() {
  $('body').attr('class', 'tiffany') && $('path').attr('fill', '#1abc9c');
  localStorage.setItem('Color', 'tiffany');
  localStorage.setItem('colorFill', '#1abc9c');
}

function switchYellow() {
  $('body').attr('class', 'yellow') && $('path').attr('fill', '#f1c40f');
  localStorage.setItem('Color', 'yellow');
  localStorage.setItem('colorFill', '#f1c40f');
}

function switchOrange() {
  $('body').attr('class', 'orange') && $('path').attr('fill', '#f39c12');
  localStorage.setItem('Color', 'orange');
  localStorage.setItem('colorFill', '#f39c12');
}

function switchPurple() {
  $('body').attr('class', 'purple') && $('path').attr('fill', '#8e44ad');
  localStorage.setItem('Color', 'purple');
  localStorage.setItem('colorFill', '#8e44ad');
}

function switchGrey() {
  $('body').attr('class', 'grey') && $('path').attr('fill', '#7f8c8d');
  localStorage.setItem('Color', 'grey');
  localStorage.setItem('colorFill', '#7f8c8d');
}

function switchDark() {
  $('body').attr('class', 'dark') && $('path').attr('fill', '#343a40');
  localStorage.setItem('Color', 'dark');
  localStorage.setItem('colorFill', '#343a40');
}
//Color Switcher

//LocalStorage
let colorSelected = localStorage.getItem('Color');
let fillColorSelected = localStorage.getItem('colorFill');

  if (colorSelected) {
      $('body').attr('class', `${colorSelected}`) && $('path').attr('fill', `${fillColorSelected}`);
  }else {
    $(window).on('load', function() {$('#Modal').modal('show')});
  }

  // 2nd-modal
  $('.modal-2nd-open').click(function(){
  	$('body').css("overflow" , "hidden");
  });
  $('.modal-2nd-close').click(function(){
  	$('body').css("overflow" , "auto");
  });
  // 2nd-modal
