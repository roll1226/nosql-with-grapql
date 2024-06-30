import {firestore} from "firebase-admin";

const db = firestore();

const resolvers = {
  Query: {
    getUser: async (_: unknown, { id }: { id: string }) => {
      const userRef = db.collection("users").doc(id);
      const doc = await userRef.get();
      if (!doc.exists) {
        throw new Error("User not found");
      }
      return { id: doc.id, ...doc.data() };
    },
  },
};

export default resolvers;
