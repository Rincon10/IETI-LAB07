package edu.eci.ieti.taskapp.repository;

import edu.eci.ieti.taskapp.data.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Iván Camilo Rincón Saavedra
 * @version 1.0 3/8/2022
 * @project taskapp
 */
@Repository
public interface TaskRepository extends MongoRepository<Task, String> {
    public List<Task> getAllByAssignedTo(String userId);
}
