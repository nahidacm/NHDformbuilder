jQuery(document).ready(function(){
    
    
    /* Setting element's attributes from options panel*/
    
    //Set "for" attribute value
    jQuery('#label_opt_for').live('keyup',function() {
        var arrt_val = jQuery(this).val();
        jQuery('#'+nhdFBfocusedElementId).attr('for', arrt_val);
    });
    
    //Set inner "text"
    jQuery('#label_opt_text').live('keyup',function() {
        var val = jQuery(this).val();
        jQuery('#'+nhdFBfocusedElementId).text(val);
    });
    
     //Set "class" attribute value
    jQuery('#label_opt_class').live('keyup',function() {
        var arrt_val = jQuery(this).val();
        jQuery('#'+nhdFBfocusedElementId).attr('class', arrt_val);
    });
    
    /* END of Setting element's attributes from options panel*/
	
});


/* Prepare and show fields in the Option panel depending on onclick of the elements*/

function showLabelOptions(item){
    
    //var item_class = jQuery('#'.nhdFBfocusedElementId).attr('class');
    
    var attr_for = jQuery('#'+nhdFBfocusedElementId).attr('for');
    var attr_class = jQuery('#'+nhdFBfocusedElementId).attr('class');
    var inner_text = jQuery('#'+nhdFBfocusedElementId).text();
    
    var optionHtml = '<ul>'+
                        '<li>'+
                            'Label For:'+
                            '<input type="text" class="label_opt_txt" id="label_opt_for" value="'+attr_for+'"/>'+
                        '</li>'+
                        '<li>'+
                            'Text:'+
                            '<input type="text" class="label_opt_txt" id="label_opt_text" value="'+inner_text+'"/>'+
                        '</li>'+
                        '<li>'+
                            'Class:'+
                            '<input type="text" class="label_opt_txt" id="label_opt_class" value="'+attr_class+'"/>'+
                        '</li>'+
                    '</ul>';
    jQuery('#option_placehosder').html(optionHtml);
    
}
/* END of Prepare and show fields in the Option panel depending on onclick of the elements*/