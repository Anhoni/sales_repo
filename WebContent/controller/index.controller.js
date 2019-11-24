sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/UIComponent"
], function (Controller, MessageToast ,UIcomponent) {
	"use strict";

	return Controller.extend("sales_repo.controller.index", {
		onInit : function (){
			console.log("i'm here atleast");
			
		},

		onPress : function () {
			// read msg from i18n model
			console.log(this.getView().getModel());

			//var oBundle = this.getView().getModel("i18n").getResourceBundle();
			//var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			//var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show("hello native person");
			console.log(this);
			  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			  oRouter.navTo("second");
		}
	});
/*	return UIComponent.extend("sales_repo.Component", {
		onPress : function( ){
			  var oRouter = UIComponent.getRouterFor(this);
			  oRouter.navTo("second");
		}
	});*/

});