package edu.eci.ieti.taskapp.data;

import java.util.UUID;

/**
 * @author Iván Camilo Rincón Saavedra
 * @version 1.0 1/31/2022
 * @project taskapp
 */
public class Task {
    private String id;
    private String name;
    private String description;
    private Status status;
    private String assignedTo;
    private String dueDate;
    private String created;

    public Task() {
        this.id = UUID.randomUUID().toString();
        this.created = java.time.LocalDate.now().toString();
    }

    public Task(String name, String description, Status status, String assignedTo, String dueDate) {
        this();
        this.name = name;
        this.description = description;
        this.status = status;
        this.assignedTo = assignedTo;
        this.dueDate = dueDate;
    }

    public Task(String id, String name, String description, Status status, String assignedTo, String dueDate) {
        this(name, description, status, assignedTo, dueDate);
        this.id = id;
    }

    public void updateTask(Task task) {
        this.id = task.getId();
        this.name = task.getName();
        this.description = task.getDescription();
        this.status = task.getStatus();
        this.assignedTo = task.getAssignedTo();
        this.dueDate = task.getDueDate();
        this.created = task.getCreated();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getAssignedTo() {
        return assignedTo;
    }

    public void setAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public String getCreated() {
        return created;
    }

    public void setCreated(String created) {
        this.created = created;
    }
}
