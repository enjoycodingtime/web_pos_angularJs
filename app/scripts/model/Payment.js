var cut= function(){
      var list = JSON.parse(localStorage['list'] || '[]');
      var allItems = new Product().list();
      var cuts= loadPromotions()[0].barcodes;
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
     allItems = _(allItems).filter(function(num){
     	if(num.num>=3&&_.indexOf(cuts,num.barcode) !=-1){
                return num;
     	}
    });
      return allItems;
};
var confirm = function (){
	localStorage.list = '[]';
}