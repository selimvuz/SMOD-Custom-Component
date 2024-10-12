sap.ui.define([
    "sap/ui/core/Control"
],
function (Control) {
    "use strict";

    return Control.extend("com.smod.ux.customcontrol.custom.CardContainer", {
        metadata: {
            properties: {

            },
            aggregations: {
                cards: {
                    multiple: true,
                    singularValue: "card",
                    type: "com.smod.ux.customcontrol.custom.Card"
                }
            },
            defaultAggregation: "cards"
        },
        init: function () {
            const sLibraryPath = jQuery.sap.getModulePath("com.smod.ux.customcontrol");
            jQuery.sap.includeStyleSheet(sLibraryPath + "/custom/Card.css");
        },
        renderer: function(oRM, oControl) {
            const aCards = oControl.getCards();
        
            oRM.openStart("div", oControl)
            .class("smod-ux-card-container")
            .style("display", "flex")
            .openEnd();
        
            aCards.forEach(function(oCard) {
                oRM.renderControl(oCard);
            });
        
            oRM.close("div");
        }        
    });
});
