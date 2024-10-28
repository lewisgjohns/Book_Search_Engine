const { User, Thought } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

//this is the resolvers.js file
const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.find().populate('thoughts');
            }
            throw AuthenticationError;
        }
    },
//this is the mutation to add a user to the database
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },

        //this is the mutation to save a book to the user's savedBooks array
        saveBook: async (parent, { bookInput }, context) => {
            if(context.user){

                const updatedUser = await User.findOneAndUpdate(
                    { _id: user._id },
                    { $addToSet: { savedBooks: body } },
                    { new: true, runValidators: true }
                  );
                    return updatedUser
            }
            throw AuthenticationError
        },

        //this is the mutation to remove a book from the user's saved
        deleteBook: async (parent, { bookId }, context) => {
            if(context.user){
                const updatedUser = await User.findOneAndUpdate(
                    { _id: user._id },
                    { $pull: { savedBooks: { bookId: params.bookId } } },
                    { new: true }
                  );
            }
            throw AuthenticationError
           
          
        },
    },
};

    module.exports = resolvers;
