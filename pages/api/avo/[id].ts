
import DB from '@database'
import { NextApiRequest, NextApiResponse } from 'next'

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()

  const idOfAvo = request.query.id

  const avocado = await db.getById(idOfAvo as string)
/* 
  response.statusCode = 200
  response.setHeader('Content-type', 'application/json')
  response.end(JSON.stringify({data: avocado})) */

  response.status(200).json({
    data: avocado
  })
}

export default allAvos
