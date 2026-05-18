import { Request, Response } from "express";
import { nanoid } from "nanoid";

const urlStore: any[] = [];

export const shortenUrl = (req: Request, res: Response) => {
  const { originalUrl } = req.body;

  const shortCode = nanoid(6);

  urlStore.push({
    originalUrl,
    shortCode,
    clicks: 0,
  });

  res.json({
    shortUrl: `http://localhost:5000/${shortCode}`,
  });
};

export const redirectUrl = (req: Request, res: Response) => {
  const { shortCode } = req.params;

  const item = urlStore.find((u) => u.shortCode === shortCode);

  if (!item) {
    return res.status(404).json({ message: "URL not found" });
  }

  item.clicks++;

  res.redirect(item.originalUrl);
};