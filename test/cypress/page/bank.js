const bank = {
    inputs: {
        bankName: '#bankaccount-bankName-input',
        RoutingNumeber: '#bankaccount-routingNumber-input',
        accountNumber: '#bankaccount-accountNumber-input'
    },
    buttons: {
        next: '[data-test="user-onboarding-next"]',
        save: '[data-test="bankaccount-submit"]',
        done: '[data-test="user-onboarding-next"]',
        create: '[data-test="bankaccount-new"]',
    },
    popup: {
        label: '[data-test="user-onboarding-dialog-title"]',
        labelCreateAccount: '[data-test="user-onboarding-dialog-title"]',
        labelFinish: '[data-test="user-onboarding-dialog-title"]',
    },
    emptyStates: {
        emptyBankAccounts: '[data-test="empty-list-header"]',
    }
};

export { bank }