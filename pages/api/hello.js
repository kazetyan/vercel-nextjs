// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {queryTest} from "../../utils/mongodb";
export default function handler(req, res) {
  queryTest().then(dbRes=>{
    res.status(200).json(dbRes)
  })
}
