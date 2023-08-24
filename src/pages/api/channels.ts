import { NextApiRequest, NextApiResponse } from "next";

const ch = ["Off-Topic", "Random", "Townhall", "General", "Sports", "Cricket"];

export default function channels(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method?.toUpperCase()) {
    case "GET":
      return res.json(ch);
    case "POST": {
      const { channel } = req.body;
      ch.push(channel);
      res.json(ch);
    }
  }
}
