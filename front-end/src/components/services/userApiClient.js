export const userApiclient = (() => {
    const URL = 'https://planner-back-end.herokuapp.com';
    /* const URL = 'http://localhost:8080'; */
    const myHeader = new Headers();
    myHeader.set('Content-Type', 'application/json');
    myHeader.set('Access-Control-Allow-Origin', '*');

    return {
        getToken: async loginDTO => {
            const response = await fetch(`${URL}/api/v1/auth`, {
                method: 'POST',
                headers: myHeader,
                body: JSON.stringify(loginDTO),
            });
            if (!response.ok) throw new Error('The response failed');
            return response.json();
        },
    };
})();
