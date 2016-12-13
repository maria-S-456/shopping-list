var state = {items:[]}; /* state is an object, with an attribute called items, which is an array */
var addItem = function(state, item)
{
	state.items.push(item);
}
var displayItem = function(state, element){
	var htmlItems = state.items.map(function(item){
		return '<li class="box">' + item + '</br><button class="divBtns" id="checkBtn">Check</button><button class="divBtns" id="deleteBtn">Delete</button>' + '</li>'; 
	});
	element.html(htmlItems);
}

$('.shopping-list-add').submit(function(event){
	event.preventDefault();
	addItem(state, $('.shopping-list-add-input').val());
	displayItem(state, $('.shopping-list') );
	/* alert(state.items[1]);			shows that the items array holds everything that is turned into a div*/ 
})



/* original
$(document).ready(function(){ 				
	$('ul').on('click', 'li', function(event){
		$("li").remove();
	});
})

*/



	$(document).ready(function(e){ 				
		$('ul').on('click', '#deleteBtn', function(event){
			var rmvButton = $(this).closest('li');
			rmvButton.remove();
		
		});
		
	})
