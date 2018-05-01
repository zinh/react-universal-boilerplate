import express from 'express'
import indexRouter from './routes/index'
import jsxEngine from 'express-react-views'

var app = express()

app.set('views', 'src/server/views')
app.engine('jsx', jsxEngine.createEngine());
app.set('view engine', 'jsx')

app.use('/', indexRouter)

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000")
})
