Ext.define('MyApp.view.DiseaseOptionView',{
	    
	    extend: 'Ext.form.Panel',
	    id:'DiseaseOptionView',

	    config:{

                 items:[ { xtype:'toolbar',
                             docked:'top',
                             title:'Insurance Details',
                          
                              items:[

                                        {
                                             xtype: 'button',
                                             id:'diseaseOptionBackButton',
                                             ui:'back',
                                             text:'back',
                                        },
                                   ]
                             },
                             { xtype:'toolbar',
                             docked:'bottom',
                            
                          
                              items:[
                                        {
                                         xtype:'button',
                                         id:'diseaseSubmitButton',
                                         ui:'action',
                                         text:'CHECK',
                                         margin: '0 0 0 600',   
                                         width :'10%'
                                        },

                                   ]
                             },
                             {
                                 xtype:'label',
                                 html:'Insurance Number:'
                             },

                             {
                                 xtype: 'label',
                                 id: 'labelNumberBestInsurance',
                             }, 
                             {  xtype:'label',
                                html:'',
                             },{
                                xtype:'label',
                                html:'Insurance Name:',
                             },{
                                 xtype: 'label',
                                 id: 'labelNameBestInsurance',
                             }, 
                             {
                                xtype:'label',
                                html:'',
                             },{
                                xtype:'label',
                                html:'Insurance Premium(in Rupees):',
                             },{
                                 xtype: 'label',
                                 id: 'labelPremiumBestInsurance',
                             }, {
                                xtype:'label',
                                html:'',
                             },{
                                xtype:'label',
                                html:'Insurance Cover(in Rupees):',
                             },{
                                 xtype: 'label',
                                 id: 'labelCoverBestInsurance',
                             }, {
                                xtype:'label',
                                html:' ',
                             },{
                                xtype:'label',
                                html:'Major Diseases Covered:',
                             },{
                                 xtype: 'label',
                                 id: 'labelDiseaseBestInsurance',
                             },
                             {
                                xtype:'label',
                                html:'Please tick the diseases you want to add to your Insurance',
                             },

                            {  
                            xtype:'checkboxfield',
                            id:'checkboxStroke',
                            label:'Cancer'

                           },

                            {  
                            xtype:'checkboxfield',
                            id:'checkboxBrain',
                            label:'Brain Tumor'

                           },

                            {  
                            xtype:'checkboxfield',
                            id:'checkboxDiabetics',
                            label:'AIDS'

                           },

                            {  
                            xtype:'checkboxfield',
                            id:'checkboxAids',
                            label:'Ebola'

                           },
                           
                             // {
                             //     xtype:'button',
                             //     id:'diseaseSubmitButton',
                             //     ui:'action',
                             //     text:'Add',
                             //     margin: '20 0 0 615',   
                             //     width :'10%'
                             //    },
                                  
                             



        ]
                 },






});