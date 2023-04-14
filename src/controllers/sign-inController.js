const {createHash} =require('crypto');
const controller={};

controller.render =(req, res)=>{
    res.render('signIn');
}

function hash(string){
    return createHash('sha256').update(string).digest('hex');
}

controller.access =(req, res)=>{
    const data=req.body;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * from usuario', (err,rows)=>{
            if(err)
                next(err);
            else{
                for(let i=0;i<rows.length;i++){

                    if(rows[i].correo==data.correo){
                        if(rows[i].contraseña==hash(data.contraseña)){
                            console.log("Bienvenido a su cuenta");
                            res.render('initialhome');
                        }else{
                            console.log("Usuario o contraseña incorrectas");
                        }
                    }else{
                    }
                }
            }
            
        })
    })
}

module.exports=controller;