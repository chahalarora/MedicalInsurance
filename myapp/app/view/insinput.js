Ext.define('MyApp.view.insinput',{
	
	extend : 'Ext.form.Panel',

	id : 'insinput',

	config:{
             items:[


                {
                    xtype :  'textfield',
                    name  :  'insId',
                    label :  'Insurance Id'
                },

               {
                    xtype :  'textfield' ,
                    name  :  'insCompany' ,
                    
                    label :  'Company Name'

               },

               { xtype : 'button' ,
                  id    : 'submitInfo',
                  name  : 'continue' ,
                  text  : 'Submit' ,
                  ui    : 'action',
                  width : '150px',
                  margin: '30 40 40 600'
              },
              {
    xtype: 'toolbar',
    docked: 'top',
    title: 'Insurance Details',
    items: [
        {    xtype : 'button',
              id : 'insinputBackButton',
              ui : 'back',
              text : 'back',
             align: 'right'
        },


        
    ]
},


             ]


	}
});
