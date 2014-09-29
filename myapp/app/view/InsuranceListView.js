Ext.define('MyApp.view.InsuranceListView', {
    extend: 'Ext.Container',
    id : 'InsuranceListView',
    config: {
        type: 'vbox',
        align: 'start',
        items: [
       
                 {
                xtype: 'list',
                id: 'InsuranceList',
                store: 'InsuranceListStore',
                height: '100%',
                width: '100%',
               itemTpl: new Ext.XTemplate(
                '{[Ext.getStore(\'AllInsuranceStore\').findRecord("insurance_number", values.insurance_number).data.insurance_name]}'),
                autoload: true
            },
            {
    xtype: 'toolbar',
    docked: 'top',
    title: 'Insurance List',
    items: [
        {    xtype : 'button',
              id   : 'insuranceListBackButton',
              ui : 'back',
              text : 'back',
             align: 'right'
        },
        {
            xtype : 'button',
            id    : 'Add',
            ui   : 'action',
            text : 'Add', 
            margin : '10 10 10 1230',
            hidden: true, 
        }
    ] 
},
             {
    xtype: 'toolbar',
    docked: 'bottom',
    title: '',
    
    id : 'insuranceInfoTitlebar',
    items: [
     /*    {
                    xtype :  'textfield',
                    name  :  'insId',
                    id    :  'insId',
                    label :  'Insurance Number',
                    width : '50%',
                    margin : '10 10 10 10'
                },
                */
                         
                           {
                               xtype     : 'selectfield',
                               id        : 'insurance_number',
                               name      : 'insurance_number',
                               label     : 'Insurance Number',
                               width     : '800px',
                             //  required   : true,
                            
                               options :[
                                   {
                                      text   : 'RelianceHealth Children Plan ',
                                      value   : '1001',
                                  
                                     
 
                                   },
{
                                      text   : 'RelianceHealth YoungAge Plan ',
                                      value  : '1002'
                                   
                                   },

                                   {
                                      text   : 'RelianceHealth MiddleAge Plan',
                                      value  : '1003'
                                   
                                   },

                                   {
                                      text   : 'RelianceHealth SeniorCitizen Plan',
                                      value  : '1004'
                                   
                                   },

                                   {
                                      text   : 'LIC Children Plan ',
                                      value  : '1005'
                                   
                                   },

                                   {
                                      text   : 'LIC YoungAge Plan',
                                      value  : '1006'
                                   
                                   },

                                   {
                                      text   : 'LIC MiddleAge Plan',
                                      value  : '1007'
                                   
                                   },


                                   {
                                      text   : 'LIC SeniorCitizen Plan',
                                      value  : '1008'
                                   
                                   },

                                   {
                                      text   : 'TataAIG Children Plan',
                                      value  : '1009'
                                   
                                   },

                                   {
                                      text   : 'TataAIG YoungAge Plan',
                                      value  : '1010'
                                   
                                   },

                                   {
                                      text   : 'TataAIG MiddleAge Plan',
                                      value  : '1011'
                                   
                                   },

                                   {
                                      text   : 'TataAIG SeniorCitizen Plan',
                                      value  : '1012'
                                   
                                   },

                                   {
                                      text   : 'UnitedHealthcare Children Plan',
                                      value  : '1013'
                                   
                                   },

                                   {
                                      text   : 'UnitedHealthcare YoungAge Plan',
                                      value  : '1014'
                                   
                                   },

                                   {
                                      text   : 'UnitedHealthcare MiddleAge Plan',
                                      value  : '1015'
                                   
                                   },

                                   {
                                      text   : 'UnitedHealthcare SeniorCitizen Plan',
                                      value  : '1016'
                                   
                                   },


                               ]

                               },

               {
                    xtype :  'textfield' ,
                    name  :  'insCompany' ,
                    id    :   'insCompany',
                    width : '490px',
                    label :  'Company Name',
                    hidden : true,

               },

               { xtype : 'button' ,
                  id    : 'submitInsuranceInfoButton',
                  name  : 'continue' ,
                  text  : 'ADD' ,
                  ui    : 'action',
                  width : '150px',
                  margin : '0 50 0 200 '
                 
              },
    ] 
},

        ]
    }
});

