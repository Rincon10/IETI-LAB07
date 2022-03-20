package edu.eci.ieti.taskapp.service;

/**
 * @author Iván Camilo Rincón Saavedra
 * @version 1.0 1/31/2022
 * @project taskapp
 */
public class TaskServiceException extends Exception {
    public static final String NOT_EXISTS = "The task doesn't exists";

    public TaskServiceException(String message, Exception exception) {
        super(message, exception);
    }

    public TaskServiceException() {
        super();
    }

    public TaskServiceException(String message) {
        super(message);
    }
}