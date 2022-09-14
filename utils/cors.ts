import Cors from "cors";
import {NextApiRequest, NextApiResponse} from "next";

const corsFunc = Cors({
    methods: ['POST', 'GET'],
})

function cors(
    req: NextApiRequest,
    res: NextApiResponse
) {
    return new Promise((resolve, reject) => {
        corsFunc(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result)
            }
            return resolve(result)
        })
    })
}

export default cors