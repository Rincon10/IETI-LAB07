import { taskApiClient } from 'components/services/taskApiClient';
import { useEffect, useState } from 'react';

const useHomePage = () => {
    const [tasks, setTasks] = useState([]);
    const [todo, setTodo] = useState([]);
    const [doing, setDoing] = useState([]);
    const [done, setDone] = useState([]);

    const updateValues = (status, val) => {
        if (status === 'TODO') setTodo(val);
        else if (status === 'DOING') setDoing(val);
        else {
            setDone(val);
        }
    };

    useEffect(() => {
        taskApiClient.getTaskByUser().then(listOfTasks => {
            const statusArray = ['TODO', 'DOING', 'DONE'];

            setTasks(listOfTasks);
            statusArray.forEach(st => {
                const val = listOfTasks.filter(stat => stat.status === st);
                updateValues(st, val);
            });
        });
    }, []);

    return { tasks, todo, doing, done };
};

export default useHomePage;
