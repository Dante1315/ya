const controller = {};

controller.list = (req, res) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM funko', (err, funko) => {
            if (err){
                res.json(err);
            }
            res.render('funko', {
                data: funko
            });
        });
    });
};

controller.save = (req, res) => {
    const data= req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO funko set ?', [data], (err, funkos) =>{
            res.redirect('/')
        })
    })
};

controller.delete = (req, res) => {
    const id_f=req.params.id_f;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM funko WHERE id_f=?',[id_f],(err,rows)=>{
            res.redirect('/');
        });
    });

};

controller.listt = (req, res) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM juego', (err, juego) => {
            if (err){
                res.json(err);
            }
            res.render('funko', {
                data: juego
            });
        });
    });
};

controller.ssave = (req, res) => {
    const data= req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO juego set ?', [data], (err, funkos) =>{
            res.redirect('/')
        })
    })
};

module.exports = controller;

