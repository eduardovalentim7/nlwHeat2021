import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


interface IPayload{
    sub: string;
}


export function ensureAuthenticated(request: Request, response: Response, Next: NextFunction) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).json({
            errorCode: "token.invalid",
        });
    }

    //bearer 857445468sfds874654
    //[bearer]
    //[857445468sfds874654]
    const [, token] = authToken.split(" ");


try {
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayload
        request.user_id = sub;
        return Next();

    } catch (error) {
        return response.status(401).json({erroCode:"token.expired"})

    }
}