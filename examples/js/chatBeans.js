$(document).ready(function() {
			$('#fullpage').fullpage({
			  slidesColor: ['#fff', '#4BBFC3', '#7BAABE', '#A18E5C', '#ccddff'],
			  anchors: ['chatBeans', 'concept', 'Replay&Digest', 'PUSHVolume', 'Sticker'],
			  menu: '#menu',
			  continuousVertical: true,
			  'afterLoad': function(anchorLink, index){
					if(index == 2){
						$('#iphone3, #iphone2, #iphone4').addClass('active');
					}					
				},
			});
		});