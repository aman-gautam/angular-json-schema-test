Angular JSON Schema Test
=========================


This is not a library project, but just a project to test different features of [Angular Schema Form](https://github.com/json-schema-form/angular-schema-form).


bower_components has been kept in the VCS to make this thing easy to run for people without bower and other funny stuff installed.


Making Changes in the form
---------------------------

Just add your `Valid JSON Schema` to schemas/form.json. JSON can be validated at [jsonlint.com](http://pro.jsonlint.com).

For copy-paste to work (from the documentation):

1. comment out the $http request in scripts/controllers/main.js (line 6-13)
2. Make changes in the $scope.schema object directly


Reference
------------

1. [Documentation](https://github.com/json-schema-form/angular-schema-form/blob/development/docs/index.md)
2. [Form Types](https://github.com/json-schema-form/angular-schema-form/blob/development/docs/index.md#form-types)