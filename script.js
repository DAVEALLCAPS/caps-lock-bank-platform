const accounts = [
    {
        username: 'user1',
        password: 'pass1',
        balance: 0,
        transactions: []
    },
    {
        username: 'user2',
        password: 'pass2',
        balance: 0,
        transactions: []
    },
    {
        username: 'user3',
        password: 'pass3',
        balance: 0,
        transactions: []
    }
];

let currentAccount = null;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    currentAccount = accounts.find(acc => acc.username === username && acc.password === password);
    
    if (currentAccount) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('transaction-form').style.display = 'block';
        document.getElementById('send-money-form').style.display = 'block';
        recalculateBalance(currentAccount);
        updateBalanceDisplay();
        populateRecipients();
        displayTransactions();
    } else {
        alert('Invalid credentials');
    }

    recalculateBalance(currentAccount);
    updateBalance();
    populateRecipients();
    document.getElementById('send-money-form').style.display = 'block';
}

function populateRecipients() {
    const recipientSelect = document.getElementById('recipient');
    recipientSelect.innerHTML = '';
    accounts.forEach(acc => {
        if (acc !== currentAccount) {
            const option = document.createElement('option');
            option.value = acc.username;
            option.textContent = acc.username;
            recipientSelect.appendChild(option);
        }
    });
}

function sendMoney() {
    const recipientUsername = document.getElementById('recipient').value;
    const amount = parseFloat(document.getElementById('send-amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    if (amount > currentAccount.balance) {
        alert('Insufficient funds.');
        return;
    }

    const recipientAccount = accounts.find(acc => acc.username === recipientUsername);

    currentAccount.transactions.push({ type: `Sent to ${recipientUsername}`, amount });
    recipientAccount.transactions.push({ type: `Received from ${currentAccount.username}`, amount });

    recalculateBalance(currentAccount);
    recalculateBalance(recipientAccount);
    updateBalanceDisplay();
    displayTransactions();
}

function recalculateBalance(account) {
    account.balance = 0;
    account.transactions.forEach(transaction => {
        if (transaction.type.startsWith('Received') || transaction.type === 'Deposit') {
            account.balance += transaction.amount;
        } else {
            account.balance -= transaction.amount;
        }
    });
}

function displayTransactions() {
    const transactionsContainer = document.getElementById('transactions');
    transactionsContainer.innerHTML = '';
    currentAccount.transactions.forEach(txn => {
        const txnDiv = document.createElement('div');
        txnDiv.textContent = `${txn.type}: $${txn.amount}`;
        transactionsContainer.appendChild(txnDiv);
    });
    transactionsContainer.style.display = 'block';
}

function addTransaction() {
    const type = document.getElementById('transaction-type').value;
    const amount = parseFloat(document.getElementById('transaction-amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    currentAccount.transactions.push({ type, amount });
    recalculateBalance(currentAccount);
    updateBalanceDisplay();
    displayTransactions();
}

function updateBalanceDisplay() {
    document.getElementById('balance').textContent = currentAccount.balance.toFixed(2);
}

function logout() {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('transaction-form').style.display = 'none';
    document.getElementById('transactions').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    currentAccount = null;
}
