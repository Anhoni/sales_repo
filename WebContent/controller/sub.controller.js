sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/UIComponent"
], function (Controller, MessageToast ,UIcomponent) {
	"use strict";

	return Controller.extend("sales_repo.controller.sub", {
		onInit : function (){
			console.log("i'm here atleast on second");
		},
		onBeforeRendering: function () {console.log("why am i not asleep");
		},
		
		onPress2 : function () {
			// show message
			MessageToast.show("hello person fro second view");
		}
	});
});