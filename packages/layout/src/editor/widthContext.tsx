import { FC, PropsWithChildren, createContext, useContext, useState } from "react";
import { DEFAULT_SCREEN_DESKTOP } from "../../../libs/src/config";

const EditorContainerContext = createContext(
  {} as { width: string | number; setWidth: (width: string | number) => void }
);
export const useEditorContainer = () => useContext(EditorContainerContext);
export const EditorContainerProvier: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<string | number>(DEFAULT_SCREEN_DESKTOP);
  return (
    <EditorContainerContext.Provider
      value={{ width: state, setWidth: setState }}
    >
      {children}
    </EditorContainerContext.Provider>
  );
};
