
function httpgetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
    const launch = req.body; // Get the launch data from the request body
    if(!launch.mission|| !launch.rocket || !launch.launchDate || !launch.target){
        return res.status(400).json({
            error: 'Missing required launch property'
            
        });
    };
    launch.launchDate = new Date(launch.launchDate); // Ensure launchDate is a Date object
    if(isNaN(launch.launchDate)){
        return res.status(400).json({
            error:'Invalid date'
        });
    };


    addNewLaunch(launch); // Call the function to add the new launch
    return res.status(201).json(launch); // Return the newly created launch
}
function httpAbortLaunch(req,res){
    const Launchid=req.params.id;
    if(!existsLaunchwithid(Launchid)) {
        return res.status(404).json({
            error:'launch id not found'
        });
    }
        const aborted=abortLaunchById(Launchid)
        return res.status(200).json(aborted);
    }

module.exports = {
    httpgetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
};
