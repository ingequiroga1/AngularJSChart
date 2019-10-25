
app2.controller('loginCtrl', function($scope, servicioLogin,usuari) {


        //To Get All Records 
    $scope.GetAllUsers = function () {
        debugger;
        var getData = servicioLogin.getEmployees();
        getData.then(function (emp) {
            $scope.employees = emp.data;
        },function () {
            alert('Error in getting records');
        });
    }


    $scope.ValidarUsuario = function (user,pass) {
        debugger;
        var getData = servicioLogin.Logear(user, pass);
        getData.then(function (usuario) {
            usuari.setdatusuario(usuario.data);
            $scope.usr = usuari.getdatusuario();
            //window.location.href = "index.html";
        },function () {
            alert('Error in getting records');
        });
    }

 
});