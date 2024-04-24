import { register } from "../page/register"
import { login } from "../page/login";
import { bank } from "../page/bank";
import { userData, bankAccount } from "../page/data"
import { home } from "../page/home";
import { hamburguer } from "../page/hamburguer";
import { myAccount } from "../page/myAccount";
describe('Cypress test application Real World App', () => {
      it('scenario 1', () => {

          cy.log('Acesso o site')
          cy.visit('www.localhost:3000')
          cy.get(register.buttons.singUp).click();

          cy.log('Eu registro um novo ususário')
          cy.get(register.inputs.firstName).type(userData.firstName);
          cy.get(register.inputs.lastName).type(userData.lastName);
          cy.get(register.inputs.userName).type(userData.userName);
          cy.get(register.inputs.password).type(userData.password);
          cy.get(register.inputs.confirmPassword).type(userData.confirmPassword);
          cy.get(register.buttons.SingUpSubmit).should('be.visible');
          cy.get(register.buttons.SingUpSubmit).click();

          cy.log('Eu realizo o login na conta que foi criado')
          cy.get(login.inputs.userName).type(userData.userName);
          cy.get(login.inputs.password).type(userData.password);
          cy.get(login.buttons.login).should('be.visible');
          cy.get(login.buttons.login).click();
          cy.get(bank.popup.label).contains('Get Started with Real World App');
          cy.get(bank.buttons.next).click();

          cy.log('Eu realizo a criação da conta bancaria')
          cy.get(bank.inputs.bankName).type(bankAccount.bankName);
          cy.get(bank.inputs.RoutingNumeber).type(bankAccount.routingNumber);
          cy.get(bank.inputs.accountNumber).type(bankAccount.accountNumber);
          cy.get(bank.buttons.save).should('be.enabled');
          cy.get(bank.buttons.save).click()
          cy.get(bank.popup.labelFinish).contains('Finished')
          cy.get(bank.buttons.done).click();
          
          cy.log('Verifico se as opções do NavBar foram apresentados corretamente apos realizar o login')
          cy.get(home.navBar.everyone).should('be.visible')
          cy.get(home.navBar.friends).should('be.visible')
          cy.get(home.navBar.mine).should('be.visible')
          
          cy.log('Verifico se todas as opções do menu Hamburguer estão disponiveis');
          cy.get(hamburguer.home).should('be.visible');
          cy.get(hamburguer.myAccount).should('be.visible');
          cy.get(hamburguer.bankAccount).should('be.visible');
          cy.get(hamburguer.notification).should('be.visible');

          cy.log('Verifico se meus dados estão corretos')
          cy.get(myAccount.hamburguer.myAccount).click();
          cy.get(myAccount.label).should('be.have', 'User Settings');
          cy.get(myAccount.input.firstName).should('have.value', userData.firstName);
          cy.get(myAccount.input.lastName).should('have.value', userData.lastName);

          cy.log('Completo com as informações que faltam');
          cy.get(myAccount.input.email).type(userData.email);
          cy.get(myAccount.input.phoneNumber).type(userData.phoneNumber);
          cy.get(myAccount.buttons.save)
            .should('be.visible')
            .click();

            cy.log('Eu realizo o login na conta que foi criado')
          cy.get(login.inputs.userName).type(userData.userName);
          cy.get(login.inputs.password).type(userData.password);
          cy.get(login.buttons.login).should('be.visible');
          cy.get(login.buttons.login).click();
        });
});