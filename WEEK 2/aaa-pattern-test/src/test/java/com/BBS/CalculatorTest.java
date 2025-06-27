package com.BBS;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {

        calculator = new Calculator();
        System.out.println("Setting up test environment...");
    }

    @After
    public void tearDown() {

        System.out.println("Cleaning up test environment...");
    }

    @Test
    public void testAddition() {

        int a = 5;
        int b = 3;


        int result = calculator.add(a, b);


        assertEquals(8, result);
    }

    @Test
    public void testDivision() {

        int a = 10;
        int b = 2;


        int result = calculator.divide(a, b);


        assertEquals(5, result);
    }
}
