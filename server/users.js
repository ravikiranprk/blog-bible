"use server";

import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getUserById(id) {
    try {
        const user = await db.select().from(users).where(eq(users.id, id));
        return user;
    } catch (error) {
        console.log(error);
        return { error: "Failed to get user by id" }
    }
}

export async function getUserByEmail(email) {
    try {
        const user = await db.select().from(users).where(eq(users.email, email));
        return user;
    } catch (error) {
        console.log(error);
        return { error: "Failed to find a user with this email!" }
    }
}

export async function createUser(user) {
    try {
        const { email, password } = await user;
        const newUser = await db.insert(users).values({ email, password });
        return { message: "User created successfully!" };
    } catch (error) {
        console.log(error);
        return { error: "Failed to create a new user" }
    }
}
