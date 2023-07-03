import { Book } from "../models/book";
import { ApiRepository } from "./api.repository";

type ApiResponse = {
  items: Book[];
};
export class BookRepository extends ApiRepository<Book> {
  constructor(public url: string, public token: string) {
    super(url, token);
  }

  async getAll(): Promise<Book[]> {
    const response = await fetch(`${this.url}Book`);
    console.log(response);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }

    const data = response.json() as Promise<ApiResponse>;
    return (await data).items;
  }

  async get(id: Book["id"]): Promise<Book> {
    const response = await fetch(this.url + (id as string));
    return response.json() as Promise<Book>;
  }

  async create(item: Partial<Book>): Promise<Book> {
    const response = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        Authorization: "Bearer " + this.token,
        "Content-Type": "application/json",
      },
    });
    return response.json() as Promise<Book>;
  }

  async update(id: Book["id"], item: Partial<Book>): Promise<Book> {
    const response = await fetch(this.url + (id as string), {
      method: "PATCH",
      body: JSON.stringify(item),
      headers: {
        Authorization: "Bearer " + this.token,
        "Content-Type": "application/json",
      },
    });
    return response.json() as Promise<Book>;
  }

  async delete(id: Book["id"]): Promise<boolean> {
    const response = await fetch(this.url + (id as string), {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    return response.ok;
  }
}