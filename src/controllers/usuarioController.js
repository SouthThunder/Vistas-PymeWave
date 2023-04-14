const {createHash} =require('crypto');
const controller= {}; //objeto controller

controller.access=(req,res)=>{
    res.render('usuario');
}

function hash(string){
    return createHash('sha256').update(string).digest('hex');
}

function query(statement){

}

function verify_user(data, req){
    var selectQuery='SELECT correo FROM usuario';
    var accountAvailable = true; // Variable booleana para almacenar el resultado
    req.getConnection((err, conn)=>{
        if(err){
            console.log("There has been an error in DB\n "+ err.message);
        }else{
            conn.query(selectQuery, (err, rows)=>{
                if(err){
                    console.log("There has been an error in DB\n "+ err.message);
                }
                else{
                    for(let i=0;i<rows.length;i++){
                        if(data==rows[i].correo){
                            console.log("Account not available");
                            accountAvailable = false; // Actualizar el resultado
                            break; // Salir del ciclo cuando se encuentre una coincidencia
                        }
                    }
                    if(accountAvailable){
                        console.log("Account available");
                    }
                    return accountAvailable; // Retornar el resultado después del ciclo
                }
           });
        }
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