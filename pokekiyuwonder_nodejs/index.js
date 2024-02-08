const app = require('./routes/index');

const port = process.env.PORT || 3000;

startServer()

// Cette fonction permet de démarrer le serveur
function startServer() {
  app.listen(port, () => {
    console.info(`Example app listening on port ${port}`)
  })
}