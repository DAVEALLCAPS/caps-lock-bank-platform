# CAPS LOCK Bank Platform

This project is a part of my college portfolio for my Bachelor of Science in Information Technology capstone course. 
It is designed to demonstrate a simple digital banking platform where users can log in, view their balance, execute transactions, and send money to other users.

[View Live Demo on GitHub Pages](https://daveallcaps.github.io/caps-lock-bank-platform/)

## User Accounts

The application has three pre-defined user accounts for testing purposes:

1. `user1`
    - Password: `pass1`
    - Initial Balance: $0
    - Transactions: None
2. `user2`
    - Password: `pass2`
    - Initial Balance: $0
    - Transactions: None
3. `user3`
    - Password: `pass3`
    - Initial Balance: $0
    - Transactions: None

## Features

### Login
Users can login using the predefined accounts. The login function checks the entered username and password against the predefined accounts.

### Dashboard
Upon successful login, users are directed to the dashboard where they can view their current balance and perform transactions.

### Transaction Form
- Users can perform two types of transactions: Deposit and Withdraw.
- For Deposits, users can enter the amount to be deposited, and the balance is updated immediately.
- For Withdrawals, users enter the amount to withdraw. The balance is updated immediately after the transaction.

### Send Money Form
- Users can send money to other users.
- The sender selects a recipient and enters the amount to be sent.
- If the sender has insufficient funds, an alert message is displayed.
- The transaction is logged in both sender and recipient accounts with the respective transaction type (Sent or Received).

### Transaction History
Users can view a list of all their transactions, including Deposits, Withdrawals, Sent funds, and Received funds.

### Log Out
Users can log out, which hides the dashboard and transaction forms, and returns to the login view.

## Usage

Open the [index.html](./index.html) file in a web browser and log in with one of the predefined accounts. 
Use the transaction form to Deposit or Withdraw funds, and use the send money form to send funds to other users. 
The transaction history and current balance are updated in real-time as transactions are performed.

## Development
This is a front-end only application and does not persist data. When the page is reloaded, all data will be reset to the initial state.
