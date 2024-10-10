const http=require('http');
const app=require('./app');
const {loadPlanetsdata}=require('./models/planets.model');
const PORT=process.env.PORT || 8000;
const server=http.createServer(app);
async function startServer() {
await loadPlanetsdata();
server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}...`);
})
};
startServer();
