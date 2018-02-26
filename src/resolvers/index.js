import { MongoClient, ObjectId } from 'mongodb';

const MONGO_URL = 'mongodb://localhost:27017/blogddd';
const prepare = (item) => {
  item._id = item._id.toString();
  return item;
};

export const resolversSchema = async () => {
  try {
    const db = await MongoClient.connect(MONGO_URL);

    const Posts = db.collection('posts');
    const Comments = db.collection('comments');

    const resolvers = {
      Post: {
        comments: async ({ _id }) => {
          return (await Comments.find({ postId: _id }).toArray()).map(prepare);
        },
      },
      Comment: {
        post: async ({ postId }) => {
          return prepare(await Posts.findOne(ObjectId(postId)));
        },
      },
      Query: {
        post: async (root, { _id }) => {
          return prepare(await Posts.findOne(ObjectId(_id)));
        },
        posts: async () => {
          return (await Posts.find({}).toArray()).map(prepare);
        },
        comments: async () => {
          return (await Comments.find({}).toArray()).map(prepare);
        },
        comment: async (root, { _id }) => {
          return prepare(await Comments.findOne(ObjectId(_id)));
        },
      },
      Mutation: {
        /* eslint-disable no-unused-vars */
        createPost: async (root, args, context, info) => {
          const res = await Posts.insert(args);
          return prepare(await Posts.findOne({ _id: res.insertedIds[0] }));
        },
        createComment: async (root, args) => {
          const res = await Comments.insert(args);
          return prepare(await Comments.findOne({ _id: res.insertedIds[0] }));
        },
        deletePost: async (root, args) => {
          const res = await Posts.deleteOne({ _id: ObjectId(args.postId) });
          console.log('res', res.result);
          return res;
        },
      },
    };

    return resolvers;
  } catch (e) {
    /* eslint-disable no-console */
    console.log('Error while sending notification', e);
  }
};
