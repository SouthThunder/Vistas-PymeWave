const {createHash} =require('crypto');
const controller= {}; //objeto controller

controller.access=(req,res)=>{
    res.render('usuario');
}

function hash(string){
    return createHash('sha256').update(string).digest('hex');
}

function verify_user(data, req){
    var selectQuery='SELECT * FROM usuario WHERE correo=';
    req.getConnection((err, conn)=>{
        conn.query(selectQuery, [data.correo]), function(err){
            if(err){
                console.log("An error has occured\n" +err.message);
            }
        };
    })
}

controller.register = (req, res)=>{
    const data = req.body;
    const insertQuery='INSERT INTO usuario (nombre, apellidos, correo, telefono, username, contraseña) VALUES (?,?,?,?,?,?)';
        req.getConnection((err,conn) =>{
            conn.query(insertQuery, [data.nombre, data.apellidos, data.correo, data.telefono, data.user_name ,hash(data.contraseña)], function(err, data){
                if(err)
                    console.log("An error has occured");
                else{
                    console.log("Entered data");
                }
            });
        }) 
}

module.exports = controller;