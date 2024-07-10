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

  /**
   * Add User
   *
   * @param {string} name
   * @param {string} email
   * @return {*}
   * @memberof UsersResolver
   */
  async addUser(name: string, email: string) {
    const userRef = this.db.collection("users").doc();
    const user = { name, email };
    await userRef.set(user);
    return { id: userRef.id, ...user };
  }

  /**
   * Update User
   *
   * @param {string} id
   * @param {string} [name]
   * @param {string} [email]
   * @return {*}
   * @memberof UsersResolver
   */
  async updateUser(id: string, name?: string, email?: string) {
    const userRef = this.db.collection("users").doc(id);
    const doc = await userRef.get();
    if (!doc.exists) {
      throw new Error("User not found");
    }
    const updatedData: { name?: string; email?: string } = {};
    if (name) updatedData.name = name;
    if (email) updatedData.email = email;
    await userRef.update(updatedData);
    return { id: doc.id, ...updatedData };
  }

  /**
   * Delete User
   *
   * @param {string} id
   * @return {*}
   * @memberof UsersResolver
   */
  async deleteUser(id: string) {
    const userRef = this.db.collection("users").doc(id);
    const doc = await userRef.get();
    if (!doc.exists) {
      throw new Error("User not found");
    }
    await userRef.delete();
    return true;
  }
}

export default UsersResolver;
