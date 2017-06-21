sap.ui.define(["com/jio/HybridApp/controller/BaseController",
               "sap/ui/model/json/JSONModel"
	],function(BaseController,JSONModel){
	return BaseController.extend("com.jio.HybridApp.controller.Home",{
		
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created. Can be used to modify the View before it
		 * is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf con.jio.HybridApp.controller.Home
		 */
		onInit : function(){
			/*
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
			*/
		},
		onSearch : function(oEvent){
				var oSearch = oEvent.getSource();
				var sText = oSearch.getValue();
				var that = this;
				
				if(navigator.hasOwnProperty("contacts")){
				 
					// find all contacts with 'Bob' in any name field
					var options      = new ContactFindOptions();
					options.filter   = sText;
					options.multiple = true;
					options.desiredFields = [navigator.contacts.fieldType.id, navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name, navigator.contacts.fieldType.phoneNumbers];
					options.hasPhoneNumber = true;
					var fields       = [navigator.contacts.fieldType.displayName,navigator.contacts.fieldType.phoneNumbers];
					navigator.contacts.find(fields, function(contacts){ //Success
						console.log(contacts);
						var oModel = new JSONModel({ contactlist : contacts});
						that.getView().setModel(oModel);
					}, function(){ //Error
						
					}, options);
				}
		},
		
		onListSelect : function(oEvent){
			var oProp = oEvent.getParameter("listItem").getBindingContext().getProperty();
			console.log(oProp);
		},
		onDialogWithSizePress: function (oEvent) {
			var that = this;
			if (!that.fixedSizeDialog) {
				that.fixedSizeDialog = new Dialog({
					title: 'phone number',
					
					content: new List({
						items: {
							path: '/contactlist',
							template: new StandardListItem({
								title: "{Name}",
								counter: "{Quantity}"
							})
						}
					}),
					beginButton: new Button({
						text: 'Close',
						press: function () {
							that.fixedSizeDialog.close();
						}
					})
				});
 
				//to get access to the global model
				this.getView().addDependent(that.fixedSizeDialog);
			}
 
			that.fixedSizeDialog.open();
		},
		
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf con.jio.HybridApp.controller.Home
		 */
		onAfterRendering : function(){
			

		},

		onButtonPress : function(oEvent){
			//window.alert("Hello there");
			new sap.m.MessageToast.show(" Hello there again !! ");
		}
	});
});