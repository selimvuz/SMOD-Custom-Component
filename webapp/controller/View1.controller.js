sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.smod.ux.customcontrol.controller.View1", {
        onInit: function () {
            const oEventBus = sap.ui.getCore().getEventBus();
            oEventBus.subscribe("Card", "Click", this.onBusCardClick, this );
        },

        onCardClick: function(oEvent){
            console.log(oEvent.getSource());
            console.log(oEvent.getParameters());
        },
        onBusCardClick: function(sChannel, sEvent, oData){
           console.log(sChannel);
           console.log(sEvent);
           oData?.clickedItem?.setBusy(true);
           setTimeout(()=>{
            oData?.clickedItem?.setBusy(false);
           },5000);
        }
    });
});
