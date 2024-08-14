import React from 'react';
import { I18nManager, ViewStyle } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

export type StarIconProps = {
  index: number;
  size: number;
  color: string;
  type: 'full' | 'half' | 'empty';
};

const StarEmpty = ({ size, color }: Omit<StarIconProps, 'type'>) => (
  <Svg height={size} viewBox="0 0 24 24" width={size}>
    <Path
      fill={color}
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />
  </Svg>
);

const StarFull = ({ size, color }: Omit<StarIconProps, 'type'>) => (
  <Svg height={size} viewBox="0 0 24 24" width={size}>
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path
      fill={color}
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />
  </Svg>
);

const RTL_TRANSFORM: ViewStyle = {
  transform: [{ rotateY: '180deg' }],
};

const StarHalf = ({ size, color }: Omit<StarIconProps, 'type'>) => (
  <Svg
    height={size}
    viewBox="0 0 24 24"
    width={size}
    style={I18nManager.isRTL ? RTL_TRANSFORM : undefined}
  >
    <Rect fill="none" height="24" width="24" x="0" />
    <Path
      fill={color}
      d="M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4V6.1 l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z"
    />
  </Svg>
);

const StarIcon = ({ index, type, size, color }: StarIconProps) => {
  const Component =
    type === 'full' ? StarFull : type === 'half' ? StarHalf : StarEmpty;

  return <Component index={index} size={size} color={color} />;
};

export default StarIcon;
