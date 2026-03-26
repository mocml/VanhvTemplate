
import Material from '@react-native-vector-icons/material-design-icons';
import { ColorValue, TextProps } from "react-native";
import Lucide from '@react-native-vector-icons/lucide';
import Colors from '@/constants/Colors';
type IProps = TextProps & {
  name: any;
  size?: any;
  color?: ColorValue;
  type?: any
};
const Icon = ({
  size = 24,
  color = Colors.icon,
  name,
  ...props
}: IProps) => <Material name={name} color={color} size={size} {...props} />
const CLucide = ({
  size = 24,
  color = Colors.icon,
  name,
  ...props
}: IProps) => <Lucide name={name} color={color} size={size} {...props} />

Icon.Lucide = CLucide;
export default Icon