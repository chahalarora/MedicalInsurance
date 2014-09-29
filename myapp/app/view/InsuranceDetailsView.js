Ext.define('MyApp.view.InsuranceDetailsView', {
    extend: 'Ext.form.Panel',
    id: 'InsuranceDetailsView',
    config: {
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            title: 'Insurance Details',
            items: [{
                xtype: 'button',
                id: 'insuranceDetailsBackButton',
                ui: 'back',
                text: 'back'
            }, ]
        }, {
            xtype: 'label',
            html: 'Insurance Number:'
        }, {
            xtype: 'label',
            id: 'labelInsuranceNumber',
        },  {
            xtype: 'label',
            html: 'Insurance Name:'
        }, {
            xtype: 'label',
            id: 'labelInsuranceName',
        },  {
            xtype: 'label',
            html: 'Insurance Premium(in Rupees):'
        }, {
            xtype: 'label',
            id: 'labelPremium',
        },  {
            xtype: 'label',
            html: 'Insurance Cover(in Rupees):'
        }, {
            xtype: 'label',
            id: 'labelCover',
        }, 
        {
            xtype: 'label',
            html: 'Diseases Covered:',
        },
        {
            xtype: 'label',
            id: 'labelDisease',
        },
        ]
    },
});