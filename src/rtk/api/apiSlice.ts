import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../../Components/URL";
import { ProfileData} from "../../type";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    // login
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    // logout
    logoutUser: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),

    // my Profile
    getProfileData: builder.query<ProfileData, void>({
      query: () => ({
        url: "/auth/myProfile",
        method: "GET",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),


// delete client
    deleteClient: builder.mutation<void, string>({
      query: (id) => ({
        url: `/client/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetProfileDataQuery,
 useDeleteClientMutation,

} = apiSlice;
