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
  CSSProperties,
  FC,
  PropsWithChildren,
  useCallback,
  useRef,
  useState,
} from "react";
import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { useNode } from "@craftjs/core";
import { convertAnyToNumber, convertNumberToPx } from "../../../../utils/src";

const SettingTitle: FC<PropsWithChildren> = (props) => {
  return (
    <Text fz={"sm"} fw={"bold"} mb={"4px"}>
      {props.children}
    </Text>
  );
};

interface ArraySettingsProps {
  value: string[];
  onChange: (value: string[]) => void;
}
const ArraySettings: FC<ArraySettingsProps> = ({ value, onChange }) => {
  return (
    <Flex
      gap={"xs"}
      style={{
        border: "1px solid var(--mantine-color-default-border)",
        borderRadius: "4px",
      }}
      p={"xs"}
    >
      <NumberInput min={0} description="Top" size="xs" />
      <NumberInput min={0} description="Right" size="xs" />
      <NumberInput min={0} description="Bottom" size="xs" />
      <NumberInput min={0} description="Left" size="xs" />
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
  const [margins, setMargins] = useState<string[]>(["0", "0", "0", "0"]);
  return (
    <Box>
      <SettingTitle>Margin</SettingTitle>
      <ArraySettings value={margins} onChange={setMargins} />
    </Box>
  );
};

const PaddingSetting = () => {
  const [PaddingSetting, setPaddings] = useState<string[]>([
    "0",
    "0",
    "0",
    "0",
  ]);
  return (
    <Box>
      <SettingTitle>Padding</SettingTitle>
      <ArraySettings value={PaddingSetting} onChange={setPaddings} />
    </Box>
  );
};

const TypographySetting = () => {
  const {
    actions: { setProp },
    styleProps,
  } = useNode((node) => ({
    styleProps: node.data.props["style"] as CSSProperties,
  }));

  const handleSetPropByCsskey = useCallback(
    (key: keyof CSSProperties, value: any) => {
      setProp((props: { style?: any }) => {
        props.style = props.style || {};
        props.style[key] = value;
      });
    },
    []
  );

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
          value={styleProps?.color}
          onChange={(value) => handleSetPropByCsskey("color", value)}
        />
        <Flex gap={"xs"}>
          <NumberInput
            description="Font Size"
            min={0}
            size="xs"
            value={convertAnyToNumber(styleProps?.fontSize?.toString())}
            onChange={(value) =>
              handleSetPropByCsskey(
                "fontSize",
                convertNumberToPx(value as number)
              )
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
            value={styleProps?.fontWeight?.toString() ?convertAnyToNumber(
              parseInt(styleProps?.fontWeight?.toString(), 10)
            ).toString() : undefined}
            onChange={(value) => handleSetPropByCsskey('fontWeight', value)}
          />
        </Flex>
        <Flex gap={"xs"}>
          <NumberInput
            description="Line Height"
            min={0}
            size="xs"
            value={convertAnyToNumber(styleProps?.lineHeight?.toString())}
            onChange={(value) =>
              handleSetPropByCsskey(
                "lineHeight",
                convertNumberToPx(value as number)
              )
            }
          />
          <NumberInput
            description="Char Space"
            min={0}
            size="xs"
            value={convertAnyToNumber(styleProps?.letterSpacing?.toString())}
            onChange={(value) =>
              handleSetPropByCsskey(
                "letterSpacing",
                convertNumberToPx(value as number)
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
