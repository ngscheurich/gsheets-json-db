var SS_URL = 'https://docs.google.com/spreadsheet/ccc?key='
var REQUESTED_AT = new Date();

function doGet(request) {
  var url = SS_URL + request.parameters.key;
  var sheetName = request.parameters.sheetName;
  var json = {
    requested_at: REQUESTED_AT,
    success: false
  };
  
  if (typeof sheetName !== 'undefined') {
    var doc = SpreadsheetApp.openByUrl(url);
    var sheet = doc.getSheetByName(sheetName);
    json = sheetToJson(sheet);
  }
  
  return ContentService.createTextOutput(
    JSON.stringify(json)
  ).setMimeType(ContentService.MimeType.JSON);
}

function sheetToJson(sheet) {
  var range = sheet.getDataRange();
  var values = range.getValues();
  var json = {
     requested_at: REQUESTED_AT,
     success: true
  };

  for (var i = 0; i < values.length; i++) {
    var row = values[i];
    json[row[0]] = row[1];
  }

  return json;
}
