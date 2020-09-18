import { NextApiRequest, NextApiResponse } from 'next';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res
    .status(500)
    .json({ statusCode: 500, data: { userOne: 'John', userTwo: 'Sara' } });
};

export default handler;
