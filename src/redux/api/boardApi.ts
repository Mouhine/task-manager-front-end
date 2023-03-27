import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Board } from "@/types/Board";

export const boardApi = createApi({
  reducerPath: "boardApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  tagTypes: ["Boards"],
  endpoints: (builder) => ({
    getAll: builder.query<Board[], void>({
      query: () => `boards`,
      providesTags: [{ type: "Boards", id: "LIST" }],
    }),
    createBoard: builder.mutation<Board, Board>({
      query(board) {
        return {
          url: `Boards`,
          method: "POST",
          body: board,
        };
      },
      invalidatesTags: [{ type: "Boards", id: "LIST" }],
    }),
    updateBoard: builder.mutation<Board, Board>({
      query(todo) {
        return {
          url: `Boards/${todo.id}`,
          method: "PUT",
          body: todo,
        };
      },
      invalidatesTags: [{ type: "Boards", id: "LIST" }],
    }),
    deleteBoard: builder.mutation<Board, Board>({
      query(todo) {
        return {
          url: `Boards/${todo.id}`,
          method: "DELETE",
          body: todo,
        };
      },
      invalidatesTags: [{ type: "Boards", id: "LIST" }],
    }),
  }),
});

export const {
  useCreateBoardMutation,
  useDeleteBoardMutation,
  useGetAllQuery,
  useUpdateBoardMutation,
} = boardApi;
