import { User as DBUser } from '@prisma/client';

export class User implements DBUser {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string;
  hashedPassword: string | null;
  role: string;
}
