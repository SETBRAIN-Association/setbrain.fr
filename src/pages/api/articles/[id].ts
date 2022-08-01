import { NextApiRequest, NextApiResponse } from 'next/types';
import { Article } from '../../../types/Article';
import { connectToDatabase } from '../../../../utils/database';

type ResponseData = {
  article: Article;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { id } = req.query;
  const { db } = await connectToDatabase();
  const article = await db.collection('articles').find({ _id: id });
}
