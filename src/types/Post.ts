export interface Post {
  id: string;
  createdAt: Date;
  createdBy: string; //userId
  feeling: number;
  comment?: string;
  answer: string;
}
