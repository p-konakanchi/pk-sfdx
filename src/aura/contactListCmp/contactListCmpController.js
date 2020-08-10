({
    doInit : function(component, event, helper) {
        var action = component.get("c.getContacts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.contactList",response.getReturnValue());
            }
        });
        $A.enqueueAction(action);       
        
    }
})