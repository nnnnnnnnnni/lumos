import { useEditor } from "@craftjs/core";
import { Box, Button, Flex } from "@mantine/core";
import { useCallback } from "react";

export const DataSettings = () => {
  const { query } = useEditor();

  const handleSave = useCallback(() => {
    console.log(query.getNodes())
  }, [])

  return (
    <Box>
      <Button onClick={handleSave}>Save</Button>
    </Box>
  );
};
