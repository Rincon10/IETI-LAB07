package edu.eci.ieti.taskapp.service;

import edu.eci.ieti.taskapp.data.Task;

import java.util.List;

/**
 * @author Iván Camilo Rincón Saavedra
 * @version 1.0 1/31/2022
 * @project taskapp
 */
public interface TaskService {
    Task create(Task task) throws TaskServiceException;

    Task findById(String id) throws TaskServiceException;

    List<Task> getAll() throws TaskServiceException;

    List<Task> getTasksByUserId(String userId) throws TaskServiceException;

    boolean deleteById(String id) throws TaskServiceException;

    Task update(Task task, String id) throws TaskServiceException;
}
