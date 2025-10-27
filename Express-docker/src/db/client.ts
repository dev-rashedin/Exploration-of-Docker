import { drizzle } from 'drizzle-orm/libsql';
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./dev.db');
export const client = drizzle(db);