// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {queryTest} from "../../utils/mongodb";
import cors from '../../utils/cors'
import {HttpResponse} from "../../types/http";

export default async function handler(req, res) {

    await cors(req, res)

    queryTest().then(dbRes => {
        const resp = HttpResponse.success(dbRes)
        res.status(200).json(resp)
    })
}
