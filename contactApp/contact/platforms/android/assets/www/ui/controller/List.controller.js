sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, Controller, JSONModel) {
	"use strict";
 
	var ListController = Controller.extend("sap.m.sample.ListCounter.List", {
 
		onInit : function (evt) {
			// set explored app's demo model on this sample
			var aDataSet = [
				{
					name: "Stephen",
					contact : 9768115480,
					duration : 20
				},
				{
					name: "Sanket",
					contact : 8600031585,
					duration : 12
				},
				{
					name: "Nikhil",
					contact : 99202185585,
					duration : 35
				},{
					name: "Rajesh",
					contact : 987654321,
					duration : 1500
				}
			];
			var oModel = new JSONModel({ log : aDataSet});
			this.getView().setModel(oModel);
		}
	});
 
 
	return ListController;
 
});