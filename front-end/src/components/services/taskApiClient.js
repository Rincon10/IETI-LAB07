export const taskApiClient = (() => {
    const URL = 'https://task-planer-back-end.herokuapp.com';

    const myHeader = new Headers();
    myHeader.set('Content-Type', 'application/json');
    myHeader.set('Access-Control-Allow-Origin', '*');

    return {
        postTask: async taskDTO => {
            const response = await fetch(`${URL}/api/v1/task`, {
                method: 'POST',
                headers: myHeader,
                body: JSON.stringify(taskDTO),
            });
            if (!response.ok) throw new Error('The response failed');
            return response.json();
        },

        getTaskByUser: async idUser => {
            const response = await fetch(`${URL}/api/v1/task`, {
                method: 'GET',
                headers: myHeader,
            });
            if (!response.ok) throw new Error('The response failed');
            return response.json();
        },
    };
})();
