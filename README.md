# WalletWise Backend

WalletWise is a backend solution for managing users, wallets, and transactions. It provides a RESTful API built with the NestJS framework and MongoDB for data persistence.

## Table of Contents

- [Overview](#overview)
- [Entities](#entities)
  - [User](#user)
  - [Wallet](#wallet)
  - [Transaction](#transaction)
- [Endpoints](#endpoints)
  - [User Endpoints](#user-endpoints)
  - [Wallet Endpoints](#wallet-endpoints)
  - [Transaction Endpoints](#transaction-endpoints)
  - [Authentication Endpoint](#authentication-endpoint)
- [Tech Stack](#tech-stack)
- [Setup](#setup)

---

## Overview

The WalletWise backend provides APIs to:

- Manage users and their authentication.
- Create and manage wallets for users.
- Record and categorize transactions within wallets.

---

## Entities

### User

Represents a user in the system.

- **Schema**: [`UserSchema`](src/modules/users/schema/user.schema.ts)
- **Fields**:
  - `name` (string, required): The user's name.
  - `email` (string, required): The user's email.
  - `password` (string, required): The user's hashed password.
  - `created_at` (Date, optional): Timestamp of creation.
  - `updated_at` (Date, optional): Timestamp of last update.

### Wallet

Represents a wallet belonging to a user.

- **Schema**: [`WalletSchema`](src/modules/wallet/schema/wallet.schema.ts)
- **Fields**:
  - `name` (string, required): The wallet's name.
  - `balance` (number, required): The wallet's balance.
  - `currency` (enum, required): The wallet's currency (`USD`, `EUR`, `CAD`).
  - `user_id` (string, required): The ID of the user who owns the wallet.
  - `created_at` (Date, optional): Timestamp of creation.
  - `updated_at` (Date, optional): Timestamp of last update.

### Transaction

Represents a transaction within a wallet.

- **Schema**: [`TransactionSchema`](src/modules/transaction/schema/transaction.schema.ts)
- **Fields**:
  - `amount` (number, required): The transaction amount.
  - `type` (enum, required): The transaction type (`INCOME`, `EXPENSE`).
  - `category` (enum, required): The transaction category (`FOOD`, `TRANSPORT`, etc.).
  - `wallet_id` (string, required): The ID of the wallet associated with the transaction.
  - `description` (string, required): A description of the transaction.
  - `date` (Date, required): The date of the transaction.
  - `created_at` (Date, optional): Timestamp of creation.
  - `updated_at` (Date, optional): Timestamp of last update.

---

## Endpoints

### User Endpoints

- **POST** `/users`: Create a new user.
- **GET** `/users`: Retrieve all users.
- **GET** `/users/:id`: Retrieve a user by ID.
- **PUT** `/users/:id`: Update a user by ID.
- **DELETE** `/users/:id`: Delete a user by ID.

### Wallet Endpoints

- **POST** `/wallets`: Create a new wallet.
- **GET** `/wallets`: Retrieve all wallets.
- **GET** `/wallets/:id`: Retrieve a wallet by ID.
- **PUT** `/wallets/:id`: Update a wallet by ID.
- **DELETE** `/wallets/:id`: Delete a wallet by ID.

### Transaction Endpoints

- **POST** `/transactions`: Create a new transaction.
- **GET** `/transactions`: Retrieve all transactions.
- **GET** `/transactions/:id`: Retrieve a transaction by ID.
- **PUT** `/transactions/:id`: Update a transaction by ID.
- **DELETE** `/transactions/:id`: Delete a transaction by ID.

### Authentication Endpoint

- **POST** `/login`: Authenticate a user and retrieve a JWT token.

---

## Tech Stack

- **Framework**: [NestJS](https://nestjs.com)
- **Database**: [MongoDB](https://www.mongodb.com)
- **ORM**: [Mongoose](https://mongoosejs.com)
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: [class-validator](https://github.com/typestack/class-validator)
- **Hashing**: bcryptjs

---

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd walletwise-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure enviroment variables

   ```bash
   userMongo=victorruffo88
   passMongo=TfBEWeGe5dwKYZf0
   hostMongo=cctb.svtaydx.mongodb.net
   dbNameMongo=walletwise
   optionsMongo=retryWrites=true&w=majority&appName=cctb
   timeOutToken=1d
   keyToken=walletwise
   ```

4. Run the application:

   ```bash
   npm run start:dev
   ```

5. Access the API at http://localhost:3000.
