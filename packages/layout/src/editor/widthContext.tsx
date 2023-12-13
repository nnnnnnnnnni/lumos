import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  CURRENT_SCREEN,
  DEFAULT_SCREEN_FULL,
  DEFAULT_SCREEN_MOBILE,
  DEFAULT_SCREEN_TABLET,
} from "@utils";
import { mediaKeys } from "./Settings/type";

interface EditorContainerContextProps {
  width: string | number;
  setWidth: (width: string | number) => void;
  currentScreen: CURRENT_SCREEN;
  setCurrentScreen: (screen: CURRENT_SCREEN) => void;
  isTablet: boolean;
  isMobile: boolean;
  isDesktop: boolean;
}

const EditorContainerContext = createContext({} as EditorContainerContextProps);

export const useEditorContainer = () => useContext(EditorContainerContext);

export const EditorContainerProvier: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<string | number>("100%");
  const [currentScreen, setCurrentScreen] = useState<CURRENT_SCREEN>(mediaKeys.desktop);

  useEffect(() => {
    if(currentScreen === mediaKeys.mobile) {
      setState(DEFAULT_SCREEN_MOBILE)
    } else if(currentScreen === mediaKeys.tablet) {
      setState(DEFAULT_SCREEN_TABLET)
    } else {
      setState(DEFAULT_SCREEN_FULL)
    }
  }, [currentScreen])

  return (
    <EditorContainerContext.Provider
      value={{
        width: state,
        setWidth: setState,
        setCurrentScreen,
        currentScreen,
        isTablet: currentScreen === mediaKeys.tablet,
        isMobile: currentScreen === mediaKeys.mobile,
        isDesktop: currentScreen === mediaKeys.desktop,
      }}
    >
      {children}
    </EditorContainerContext.Provider>
  );
};
