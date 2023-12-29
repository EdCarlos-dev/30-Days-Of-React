// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

interface Income {
    description: string;
    amount: number;
}

interface Expense {
    description: string;
    amount: number;
}

interface PersonAccount {
    idName: number;
    firstName: string;
    lastName: string;
    incomes: Income[];
    expenses: Expense[];
    totalIncome: () => number;
    totalExpense: () => number;
    accountInfo: () => string;
    addIncome: (description: string, amount: number) => void;
    addExpense: (description: string, amount: number) => void;
    accountBalance: () => number;
}

const personAccount: PersonAccount = {
    idName: 1,
    firstName: 'John',
    lastName: 'Doe',
    incomes: [],
    expenses: [],
    totalIncome() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
    totalExpense() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
    accountInfo() {
        return `ID ${this.idName} Name ${this.firstName} ${this.lastName} - Total Income: ${this.totalIncome()} - Total Expense: ${this.totalExpense()}`;
    },
    addIncome(description: string, amount: number) {
        this.incomes.push({ description, amount });
    },
    addExpense(description: string, amount: number) {
        this.expenses.push({ description, amount });
    },
    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
};

// Exemplo de utilização:
personAccount.addIncome('Salary', 3000);
personAccount.addIncome('Freelance Work', 500);
personAccount.addExpense('Rent', 1000);
personAccount.addExpense('Food', 300);

console.log(personAccount.accountInfo());
console.log(`Current Balance: ${personAccount.firstName} ${personAccount.lastName} ${personAccount.accountBalance()}`);
