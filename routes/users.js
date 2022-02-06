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
    
        
              
        res.json(req.body);   
        
    
    });    

};