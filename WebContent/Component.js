sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("sales_repo.Component", {

		metadata : {
			manifest: "json",
			
		},

		init : function () {

			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			//this.setModel(models.createDeviceMode1(),"device");
			console.log(this);
			//var router = UIComponent.getRouterFor(this);
			this.getRouter().initialize();
			
			//set data model from saledata jsonfile			
			var oModel = new sap.ui.model.json.JSONModel();
			$.ajax({
			type: "GET",
			contentType: "application/json",
			url: "data/sales_data.json",
			dataType: "json",
			async: false,
			success: function(data, textStatus, jqXHR) {
				//var oData = data;
				oModel = new JSONModel(data);
				console.log("success");
			  }});	
			//var oModel = new JSONModel(oData);
			this.setModel(oModel);
			console.log(this);
			var table1 = sap.ui.getCore().byId("__xmlview0--Table1");
			table1.setModel(oModel);
			console.log(table1);
			/*var oModel = new sap.ui.model.json.JSONModel();
			var that = this;
			var aData = jQuery.ajax({
			type: "GET",
			contentType: "application/json",
			url: "data/sales_data.json",
			dataType: "json",
			async: false,
			success: function(data, textStatus, jqXHR) {
			oModel.setData(data);
			alert("success to post");
			}
			});
			this.setModel(oModel);*/
					
		}
	});

});