Ext.define('MyApp.view.Main', {
    extend: 'Ext.form.Panel',
    id: 'Main',
    config: {
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            title: 'Raxa Sure',
        }, {
            xtype: 'emailfield',
            id: 'personEmail',
            label: 'Email Id',
            placeHolder: '',
            clearIcon: true,
            // required : true,
        }, {
            xtype: 'button',
            name: 'continue',
            id: 'mainContinueButton',
            text: 'Continue',
            ui: 'action',
            width: '150px',
            margin: '30 40 40 600'
        }, ]
    }
});