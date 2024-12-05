
function queryDatabase(query) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = "query result";
            resolve(result);
        }, 1000);
    });
}

function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const processedData = data.toUpperCase();
            resolve(processedData);
        }, 1000);
    });
}

function saveData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            resolve(success);
        }, 1000);
    });
}

// Async function to handle the entire workflow
async function handleData() {
    try {
        const result = await queryDatabase("SELECT * FROM table");
        const processedData = await processData(result);
        const success = await saveData(processedData);
        if (success) {
            console.log("Data saved successfully");
        }
    } catch (error) {
        console.error("An error occurred", error);
    }
}

// Execute the async function
handleData();