sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/layout/form/FormContainer","sap/ui/layout/form/FormElement","sap/m/Input","sap/m/MessageToast"],function(e,a,r,n,t){"use strict";return e.extend("frontend.controller.Signup",{onInit:function(){var e=this.getView().byId("FormChange354");var t=new a;var o=new r({label:"Name"});var l=new n({value:"{Name}"});o.addField(l);t.addFormElement(o);var o=new r({label:"Mail Id"});var l=new n({value:"{MailId}"});o.addField(l);t.addFormElement(o);var o=new r({label:"Mobile No."});var l=new n({value:"{MobileNo}"});o.addField(l);t.addFormElement(o);var o=new r({label:"SAPUser Id"});var l=new n({value:"{SAPUserId}"});o.addField(l);t.addFormElement(o);e.bindAggregation("formContainers",{path:"/userInfo",template:t,length:1,parameters:{$$updateGroupId:"UserPortal"}});var d=e.getBinding("formContainers");var s=Math.floor(Math.random()*100);d.create({ID:s,Name:"",MailId:"",MobileNo:"",SAPUserId:""})},onPressSave:function(){var e=this.getView();function a(){t.show("Data Saved Successfully");e.setBusy(false)}function r(){t.show("Error Occured !!");e.setBusy(false)}e.setBusy(true);e.getModel().submitBatch("UserPortal").then(a,r)}})});