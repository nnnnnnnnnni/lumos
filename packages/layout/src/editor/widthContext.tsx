import { FC, PropsWithChildren, createContext, useContext, useState } from "react";

const EditorContainerContext = createContext(
  {} as { width: string | number; setWidth: (width: string | number) => void }
);
export const useEditorContainer = () => useContext(EditorContainerContext);
export const EditorContainerProvier: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<string | number>('100%');
  return (
    <EditorContainerContext.Provider
      value={{ width: state, setWidth: setState }}
    >
      {children}
    </EditorContainerContext.Provider>
  );
};
