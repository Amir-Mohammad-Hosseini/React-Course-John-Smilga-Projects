import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId , setPageId] = useState(null)

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const sidebarCtxValue = {
    isSidebarOpen,
    pageId,
    setPageId,
    openSidebar,
    closeSidebar,
  };
  return (
    <SidebarContext.Provider value={sidebarCtxValue}>
      {children}
    </SidebarContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(SidebarContext);
};
