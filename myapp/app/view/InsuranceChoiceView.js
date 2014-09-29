Ext.define('MyApp.view.InsuranceChoiceView',{ 
  
  extend : 'Ext.form.Panel',

  id: 'InsuranceChoiceView',

  config:{

          items:[

               {     xtype: 'toolbar',
                      id : 'insuranceChoiceToolbar',
                      docked: 'top',
                      title : 'Insurance Choice',

                      items:[
                              {
                                    xtype: 'button',
                                    id: 'insuranceChoiceBackButton',
                                    ui:'action',
                                    text:'Change Profile',
                                    align:'right',
                                    margin: '0 0 0 1200',

                              },
                      
                      ]
                 
                 },


             {
                 xtype:'button',
                 id:'myInsuranceButton',
                 text:'MY INSURANCES',
                 margin: '100 0 0 550',
                 width : '20%'

             },

              {
                 xtype:'button',
                 id:'specificInsuranceButton',
                 text:'MY SPECIFIC INSURANCE',
                    margin: '50 0 0 550',
                    width:'20%',
                    align:'centre',
                    hidden:true,
             },

              {
                 xtype:'button',
                 id:'bestInsuranceButton',
                 text:'BEST INSURANCE FOR ME',
                 margin: '50 0 0 550',
                 width:'20%'

             },
         ]
  }
});