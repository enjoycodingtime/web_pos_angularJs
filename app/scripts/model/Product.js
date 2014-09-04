function Product (){
};
Product.prototype.list = function(){
    return loadAllItems();
}
var add_num = function(item){
    var list =JSON.parse(localStorage['list'] || '[]');
    var have = _.findWhere(list,{'name':item});
    if(!have){
    	var num = {};
    num.name = item;
    num.num =0;
    list.push(num);
    }
    _(list).map(function(value){
    	if(value.name == item){
    		value.num +=1; 
    	}
    	return value;
    }) ;   
    localStorage['list']  = JSON.stringify(list);
};
var shopping_cart_num = function(){
	var list =JSON.parse(localStorage['list'] || '[]');
	var num =0  ;
	if(list == '[]'){
	      return;
	}
	_(list).each(function(item){
		num = num +parseInt(item.num);
	})
	return num;
}