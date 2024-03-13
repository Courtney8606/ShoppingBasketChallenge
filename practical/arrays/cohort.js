const cohort = {
    name: 'May2022',
    id: 1234,
    students: ['Tim', 'Sarah', 'Jess'] 
};

const cohortdetails = (cohort) => {
    console.log(cohort.id + " - " + cohort.name + " - " + cohort.students.length + ' students in this cohort')
}

cohortdetails(cohort)