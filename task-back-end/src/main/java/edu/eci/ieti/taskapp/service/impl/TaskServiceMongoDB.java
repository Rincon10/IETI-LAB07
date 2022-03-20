package edu.eci.ieti.taskapp.service.impl;

import edu.eci.ieti.taskapp.data.Task;
import edu.eci.ieti.taskapp.repository.TaskRepository;
import edu.eci.ieti.taskapp.service.TaskService;
import edu.eci.ieti.taskapp.service.TaskServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @author Iván Camilo Rincón Saavedra
 * @version 1.0 3/8/2022
 * @project taskapp
 */
@Service
public class TaskServiceMongoDB implements TaskService {
    private final TaskRepository taskRepository;

    public TaskServiceMongoDB(@Autowired TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Task create(Task task) throws TaskServiceException {
        taskRepository.save(task);
        return task;
    }

    @Override
    public Task findById(String id) throws TaskServiceException {
        Optional<Task> optionalTask = taskRepository.findById(id);
        return optionalTask.get();
    }

    @Override
    public List<Task> getAll() throws TaskServiceException {
        return taskRepository.findAll();
    }

    @Override
    public List<Task> getTasksByUserId(String userId) throws TaskServiceException {
        return taskRepository.getAllByAssignedTo(userId);
    }

    @Override
    public boolean deleteById(String id) throws TaskServiceException {
        boolean deleted = true;
        try {
            if (findById(id) == null) throw new Exception();
            taskRepository.deleteById(id);
        } catch (Exception exception) {
            deleted = false;
        }
        return deleted;
    }

    @Override
    public Task update(Task task, String id) throws TaskServiceException {
        Task t = findById(id);
        t.updateTask(task);
        return taskRepository.save(t);
    }
}
