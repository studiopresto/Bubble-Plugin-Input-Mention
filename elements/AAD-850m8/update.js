function(instance, properties, context) {
    
    var inputs = properties.data;
    var length = properties.data.length();
    const userArray = [];

    for (var itms=0; itms < length; itms++) {
      const thisInput = inputs.get(itms,1)[0];
      const username = thisInput.get(properties.name_field);
        if (username) {
            userArray.push({
                username: username,
                image: thisInput.get(properties.image_field)
            });
        }
    }
    

    
	$(`#${properties.element_id}`).mention({
        delimiter: properties.delimiter,
        users: userArray
    });
    
    
      $(`#${properties.element_id}`).on('change', function(){
        let result = [];
          
        let thisVal = $(this).val();
        userArray.forEach((item, index) => {
            console.log(item)
            const thisI = inputs.get(index,1)[0];
            console.log(thisI.get('_id'));
        	if(thisVal.includes(item.username) ) {
            	result.push(thisI.get('_id'));
            }
        })
          
          console.log(result)
        
    	instance.publishState('mentioned_users', result)  
    })
    
	
}
  