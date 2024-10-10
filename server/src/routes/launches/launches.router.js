const {httpAbortLaunch}=require ('../../../../client/src/hooks/requests');
const {
    httpgetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
    existsLaunchwithid,
}=require('./launches.controller')
const launchesRouter=express.Router();
launchesRouter.get('/',httpgetAllLaunches);
launchesRouter.post('/',httpAddNewLaunch);
launchesRouter.delete('/:id',httpAbortLaunch);
module.exports=launchesRouter;