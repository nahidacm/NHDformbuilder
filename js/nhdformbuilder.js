/* Global Properties*/
var nhdFBbaseUrl = 'http://localhost/NHDformbuilder';
var nhdFBfocusedElementId; // Flag, keeps track of which field is now selected to for settings


jQuery(document).ready(function(){
    
    /* Settings for Primary status of canvas, option panel and the toolBox*/

    jQuery('.fieldTypeBtn').button();
    jQuery('.fieldTypeBtn').draggable({
        appendTo: "body",
        helper: "clone"
    });
    
    jQuery( "#placeholder" ).droppable({
        
        accept: ".fieldTypeBtn",
        drop: function( event, ui ) {
            jQuery( this ).find( ".temp_guid" ).remove();
            appendInitialHtml(ui,this); //nhdformbuilder.js
        }
        
    });
    
    jQuery( "#placeholder" ).sortable();
    jQuery( "#placeholder" ).disableSelection();
    
    /* END of Settings for Primary status of canvas, option panel and the toolBox*/
    
    
    
    /* Happens when you click on the any form elements on the canvas*/
    
    jQuery( "#placeholder li" ).live('click',function(){
        
        nhdFBfocusedElementId = jQuery(this).children(':first').attr('id');
        //alert(nhdFBfocusedElementId);
       
       var item_class = jQuery(this).attr('class');
       
       if(item_class == "label_element"){
           
           showLabelOptions(this); //label.js
           
       }
       
    });
    
    /* END of Happens when you click on the any form elements on the canvas*/
    
    
});

/* Calls when you drop an element to the canvas, adds some primar markup for that element */

function appendInitialHtml(ui,placeholder){
    
    var item_id = ui.draggable.attr('id');
    var new_item_class = item_id + '_element';
    var new_element_id = item_id + jQuery('.'+new_item_class).length;
    
    if(item_id == "label"){
       jQuery( '<li class="'+new_item_class+'"><label id="'+new_element_id+'">'+ui.draggable.text()+'</label></li>' ).appendTo( placeholder );       
    }
        
}

/* END of Calls when you drop an element to the canvas, adds some primar markup for that element */