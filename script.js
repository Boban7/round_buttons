$('document').ready(function(){
	$('a').click(function(){
		var $a = this.className +  ' demo';
		$('#demo').html('You push button: ' +
		 this.text).removeClass().addClass($a);
		console.log($a);
	});
});