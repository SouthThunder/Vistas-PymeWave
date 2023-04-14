const controller= {}; //objeto controller

controller.register = (req, res)=>{
    const data = req.body;
    const insertQuery='INSERT INTO empresa (nombre_empresa, correo, dir_fisica, estado_suscripcion, telefono, contraseña, rut) VALUES (?,?,?,?,?,?,?)';
        req.getConnection((err,conn) =>{
            conn.query(insertQuery, [data.nombre, data.correo, data.ubicacion, 0, data.telefono, hash(data.contraseña), 1], function(err, data){
                if(err)
                    console.log("An error has occured");
                else{
                    console.log("Entered data");
                }
            });
        }) 
}

controller.search =(req, res)=>{
    const data = req.body;
    const selectQuery='SELECT * FROM categoria';
    req.getConnection((err,conn)=>{
        conn.query(selectQueryfunction, function(err, data){
            
        });
    })
}

module.exports = controller;