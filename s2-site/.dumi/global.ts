if (window) {
  (window as any).react = require('react');
  (window as any).reactDom = require('react-dom');
  (window as any).lodash = require('lodash');
  (window as any).reactColor = require('react-color');
  (window as any).copyToClipboard = require('copy-to-clipboard');

  (window as any).antd = require('antd');
  (window as any).antdIcons = require('@ant-design/icons');

  (window as any).gCanvas = require('@antv/g-canvas');
  (window as any).s2 = require('@antv/s2');
  (window as any).s2React = require('@antv/s2-react');

  (window as any).tableCss = require('antd/es/table/style/index.css');
  (window as any).spaceCss = require('antd/es/space/style/index.css');
  (window as any).cascaderCss = require('antd/es/cascader/style/index.css');
  (window as any).checkboxCss = require('antd/es/checkbox/style/index.css');
  (window as any).paginationCss = require('antd/es/pagination/style/index.css');
  (
    window as any
  ).inputNumberCss = require('antd/es/input-number/style/index.css');
  (window as any).s2Css = require('@antv/s2/dist/style.min.css');
  (window as any).s2ReactCss = require('@antv/s2-react/dist/style.min.css');
}
