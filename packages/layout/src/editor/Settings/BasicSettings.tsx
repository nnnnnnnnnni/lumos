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
} from "@mantine/core";
import {
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { convertAnyToNumber, convertAnyToPx } from "@utils";
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
    (newValue: string | number, index: number) => {
      const _value = [...value];
      _value[index] = newValue.toString();
      onChange(_value);
    },
    [value]
  );
  return (
    <Flex
      gap={"xs"}
      style={{
        border: "1px solid var(--mantine-color-default-border)",
        borderRadius: "4px",
      }}
      p={"xs"}
    >
      <NumberInput
        value={value[0]}
        onChange={(value) => handleChnage(value, 0)}
        min={0}
        description="Top"
        size="xs"
      />
      <NumberInput
        value={value[1]}
        onChange={(value) => handleChnage(value, 1)}
        min={0}
        description="Right"
        size="xs"
      />
      <NumberInput
        value={value[2]}
        onChange={(value) => handleChnage(value, 2)}
        min={0}
        description="Bottom"
        size="xs"
      />
      <NumberInput
        value={value[3]}
        onChange={(value) => handleChnage(value, 3)}
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
  const { currentScreenStyle, handleSetPropByCsskey } =
    useChangeBasicSettings();

  const margins = useMemo(() => {
    const left = convertAnyToNumber(
      currentScreenStyle?.marginLeft,
      false
    )?.toString();
    const right = convertAnyToNumber(
      currentScreenStyle?.marginRight,
      false
    )?.toString();
    const top = convertAnyToNumber(
      currentScreenStyle?.marginTop,
      false
    )?.toString();
    const bottom = convertAnyToNumber(
      currentScreenStyle?.marginBottom,
      false
    )?.toString();

    return [top, right, bottom, left];
  }, [currentScreenStyle]);

  const handleChange = useCallback(
    (value: (string | undefined)[]) => {
      if (currentScreenStyle?.marginTop !== value[0] && value[0] != undefined) {
        handleSetPropByCsskey("marginTop", convertAnyToPx(value[0]));
      }
      if (
        currentScreenStyle?.marginBottom !== value[2] &&
        value[2] != undefined
      ) {
        handleSetPropByCsskey("marginBottom", convertAnyToPx(value[2]));
      }
      if (
        currentScreenStyle?.marginRight !== value[1] &&
        value[1] != undefined
      ) {
        handleSetPropByCsskey("marginRight", convertAnyToPx(value[1]));
      }
      if (
        currentScreenStyle?.marginLeft !== value[3] &&
        value[3] != undefined
      ) {
        handleSetPropByCsskey("marginLeft", convertAnyToPx(value[3]));
      }
    },
    [currentScreenStyle, handleSetPropByCsskey]
  );
  return (
    <Box>
      <SettingTitle>Margin</SettingTitle>
      <ArraySettings
        value={margins}
        onChange={(value) => handleChange(value)}
      />
    </Box>
  );
};

const PaddingSetting = () => {
  const { currentScreenStyle, handleSetPropByCsskey } =
    useChangeBasicSettings();

  const paddings = useMemo(() => {
    const left = convertAnyToNumber(
      currentScreenStyle?.paddingLeft,
      false
    )?.toString();
    const right = convertAnyToNumber(
      currentScreenStyle?.paddingRight,
      false
    )?.toString();
    const top = convertAnyToNumber(
      currentScreenStyle?.paddingTop,
      false
    )?.toString();
    const bottom = convertAnyToNumber(
      currentScreenStyle?.paddingBottom,
      false
    )?.toString();

    return [top, right, bottom, left];
  }, [currentScreenStyle]);

  const handleChange = useCallback(
    (value: (string | undefined)[]) => {
      if (
        currentScreenStyle?.paddingTop !== value[0] &&
        value[0] != undefined
      ) {
        handleSetPropByCsskey("paddingTop", convertAnyToPx(value[0]));
      }
      if (
        currentScreenStyle?.paddingBottom !== value[2] &&
        value[2] != undefined
      ) {
        handleSetPropByCsskey("paddingBottom", convertAnyToPx(value[2]));
      }
      if (
        currentScreenStyle?.paddingRight !== value[1] &&
        value[1] != undefined
      ) {
        handleSetPropByCsskey("paddingRight", convertAnyToPx(value[1]));
      }
      if (
        currentScreenStyle?.paddingLeft !== value[3] &&
        value[3] != undefined
      ) {
        handleSetPropByCsskey("paddingLeft", convertAnyToPx(value[3]));
      }
    },
    [currentScreenStyle, handleSetPropByCsskey]
  );

  return (
    <Box>
      <SettingTitle>Padding</SettingTitle>
      <ArraySettings
        value={paddings}
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
      <PaddingSetting />
      <TypographySetting />
      <BackgroundSetting />
      <BorderSetting />
    </Stack>
  );
};
