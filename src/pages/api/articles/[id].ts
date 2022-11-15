import { NextApiRequest, NextApiResponse } from 'next/types';
import { Article } from '../../../types/Article';
import { connectToDatabase } from '../../../utils/database';
import { ObjectId } from 'mongodb';

type ResponseData = Article;

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { id } = req.query;
  if(!id || !ObjectId.isValid(id as any)) return res.status(404);
  else {
    const { db } = await connectToDatabase();
    const article = (await db.collection('articles').findOne({ _id: new ObjectId(id as any) })) as unknown as Article;
    res.status(200).send(article);
  }
}
