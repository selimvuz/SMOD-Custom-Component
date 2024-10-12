sap.ui.define([
    "sap/ui/layout/Grid"
],
function (Grid) {
    "use strict";

    return Grid.extend("com.smod.ux.customcontrol.custom.CardContainer", {
        metadata: {
            properties: {
            },
            aggregations: {
            },
            events:{
                click:{
                    parameters:{
                        clickedItem:{
                            type: "com.smod.ux.customcontrol.custom.Card"
                        }
                    }
                }
            }
        },
        init: function () {
        
        } ,
        renderer: {}    
    });
});
