import { NextApiRequest, NextApiResponse } from 'next';

type Comment = {
  id: number;
  name: string;
  text: string;
};

let comments: Comment[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(comments);
  } else if (req.method === 'POST') {
    const { name, text } = req.body;
    if (name && text) {
      const newComment: Comment = { id: Date.now(), name, text };
      comments.push(newComment);
      res.status(201).json(newComment);
    } else {
      res.status(400).json({ error: 'Name and text are required.' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
