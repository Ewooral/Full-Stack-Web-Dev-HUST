import express from 'express'
import path from 'path'
import url from 'url'
import employees from '../../data/employees.json' assert { type: "json" }

const router = express.Router()


// filename and dirname
let filename = url.fileURLToPath(import.meta.url);
let __dirname = path.dirname(filename);

const data = {}

data.employees = employees
console.log(data.employees)

router.route('/')
    .get((req, res) => {
        res.json(data.employees)
    })

    .post((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        })
    })

    .put((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        })
    })

    .delete((req, res) => {
        res.json({ "id": req.body.id })
    })

router.route('/:id')
    .get((req, res) => {
        res.json({ "id": req.params.id })
    })

export default router