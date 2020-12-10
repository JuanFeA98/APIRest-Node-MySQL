const express = require('express')
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM series', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});

router.get('/:id', (req, res)=>{
    const { id } =req.params;
    mysqlConnection.query('SELECT * FROM series WHERE id= ?', [id], (err, rows, fields) =>{
        if(!err){
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    })
});

router.post('/', (req, res)=>{
    const { id, name, seasons } = req.body;
    
    const query = `       
        CALL seriesAdd(?, ?, ?);
    `
    mysqlConnection.query(query, [id, name, seasons], (err, rows, fields)=>{
        if(!err){
            res.json({Status: 'Serie saved'});
        } else {
            console.log(err);
        }
    })
});

router.put('/:id', (req, res)=>{
    const { name, seasons } = req.body;
    const { id } = req.params;

    const query = `
        CALL seriesAdd(?, ?, ?)
    `
    mysqlConnection.query(query, [id, name, seasons], (err, rows, fields) =>{
        if(!err){
            res.json({Status: 'Serie updated'});
        } else {
            console.log(err);
        }
    })

});


router.delete('/:id', (req, res)=>{
    const { id } = req.params;

    mysqlConnection.query('DELETE FROM series WHERE id = ?', [id], (err, rows, fields)=>{
        if(!err){
            res.json({Status: 'Serie deleted'});
        } else {
            console.log(err);
        }
    })
})

module.exports = router