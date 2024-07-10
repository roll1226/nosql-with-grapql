import UsersResolver from "./users";

const usersResolver = new UsersResolver();

const resolvers = {
  Query: {
    getUser: async (_: unknown, { id }: { id: string }) => {
      return usersResolver.getUser(id);
    },

    getUsers: async () => {
      return usersResolver.getUsers();
    },
  },
  Mutation: {
    addUser: async (
      _: unknown,
      { name, email }: { name: string; email: string }
    ) => {
      return usersResolver.addUser(name, email);
    },
    updateUser: async (
      _: unknown,
      { id, name, email }: { id: string; name?: string; email?: string }
    ) => {
      return usersResolver.updateUser(id, name, email);
    },
    deleteUser: async (_: unknown, { id }: { id: string }) => {
      return usersResolver.deleteUser(id);
    },
  },
};

export default resolvers;
