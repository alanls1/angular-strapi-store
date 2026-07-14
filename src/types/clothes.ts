export interface clothesImage {
  url: string;
}

export interface clothes {
  createdAt: Date;
  documentId: string;
  id: number;
  name: string;
  price: number;
  tag?: string;
  category?: string;
  image?: clothesImage | null;
  publishedAt: Date;
  updatedAt: Date;
}
