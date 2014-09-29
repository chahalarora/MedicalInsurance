Ext.define('MyApp.model.AllInsuranceModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'insurance_id',
            type: 'int'
        }, {
            name: 'insurance_number',
            type: 'int'
        }, {
            name: 'premium',
            type: 'int'
        }, {
            name: 'cover',
            type: 'int'
        }, 
        {
            name:'insurance_name',
            type:'string'
        },
        {   name: 'disease',
            type:'string',

        },
        ]
    },
});