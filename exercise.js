const persons = [
    {
        id: 1,
        firstName: 'Mario',
        lastName: 'Rossi',
        age: 25
    },
    {
        id: 2,
        firstName: 'Maria',
        lastName: 'Verdi',
        age: 32
    },
    {
        id: 3,
        firstName: 'Giovanni',
        lastName: 'Rossi',
        age: 35
    }
];

const jobs = [
    {
        id: 1,
        jobTitle: 'CEO'
    },
    {
        id: 2,
        jobTitle: 'Project Manager'
    },
    {
        id: 3,
        jobTitle: 'Developer'
    }
];

function fetchPersonById(id) {
    return promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            const person = persons.find(person => person.id == id);
            if (person) {
                return resolve(person)
            } else {
                return reject(`No person with id ${id}`)
            }
        }, 3000)
    })
};
function fetchJobById(id) {
    return promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            const job = jobs.find(job => job.id == id);
            if (job) {
                return resolve(job)
            } else {
                return reject(`No job with id ${id}`)
            }
        }, 2000)
    })
}

Promise.all([fetchJobById(1), fetchPersonById(1)]).then(data=> console.log(data))
.catch(err=> console.error(err))

async function getData() {
    try {
        const job = await [fetchJobById(1), fetchJobById(1)]
        // const id = fetchPersonById(1)
        console.log(job);
    } catch (error) {
        console.error(error);
    }
}

getData()