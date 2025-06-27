/*
==========================================================
    Bank Procedures - WEEK 2 | PL/SQL Stored Procedures
    Author: [Your Name]
    Description: This script includes 3 stored procedures
    covering:
      1. Monthly interest processing for savings accounts
      2. Employee bonus updates by department
      3. Secure fund transfers between accounts
==========================================================
*/

-- ========================================================
-- 🔁 SCENARIO 1: Apply Monthly Interest to Savings Accounts
-- ========================================================
-- Procedure: ProcessMonthlyInterest
-- Purpose: Increase the balance of all savings accounts by 1%
-- Assumption: 'accounts' table has 'account_type' and 'balance' fields

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  UPDATE accounts
  SET balance = balance + (balance * 0.01)
  WHERE account_type = 'Savings';

  COMMIT;
END;
/
-- 📌 To run: EXEC ProcessMonthlyInterest;

-- ========================================================
-- 💸 SCENARIO 2: Update Employee Bonus by Department
-- ========================================================
-- Procedure: UpdateEmployeeBonus
-- Purpose: Apply a bonus (in %) to salaries of employees in a specific department
-- Parameters:
--   dept_id     - department ID to filter employees
--   bonus_pct   - percentage of bonus to be added
-- Assumption: 'employees' table has 'department_id' and 'salary'

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
  dept_id IN NUMBER,
  bonus_pct IN NUMBER
) IS
BEGIN
  UPDATE employees
  SET salary = salary + (salary * bonus_pct / 100)
  WHERE department_id = dept_id;

  COMMIT;
END;
/
-- 📌 To run: EXEC UpdateEmployeeBonus(101, 10); -- 10% bonus for dept 101

-- ========================================================
-- 🔄 SCENARIO 3: Transfer Funds Between Two Accounts
-- ========================================================
-- Procedure: TransferFunds
-- Purpose: Transfer money from one account to another
--           (Only proceeds if the source has enough balance)
-- Parameters:
--   from_account_id - Source account
--   to_account_id   - Destination account
--   amount          - Amount to transfer
-- Assumption: 'accounts' table has 'account_id' and 'balance'

CREATE OR REPLACE PROCEDURE TransferFunds(
  from_account_id IN NUMBER,
  to_account_id IN NUMBER,
  amount IN NUMBER
) IS
  insufficient_balance EXCEPTION;
BEGIN
  -- Step 1: Lock and check balance of source account
  DECLARE
    source_balance NUMBER;
  BEGIN
    SELECT balance INTO source_balance
    FROM accounts
    WHERE account_id = from_account_id
    FOR UPDATE;

    IF source_balance < amount THEN
      RAISE insufficient_balance;
    END IF;

    -- Step 2: Deduct from source account
    UPDATE accounts
    SET balance = balance - amount
    WHERE account_id = from_account_id;

    -- Step 3: Add to destination account
    UPDATE accounts
    SET balance = balance + amount
    WHERE account_id = to_account_id;

    COMMIT;

  EXCEPTION
    WHEN insufficient_balance THEN
      ROLLBACK;
      RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
    WHEN NO_DATA_FOUND THEN
      ROLLBACK;
      RAISE_APPLICATION_ERROR(-20002, 'One or both account IDs not found.');
  END;
END;
/
 To run: EXEC TransferFunds(1001, 1002, 500);
