import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks";
import { createCart } from "../services";

const contextProvider = createContext();

export const useGlobal = () => {
  const context = useContext(contextProvider);
  if (!context) throw new Error("No hay proveedor de contexto.");
  return context;
};

const GlobalProvider = ({ children }) => {
  const [cartIdGlobal, setCartIdGlobal] = useState();
  const [cartIdStorage, setCartIdStorage] = useLocalStorage("cartIdGlobal", "");
  const [loadComponentIsVisible, setLoadComponentIsVisible] = useState(true);
  const [isGlobalProviderLoading, setGlobalProviderLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        showLoader();
        setGlobalProviderLoading(true);
        if (cartIdStorage) {
          changeCartIdGlobal(cartIdStorage);
          return;
        }
        const res = await createCart();
        changeCartIdGlobal(res.data.id);
      } catch (error) {
        console.error(error);
      } finally {
        setGlobalProviderLoading(false);
        hideLoader();
      }
    };

    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeCartIdGlobal = (value) => {
    if (value !== cartIdGlobal) {
      setCartIdStorage(value);
      setCartIdGlobal(value);
      return true;
    }
  };

  const showLoader = () => {
    setLoadComponentIsVisible(true);
  };

  const hideLoader = () => {
    setLoadComponentIsVisible(false);
  };

  const resetStates = () => {
    setCartIdGlobal();
    setLoadComponentIsVisible(false);
    setGlobalProviderLoading(false);
  };

  const valueMemo = useMemo(() => {
    return {
      cartIdGlobal,
      changeCartIdGlobal,
      loadComponentIsVisible,
      isGlobalProviderLoading,
      showLoader,
      hideLoader,
      resetStates,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartIdGlobal, loadComponentIsVisible, isGlobalProviderLoading]);

  return (
    <contextProvider.Provider value={valueMemo}>
      {children}
    </contextProvider.Provider>
  );
};

export default GlobalProvider;
