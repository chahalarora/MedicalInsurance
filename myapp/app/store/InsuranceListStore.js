Ext.define('MyApp.store.InsuranceListStore' ,{
    
    extend : 'Ext.data.Store',
config:{
	storeId: 'InsuranceListStore',
	model: 'MyApp.model.InsuranceListModel',
	
        storeId: 'InsuranceListStore',
      //  sorters: ('id'),
         proxy: {
            type:'rest',
             reader: {
                type: 'json',
                rootProperty: 'InsuranceNumber'    
                    }  
             
                }
             }


});

/*Ext.create("Ext.List",{

       store : "InsuranceListStore",
       itemTpl : "{insuranceId}, {companyName }"


}); */
