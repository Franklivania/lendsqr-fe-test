"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { User } from "@/types";

const fetchApiData = async (): Promise<User[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_URL;
  if (!apiUrl) {
    throw new Error("API URL is not defined in the environment variables.");
  }
  const { data } = await axios.get<User[]>(apiUrl);
  return data;
}

export const useApiData = (id:string) => {
  return useQuery<User[], Error>({
    queryKey: ['userData',  id],
    queryFn: () => fetchApiData(),
  });
}