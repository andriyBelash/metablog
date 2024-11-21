import type { ARTICLE_STATUS } from "./enum"

export interface IUser {
  id: number
  username: string
  email: string
  status: ARTICLE_STATUS,
  avatar_url: string,
  created_at: string
  updated_at: string
}