package edu.eci.ieti.taskapp.dto;

import edu.eci.ieti.taskapp.data.Status;

/**
 * @author Iván Camilo Rincón Saavedra
 * @version 1.0 1/31/2022
 * @project taskapp
 */
public class TaskDto {
    private String name;
    private String description;
    private Status status;
    private String assignedTo;
    private String dueDate;

    public TaskDto(){}

    public TaskDto(String name, String description, Status status, String assignedTo, String dueDate){
         this.name = name;
         this.description = description;
         this.status = status;
         this.assignedTo = assignedTo;
         this.dueDate = dueDate;
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
}
