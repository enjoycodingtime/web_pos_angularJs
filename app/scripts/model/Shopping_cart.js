var bought_list = function(){
      var list = JSON.parse(localStorage['list'] || '[]');
      var allItems = new Product().list();
      allItems = _(allItems).each(function(item){

         try{
         	item.num=  _(list).findWhere({'name':item.name}).num
         }catch(err){
        	item.num=0;
        } ;
    });
    allItems = _(allItems).filter(function(num){
                return num.num !=0;
    });

      return allItems;
};
var counted = function (){
	var allItems = bought_list();
	var count = 0;
	var cuts= loadPromotions()[0].barcodes;
    	_(allItems).each(function(item){
            if(_.indexOf(cuts,item.barcode) ==-1){
               count +=item.num*item.price;
            }
            else{
            	count +=(item.num-parseInt(item.num/3))*item.price;
        }
   	 });
    	return count;
};
var cuted = function (){
	var allItems = bought_list();
	var count = 0;
	var cuts= loadPromotions()[0].barcodes;
    	_(allItems).each(function(item){
               count +=item.num*item.price;
   	 });
    	return count;
};
var add = function(name){
	var list = JSON.parse(localStorage['list'] || '[]');
	list = _(list).each(function(item){
		if(item.name == name){
			item.num +=1;
		}
	});
	 localStorage['list']  = JSON.stringify(list);
	 console.log('s');
}
var lower = function(name){
	var list = JSON.parse(localStorage['list'] || '[]');
	list = _(list).each(function(item){
		if(item.name == name){
			item.num -=1;
		}
	});
	 localStorage['list']  = JSON.stringify(list);
};
var check_num = function(){
	var list = JSON.parse(localStorage['list'] || '[]');
	return  _(list).find(function(item){
		return item.num != 0;
	});
}