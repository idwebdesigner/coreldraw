$('#picker').colpick({
	flat:true,
	layout:'hex',
	submit:0,
  onChange:function(hsb,hex,rgb,el,bySetColor) {
		$("colorpicker").css("background-color",'#'+hex);
  }
});