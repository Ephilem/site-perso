import { sqliteTable, integer, text, uniqueIndex, primaryKey } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

export const project = sqliteTable("project", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    description: text("description"),
    articleId: integer("article_id").references(() => article.id),
});

export const projectRelations = relations(project, ({ one }) => ({
    article: one(article, {
        fields: [project.articleId],
        references: [article.id],
    }),
}));

export const session = sqliteTable("session", {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => user.id),
    expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull(),
});

export const sessionRelations = relations(session, ({ one }) => ({
    user: one(user, {
        fields: [session.userId],
        references: [user.id],
    }),
}));

export const tag = sqliteTable("tag", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name").notNull().unique(),
    color: text("color"),
});

export const user = sqliteTable("user", {
    id: text("id").primaryKey(),
    age: integer("age"),
    username: text("username").notNull().unique(),
    passwordHash: text("password_hash").notNull(),
});

export const userRelations = relations(user, ({ many }) => ({
    sessions: many(session),
}));

export const article = sqliteTable("article", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    title: text("title").notNull(),
    content: text("content").notNull(),
    public: integer("public", { mode: 'boolean' }).default(false),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().default(new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().default(new Date()),
});

export const articleRelations = relations(article, ({ many }) => ({
    projects: many(project),
}));

export type Session = typeof session.$inferSelect;
export type User = typeof user.$inferSelect;
export type Project = typeof project.$inferSelect;
export type Tag = typeof tag.$inferSelect;
export type Article = typeof article.$inferSelect;