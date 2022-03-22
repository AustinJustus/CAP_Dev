sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/layout/form/FormContainer",
    "sap/ui/layout/form/FormElement",
    "sap/m/Input",
    "sap/m/MessageToast",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, FormContainer, FormElement, Input, MessageToast) {
    "use strict";

    return Controller.extend("frontend.controller.Signup", {
      onInit: function () {
        var oForm = this.getView().byId("FormChange354");

        var oTemplate = new FormContainer();

        var oTitleElement = new FormElement({ label: "Name" });
        var oTitleInput = new Input({ value: "{Name}" });
        oTitleElement.addField(oTitleInput);
        oTemplate.addFormElement(oTitleElement);

        var oTitleElement = new FormElement({ label: "Mail Id" });
        var oTitleInput = new Input({ value: "{MailId}" });
        oTitleElement.addField(oTitleInput);
        oTemplate.addFormElement(oTitleElement);

        var oTitleElement = new FormElement({ label: "Mobile No." });
        var oTitleInput = new Input({ value: "{MobileNo}" });
        oTitleElement.addField(oTitleInput);
        oTemplate.addFormElement(oTitleElement);

        var oTitleElement = new FormElement({ label: "SAPUser Id" });
        var oTitleInput = new Input({ value: "{SAPUserId}" });
        oTitleElement.addField(oTitleInput);
        oTemplate.addFormElement(oTitleElement);

        oForm.bindAggregation("formContainers", {
          path: "/userInfo",
          template: oTemplate,
          length: 1,
          parameters: {
            $$updateGroupId: "UserPortal",
          },
        });

        var oBinding = oForm.getBinding("formContainers");
        var sId = Math.floor(Math.random() * 100);
        oBinding.create({
          ID: sId,
          Name: "",
          MailId: "",
          MobileNo: "",
          SAPUserId: "",
        });
      },

      onPressSave: function () {
        var oView = this.getView();

        function success() {
          MessageToast.show("Data Saved Successfully");
          oView.setBusy(false);
        }

        function error() {
          MessageToast.show("Error Occured !!");
          oView.setBusy(false);
        }

        //lock UI until submitBatch is resolved, to prevent errors caused by updates while submitBatch is pending
        oView.setBusy(true);

        oView.getModel().submitBatch("UserPortal").then(success, error);
      },
    });
  }
);
