sap.ui.define([
    "sap/ui/core/Control"
],
function (Control) {
    "use strict";

    return Control.extend("com.smod.ux.customcontrol.custom.Card", {
        metadata: {
            properties: {
                title: {
                    type:"string",
                    bindable: true,
                },
                description: {
                    type:"string",
                    bindable: true,
                },
                imageSrc:{
                    type:"string",
                    bindable: true,
                },
                enabled:{
                    type: "boolean",
                    bindable: true,
                    defaultValue: true
                }
            },
            events:{
                
            }
        },
        init: function () {
            const sLibraryPath = jQuery.sap.getModulePath("com.smod.ux.customcontrol");
            jQuery.sap.includeStyleSheet(sLibraryPath + "/custom/Card.css");
        },
        renderer: function(oRM, oControl) {
            oRM.openStart("div", oControl)
                .class("smod-ux-card")
                .class(oControl.getEnabled() ? "smod-ux-card-active" : "smod-ux-card-inactive" )
                .openEnd()

                //Image
                //<img src="" data-key="" 
                .openStart("img")
                .attr("src", oControl.getImageSrc())
                .attr("alt", oControl.getTitle())
                .openEnd()
                .close("img")

                //Title
                .openStart("div")
                .class("smod-ux-card-title")
                .openEnd()
                .text(oControl.getTitle())
                .close("div")

                //Description
                .openStart("div")
                .class("smod-ux-card-description")
                .openEnd()
                .text(oControl.getDescription())
                .close("div")

                .close("div");
        },
        ontap:function(oEvent){
            oEvent.preventDefault();
            if(!this.getEnabled()){
                return;
            }

            // this.getParent()?.fireClick ? this.getParent().fireClick({
            //     clickedItem: this
            // }) : null;

            const oEventBus = sap.ui.getCore().getEventBus();
            oEventBus.publish("Card", "Click", {
                clickedItem: this
            });
        }
        
    });
});
