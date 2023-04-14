const controller={};

controller.render =(req, res)=>{
    res.render('signIn');
}

controller.access =(req, res)=>{
    const data=req.body;
    req.getConnection((err,conn)=>{
        conn.query('SELECT correo from usuario', (err,rows)=>{
            if(err)
                next(err);
            else{
                for(let i=0;i<rows.length;i++){
                    if(rows[i]==data.correo){
                        
                    }
                }
            }
            
        })
    })
}

module.exports=controller;