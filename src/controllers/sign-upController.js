const controller= {}; //objeto controller

controller.access=(req,res)=>{
    res.render('signUp');
}


controller.list =(req, res) =>{ //método del objeto controller
    req.getConnection((err, conn)=>{
        conn.query('SELECT * from usuario', (err, rows) =>{
            if(err){
                next(err); // se maneja de manera mucho más profesional, manejo de errores con next
                //res.json(err); // se manda el error a la página 
            }
            console.log(rows[0]);
            res.render('home',{
                data: rows,
            });
        });
    });
};

module.exports = controller;