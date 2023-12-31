import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../models/user";
import { UserRepository } from "../services/user.repository";

export const registerUserAsync = createAsyncThunk<
  User,
  { repo: UserRepository; user: Partial<User> }
>("user/register", async ({ repo, user }) => {
  console.log("repository called");
  return await repo.register(user);
});

export const loginUserAsync = createAsyncThunk<
  Partial<User>,
  { repo: UserRepository; user: Partial<User> }
>("user/login", async ({ repo, user }) => {
  const result = await repo.login(user);
  return result;
});
