function queryDatabase(query) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = "query result";
            resolve(result);
        }, 1000);
    });
}

function queryDatabase1(query) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = "table not found";
            reject(result);
        }, 1000);
    });
}

async function handleDataQueriesWithPromiseAll() {
    try {
        const wrappedPromises = [
            queryDatabase("SELECT * FROM table1"),
            queryDatabase1("SELECT * FROM table2"),
            queryDatabase("SELECT * FROM table3")
        ];

        // Use Promise.all to wait for all wrapped promises to "resolve"
        const results = await Promise.allSettled(wrappedPromises);

        console.log('All database queries succeeded - ', results);

    } catch(error) {
        console.error('Promise.all rejected because one of the promises failed -', error);
    }
}

// Execute the async function
handleDataQueriesWithPromiseAll();