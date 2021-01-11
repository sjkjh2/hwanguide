$(document).ready(function(){
    $(window).resize(function(){
		var deviceWidth = $(window).width();
		if(deviceWidth < 768){
			makeQRcodeWrap();		//mobile
		}else{
									//pc
        }       
    });
    
    GheaderControl();
});

/* headerControl */
function GheaderControl(){
    var 
        Gaside= $('.g_aside'),
        GasideControl = $('.g_aside_control'),
        GasideControlBtn = GasideControl.find('.burger');

    GasideControlBtn.click(function(){
        Gaside.toggleClass('is-close');
    });
};