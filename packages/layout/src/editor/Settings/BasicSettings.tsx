import {
  Box,
  Stack,
  Flex,
  ColorInput,
  Text,
  NumberInput,
  Image,
  FileButton,
  Button,
  Select,
  Switch,
  Divider,
  TextInput,
} from "@mantine/core";
import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { convertAnyToNumber, convertAnyToPx, isNumber } from "@utils";
import { useChangeBasicSettings } from "./hooks";

const SettingTitle: FC<PropsWithChildren> = (props) => {
  return (
    <Text fz={"sm"} fw={"bold"} mb={"4px"}>
      {props.children}
    </Text>
  );
};

interface ArraySettingsProps {
  value: (string | undefined)[];
  onChange: (value: (string | undefined)[]) => void;
}
const ArraySettings: FC<ArraySettingsProps> = ({ value, onChange }) => {
  const handleChnage = useCallback(
    (newValue: string, index: number) => {
      const _value = [...value];
      _value[index] = newValue;
      onChange(_value);
    },
    [value]
  );

  console.log(value);

  return (
    <Flex
      gap={"xs"}
      style={{
        border: "1px solid var(--mantine-color-default-border)",
        borderRadius: "4px",
      }}
      p={"xs"}
    >
      <TextInput
        value={value[0]}
        placeholder="0px"
        onChange={(value) => handleChnage(value.target.value, 0)}
        min={0}
        description="Top"
        size="xs"
      />
      <TextInput
        value={value[1]}
        placeholder="0px"
        onChange={(value) => handleChnage(value.target.value, 1)}
        min={0}
        description="Right"
        size="xs"
      />
      <TextInput
        value={value[2]}
        placeholder="0px"
        onChange={(value) => handleChnage(value.target.value, 2)}
        min={0}
        description="Bottom"
        size="xs"
      />
      <TextInput
        value={value[3]}
        placeholder="0px"
        onChange={(value) => handleChnage(value.target.value, 3)}
        min={0}
        description="Left"
        size="xs"
      />
    </Flex>
  );
};

const VisibilitySetting = () => {
  return (
    <Box>
      <SettingTitle>Visibility</SettingTitle>
      <Stack
        gap={"xs"}
        style={{
          border: "1px solid var(--mantine-color-default-border)",
          borderRadius: "4px",
        }}
        p={"xs"}
      >
        <Flex justify={"space-between"} align={"center"}>
          <Text fz={"xs"}>Desktop</Text>
          <Switch onLabel="Show" offLabel="Hidden" />
        </Flex>
        <Divider />
        <Flex justify={"space-between"} align={"center"}>
          <Text fz={"xs"}>Tablet</Text>
          <Switch onLabel="Show" offLabel="Hidden" />
        </Flex>
        <Divider />
        <Flex justify={"space-between"} align={"center"}>
          <Text fz={"xs"}>Mobile</Text>
          <Switch onLabel="Show" offLabel="Hidden" />
        </Flex>
      </Stack>
    </Box>
  );
};

const MarginSetting = () => {
  const { currentScreenStyle, handleSetPropByCsskey, currentScreen } =
    useChangeBasicSettings();

  const oldMargins = useMemo(() => {
    const left = currentScreenStyle?.marginLeft?.toString();
    const right = currentScreenStyle?.marginRight?.toString();
    const top = currentScreenStyle?.marginTop?.toString();
    const bottom = currentScreenStyle?.marginBottom?.toString();

    return [top, right, bottom, left];
  }, [currentScreenStyle, currentScreen]);

  const handleChange = useCallback(
    (value: (string | undefined)[]) => {
      const newTop = value[0];
      const newRight = value[1];
      const newBottom = value[2];
      const newLeft = value[3];

      if (newTop !== undefined && newTop !== oldMargins[0]?.toString()) {
        handleSetPropByCsskey("marginTop", newTop);
      }

      if (newRight !== undefined && newRight !== oldMargins[1]?.toString()) {
        handleSetPropByCsskey("marginRight", newRight);
      }

      if (newBottom !== undefined && newBottom !== oldMargins[2]?.toString()) {
        handleSetPropByCsskey("marginBottom", newBottom);
      }

      if (newLeft !== undefined && newLeft !== oldMargins[3]?.toString()) {
        handleSetPropByCsskey("marginLeft", newLeft);
      }
    },
    [currentScreenStyle, handleSetPropByCsskey, oldMargins]
  );

  return (
    <Box>
      <SettingTitle>Margin</SettingTitle>
      <ArraySettings
        value={oldMargins}
        onChange={(value) => handleChange(value)}
      />
    </Box>
  );
};

const PaddingSetting = () => {
  const { currentScreenStyle, handleSetPropByCsskey } =
    useChangeBasicSettings();

  const oldPaddings = useMemo(() => {
    const left = currentScreenStyle?.marginLeft?.toString();
    const right = currentScreenStyle?.marginRight?.toString();
    const top = currentScreenStyle?.marginTop?.toString();
    const bottom = currentScreenStyle?.marginBottom?.toString();

    return [top, right, bottom, left];
  }, [currentScreenStyle]);

  const handleChange = useCallback(
    (value: (string | undefined)[]) => {
      const oldTop = oldPaddings[0];
      const oldRight = oldPaddings[1];
      const oldBottom = oldPaddings[2];
      const oldLeft = oldPaddings[3];

      const newTop = value[0];
      const newRight = value[1];
      const newBottom = value[2];
      const newLeft = value[3];

      if (newTop !== undefined && newTop !== oldTop) {
        handleSetPropByCsskey(
          "paddingTop",
          isNumber(newTop) ? convertAnyToPx(newTop) : newTop
        );
      }

      if (newRight !== undefined && newRight !== oldRight) {
        handleSetPropByCsskey(
          "paddingRight",
          isNumber(newRight) ? convertAnyToPx(newRight) : newRight
        );
      }

      if (newBottom !== undefined && newBottom !== oldBottom) {
        handleSetPropByCsskey(
          "paddingBottom",
          isNumber(newBottom) ? convertAnyToPx(newBottom) : newBottom
        );
      }

      if (newLeft !== undefined && newLeft !== oldLeft) {
        handleSetPropByCsskey(
          "paddingLeft",
          isNumber(newLeft) ? convertAnyToPx(newLeft) : newLeft
        );
      }
    },
    [currentScreenStyle, handleSetPropByCsskey, oldPaddings]
  );

  return (
    <Box>
      <SettingTitle>Padding</SettingTitle>
      <ArraySettings
        value={oldPaddings}
        onChange={(value) => handleChange(value)}
      />
    </Box>
  );
};

const TypographySetting = () => {
  const { currentScreenStyle, handleSetPropByCsskey } =
    useChangeBasicSettings();
  return (
    <Box>
      <SettingTitle>Typography</SettingTitle>
      <Stack
        gap={"xs"}
        style={{
          border: "1px solid var(--mantine-color-default-border)",
          borderRadius: "4px",
        }}
        p={"xs"}
      >
        <ColorInput
          description="Text Color"
          size="xs"
          value={currentScreenStyle?.color}
          onChange={(value) => handleSetPropByCsskey("color", value)}
        />
        <Flex gap={"xs"}>
          <NumberInput
            description="Font Size"
            min={0}
            size="xs"
            value={convertAnyToNumber(currentScreenStyle?.fontSize?.toString())}
            onChange={(value) =>
              handleSetPropByCsskey("fontSize", convertAnyToPx(value as number))
            }
          />
          <Select
            size="xs"
            description="Font Weight"
            data={[
              "100",
              "200",
              "300",
              "400",
              "500",
              "600",
              "700",
              "800",
              "900",
            ]}
            value={
              currentScreenStyle?.fontWeight?.toString()
                ? currentScreenStyle?.fontWeight?.toString()
                : undefined
            }
            onChange={(value) => handleSetPropByCsskey("fontWeight", value)}
          />
        </Flex>
        <Flex gap={"xs"}>
          <NumberInput
            description="Line Height"
            min={0}
            size="xs"
            value={convertAnyToNumber(
              currentScreenStyle?.lineHeight?.toString()
            )}
            onChange={(value) =>
              handleSetPropByCsskey(
                "lineHeight",
                convertAnyToPx(value as number)
              )
            }
          />
          <NumberInput
            description="Char Space"
            min={0}
            size="xs"
            value={convertAnyToNumber(
              currentScreenStyle?.letterSpacing?.toString()
            )}
            onChange={(value) =>
              handleSetPropByCsskey(
                "letterSpacing",
                convertAnyToPx(value as number)
              )
            }
          />
        </Flex>
        <Box>
          <Text fz={"10px"} c={"var(--mantine-color-dimmed)"}>
            Align
          </Text>
          <Flex
            style={{
              border: "1px solid var(--mantine-color-default-border)",
              borderRadius: "4px",
            }}
          >
            <Flex
              style={{ cursor: "pointer", flex: 1 }}
              justify={"center"}
              align={"center"}
            >
              <Bars3BottomLeftIcon width={20} />
            </Flex>
            <Divider orientation="vertical" />
            <Flex
              style={{ cursor: "pointer", flex: 1 }}
              justify={"center"}
              align={"center"}
            >
              <Bars3Icon width={20} />
            </Flex>
            <Divider orientation="vertical" />
            <Flex
              style={{ cursor: "pointer", flex: 1 }}
              justify={"center"}
              align={"center"}
            >
              <Bars3BottomRightIcon width={20} />
            </Flex>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

const BackgroundSetting = () => {
  const [file, setFile] = useState<File | null>(null);
  const resetRef = useRef<() => void>(null);

  const handleFileChange = useCallback((patload: File | null) => {
    setFile(patload);
  }, []);

  const clearFile = () => {
    handleFileChange(null);
    resetRef.current?.();
  };
  return (
    <Box>
      <SettingTitle>Background</SettingTitle>
      <Stack
        gap={"xs"}
        style={{
          border: "1px solid var(--mantine-color-default-border)",
          borderRadius: "4px",
        }}
        p={"xs"}
      >
        <ColorInput size="xs" />
        <Flex gap={"xs"}>
          <Box w={"150px"} h={"100px"}>
            <Image
              radius="md"
              fit="contain"
              src={file ? URL.createObjectURL(file) : undefined}
              fallbackSrc="https://placehold.co/600x400?text=Preview"
              height={"100px"}
            />
          </Box>
          <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            gap={"sm"}
            style={{ flex: 1 }}
          >
            <FileButton onChange={setFile} accept="image/png,image/jpeg">
              {(props) => (
                <Button size="xs" w={"100%"} {...props}>
                  {file ? "Update" : "Upload"}
                </Button>
              )}
            </FileButton>
            <Button
              disabled={!file}
              size="xs"
              color="red"
              onClick={clearFile}
              w={"100%"}
            >
              Reset
            </Button>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
};

const BorderSetting = () => {
  return (
    <Box>
      <SettingTitle>Border</SettingTitle>
      <Stack
        gap={"xs"}
        style={{
          border: "1px solid var(--mantine-color-default-border)",
          borderRadius: "4px",
        }}
        p={"xs"}
      >
        <Flex gap={"xs"}>
          <Select
            description="Style"
            data={["None", "Solid", "Dotted", "Dashed"]}
            size="xs"
          />
          <ColorInput description="Color" size="xs" />
        </Flex>
        <Flex gap={"xs"}>
          <NumberInput description="Width" min={0} size="xs" />
          <NumberInput description="Radius" min={0} size="xs" />
        </Flex>
      </Stack>
    </Box>
  );
};

export const ComponentBasicSettings = () => {
  return (
    <Stack>
      <VisibilitySetting />
      <MarginSetting />
      {/* <PaddingSetting /> */}
      <TypographySetting />
      <BackgroundSetting />
      <BorderSetting />
    </Stack>
  );
};
