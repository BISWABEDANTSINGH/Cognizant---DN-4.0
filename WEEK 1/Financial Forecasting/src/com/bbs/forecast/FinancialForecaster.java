package com.bbs.forecast;

public class FinancialForecaster {

    /*
     * -----------------------------------------------
     * 1. Understanding Recursive Algorithms:
     * -----------------------------------------------
     * Recursion is a technique where a method calls itself to break down a problem
     * into smaller instances of the same problem.
     * It simplifies problems like mathematical computations, traversals, or
     * forecasting models that build on prior values.
     *
     * Example: Financial forecasting can be modeled recursively because the
     * future value in year 'n' depends on the value in year 'n-1'.
     */

    /*
     * -----------------------------------------------
     * 3. Implementation:
     * -----------------------------------------------
     * This method recursively calculates the future value of an investment using
     * compound growth.
     * Formula: Future Value = Present Value × (1 + rate)^years
     *
     * Parameters:
     * - presentValue: initial investment
     * - rate: annual growth rate (e.g., 0.05 for 5%)
     * - years: number of years to forecast
     */
    public static double calculateFutureValue(double presentValue, double rate, int years) {
        // Base Case: if no more years, return the present value
        if (years == 0) {
            return presentValue;
        }

        // Recursive Case: calculate previous year's value, then apply growth
        return calculateFutureValue(presentValue, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {
        double presentValue = 10000;       // Initial investment
        double annualGrowthRate = 0.05;    // 5% growth per year
        int years = 5;                     // Forecast period: 5 years

        double futureValue = calculateFutureValue(presentValue, annualGrowthRate, years);

        System.out.printf("Future Value after %d years: %.2f\n", years, futureValue);
    }

    /*
     * -----------------------------------------------
     * 4. Analysis:
     * -----------------------------------------------
     * Time Complexity:
     * - O(n), where n is the number of years.
     * - Each recursive call reduces the problem by 1 year.
     *
     * Space Complexity:
     * - O(n) due to the call stack in recursion.
     * - Not memory-efficient for large values of 'n'.
     *
     * Optimization Techniques:
     * 1. Use Iteration instead of Recursion:
     *    Avoids call stack overhead, runs in O(n) time and O(1) space.
     *
     *    Example:
     *    double value = presentValue;
     *    for (int i = 0; i < years; i++) {
     *        value *= (1 + rate);
     *    }
     *    return value;
     *
     * 2. Memoization:
     *    Cache already-computed results to avoid redundant work (not critical here,
     *    since each year depends only on the previous year).
     */
}
