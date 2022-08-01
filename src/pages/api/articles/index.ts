import { NextApiRequest, NextApiResponse } from 'next/types';
import { connectToDatabase } from '../../../../utils/database';
import { Article } from '../../../types/Article';

type ResponseData = {
  articles: Article[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { db } = await connectToDatabase();

  const articles = (await db
    .collection('articles')
    .find({})
    .sort({ published: -1 })
    .toArray()) as unknown as Article[];

  res.status(200).json({ articles: articles });
}
