const transactions = [];
let currentBalance = 0;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'user' && password === 'pass') { 
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('transaction-form').style.display = 'block';
    } else {
        alert('Invalid credentials');
    }
}

function displayTransactions() {
    const transactionsContainer = document.getElementById('transactions');
    transactionsContainer.innerHTML = '';
    transactions.forEach(txn => {
        const txnDiv = document.createElement('div');
        txnDiv.textContent = `${txn.type}: $${txn.amount}`;
        transactionsContainer.appendChild(txnDiv);
    });
    transactionsContainer.style.display = 'block';
    updateBalance();
}

function addTransaction() {
    const type = document.getElementById('transaction-type').value;
    const amount = parseFloat(document.getElementById('transaction-amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    transactions.push({ type, amount });
    displayTransactions();
}

function updateBalance() {
    currentBalance = 0;
    transactions.forEach(transaction => {
        if (transaction.type === 'Deposit') {
            currentBalance += transaction.amount;
        } else if (transaction.type === 'Withdraw') {
            currentBalance -= transaction.amount;
        }
    });
    document.getElementById('balance').textContent = currentBalance.toFixed(2);
}