let NeDB = require('nedb');

let db = new NeDB({
    filename: 'users.db',
    autoload: true
})



module.exports = app=>{
    
    app.get('/users' ,(req,res)=>{

        res.statusCode = 200;
        res.setHeader ('Content-Type', 'application/json');
        res.json({
            
            users:[{
                id: 1,
                name:'Andrey',
                email:'andrey.barbosa@ibm.com'
            }]
    
        });
    
    });
    
    
    app.post('/users' ,(req,res)=>{
                   
        db.insert(req.body, (err,user)=>{
            if(err){
                console.log(`Error ${err}`);
                res.status(400).json({
                    error: err
                });

            }else{
                res.status(200).json(user);
            }
        })
    
    });    

};