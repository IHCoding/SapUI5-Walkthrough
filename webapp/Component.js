sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      //  The new metadata section that simply defines a reference to the root view
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
      },

      // init function that is called when the component is initialized
      init: function () {
        UIComponent.prototype.init.apply(this, arguments);

        // set data models
        var oData = {
          recipient: {
            name: "UI5 Developer",
          },
        };

        var oModel = new JSONModel(oData);
        this.setModel(oModel);
      },
    });
  }
);
