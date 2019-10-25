(function(){
	'use strict';

	angular 
		.module('AppPan')
		.controller('HomeController', HomeController)

	HomeController.$inject = ['UserService', '$rootScope'];
	function HomeController(UserService, $rootScope, $scope) {

		var vm  = this;
        var dat = [];
        var lab = [];

		vm.user = null;
		vm.allUsers = [];
		vm.deleteUser = deleteUser;
        vm.myJson = {};
        vm.prueba = {
                        "records":[
                                {
                                "nomcli":"Gerardo",
                                "dircli":"Pendiente",
                                "saldo":"10.5"
                                },
                                {
                                "nomcli":"Local",
                                "dircli":"Pendiente",
                                "saldo":"26.000"
                                },
                                {
                                "nomcli":"Felipe",
                                "dircli":"Pendiente",
                                "saldo":"22.1"
                                },
                                {
                                "nomcli":"Don Ramiro",
                                "dircli":"Pendiente",
                                "saldo":"350.00"
                                },
                                {
                                "nomcli":"Tortas",
                                "dircli":"Pendiente",
                                "saldo":"0"
                                }
                        ],
                        "series":[
                                    ["Gerardo",10.5],
                                    ["Local",26.000],
                                    ["Felipe",22.1],
                                    ["Don Ramiro",350.00],
                                    ["Tortas",0]
                                 ]
                    };


        vm.myJson = {
            type : 'bar',
            plot: {
                tooltip: {
                    text: "%k $%v",
                    'font-color': "white",
                    'font-family': "Georgia",
                    'font-size': 20,
                }
            },
            'scale-x': {
                label:{
                    text: "Clientes Deudores"
                }
                //labels: lab
            },
            series : [
                { 
                    values : vm.prueba.series//dat                      
                }
            ]
        };

        function fillseries(){
            
            for (var i = 0; i < vm.prueba.records.length; i++) {
                var datd =[];
                datd.push(vm.prueba.records[i].nomcli);
                datd.push(parseFloat(vm.prueba.records[i].saldo));
                dat.push(datd);               
            }
      
        }
       // vm.myJson = {  
       //   type : 'line' ,  
       //   'scale-x':{
      //      label:{
       //         text:"Periodo de tiempo"
       //     },
       //     labels: ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"]
       //   },
       //   series : [  
       //     { values : [ 54 , 23 , 34 , 23 , 43 ] },  
       //     { values : [ 10 , 15 , 16 , 20 , 40 ] }  
       //   ]  
       // };

		initController();

		  function initController() {
            loadCurrentUser();
            //fillseries();
           
        }

        function loadCurrentUser(){
        	debugger;
        	UserService.GetByUsername($rootScope.globals.currentUser.username)
        				.then(function(user){
        					vm.user = user;
        				});
        	debugger;
        }

         function deleteUser(id) {
            UserService.Delete(id)
            .then(function () {
                loadAllUsers();
            });
        }

	}

})();