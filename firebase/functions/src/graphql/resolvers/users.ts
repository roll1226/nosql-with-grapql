import { firestore } from "firebase-admin";

/**
 * user resolver
 *
 * @class UsersResolver
 */
class UsersResolver {
  private db: firestore.Firestore;

  /**
   * Creates an instance of UsersResolver.
   * @memberof UsersResolver
   */
  constructor() {
    this.db = firestore();
  }

  /**
   * Get Users
   *
   * @readonly
   * @memberof UsersResolver
   */
  async getUsers() {
    const userDoc = this.db.collection("users");
    const snapshot = await userDoc.get();
    const users: unknown[] = [];
    snapshot.forEach((doc) => {
      users.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return users;
  }

  /**
   * Get User
   *
   * @param {string} id
   * @memberof UsersResolver
   */
  async getUser(id: string) {
    const userRef = this.db.collection("users").doc(id);
    const doc = await userRef.get();
    if (!doc.exists) {
      throw new Error("User not found");
    }
    return { id: doc.id, ...doc.data() };
  }
}

export default UsersResolver;
