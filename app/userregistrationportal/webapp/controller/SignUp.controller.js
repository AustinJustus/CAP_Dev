sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/ui/layout/form/FormContainer", "sap/ui/layout/form/FormElement", "sap/m/Input", "sap/m/MessageToast" ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, FormContainer, FormElement, Input, MessageToast) {
        "use strict";

        return Controller.extend("userregistrationportal.controller.SignUp", {
            onInit: function () {
                debugger;
                var oForm = this.getView().byId("FormChange354");
      
                var oTemplate = new FormContainer();
      
                var oTitleElement = new FormElement({label: "Name" });
                var oTitleInput = new Input({ value: "{Name}" })
                oTitleElement.addField(oTitleInput);
                oTemplate.addFormElement(oTitleElement);
                
                var oTitleElement = new FormElement({label: "Mail Id" });
                var oTitleInput = new Input({ value: "{MailId}" })
                oTitleElement.addField(oTitleInput);
                oTemplate.addFormElement(oTitleElement);
                
                var oTitleElement = new FormElement({label: "Mobile No." });
                var oTitleInput = new Input({ value: "{MobileNo}" })
                oTitleElement.addField(oTitleInput);
                oTemplate.addFormElement(oTitleElement);          
      
                var oTitleElement = new FormElement({label: "SAPUser Id" });
                var oTitleInput = new Input({ value: "{SAPUserId}" })
                oTitleElement.addField(oTitleInput);
                oTemplate.addFormElement(oTitleElement);
      
                oForm.bindAggregation("formContainers",{
                  path:'/userInfo',
                  template: oTemplate,
                  length: 1,
                  parameters:{
                      $$updateGroupId: "UserPortal"
                  },
                });
      
                var oBinding = oForm.getBinding("formContainers");
                var sId = Math.floor(Math.random() * 100);
                oBinding.create({ID:sId, Name: "", MailId: "", MobileNo: "", SAPUserId: ""});
            },
      
            onPressSave: function () {
                
              // var sId = Math.floor(Math.random() * 100);  
              // var sName = this.getView().byId("name").getValue();
              // var sMailId = this.getView().byId("mailId").getValue();
              // var sMobNo = this.getView().byId("mobNo").getValue();
              // var sSapId = this.getView().byId("SAPID").getValue();
      
              // var oData = {
              //   ID: sId,
              //   Name: sName,
              //   MailId: sMailId,
              //   MobileNo: sMobNo,
              //   SAPUserId: sSapId,
              // };
      
              //var OModel = this.getView().getModel();
              // var that = this;
              // this.getView().getModel().submitBatch("myGroup").then(function(){
              //     if (!that.getView().byId("SF").getBindingContext().getBinding().hasPendingChanges()){
              //         MessageToast.show("Data Saved Successfully");
              //     }
              // });
      
              var oView = this.getView();
       
              function resetBusy() {
                  oView.setBusy(false);
              }
      
              //lock UI until submitBatch is resolved, to prevent errors caused by updates while submitBatch is pending
              oView.setBusy(true);
               
               oView.getModel().submitBatch("UserPortal").then(resetBusy, resetBusy);
      
              // OModel.create("/userInfo", oData, {
              //     method: "POST",
              //     success: function(data) {
              //         MessageToast.show("Data Saved Successfully");
              //     },
              //     error: function() {
              //         MessageToast.show("Error Occured !!");
              //     }
              // });
            }
        });
    });
