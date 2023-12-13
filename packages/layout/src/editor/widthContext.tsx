import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_SCREEN_DESKTOP,
  DEFAULT_SCREEN_MOBILE,
  DEFAULT_SCREEN_TABLET,
  convertAnyToNumber,
} from "@utils";

interface EditorContainerContextProps {
  width: string | number;
  setWidth: (width: string | number) => void;
  isTablet: boolean;
  isMobile: boolean;
  isDesktop: boolean;
}

const EditorContainerContext = createContext({} as EditorContainerContextProps);

export const useEditorContainer = () => useContext(EditorContainerContext);

export const EditorContainerProvier: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<string | number>("100%");

  const isTablet = useMemo(
    () => convertAnyToNumber(state) == DEFAULT_SCREEN_TABLET,
    []
  );
  const isMobile = useMemo(
    () => convertAnyToNumber(state) == DEFAULT_SCREEN_MOBILE,
    []
  );
  const isDesktop = useMemo(
    () =>
      state === "100%" || convertAnyToNumber(state) === DEFAULT_SCREEN_DESKTOP,
    []
  );

  return (
    <EditorContainerContext.Provider
      value={{
        width: state,
        setWidth: setState,
        isTablet,
        isMobile,
        isDesktop,
      }}
    >
      {children}
    </EditorContainerContext.Provider>
  );
};
