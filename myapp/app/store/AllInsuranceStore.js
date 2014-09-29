Ext.define('MyApp.store.AllInsuranceStore', {
    extend: 'Ext.data.Store',
    config: {
        storeId: 'AllInsuranceStore',
        model: 'MyApp.model.AllInsuranceModel',
        proxy: {
            type: 'rest',
            url: 'http://localhost:9639/addAllInsurance',
			reader: {
	            type: 'json',
	            rootProperty: 'Insurances'
	        }
        }
    }
});