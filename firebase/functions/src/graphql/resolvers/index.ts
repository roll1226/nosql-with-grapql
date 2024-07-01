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
};

export default resolvers;
