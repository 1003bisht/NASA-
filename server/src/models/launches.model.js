const launches = new Map();
let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2024'),
    target: 'Kepler-442 b',
    customers: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);
function existsLaunchwithid(Launchid){
    return launches.has(Launchid);
}

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber++; // Increment the flight number
    // Create a new object for the new launch
    const newLaunch = Object.assign({}, launch, {
        success: true,
        upcoming: true,
        customers: ['Zero to Mastery', 'NASA'],
        flightNumber: latestFlightNumber,
    });

    launches.set(latestFlightNumber, newLaunch); // Add the new launch to the map
}
function abortLaunchById(Launchid){
         const aborted=launches.get(Launchid);
         aborted.upcoming=false;
         aborted.success=false;
         return aborted;
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchwithid,
    abortLaunchById,
};
