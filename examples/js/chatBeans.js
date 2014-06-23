$(document).ready(function() {
			$('#fullpage').fullpage({
			  slidesColor: ['#fff', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
			  anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage'],
			  menu: '#menu',
			  continuousVertical: true,
			  'afterLoad': function(anchorLink, index){
					if(index == 2){
						$('#iphone3, #iphone2, #iphone4').addClass('active');
					}					
				},
			});
		});