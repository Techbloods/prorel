import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const resizeWidth = (percent) => ((percent/100) * width);

export const resizeHeight = (percent) => ((percent/100) * height);

export const sizeFromPercent = (percent) => 
  (Math.sqrt((height * height) + (width * width)) * (percent/100));