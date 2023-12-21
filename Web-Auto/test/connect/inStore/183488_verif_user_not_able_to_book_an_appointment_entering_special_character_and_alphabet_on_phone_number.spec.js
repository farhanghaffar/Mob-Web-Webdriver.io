/* eslint wdio/await-expect: 0, max-len: ['warn', { 'code': 80 }] */
const webChat = require('../../../lib/webChat');
const speclib = require('../../../lib/speclib');
const ShoppingPage = require('../../../pages/salestracking/shopping.page');
const { TEST_DATA } = require('../../../lib/defaultconstantslib');

describe('Sales floor Project', () => {
  it('C183488 Verify as a user, I am not able to book an appointment by entering special character and alphabet on phone number while booking an in-store appointment with "I have a product questions".', () => {
    speclib.addTestId('C183488');
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

    speclib.addStepAutoNumber("click on 'in a store' Options");
    webChat.inAStoreOptions.click();

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

    speclib.addStep('End of step');

    speclib.startStep('Start Step');

    speclib.addStepAutoNumber("click on 'confirm' button");
    webChat.confirmButton.click();

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

    speclib.addStepAutoNumber("click on 'SMS' Option");
    webChat.smsButton.click();

    speclib.addStep(webChat.readMessage(21));
    expect(webChat.readMessageNumber(21)).toBeExisting();

    speclib.addStep('End of step');

    speclib.startStep('Start Step');

    speclib.addStepAutoNumber(`enter text in Phone field: ${TEST_DATA.request.sfr.specialCharacter}`);
    webChat.enterValueInTypeField(webChat.phoneTextFeild, TEST_DATA.request.sfr.specialCharacter);

    speclib.addStepAutoNumber("verify 'invalid Phone Number' Popup is displaying");
    expect(webChat.invalidPhoneNumberPopup).toBeExisting();

    speclib.addStepAutoNumber(`enter text in Phone field: ${TEST_DATA.request.sfr.alphabet}`);
    webChat.enterValueInTypeField(webChat.phoneTextFeild, TEST_DATA.request.sfr.alphabet);

    speclib.addStepAutoNumber("verify 'invalid Phone Number' Popup is displaying");
    expect(webChat.invalidPhoneNumberPopup).toBeExisting();

    speclib.addStep('End of step');
  });
});