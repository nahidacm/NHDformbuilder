jQuery(document).ready(function(){
    jQuery('#save_form').button().click(function(){
    
        var form_meta = [];

        jQuery("ul#placeholder > li").each(function() {
            form_meta.push(jQuery(this).html());
        });  
        console.log(form_meta);
        var form_meta_json = JSON.stringify(form_meta);
        console.log(form_meta_json);
        
        jQuery.post("save_form.php", {'form_meta_json':form_meta_json}, function(returnData) {
          console.log(returnData);
        });
    });

});