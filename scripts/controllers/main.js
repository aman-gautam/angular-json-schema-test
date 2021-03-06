angular.module('app')
    .controller('MainCtrl', function($scope, $http) {
        console.log('MainCtrl');

        // This can go to the resolve, but let it stay here for sake of simplicity...
        //$http.get('/schemas/form.json').then(function(res){
        //   $scope.schema = {
        //       type: "object",
        //       properties: res.data
        //   }
        //}, function(err){
        //    console.log(err);
        //});

        $scope.schema = {
            type: "object",
            properties: {
                "name": { "type": "string", "minLength": 2, "title": "Name", "description": "Name or alias" },
                "title": {
                    "type": "string",
                    "enum": ["dr","jr","sir","mrs","mr","dj"]
                },
                "deleted": {
                    "type": "boolean"
                },
                "birthDate": {
                    "title": "Bday",
                    "type": "string",
                    "format": "date"
                }
            }
        };

        $scope.form = [
            "*",
            {
                type: "submit",
                title: "Save"
            }
        ];

        $scope.model = {};
    });
