Ext.define('MyApp.controller.Navigate', { 
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainContinue: '#mainContinueButton',
            continuePersonal: '#personalButton',
            insuranceAdd: '#Add',
            insinputBack: '#insinputBackButton',
            insuranceListBack: '#insuranceListBackButton',
            submitInsuranceInfo: '#submitInsuranceInfoButton',
            insuranceChoiceBack: '#insuranceChoiceBackButton',
            myInsurance: '#myInsuranceButton',
            diseaseOptionBack: '#diseaseOptionBackButton',
            specificInsurance: '#specificInsuranceButton',
            insuranceListId :'#InsuranceList',
            insuranceDetailsBack  :'#insuranceDetailsBackButton',
            bestInsurance   : '#bestInsuranceButton',
            diseaseSubmit :'#diseaseSubmitButton',
        },
        control: {
            mainContinue: {
                tap: 'mainContinueFunction'
            },
            continuePersonal: {
                tap: 'continuePersonalFunction'
            },
            insuranceAdd: {
                tap: 'insuranceAddFunction'
            },
            insinputBack: {
                tap: 'insinputBackFunction'
            },
            insuranceListBack: {
                tap: 'insuranceListBackFunction'
            },
            submitInsuranceInfo: {
                tap: 'submitInsuranceInfoButtonFunction'
            },
            insuranceChoiceBack: {
                tap: 'insuranceChoiceBackFunction'
            },
            myInsurance: {
                tap: 'myInsuranceFunction',
            },
            diseaseOptionBack: {
                tap: 'diseaseOptionBackFunction',
            },
            specificInsurance: {
                tap: 'specificInsuranceFunction',
            },
            insuranceListId:{
                itemtap:'insuranceListFunction',
            },
            insuranceDetailsBack:{
                tap:'insuranceDetailsBackFunction',
            },
            bestInsurance:{
                tap:'bestInsuranceFunction',
            },
            diseaseSubmit:{
                tap:'diseaseSubmitFunction',
            },
        }
    },
    continuePersonalFunction: function() {
        var nameValue = Ext.getCmp('name').getValue();
        var ageValue = Ext.getCmp('age').getValue();
        var genderValue = Ext.getCmp('gender').getValue();
        var incomeValue = Ext.getCmp('income').getValue();
        console.log('vgjhbkjnjbk: '+ ageValue);
        Ext.Ajax.request({
            scope: this,
            url: 'http://localhost:9639/signup?name=' + nameValue + "&age=" + ageValue + "&gender=" + genderValue + "&income=" + incomeValue + "&userId=" + localStorage.user_id,
            method: 'GET',
            success: function(response) {
                // console.log(nameValue);
                localStorage.setItem('name', nameValue);
                localStorage.setItem('age', ageValue);
                localStorage.setItem('gender', genderValue);
                localStorage.setItem('income', incomeValue);
                console.log(localStorage.name);
                // console.log(localStorage.name);
                // console.log(localStorage.age);
                Ext.getCmp('firstpage').hide();
                if (!Ext.getCmp('InsuranceChoiceView')) {
                    Ext.Viewport.add(Ext.create('MyApp.view.InsuranceChoiceView'));
                }
                Ext.getCmp('InsuranceChoiceView').show();
                // var personalInfoLocal = Ext.decode(response.responseText);
                // localStorage.setItem('name',JSON.stringify(personalInfoLocal ));
                // var retrievedObject = localStorage.getItem('name');
                //    console.log(localStorage.name);         
                //     // console.log(personalInfoJson);
            }
        });
    },
    insuranceAddFunction: function() {
        // Ext.getCmp('insuranceInfoTitlebar').show();
    },
    insinputBackFunction: function() {
        Ext.getCmp('insinput').hide();
        if (!Ext.getCmp('InsuranceListView')) {
            Ext.Viewport.add(Ext.create('MyApp.view.InsuranceListView'));
        }
        Ext.getCmp('InsuranceListView').show();
    },
    insuranceListBackFunction: function() {
        Ext.getCmp('InsuranceListView').hide();
        if (!Ext.getCmp('InsuranceChoiceView')) {
            Ext.Viewport.add(Ext.create('MyApp.view.InsuranceChoiceView'));
        }
        Ext.getCmp('InsuranceChoiceView').show();
        // Ext.getCmp('insuranceInfoTitlebar').hide();
    },
    submitInsuranceInfoButtonFunction: function() {
        var user_id = localStorage.getItem('user_id');
        var insurance_number = Ext.getCmp('insurance_number').getValue();
       // var insurance_name = Ext.getCmp('insurance_name').getValue();
        console.log(insurance_number);
        Ext.Ajax.request({
            scope: this,
            url: 'http://localhost:9639/updateInsuranceNumber?userId=' + user_id + "&insurance_number=" + insurance_number,
            method: 'GET',
            success: function(response) {
                var valueInsId = Ext.getCmp('insurance_number').getValue();
                console.log(valueInsId);
                Ext.getCmp('InsuranceList').getStore().add({
                    insurance_number: valueInsId,
                });
                Ext.getCmp('insurance_number').reset();
                return false;
            }
        });
    },
    insuranceChoiceBackFunction: function() {
        Ext.getCmp('InsuranceChoiceView').hide();
        if (!Ext.getCmp('Main')) {
            Ext.Viewport.add(Ext.create('MyApp.view.Main'));
        }
        Ext.getCmp('Main').show();
    },
    myInsuranceFunction: function() {
        Ext.getCmp('InsuranceChoiceView').hide();
        var userId = localStorage.getItem('user_id');
        // var user_id=Ext.getCmp('user_id').getValue();
        var store = Ext.StoreMgr.get('InsuranceListStore');
        store.setProxy({
            url: 'http://localhost:9639/getInsuranceNumber?userId=' + userId,
        });
        Ext.getStore('InsuranceListStore').load();
        if (!Ext.getCmp('InsuranceListView')) {
            Ext.Viewport.add(Ext.create('MyApp.view.InsuranceListView'));
        }
        Ext.getCmp('InsuranceListView').show();
    },
    diseaseOptionBackFunction: function() {
        Ext.getCmp('DiseaseOptionView').hide();
        if (!Ext.getCmp('InsuranceChoiceView')) {
            Ext.Viewport.add(Ext.create('MyApp.view.InsuranceChoiceView'));
        }
        Ext.getCmp('InsuranceChoiceView').show();
    },
    specificInsuranceFunction: function() {
        Ext.getCmp('InsuranceChoiceView').hide();
        if (!Ext.getCmp('DiseaseOptionView')) {
            Ext.Viewport.add(Ext.create('MyApp.view.DiseaseOptionView'));
        }
        Ext.getCmp('DiseaseOptionView').show();
    },
    mainContinueFunction: function() {
        Ext.Ajax.request({
            scope: this,
            url: 'http://localhost:9639/login?email=' + Ext.getCmp('personEmail').getValue(),
            method: 'GET',
            success: function(response) {
                var userInfoJson = Ext.decode(response.responseText);
                localStorage.setItem('user_id', userInfoJson.user_id);
                localStorage.setItem('age',userInfoJson.age);
                localStorage.setItem('income',userInfoJson.income);
                console.log(userInfoJson.user_id);
                console.log(localStorage.user_id);
                 console.log(JSON.stringify(userInfoJson));
                // console.log(userInfoJson);
                //  console.log(!userInfoJson.email_user);
                if (!userInfoJson.email_user) {
                    Ext.getCmp('Main').hide();
                    if (!Ext.getCmp('firstpage')) {
                        Ext.Viewport.add(Ext.create('MyApp.view.firstpage'));
                    }
                    Ext.getCmp('firstpage').show();
                }
                //console.log(userInfoJson);
                else {
                    Ext.getCmp('Main').hide();
                    if (!Ext.getCmp('InsuranceChoiceView')) {
                        Ext.Viewport.add(Ext.create('MyApp.view.InsuranceChoiceView'));
                    }
                    Ext.getCmp('InsuranceChoiceView').show();
                    localStorage.setItem('name', userInfoJson.name);
                    localStorage.setItem('age', userInfoJson.age);
                    localStorage.setItem('gender', userInfoJson.gender);
                    localStorage.setItem('income', userInfoJson.income);
                    console.log(localStorage.age);
                }
            }
        });
        
    },

     insuranceListFunction: function(dataview, index, target, record, e, options) {
           
             
             console.log('insuranceCover');
            // var insuranceItem = record.data.insurance_number;
            var store = Ext.getStore('AllInsuranceStore');            
            store.setProxy({
                 url: 'http://localhost:9639/addAllInsurance'
                    });
            
            Ext.getStore('AllInsuranceStore').load();
            var insuranceNumber = record.data.insurance_number;
            var allRecord = Ext.getStore('AllInsuranceStore').findRecord('insurance_number',insuranceNumber).data;
            var Cover= allRecord.cover;
            var insuranceName= allRecord.insurance_name;
            var Premium= allRecord.premium;
            var Disease= allRecord.disease;
           
            Ext.getCmp('InsuranceListView').hide();
            if (!Ext.getCmp('InsuranceDetailsView')) {
                   Ext.Viewport.add(Ext.create('MyApp.view.InsuranceDetailsView'));
              }
             Ext.getCmp('labelInsuranceName').setHtml(insuranceName);
             Ext.getCmp('labelInsuranceNumber').setHtml(insuranceNumber);
             Ext.getCmp('labelCover').setHtml(Cover);
             Ext.getCmp('labelPremium').setHtml(Premium);
             Ext.getCmp('labelDisease').setHtml(Disease);
             
            Ext.getCmp('InsuranceDetailsView').show();
                     },

    
    insuranceDetailsBackFunction: function(){
             Ext.getCmp('InsuranceDetailsView').hide();
             if (!Ext.getCmp('InsuranceListView')) {
                   Ext.Viewport.add(Ext.create('MyApp.view.InsuranceListView'));
                 }
             Ext.getCmp('InsuranceListView').show();
      }, 




    bestInsuranceFunction: function(){
                    var age= localStorage.getItem('age');
                    var income= localStorage.getItem('income');
                    
                    Ext.Ajax.request({
                    scope: this,
                    url: 'http://localhost:9639/bestInsurance?income=\'' +income+'\'&age='+age ,
                    method: 'GET',
                    success: function(response) {
                        var bestInsuranceJson = Ext.decode(response.responseText) ;

                       localStorage.setItem('insurance_number', bestInsuranceJson.Insurances[0].insurance_number);
                       var insuranceNumber=localStorage.getItem('insurance_number');
                       console.log(bestInsuranceJson.Insurances[0].insurance_number);
                    
                        
                    
                    
                    var store = Ext.getStore('AllInsuranceStore');            
                    store.setProxy({
                         url: 'http://localhost:9639/addAllInsurance'
                             });
                    Ext.getStore('AllInsuranceStore').load();
                  
                    var allRecord = Ext.getStore('AllInsuranceStore').findRecord('insurance_number',insuranceNumber).data;
                    console.log(allRecord);
                    console.log('insurace_number'+localStorage.getItem('insurance_number'));
                    var Cover= allRecord.cover;
                    var Premium= allRecord.premium;
                    var Name= allRecord.insurance_name;
                    var Disease=allRecord.disease;
                    var Number=allRecord.insurance_number;
                    Ext.getCmp('InsuranceChoiceView').hide();
                    if (!Ext.getCmp('DiseaseOptionView')) {
                           Ext.Viewport.add(Ext.create('MyApp.view.DiseaseOptionView'));
                        }
                     // Ext.getCmp('labelInsuranceName').setHtml(insuranceName);
                    //  Ext.getCmp('labelInsuranceNumber').setHtml(insuranceNumber);
                      Ext.getCmp('labelCoverBestInsurance').setHtml(Cover);
                      Ext.getCmp('labelPremiumBestInsurance').setHtml(Premium);
                      Ext.getCmp('labelNameBestInsurance').setHtml(Name);
                      Ext.getCmp('labelNumberBestInsurance').setHtml(Number);
                      Ext.getCmp('labelDiseaseBestInsurance').setHtml(Disease);

                      Ext.getCmp('DiseaseOptionView').show();
                                           
                    }
            });  
                   
              
       
  
    }, 

    diseaseSubmitFunction: function(){

                    var age= localStorage.getItem('age');
                    var income= localStorage.getItem('income');
                    
                    Ext.Ajax.request({
                    scope: this,
                    url: 'http://localhost:9639/bestInsurance?income=\'' +income+'\'&age='+age ,
                    method: 'GET',
                    success: function(response) {
                            var bestInsuranceJson = Ext.decode(response.responseText) ;
                            var form = document.forms['DiseaseOptionView']; // your form element (whatever)
                            var numberofCheck = form.querySelectorAll(':checked').length;
                            console.log(numberofCheck);
                            var insuranceNumber=localStorage.getItem('insurance_number');
                            console.log(bestInsuranceJson.Insurances[0].insurance_number);
                            var allRecord = Ext.getStore('AllInsuranceStore').findRecord('insurance_number',insuranceNumber).data;
                            var Cover= allRecord.cover;
                            var Premium= allRecord.premium;
                            var newPremium = Premium + (Premium *0.085*numberofCheck);
                            Ext.getCmp('labelCoverBestInsurance').setHtml(Cover);
                            Ext.getCmp('labelPremiumBestInsurance').setHtml(newPremium);
                            Ext.getCmp('DiseaseOptionView').show();
                    
                                           
                    }
            });  
                 

    },





 
 });