function solve(worker){
    if (worker.dizziness) {
        let {weight, experience, levelOfHydrated} = worker;
        levelOfHydrated += weight * 0.1 * experience;
        worker = {...worker, levelOfHydrated, dizziness: false};
    }
    return worker;
}

let res = solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false });

console.log(res);