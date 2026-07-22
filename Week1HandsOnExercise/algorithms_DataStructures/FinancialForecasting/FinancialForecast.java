public class FinancialForecast {
    // Recursive method to calculate future value
    public static double calculateFutureValue(double currentValue, double growthRate, int years) {
        // base case
        if (years == 0) {
            return currentValue;
        }

        // recursive case
        return calculateFutureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }
}