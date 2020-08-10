public without sharing class ContactController {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [select Id, Name from Contact LIMIT 10];
    }

}