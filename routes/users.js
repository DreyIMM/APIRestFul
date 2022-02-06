let NeDB = require('nedb');

let db = new NeDB({
    filename: 'users.db',
    autoload: true
})



module.exports = app=>{
    let route = app.route('/users')

    route.get((req,res)=>{

        db.find({}).sort({name:1}).exec((err,users)=>{
            if(err){
               app.utils.error.send(err,req,res); 
            }else{
                res.statusCode = 200;
                res.setHeader ('Content-Type', 'application/json');
                res.json({
                
                users:users
    
        });
            }
        })

        
    
    });
    
    
    route.post((req,res)=>{
                   
        db.insert(req.body, (err,user)=>{
            if(err){
                app.utils.error.send(err,req,res); 

            }else{
                res.status(200).json(user);
            }
        })
    
    });   
    
    let routeId = app.route('/users/:id')

    routeId.get((req,res)=>{

        db.findOne({_id:req.params.id}).exec((err,user)=>{
            if(err){
                app.utils.error.send(err,req,res)
            }else{
                res.status(200).json(user)
                
            }
        });


    })

    
    routeId.put((req, res)=> {
        // Filtro (_id) o que será enviado é o parans
        //Passa os dados pelo body
        // retornar o erro
        db.update({ _id: req.params.id}, req.body, err=> {
           
            if(err){
                app.utils.error.send(err,req,res)
            }else{
                // para juntar dois objetos Utilizado o Object.assing()  
                res.status(200).json(Object.assign(req.params, req.body))
                
            }

        });          
        
    });
};