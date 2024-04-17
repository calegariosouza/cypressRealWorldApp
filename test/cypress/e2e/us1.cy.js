import { register } from "../page/register"
import { login } from "../page/login";
import { dashboard } from "../page/dashboard";
import { bank } from "../page/bank";

describe('Cypress test application Real World App', () => {
      it('scenario 1', () => {

          const userData = {
            firstName: 'João Victor',
            lastName: 'Calegário',
            userName: 'Joao',
            password: '1234',
            confirmPassword: '1234',
          };

          const bankAccount = {
            bankName: 'C6 Bank',
            routingNumber: '999999999',
            accountNumber: '999999999',
          };

          cy.visit('www.localhost:3000')
          cy.get(register.buttons.singUp).click();

          cy.log('Eu registro um novo ususário')
          cy.get(register.inputs.firstName).type(userData.firstName);
          cy.get(register.inputs.lastName).type(userData.lastName);
          cy.get(register.inputs.userName).type(userData.userName);
          cy.get(register.inputs.password).type(userData.password);
          cy.get(register.inputs.confirmPassword).type(userData.confirmPassword);

          cy.log('Eu confirmo o cadastro desse usuário')
          cy.get(register.buttons.SingUpSubmit).should('be.visible');
          cy.get(register.buttons.SingUpSubmit).click();

          cy.log('Eu realizo o login na conta que foi criado')
          cy.get(login.inputs.userName).type(userData.userName);
          cy.get(login.inputs.password).type(userData.password);
          cy.get(login.buttons.login).should('be.visible');
          cy.get(login.buttons.login).click();
          cy.get(bank.popup.label).contains('Get Started with Real World App');
          cy.get(bank.buttons.next).click();

          cy.log('Eu realizo a criação da conta no banco')
          cy.get(bank.inputs.bankName).type(bankAccount.bankName);
          cy.get(bank.inputs.RoutingNumeber).type(bankAccount.routingNumber);
          cy.get(bank.inputs.accountNumber).type(bankAccount.accountNumber);
          cy.get(bank.buttons.save).should('be.enabled');
          cy.get(bank.buttons.save).click()

          cy.get(bank.popup.labelFinish).contains('Finished')
          cy.get(bank.buttons.done).click();

          cy.get(dashboard.tab.Everyone).should('be.visible');
          cy.get(dashboard.tab.friends).should('be.visible');
          cy.get(dashboard.tab.mine).should('be.visible');

          cy.log('Realizo a criação de conta')
          cy.get(dashboard.menu.bankAccounts).click();
          cy.get(bank.emptyStates.emptyBankAccounts).should('be.have','No Bank Accounts')

          cy.get(bank.buttons.create).click({ force : true })

        });
      });