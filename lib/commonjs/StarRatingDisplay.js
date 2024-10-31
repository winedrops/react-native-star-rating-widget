"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _StarIcon = _interopRequireDefault(require("./StarIcon"));
var _utils = require("./utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const defaultColor = '#fdd835';
const StarRatingDisplay = _ref => {
  let {
    rating,
    maxStars = 5,
    starSize = 32,
    color = defaultColor,
    emptyColor = color,
    style,
    starStyle,
    StarIconComponent = _StarIcon.default,
    testID
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.starRating, style],
    testID: testID
  }, (0, _utils.getStars)(rating, maxStars).map((starType, i) => {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: i,
      style: [styles.star, starStyle]
    }, /*#__PURE__*/_react.default.createElement(StarIconComponent, {
      index: i,
      type: starType,
      size: starSize,
      color: starType === 'empty' ? emptyColor : color
    }));
  }));
};
const styles = _reactNative.StyleSheet.create({
  starRating: {
    flexDirection: 'row'
  },
  star: {
    marginHorizontal: 5
  }
});
var _default = StarRatingDisplay;
exports.default = _default;
//# sourceMappingURL=StarRatingDisplay.js.map