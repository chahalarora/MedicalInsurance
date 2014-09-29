Ext.define('MyApp.view.firstpage',{
	 
	  extend: 'Ext.form.Panel',

	  id : 'firstpage',
 	  config:{               
                items:[
                          
                      
                           {
                               xtype          : 'textfield',
                               id             :'name',
                               name           : 'name',
                               label          : 'Name',
                               autocapatalise : true,
                              // required       : true 

                             },
                        
                         
                          {
                              
                               xtype     : 'selectfield',
                               id        : 'age',
                               name      : 'age',
                               label     : 'Age Group',
                             //  required   : true,
                               
                               options :[
                                

                                   {
                                      text   : '0-19 years',
                                      value  : '0',
 
                                   },

                                   {
                                      text   : '20-34 years',
                                      value  : '1',
 

                                   },

                                    {
                                      text   : '35-59 years',
                                      value  : '2',
 

                                   },

                                    {
                                      text   : '60 years or more',
                                      value  : '3',
 

                                   },


                               ]

                               },
                     
                               {
                              
                               xtype     : 'selectfield',
                               id        : 'gender',
                               name      : 'gender',
                               label     : 'Gender',
                             //  required   : true,
                               
                               options :[
                                

                                   {
                                      text   : 'Male',
                                      value  : '1'
 
                                   },

                                   {
                                      text   : 'Female',
                                      value  : '2'
 

                                   },


                               ]

                               },


                               {
                              
                               xtype      : 'selectfield',
                               name       : 'income',
                               id         : 'income',
                               label      : 'Annual Income',
                               
                               options :[
                                   

                                   {
                                      text    :'0 - 3 lakh(upto)',
                                      value   :'0'
 

                                   },
                                 

                                   {
                                      text    :'3 lakhs - 6 lakhs(upto)',
                                      value   :'1'
 

                                   },
                                  
                                   {
                                      text    :'6 lakhs - 9 lakhs(upto)',
                                      value   :'2'
 

                                   },
                                   
                                   {
                                      text    :'9 lakhs or more',
                                      value   :'3'
 
                                   },
 

                               ]

                             },
                                    {      
                                      
                                       xtype : 'button' ,
                                       name  : 'continue' ,
                                       id    : 'personalButton',
                                       text  : 'Save' ,
                                       ui    : 'action',
                                       width : '150px',
                                       margin: '30 40 40 600'
                                    },
                                     {
                                   xtype: 'toolbar',
                                  docked: 'top',
                                 title: 'Personal Information',
    
                           },
                ]
               }
          });
 
