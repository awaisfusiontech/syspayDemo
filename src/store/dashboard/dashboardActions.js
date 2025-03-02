import axiosInstance from "../../config/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/apiConfig";

// Create an async thunk for fetching charts data
export const getChartsData = createAsyncThunk(
  "dashboard/getChartsData",
  async () => {
    try {
      const response = await axiosInstance.get(endpoints.dashboards.getCharts);
      return response;
    } catch (error) {
      throw error; // Throw the error to trigger the rejected case
    }
  }
);

// Create an async thunk for fetching sales data
export const getSalesData = createAsyncThunk(
  "dashboard/getSalesData",
  async () => {
    try {
      const response = await axiosInstance.get(
        endpoints.dashboards.getSaleData
      );
      return response;
    } catch (error) {
      throw error; // Throw the error to trigger the rejected case
    }
  }
);
