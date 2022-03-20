package edu.eci.ieti.taskapp.service.impl;

import edu.eci.ieti.taskapp.data.Task;
import edu.eci.ieti.taskapp.service.TaskService;
import edu.eci.ieti.taskapp.service.TaskServiceException;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author Iván Camilo Rincón Saavedra
 * @version 1.0 1/31/2022
 * @project taskapp
 */

public class TaskServiceHashMap implements TaskService {
    private final ConcurrentHashMap<String, Task> tasks = new ConcurrentHashMap<>();

    @Override
    public Task create(Task task) {
        tasks.putIfAbsent(task.getId(), task);
        return task;
    }

    @Override
    public Task findById(String id) throws TaskServiceException {
        Optional<Task> optionalTask = Optional.ofNullable(tasks.get(id));
        optionalTask.orElseThrow(() -> new TaskServiceException(TaskServiceException.NOT_EXISTS));
        return optionalTask.get();
    }

    @Override
    public List<Task> getAll() {
        List<Task> allTaks = new ArrayList<>();
        for (String key : tasks.keySet()) {
            allTaks.add(tasks.get(key));
        }
        return allTaks;
    }

    @Override
    public List<Task> getTasksByUserId(String userId) throws TaskServiceException {
        List<Task> allTaks = new ArrayList<>();
        for (String key : tasks.keySet()) {
            Task t = tasks.get(key);
            if (t.getAssignedTo().equals(userId)) {
                allTaks.add(t);
            }
        }
        return allTaks;
    }

    @Override
    public boolean deleteById(String id) throws TaskServiceException {
        if (!tasks.containsKey(id)) throw new TaskServiceException(TaskServiceException.NOT_EXISTS);
        tasks.remove(id);
        return false;
    }

    @Override
    public Task update(Task newTask, String id) throws TaskServiceException {
        if (!tasks.containsKey(id)) throw new TaskServiceException(TaskServiceException.NOT_EXISTS);
        return tasks.replace(id, newTask);
    }
}
