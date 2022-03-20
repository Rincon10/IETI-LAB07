package edu.eci.ieti.taskapp.controller;

import edu.eci.ieti.taskapp.data.Task;
import edu.eci.ieti.taskapp.dto.TaskDto;
import edu.eci.ieti.taskapp.service.TaskService;
import edu.eci.ieti.taskapp.service.TaskServiceException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * @author Iván Camilo Rincón Saavedra
 * @version 1.0 1/31/2022
 * @project taskapp
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/api/v1/task")
public class TaskController {
    private final TaskService taskService;

    public TaskController(@Autowired TaskService taskService) {
        this.taskService = taskService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Task>> getAll() {
        try {
            return new ResponseEntity<>(taskService.getAll(), HttpStatus.ACCEPTED);
        } catch (TaskServiceException ex) {
            Logger.getLogger(TaskController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>(new ArrayList<>(), HttpStatus.FORBIDDEN);
        }
    }

    @RequestMapping(path = "/assignedTo/{userId}", method = RequestMethod.GET)
    public ResponseEntity<?> getTasksByUserId(@PathVariable String userId) {
        try {
            return new ResponseEntity<>(taskService.getTasksByUserId(userId), HttpStatus.ACCEPTED);
        } catch (TaskServiceException ex) {
            Logger.getLogger(TaskController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> findById(@PathVariable String id) {
        try {
            return new ResponseEntity<>(taskService.findById(id), HttpStatus.ACCEPTED);
        } catch (TaskServiceException ex) {
            Logger.getLogger(TaskController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
        }
    }


    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Task> create(@RequestBody TaskDto taskDto) {
        ModelMapper modelMapper = new ModelMapper();
        try {
            Task task = modelMapper.map(taskDto, Task.class);
            taskService.create(task);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (TaskServiceException ex) {
            Logger.getLogger(TaskController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Task> update(@RequestBody TaskDto taskDto, @PathVariable String id) {
        ModelMapper modelMapper = new ModelMapper();
        try {
            Task task = modelMapper.map(taskDto, Task.class);
            taskService.update(task, id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (TaskServiceException ex) {
            Logger.getLogger(TaskController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable String id) {
        try {
            taskService.deleteById(id);
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (TaskServiceException ex) {
            Logger.getLogger(TaskController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.FORBIDDEN);
        }
    }
}