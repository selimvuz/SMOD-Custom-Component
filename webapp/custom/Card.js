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
                }
            }
        },
        init: function () {
            const sLibraryPath = jQuery.sap.getModulePath("com.smod.ux.customcontrol");
            jQuery.sap.includeStyleSheet(sLibraryPath + "/custom/Card.css");
        },
        renderer: function(oRM, oControl) {
            oRM.openStart("div", oControl)
                .class("smod-ux-card")
                .openEnd()

                //Image
                .openStart("img")
                .attr("src", "https://www.w3schools.com/howto/img_avatar.png")
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
        }
        
    });
});
