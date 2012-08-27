jQuery(document).ready(function(){
    
    
    /* Setting element's attributes from options panel*/
    
    //Set "name" attribute value
    jQuery('#textbox_opt_name').live('keyup',function() {
        var arrt_val = jQuery(this).val();
        jQuery('#'+nhdFBfocusedElementId).attr('name', arrt_val);
    });
    
    
    
     //Set "class" attribute value
    jQuery('#textbox_opt_class').live('keyup',function() {
        var arrt_val = jQuery(this).val();
        jQuery('#'+nhdFBfocusedElementId).attr('class', arrt_val);
    });
    
    /* END of Setting element's attributes from options panel*/
	
});


/* Prepare and show fields in the Option panel depending on onclick of the elements*/

function showTextboxOptions(item){
    
    //var item_class = jQuery('#'.nhdFBfocusedElementId).attr('class');
    
    var attr_name = jQuery('#'+nhdFBfocusedElementId).attr('name');
    var attr_class = jQuery('#'+nhdFBfocusedElementId).attr('class');
    
    var optionHtml = '<ul>'+
                        '<li>'+
                            'Name:'+
                            '<input type="text" class="label_opt_txt" id="textbox_opt_name" value="'+attr_name+'"/>'+
                        '</li>'+
                        '<li>'+
                            'Class:'+
                            '<input type="text" class="label_opt_txt" id="textbox_opt_class" value="'+attr_class+'"/>'+
                        '</li>'+
                    '</ul>';
    jQuery('#option_placehosder').html(optionHtml);
    
}
/* END of Prepare and show fields in the Option panel depending on onclick of the elements*/