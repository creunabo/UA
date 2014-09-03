var LYCK = LYCK || {};
LYCK = (function(w,d) {
// Private Properties
var _init;
var _privateInit;
var _resultContainerId = d.getElementById("result");
var _inputValueId = d.getElementById("inputValue");


var _jsonData;
var _getJson;

var _ajaxUrl = '/servlet.js';

// Public Properties
var NoInit = null;
var Settings = {
    prop1 : "fooooo",
    prop2 : "baaaaar"
};

// Private Methods
  _init = function(){
    _inputValueId = d.getElementById("inputValue");
    console.log(_inputValueId);
      _resultContainerId.innerHTML = _inputValueId.value;
  };

  _getJson = function(){
    $.ajax({
      type: "GET",
      url: _ajaxUrl, 
      success: function(data){
                _jsonData = data;
              }
      })
  };

  _privateInit = function(){
    console.log("øv jeg er Private");
  };


// Public Methods & Properties
return {
        Init : _init,
        NoInit: NoInit,
        Settings: Settings,
        GetData : _getJson,
        Data : _jsonData
        //InitMore : _privateInit
      }
})(window, document);