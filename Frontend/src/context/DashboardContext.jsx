import { createContext, useState } from "react";

export const DashboardContext = createContext(null);

export const DashboardProvider = ({ children }) => {
 
  return (
    <DashboardContext.Provider value={{  }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;