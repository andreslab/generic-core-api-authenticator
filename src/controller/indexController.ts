import { Request, response, Response } from  'express';

class IndexController {

    public genrateToken (req:Request, res: Response){

        const data = req.body;
        console.log(data);

        res.writeHead(200, {"Content-Type": "application/json"});
        var json = JSON.stringify({
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
        });
        res.end(json);
    }

    public verifyToken (req:Request, res: Response){
        
        console.log(req.body.token);
        const token = req.body.token;
        const token_db =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
        

        res.writeHead(200, {"Content-Type": "application/json"});
        var json = JSON.stringify({
            verify: token_db == token ? true : false
        });
        res.end(json);

    }
}

export const indexController = new IndexController();