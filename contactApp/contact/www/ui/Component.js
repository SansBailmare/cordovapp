sap.ui.define([
    "sap/ui/core/UIComponent", 
    "sap/m/routing/RouteMatchedHandler"
], function (UIComponent, RouteMatchedHandler) {
        //"use strict";

    return(UIComponent.extend("com.jio.HybridApp.Component", {
        metadata: {
            name: "Application",
            version: "1.0",
            includes: [],
            dependencies: {
                libs: ["sap.m", "sap.ui.layout"],
                components: []
            },
            
            config: {
                serviceConfig: {
                	name: "ApplicationService",
                    serviceUrl: ""
                }
            },
            
            rootView: "com.jio.HybridApp.view.App",
            
            routing: {
                config: {
                    viewType: "XML",
                    viewPath: "com.jio.HybridApp.view",
                    targetControl: "idAppControl",
                    targetAggregation: "pages",
                    clearTarget: false
                },
                routes: [
		                    {
		                    	pattern : "",
		                    	name : "Home",
		                    	view : "Home"
							}
						]
            }
        },
        init: function () {
            sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

            var mConfig = this.getMetadata().getConfig();
            
            // Create and set domain model to the component
            var sServiceUrl = mConfig.serviceConfig.serviceUrl;
            //var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
            //this.setModel(oModel);
            
            jQuery.sap.require("sap.ui.core.routing.History");
            jQuery.sap.require("sap.m.routing.RouteMatchedHandler");

            var router = this.getRouter();
            this.routeHandler = new RouteMatchedHandler(router);
            router.initialize();
        }
    }));
    
});
