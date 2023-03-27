// Need to use the React-specific entry point to allow generating React hooks
import { User } from "@/types/User";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    createUser: builder.mutation<User, User>({
      query: (user) => {
        return {
          url: `users`,
          method: "POST",
          body: user,
        };
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useCreateUserMutation } = pokemonApi;
