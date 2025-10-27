import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { client } from './../../../dist/index';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name'),
});