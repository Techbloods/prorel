/* eslint no-param-reassign: ["error", { "props": false }] */

import _ from 'lodash';
import containerTheme from './Container';
import contentTheme from './Content';
import buttonTheme from './Button';
import footerTheme from './Footer';
import footerTabTheme from './FooterTab';
import textTheme from './Text';
import tabTheme from './Tab';
import variable from './../variables/platform';
import tabBarTheme from './TabBar';
import tabContainerTheme from './TabContainer';
import tabHeadingTheme from './TabHeading';

export default (variables = variable) => {
  const theme = {
    variables,

    'NativeBase.TabBar': {
      ...tabBarTheme(variables),
    },

    'NativeBase.TabHeading': {
      ...tabHeadingTheme(variables),
    },

    'NativeBase.TabContainer': {
      ...tabContainerTheme(variables),
    },

    'NativeBase.Button': {
      ...buttonTheme(variables),
    },

    'NativeBase.Container': {
      ...containerTheme(variables),
    },
    'NativeBase.Content': {
      ...contentTheme(variables),
    },

    'NativeBase.Footer': {
      ...footerTheme(variables),
    },

    'NativeBase.Tabs': {
      flex: 1,
    },

    'NativeBase.FooterTab': {
      ...footerTabTheme(variables),
    },

    'NativeBase.Text': {
      ...textTheme(variables),
    },

    'NativeBase.Tab': {
      ...tabTheme(variables),
    },

  };

  const cssifyTheme = (grandparent, parent, parentKey) => {
    _.forEach(parent, (style, styleName) => {
      // console.log('styleName', styleName);
      // console.log('parentKey', parentKey);
      if (
        styleName.indexOf('.') === 0 &&
        parentKey &&
        parentKey.indexOf('.') === 0
      ) {
        if (grandparent) {
          if (!grandparent[styleName]) {
            grandparent[styleName] = {};
          } else {
            grandparent[styleName][parentKey] = style;
          }
        }
      }
      if (style && typeof style === 'object' && styleName !== 'fontVariant') {
        cssifyTheme(parent, style, styleName);
      }
    });
  };

  cssifyTheme(null, theme, null);

  return theme;
};
