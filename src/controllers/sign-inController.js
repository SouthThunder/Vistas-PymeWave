const controller={};

controller.render =(req, res)=>{
    res.render('signIn');
}



controller.access =(req, res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * from usuario', (err,rows)=>{
            if(err)
                next(err);
            
        })
    })
}

module.exports=controller;