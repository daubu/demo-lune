$(function() {
	if ($('.slider').length) {
		$('.slider').slider({
			full_width: true,
			height: 677
		});
	}

	if ($('.various').length) {
		$(".various").fancybox({
			maxWidth	: 800,
			maxHeight	: 600,
			fitToView	: false,
			width		: '70%',
			height		: '70%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none',
			padding		: 10
		});
	}

	if ($( '#calendar' ).length) {
		var cal = $( '#calendar' ).calendario( {
				weeks : [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
				onDayClick : function( $el, $contentEl, dateProperties ) {

					for( var key in dateProperties ) {
						console.log( key + ' = ' + dateProperties[ key ] );
					}

				},
				caldata : codropsEvents,

			} ),
			$month = $( '#custom-month' ).html( cal.getMonthName() ),
			$year = $( '#custom-year' ).html( cal.getYear() );

		$( '#custom-next' ).on( 'click', function() {
			cal.gotoNextMonth( updateMonthYear );
		} );
		$( '#custom-prev' ).on( 'click', function() {
			cal.gotoPreviousMonth( updateMonthYear );
		} );
		$( '#custom-current' ).on( 'click', function() {
			cal.gotoNow( updateMonthYear );
		} );

		function updateMonthYear() {				
			$month.html( cal.getMonthName() );
			$year.html( cal.getYear() );
		}
	}
				 
	// Sidemenu for Mobile
	// $('.button-collapse').sideNav({
	// 	menuWidth: 280
	// });

	// //Dropdown
	// $('.dropdown-button').dropdown({
	// 	constrain_width: false,
	// 	belowOrigin: true,
	// 	alignment: 'right'
	// });

	// // Date picker
	// $('.datepicker').pickadate({
	// 	container: 'body',
	// 	selectMonths: false,
	// 	selectYears: 1,
	// 	format: 'dd/mm/yyyy'
	// });

	// // Modal trigger
	// $('.modal-trigger').leanModal();

	// // Material select
	// $('select').material_select();

	// $('.btn-action')
	// 	.click(function() {
	// 		$(this).removeClass('active');
	// 	})
	// 	.find('>a').click(function() {
	// 		$(this).parent().addClass('active');
	// 		return false;
	// 	});
});

// Init select2
$(".select2").each(function() {
	var $sel = $(this),
		holder = $sel.data('holder'),
		search = $sel.data('search') ? 0 : -1;
	$sel.select2({
		placeholder: holder,
		allowClear: true,
		minimumResultsForSearch: search
	});
});

//tag with remove_button 

// $('.input-tags').selectize({
//     plugins: ['remove_button'],
//     persist: false,
//     create: true,
//     render: {
//         item: function(data, escape) {
//             return '<div>"' + escape(data.text) + '"</div>';
//         }
//     }
// });


