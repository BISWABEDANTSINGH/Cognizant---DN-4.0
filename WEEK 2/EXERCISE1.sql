-- Scenario 1: Apply 1% discount to loan interest rates for customers above 60
DECLARE
  CURSOR cur_customers IS
    SELECT customer_id, interest_rate
    FROM loans
    WHERE customer_id IN (
      SELECT customer_id
      FROM customers
      WHERE age > 60
    );
BEGIN
  FOR rec IN cur_customers LOOP
    UPDATE loans
    SET interest_rate = interest_rate - 1
    WHERE customer_id = rec.customer_id;
  END LOOP;
  COMMIT;
END;
/

-- Scenario 2: Set IsVIP flag to TRUE for customers with balance > 10000
DECLARE
  CURSOR cur_vip IS
    SELECT customer_id
    FROM customers
    WHERE balance > 10000;
BEGIN
  FOR rec IN cur_vip LOOP
    UPDATE customers
    SET IsVIP = 'TRUE'
    WHERE customer_id = rec.customer_id;
  END LOOP;
  COMMIT;
END;
/

-- Scenario 3: Print reminders for loans due in next 30 days
DECLARE
  CURSOR cur_due_loans IS
    SELECT c.customer_id, c.name, l.due_date
    FROM loans l
    JOIN customers c ON l.customer_id = c.customer_id
    WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
  FOR rec IN cur_due_loans LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan for customer ' || rec.name ||
                         ' (ID: ' || rec.customer_id || ') is due on ' || TO_CHAR(rec.due_date, 'DD-MON-YYYY'));
  END LOOP;
END;
/
