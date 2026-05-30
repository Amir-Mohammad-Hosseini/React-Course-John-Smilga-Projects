import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sidebarCtxValue = {
    isSidebarOpen,
    isModalOpen,
    openSidebar,
    closeSidebar,
    openModal,
    closeModal,
  };
  return (
    <SidebarContext.Provider value={sidebarCtxValue}>
      {children}
    </SidebarContext.Provider>
  );
};
export default SidebarProvider;

export const useGlobalContext = () => {
    return useContext(SidebarContext)
}
