function doGet() {
  var template = HtmlService.createTemplateFromFile('Page');
  return template.evaluate().setTitle("Maker's Lab 합격 확인");
}

function processForm(form) {
  var studentNumber = form.studentNumber;
  var name = form.name;

  // 이름과 학번 란이 비어있을 경우
  if (!studentNumber || !name) {
    var template = HtmlService.createTemplateFromFile('Page');
    template.action = "submit";
    template.errorMessage = "이름과 학번 란을 모두 작성해주세요.";
    return template.evaluate().setTitle("Maker's Lab 합격 확인");
  }

  // 스프레드시트와 시트를 읽어옵니다.
  var spreadsheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1GPLAfELRXJyiVBLN54Kzol_gjB9EZEmd7QJ3mI5J5z4/edit?usp=sharing');
  var sheet = spreadsheet.getSheetByName("시트1");

  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();

  var isAccepted = false;
  var message = "지원자 정보가 없습니다.";
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    if (row[0] == studentNumber && row[1] == name) {
      if (row[2] == "합격") {
        message = "축하합니다! Maker's Lab에 합격하셨습니다."
      } else {
        message = "아쉽지만 합격하지 못하셨습니다."
      }
      break;
    }
  }

  var template = HtmlService.createTemplateFromFile('Result');
  template.name = name;
  template.message = message;

  return template.evaluate().getContent();
}