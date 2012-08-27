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
    
     //Set "cols" attribute value
    jQuery('#textarea_opt_cols').live('keyup',function() {
        var arrt_val = jQuery(this).val();
        jQuery('#'+nhdFBfocusedElementId).attr('cols', arrt_val);
    });
     
     //Set "rows" attribute value
    jQuery('#textarea_opt_rows').live('keyup',function() {
        var arrt_val = jQuery(this).val();
        jQuery('#'+nhdFBfocusedElementId).attr('rows', arrt_val);
    });
    
    /* END of Setting element's attributes from options panel*/
	
});


/* Prepare and show fields in the Option panel depending on onclick of the elements*/

function showTextareaOptions(item){
    
    //var item_class = jQuery('#'.nhdFBfocusedElementId).attr('class');
    
    var attr_name = jQuery('#'+nhdFBfocusedElementId).attr('name');
    var attr_class = jQuery('#'+nhdFBfocusedElementId).attr('class');
    var attr_cols = jQuery('#'+nhdFBfocusedElementId).attr('cols');
    var attr_rows = jQuery('#'+nhdFBfocusedElementId).attr('rows');
    
    
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
                            'Cols:'+
                            '<input type="text" class="label_opt_txt" id="textarea_opt_cols" value="'+attr_cols+'"/>'+
                        '</li>'+
                        '<li>'+
                            'Rows:'+
                            '<input type="text" class="label_opt_txt" id="textarea_opt_rows" value="'+attr_rows+'"/>'+
                        '</li>'+
                    '</ul>';
    jQuery('#option_placehosder').html(optionHtml);
    
}
/* END of Prepare and show fields in the Option panel depending on onclick of the elements*/