import app from './app'  

const PORT = process.env.PORT

app.listen(PORT, ()=> {
    console.log('Service running on port ', PORT)
})

// process.once('SIGUSR2', function () {
//     gracefulShutdown(function () {
//       process.kill(process.pid, 'SIGUSR2');
//     });
//   });
