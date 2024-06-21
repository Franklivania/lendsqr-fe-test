"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

interface ApiResponse<T> {
  data: T | undefined;
  error: Error | null;
  isLoading: boolean;
}

export const useAxiosData = <T>(url: string): ApiResponse<T> => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T>(url);
        setData(response.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export const fetchDataFromUrl = async <T>(url: string): Promise<T> => {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};