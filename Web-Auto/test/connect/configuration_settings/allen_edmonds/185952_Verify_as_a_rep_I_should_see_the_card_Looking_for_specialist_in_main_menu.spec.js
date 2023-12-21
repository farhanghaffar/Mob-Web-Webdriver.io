/* eslint wdio/await-expect: 0, max-len: ['warn', { 'code': 80 }] */
const webChat = require('../../../../lib/webChat');
const speclib = require('../../../../lib/speclib');
const shoppingPage = require('../../../../pages/salestracking/shopping.page');
const sidebarPage = require('../../../../pages/sidebar.page');


describe('Sales floor Project', () => {
  it('C185952 Verify as a rep I should see the card Looking for specialist in main menu', () => {
    speclib.addTestId('185952');
    speclib.addModule(speclib.ALLURE.module.storefront);
    speclib.addSeverity(speclib.ALLURE.severity.major);
    
    speclib.addStepAutoNumber(`Open ${speclib.RETAILER} page`);
    
    speclib.addStepAutoNumber(shoppingPage.getShoppingUrl);
    webChat.openTab("https://allenedmonds-widgets-qa04.salesfloor.net/tests/desktop");
    
    // speclib.addStepAutoNumber('click on Store Link');
    // sidebarPage.defaultStoreLnk.click();
    
    speclib.addStepAutoNumber('validating Chatbot');
    expect(webChat.isChatbotDisplayed()).toBeExisting();
    
    speclib.addStepAutoNumber('click on Chatbot');
    webChat.clickOnChatbot();
    
    speclib.addStepAutoNumber(webChat.readMessage(1));
    expect(webChat.readMessageNumber(1)).toBeExisting();

    speclib.addStepAutoNumber("verify 'main menu' displaying");
    expect(webChat.iWantToConnectWithAnExper).toBeExisting();
    
    speclib.addStepAutoNumber("verify 'cards On main menu' displaying");
    expect(webChat.cardsOnMainMenu).toBeExisting();    
    
    speclib.addStepAutoNumber(webChat.getVerifiedMessage(webChat.imLookingForAnInStore));
    expect(webChat.imLookingForAnInStore).toBeExisting();
  });
});
