export interface campaignIdProps {
  campaignIdTestnet?: string;
  campaignId?: string;
}

interface textStyleProps {
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?:
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900;
  lineHeight?: string;
  letterSpacing?: string;
  textAlign?: "left" | "right" | "center";
  margin?: string[];
  padding?: string[];
  border?: {
    width?: string;
    color?: string;
  };
  borderRadius?: string;
}

export interface textProps {
  text?: string;
  key?: string;
  className?: string;
  id?: string;
  style?: {
    desktop?: textStyleProps;
    tablet?: textStyleProps;
    mobile?: textStyleProps;
  };
}
