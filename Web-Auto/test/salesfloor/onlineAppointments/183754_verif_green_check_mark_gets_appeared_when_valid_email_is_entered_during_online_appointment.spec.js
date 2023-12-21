/* eslint wdio/await-expect: 0, max-len: ['warn', { 'code': 80 }] */
const webChat = require('../../../lib/webChat');
const speclib = require('../../../lib/speclib');
const ShoppingPage = require('../../../pages/salestracking/shopping.page');
const { TEST_DATA } = require('../../../lib/defaultconstantslib');

describe('Sales floor Project', () => {
  it('C183754 Verify as a user, green check mark gets appeared when valid email is entered during booking an online appointment.', () => {
    speclib.addTestId('183754');
    speclib.addModule(speclib.ALLURE.module.tobeMigrated);
    speclib.addSeverity(speclib.ALLURE.severity.major);

    speclib.startStep(`Open ${speclib.RETAILER} page`);

    ShoppingPage.openShoppingPage(true);

    speclib.addStepAutoNumber('validating Chatbot');
    expect(webChat.isChatbotDisplayed()).toBeExisting();

    speclib.addStepAutoNumber('click on Chatbot');
    webChat.clickOnChatbot();

    speclib.addStep(webChat.readMessage(1));
    expect(webChat.readMessageNumber(1)).toBeExisting();

    speclib.addStep(webChat.readMessage(2));
    expect(webChat.readMessageNumber(2)).toBeExisting();

    speclib.addStepAutoNumber(webChat.getVerifiedMessage(webChat.ihaveProductQuestionsOption));
    expect(webChat.ihaveProductQuestionsOption).toBeExisting();

    speclib.addStep('End of test');

    speclib.startStep('Start Step');

    speclib.addStepAutoNumber(webChat.getVerifiedMessage(webChat.ihaveProductQuestionsOption));
    expect(webChat.ihaveProductQuestionsOption).toBeExisting();

    speclib.addStep('End of step');

    speclib.startStep('Start Step');

    speclib.addStepAutoNumber(webChat.getClickElementText(webChat.ihaveProductQuestionsOption));
    webChat.ihaveProductQuestionsOption.click();

    speclib.addStepAutoNumber(webChat.readMessage(4));
    expect(webChat.readMessageNumber(4)).toBeExisting();

    speclib.addStep('End of step');

    speclib.startStep('Start Step');

    speclib.addStepAutoNumber('click on \'book an appointment\' Options');
    webChat.bookAnAppointmentOptions.click();

    speclib.addStepAutoNumber(webChat.readMessage(6));
    expect(webChat.readMessageNumber(6)).toBeExisting();

    speclib.addStep('End of step');

    speclib.startStep('Start Step');

    speclib.addStepAutoNumber("click on 'online' Options");
    webChat.onlineOptions.click();

    speclib.addStepAutoNumber("Verify 'list Of Categories' is displaying");
    expect(webChat.listOfCategories).toBeExisting();

    speclib.addStepAutoNumber('select category');
    webChat.categoryItem.click();

    speclib.addStepAutoNumber("click on 'Continue' button");
    webChat.categoriesContinueButton.click();

    speclib.addStep('End of step');

    speclib.startStep('Start Step');

    speclib.addStepAutoNumber(` enter text in type field: ${TEST_DATA.request.sfr.rendomData}`);
    webChat.enterValueInTypeField(webChat.typeButton, TEST_DATA.request.sfr.rendomData);

    speclib.addStep(webChat.readMessage(10));
    expect(webChat.readMessageNumber(10)).toBeExisting();

    speclib.addStep('End of step');

    speclib.startStep('Start Step');

    speclib.addStepAutoNumber("click on store 'confirm' button");
    webChat.confirmButton.click();

    speclib.addStep(webChat.readMessage(12));
    expect(webChat.readMessageNumber(12)).toBeExisting();

    speclib.addStep('End of step');

    speclib.startStep('Start Step');

    speclib.addStepAutoNumber("click on 'Anyone Would Work' option");
    webChat.anyoneWouldWorkOption.click();

    speclib.addStep(webChat.readMessage(13));
    expect(webChat.readMessageNumber(13)).toBeExisting();

    speclib.addStepAutoNumber("click on 'Select A Time And Date' Option");
    webChat.selectATimeAndDate.click();

    speclib.addStepAutoNumber("verify 'calender With Timer'  Slot is displaying");
    expect(webChat.calenderWithTimrSlot).toBeExisting();

    speclib.addStep('End of step');

    speclib.startStep('Start Step');

    speclib.addStepAutoNumber("click on 'calender With Timer' Option");
    webChat.calenderWithTimrSlot.click();

    speclib.addStep('End of step');

    speclib.startStep('Start Step');

    speclib.addStepAutoNumber("click on 'continue' Button");
    webChat.associateContinueButton.click();

    speclib.startStep('Start Step');

    speclib.addStepAutoNumber(`enter text in type field: ${TEST_DATA.request.sfr.name}`);
    webChat.enterValueInTypeField(webChat.typeButton, TEST_DATA.request.sfr.name);

    speclib.addStep(webChat.readMessage(19));
    expect(webChat.readMessageNumber(19)).toBeExisting();

    speclib.addStep('End of step');

    speclib.startStep('Start Step');

    speclib.addStepAutoNumber("click on 'email' Option");
    webChat.emailBtn.click();

    speclib.addStep(webChat.readMessage(22));
    expect(webChat.readMessageNumber(22)).toBeExisting();

    speclib.addStep('End of step');

    speclib.startStep('Start Step');

    speclib.addStepAutoNumber(`enter invalid email in email field: ${TEST_DATA.request.sfr.invalidEmail}`);
    webChat.enterValueInTypeField(webChat.emailTextFeild, TEST_DATA.request.sfr.invalidEmail);

    speclib.addStepAutoNumber("Verify 'invalid Email' Popup is displaying");
    expect(webChat.invalidEmailPopup).toBeExisting();

    speclib.addStep('End of step');

    speclib.startStep('Start Step');

    speclib.addStepAutoNumber(`enter valid email in email field: ${TEST_DATA.request.sfr.email}`);
    webChat.enterEmail(TEST_DATA.request.sfr.email);

    speclib.addStepAutoNumber("Verify 'green check mark' is displaying on email");
    expect(webChat.greenCheckMark).toBeExisting();

    speclib.addStep('End of step');
  });
});