export const typeDefs = [`
      type Post {
        _id: String
        title: String
        content: String
        comments: [Comment]
      }

      type Comment {
        _id: String
        postId: String
        content: String
        post: Post
      }

      type Query {
        post(_id: String): Post
        posts: [Post]
        comments: [Comment]
        comment(_id: String): Comment
      }

      type Mutation {
        createPost(title: String, content: String): Post
        createComment(postId: String, content: String): Comment
        deletePost(postId: String): Post
      }

      schema {
        query: Query
        mutation: Mutation
      }
    `];
