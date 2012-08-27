jQuery(document).ready(function(){
    
    
    /* Setting element's attributes from options panel*/
    
    //Set "name" attribute value
    jQuery('#textarea_opt_name').live('keyup',function() {
        var arrt_val = jQuery(this).val();
        jQuery('#'+nhdFBfocusedElementId).attr('name', arrt_val);
    });
    
    
    
     //Set "class" attribute value
    jQuery('#textarea_opt_class').live('keyup',function() {
        var arrt_val = jQuery(this).val();
        jQuery('#'+nhdFBfocusedElementId).attr('class', arrt_val);
    });
    
    /* END of Setting element's attributes from options panel*/
	
});


/* Prepare and show fields in the Option panel depending on onclick of the elements*/

function showSelectOptions(item){
    
    //var item_class = jQuery('#'.nhdFBfocusedElementId).attr('class');
    
    var attr_name = jQuery('#'+nhdFBfocusedElementId).attr('name');
    var attr_class = jQuery('#'+nhdFBfocusedElementId).attr('class');
    
    var optionHtml = '<ul>'+
                        '<li>'+
                            'Name:'+
                            '<input type="text" class="label_opt_txt" id="textarea_opt_name" value="'+attr_name+'"/>'+
                        '</li>'+
                        '<li>'+
                            'Class:'+
                            '<input type="text" class="label_opt_txt" id="textarea_opt_class" value="'+attr_class+'"/>'+
                        '</li>'+
                        '<li>'+
                            'Add New Optons To Dropdown'+
                        '</li>'+
                        '<li>'+
                            'Option Value:'+
                            '<input type="text" class="label_opt_txt" id="option_value" />'+
                        '</li>'+
                        '<li>'+
                            'Option Text:'+
                            '<input type="text" class="label_opt_txt" id="option_text" />'+
                        '</li>'+
                        '<li>'+
                            '<div id="option_add_option" class="label_opt_txt fieldTypeBtn" >Add Option</div>'+
                        '</li>'+
                    '</ul>';
    optionHtml += '<ul id="select_options_preview"></ul>';
                
                
    jQuery('#option_placehosder').html(optionHtml);
    
    /* Show preview of current options */
    jQuery('#'+nhdFBfocusedElementId+' option').each(function(index) {
        
       var option_value = $(this).val();
       var option_text = $(this).text();
       
       if( option_text.length > 0 ){
       jQuery("#select_options_preview").append('<li>'+
                                                    '<span class="ui-icon ui-icon-trash"></span>'+
                                                    option_text+
                                                    '<span class="option_value">'+option_value+'</span>'+
                                                    '<span class="option_text">'+option_text+'</span>'+
                                                  '</li>');
       
            }    
       });
       
       jQuery("#select_options_preview").sortable(
                    {
                        stop: function() {
                            updateOptionsData();
			}
                    });
        jQuery("#select_options_preview").disableSelection();
    /* END Show preview of current options */
    
    jQuery('#option_add_option').button();
    
}
/* END of Prepare and show fields in the Option panel depending on onclick of the elements*/

/* Functions to handle new option addition and deletion to the select tag */

jQuery('#option_add_option').live('click', function(){
    
    var option_value = jQuery('#option_value').val();
    var option_text = jQuery('#option_text').val();
    
    //if(option_text != )
    if( option_text.length > 0 ){
        
        jQuery("#select_options_preview").append('<li>'+
                                                    '<span class="ui-icon ui-icon-trash"></span>'+
                                                    option_text+
                                                    '<span class="option_value">'+option_value+'</span>'+
                                                    '<span class="option_text">'+option_text+'</span>'+
                                                  '</li>');
        
        jQuery('#option_value').val('');
        jQuery('#option_text').val('');
        
        updateOptionsData();
        
        jQuery("#select_options_preview").sortable(
                    {
                        stop: function() {
                            updateOptionsData();
			}
                    });
        jQuery("#select_options_preview").disableSelection();
        
        
        
    }
});

/* END Functions to handle new option addition and deletion to the select tag */

/* Update optoins data in canvas */

function updateOptionsData(){
    
    //alert(jQuery('#select_options_preview li span.option_value').html());
    jQuery('#'+nhdFBfocusedElementId).html('');
    
    jQuery('#select_options_preview li').each(function(index) {
       
       var option_value = $(this).children('span.option_value').html();
       var option_text = $(this).children('span.option_text').html();
       
      jQuery('#'+nhdFBfocusedElementId).append('<option value="' + option_value + '">' + option_text + '</option>');
        //alert(index + ': ' + $(this).html());
   });
}
/* END Update optoins data in canvas */

jQuery('.ui-icon-trash').live('click', function(){
    
    $(this).closest('li').remove();
    updateOptionsData();
    
});