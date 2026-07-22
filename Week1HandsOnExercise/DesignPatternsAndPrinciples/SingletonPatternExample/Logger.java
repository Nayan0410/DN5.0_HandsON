//Logger class that follows the Singleton design pattern

public  class Logger {

    // Single instance
    private static Logger instance;

    // private contructor
    private Logger() {
        System.out.println("Logger Instance Created");
    }

    // public method to get instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // method to Log
    public void log(String message) {
        System.out.println(message);
    }
}