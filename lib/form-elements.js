"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _xss = _interopRequireDefault(require("xss"));

var _dateFns = require("date-fns");

var _reactSignatureCanvas = _interopRequireDefault(require("react-signature-canvas"));

var _reactBootstrapSlider = _interopRequireDefault(require("react-bootstrap-slider"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

var _starRating = _interopRequireDefault(require("./star-rating"));

var _headerBar = _interopRequireDefault(require("./header-bar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FormElements = {};
var myxss = new _xss["default"].FilterXSS({
  whiteList: {
    u: [],
    br: [],
    b: [],
    i: [],
    ol: ['style'],
    ul: ['style'],
    li: [],
    p: ['style'],
    sub: [],
    sup: [],
    div: ['style'],
    em: [],
    strong: [],
    span: ['style']
  }
});

var ComponentLabel = function ComponentLabel(props) {
  var hasRequiredLabel = props.data.hasOwnProperty('required') && props.data.required === true && !props.read_only;
  return _react["default"].createElement("label", {
    className: props.className || ''
  }, _react["default"].createElement("span", {
    dangerouslySetInnerHTML: {
      __html: myxss.process(props.data.label)
    }
  }), hasRequiredLabel && _react["default"].createElement("span", {
    className: "label-required label label-danger"
  }, "Required"));
};

var ComponentHeader = function ComponentHeader(props) {
  if (props.mutable) {
    return null;
  }

  return _react["default"].createElement("div", null, props.data.pageBreakBefore && _react["default"].createElement("div", {
    className: "preview-page-break"
  }, "Page Break"), _react["default"].createElement(_headerBar["default"], {
    parent: props.parent,
    editModeOn: props.editModeOn,
    data: props.data,
    onDestroy: props._onDestroy,
    onEdit: props.onEdit,
    "static": props.data["static"],
    required: props.data.required
  }));
};

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      // const headerClasses = `dynamic-input ${this.props.data.element}-input`;
      var classNames = 'static';

      if (this.props.data.bold) {
        classNames += ' bold';
      }

      if (this.props.data.italic) {
        classNames += ' italic';
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("h3", {
        className: classNames,
        dangerouslySetInnerHTML: {
          __html: myxss.process(this.props.data.content)
        }
      }));
    }
  }]);

  return Header;
}(_react["default"].Component);

var Paragraph =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Paragraph, _React$Component2);

  function Paragraph() {
    _classCallCheck(this, Paragraph);

    return _possibleConstructorReturn(this, _getPrototypeOf(Paragraph).apply(this, arguments));
  }

  _createClass(Paragraph, [{
    key: "render",
    value: function render() {
      var classNames = 'static';

      if (this.props.data.bold) {
        classNames += ' bold';
      }

      if (this.props.data.italic) {
        classNames += ' italic';
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("p", {
        className: classNames,
        dangerouslySetInnerHTML: {
          __html: myxss.process(this.props.data.content)
        }
      }));
    }
  }]);

  return Paragraph;
}(_react["default"].Component);

var Label =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Label, _React$Component3);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, _getPrototypeOf(Label).apply(this, arguments));
  }

  _createClass(Label, [{
    key: "render",
    value: function render() {
      var classNames = 'static';

      if (this.props.data.bold) {
        classNames += ' bold';
      }

      if (this.props.data.italic) {
        classNames += ' italic';
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("label", {
        className: classNames,
        dangerouslySetInnerHTML: {
          __html: myxss.process(this.props.data.content)
        }
      }));
    }
  }]);

  return Label;
}(_react["default"].Component);

var LineBreak =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(LineBreak, _React$Component4);

  function LineBreak() {
    _classCallCheck(this, LineBreak);

    return _possibleConstructorReturn(this, _getPrototypeOf(LineBreak).apply(this, arguments));
  }

  _createClass(LineBreak, [{
    key: "render",
    value: function render() {
      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("hr", null));
    }
  }]);

  return LineBreak;
}(_react["default"].Component);

var TextInput =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(TextInput, _React$Component5);

  function TextInput(props) {
    var _this;

    _classCallCheck(this, TextInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextInput).call(this, props));
    _this.inputField = _react["default"].createRef();
    return _this;
  }

  _createClass(TextInput, [{
    key: "render",
    value: function render() {
      var props = {};
      props.type = 'text';
      props.className = 'form-control';
      props.name = this.props.data.field_name;

      if (this.props.mutable) {
        props.defaultValue = this.props.defaultValue;
        props.ref = this.inputField;
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      if (this.props.read_only) {
        props.disabled = 'disabled';
      }

      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement(ComponentLabel, this.props), _react["default"].createElement("input", props)));
    }
  }]);

  return TextInput;
}(_react["default"].Component);

var NumberInput =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(NumberInput, _React$Component6);

  function NumberInput(props) {
    var _this2;

    _classCallCheck(this, NumberInput);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(NumberInput).call(this, props));
    _this2.inputField = _react["default"].createRef();
    return _this2;
  }

  _createClass(NumberInput, [{
    key: "render",
    value: function render() {
      var props = {};
      props.type = 'number';
      props.className = 'form-control';
      props.name = this.props.data.field_name;

      if (this.props.mutable) {
        props.defaultValue = this.props.defaultValue;
        props.ref = this.inputField;
      }

      if (this.props.read_only) {
        props.disabled = 'disabled';
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement(ComponentLabel, this.props), _react["default"].createElement("input", props)));
    }
  }]);

  return NumberInput;
}(_react["default"].Component);

var TextArea =
/*#__PURE__*/
function (_React$Component7) {
  _inherits(TextArea, _React$Component7);

  function TextArea(props) {
    var _this3;

    _classCallCheck(this, TextArea);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(TextArea).call(this, props));
    _this3.inputField = _react["default"].createRef();
    return _this3;
  }

  _createClass(TextArea, [{
    key: "render",
    value: function render() {
      var props = {};
      props.className = 'form-control';
      props.name = this.props.data.field_name;

      if (this.props.read_only) {
        props.disabled = 'disabled';
      }

      if (this.props.mutable) {
        props.defaultValue = this.props.defaultValue;
        props.ref = this.inputField;
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement(ComponentLabel, this.props), _react["default"].createElement("textarea", props)));
    }
  }]);

  return TextArea;
}(_react["default"].Component);

var DatePicker =
/*#__PURE__*/
function (_React$Component8) {
  _inherits(DatePicker, _React$Component8);

  function DatePicker(props) {
    var _this4;

    _classCallCheck(this, DatePicker);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(DatePicker).call(this, props));

    _defineProperty(_assertThisInitialized(_this4), "formatMask", '');

    _defineProperty(_assertThisInitialized(_this4), "handleChange", function (dt) {
      var placeholder;

      if (dt && dt.target) {
        placeholder = dt && dt.target && dt.target.value === '' ? _this4.formatMask.toLowerCase() : '';
        var formattedDate = dt.target.value ? (0, _dateFns.format)(dt.target.value, _this4.formatMask) : '';

        _this4.setState({
          value: formattedDate,
          internalValue: formattedDate,
          placeholder: placeholder
        });
      } else {
        _this4.setState({
          value: dt ? (0, _dateFns.format)(dt, _this4.formatMask) : '',
          internalValue: dt,
          placeholder: placeholder
        });
      }
    });

    _this4.inputField = _react["default"].createRef();

    _this4.updateFormat(props);

    _this4.state = _this4.updateDateTime(props, _this4.formatMask);
    return _this4;
  }

  _createClass(DatePicker, [{
    key: "updateFormat",
    value: function updateFormat(props) {
      var _props$data = props.data,
          showTimeSelect = _props$data.showTimeSelect,
          showTimeSelectOnly = _props$data.showTimeSelectOnly;
      var dateFormat = showTimeSelect && showTimeSelectOnly ? '' : props.data.dateFormat;
      var timeFormat = showTimeSelect ? props.data.timeFormat : '';
      var formatMask = "".concat(dateFormat, " ").concat(timeFormat).trim();
      var updated = formatMask !== this.formatMask;
      this.formatMask = formatMask;
      return updated;
    }
  }, {
    key: "updateDateTime",
    value: function updateDateTime(props, formatMask) {
      var value;
      var internalValue;
      var defaultToday = props.data.defaultToday;

      if (defaultToday && (props.defaultValue === '' || props.defaultValue === undefined)) {
        value = (0, _dateFns.format)(new Date(), formatMask);
        internalValue = new Date();
      } else {
        value = props.defaultValue;

        if (value === '' || value === undefined) {
          internalValue = undefined;
        } else {
          internalValue = (0, _dateFns.parse)(value, this.formatMask, new Date());
        }
      }

      return {
        value: value,
        internalValue: internalValue,
        placeholder: formatMask.toLowerCase(),
        defaultToday: defaultToday
      };
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      var formatUpdated = this.updateFormat(props);

      if (props.data.defaultToday !== !this.state.defaultToday || formatUpdated) {
        var state = this.updateDateTime(props, this.formatMask);
        this.setState(state);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$data = this.props.data,
          showTimeSelect = _this$props$data.showTimeSelect,
          showTimeSelectOnly = _this$props$data.showTimeSelectOnly;
      var props = {};
      props.type = 'date';
      props.className = 'form-control';
      props.name = this.props.data.field_name;
      var readOnly = this.props.data.readOnly || this.props.read_only;
      var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      var placeholderText = this.formatMask.toLowerCase();

      if (this.props.mutable) {
        props.defaultValue = this.props.defaultValue;
        props.ref = this.inputField;
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement(ComponentLabel, this.props), _react["default"].createElement("div", null, readOnly && _react["default"].createElement("input", {
        type: "text",
        name: props.name,
        ref: props.ref,
        readOnly: readOnly,
        placeholder: this.state.placeholder,
        value: this.state.value,
        className: "form-control"
      }), iOS && !readOnly && _react["default"].createElement("input", {
        type: "date",
        name: props.name,
        ref: props.ref,
        onChange: this.handleChange,
        dateFormat: "MM/DD/YYYY",
        placeholder: this.state.placeholder,
        value: this.state.value,
        className: "form-control"
      }), !iOS && !readOnly && _react["default"].createElement(_reactDatepicker["default"], {
        name: props.name,
        ref: props.ref,
        onChange: this.handleChange,
        selected: this.state.internalValue,
        todayButton: 'Today',
        className: "form-control",
        isClearable: true,
        showTimeSelect: showTimeSelect,
        showTimeSelectOnly: showTimeSelectOnly,
        dateFormat: this.formatMask,
        placeholderText: placeholderText
      }))));
    }
  }]);

  return DatePicker;
}(_react["default"].Component);

var Dropdown =
/*#__PURE__*/
function (_React$Component9) {
  _inherits(Dropdown, _React$Component9);

  function Dropdown(props) {
    var _this5;

    _classCallCheck(this, Dropdown);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
    _this5.inputField = _react["default"].createRef();
    return _this5;
  }

  _createClass(Dropdown, [{
    key: "render",
    value: function render() {
      var props = {};
      props.className = 'form-control';
      props.name = this.props.data.field_name;

      if (this.props.mutable) {
        props.defaultValue = this.props.defaultValue;
        props.ref = this.inputField;
      }

      if (this.props.read_only) {
        props.disabled = 'disabled';
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement(ComponentLabel, this.props), _react["default"].createElement("select", props, this.props.data.options.map(function (option) {
        var this_key = "preview_".concat(option.key);
        return _react["default"].createElement("option", {
          value: option.value,
          key: this_key
        }, option.text);
      }))));
    }
  }]);

  return Dropdown;
}(_react["default"].Component);

var Signature =
/*#__PURE__*/
function (_React$Component10) {
  _inherits(Signature, _React$Component10);

  function Signature(props) {
    var _this6;

    _classCallCheck(this, Signature);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Signature).call(this, props));

    _defineProperty(_assertThisInitialized(_this6), "clear", function () {
      if (_this6.state.defaultValue) {
        _this6.setState({
          defaultValue: ''
        });
      } else if (_this6.canvas.current) {
        _this6.canvas.current.clear();
      }
    });

    _this6.state = {
      defaultValue: props.defaultValue
    };
    _this6.inputField = _react["default"].createRef();
    _this6.canvas = _react["default"].createRef();
    return _this6;
  }

  _createClass(Signature, [{
    key: "render",
    value: function render() {
      var defaultValue = this.state.defaultValue;
      var canClear = !!defaultValue;
      var props = {};
      props.type = 'hidden';
      props.name = this.props.data.field_name;

      if (this.props.mutable) {
        props.defaultValue = defaultValue;
        props.ref = this.inputField;
      }

      var pad_props = {};
      pad_props.backgroundColor = "rgba(0,0,0,0.1)"; // umd requires canvasProps={{ width: 400, height: 150 }}

      if (this.props.mutable) {
        pad_props.defaultValue = defaultValue;
        pad_props.ref = this.canvas;
        canClear = !this.props.read_only;
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      var sourceDataURL;

      if (defaultValue && defaultValue.length > 0) {
        sourceDataURL = "data:image/png;base64,".concat(defaultValue);
      }

      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement(ComponentLabel, this.props), this.props.read_only === true || !!sourceDataURL ? _react["default"].createElement("img", {
        src: sourceDataURL
      }) : _react["default"].createElement(_reactSignatureCanvas["default"], pad_props), canClear && _react["default"].createElement("i", {
        className: "fa fa-times clear-signature",
        onClick: this.clear,
        title: "Clear Signature"
      }), _react["default"].createElement("input", props)));
    }
  }]);

  return Signature;
}(_react["default"].Component);

var Tags =
/*#__PURE__*/
function (_React$Component11) {
  _inherits(Tags, _React$Component11);

  function Tags(props) {
    var _this7;

    _classCallCheck(this, Tags);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Tags).call(this, props));

    _defineProperty(_assertThisInitialized(_this7), "handleChange", function (e) {
      _this7.setState({
        value: e
      });
    });

    _this7.inputField = _react["default"].createRef();
    var defaultValue = props.defaultValue,
        data = props.data;
    _this7.state = {
      value: _this7.getDefaultValue(defaultValue, data.options)
    };
    return _this7;
  }

  _createClass(Tags, [{
    key: "getDefaultValue",
    value: function getDefaultValue(defaultValue, options) {
      if (defaultValue) {
        if (typeof defaultValue === 'string') {
          var vals = defaultValue.split(',').map(function (x) {
            return x.trim();
          });
          return options.filter(function (x) {
            return vals.indexOf(x.value) > -1;
          });
        }

        return options.filter(function (x) {
          return defaultValue.indexOf(x.value) > -1;
        });
      }

      return [];
    } // state = { value: this.props.defaultValue !== undefined ? this.props.defaultValue.split(',') : [] };

  }, {
    key: "render",
    value: function render() {
      var options = this.props.data.options.map(function (option) {
        option.label = option.text;
        return option;
      });
      var props = {};
      props.isMulti = true;
      props.name = this.props.data.field_name;
      props.onChange = this.handleChange;
      props.options = options;

      if (!this.props.mutable) {
        props.value = options[0].text;
      } // to show a sample of what tags looks like


      if (this.props.mutable) {
        props.isDisabled = this.props.read_only;
        props.value = this.state.value;
        props.ref = this.inputField;
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement(ComponentLabel, this.props), _react["default"].createElement(_reactSelect["default"], props)));
    }
  }]);

  return Tags;
}(_react["default"].Component);

var Checkboxes =
/*#__PURE__*/
function (_React$Component12) {
  _inherits(Checkboxes, _React$Component12);

  function Checkboxes(props) {
    var _this8;

    _classCallCheck(this, Checkboxes);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(Checkboxes).call(this, props));
    _this8.options = {};
    return _this8;
  }

  _createClass(Checkboxes, [{
    key: "render",
    value: function render() {
      var _this9 = this;

      var self = this;
      var classNames = 'checkbox-label';

      if (this.props.data.inline) {
        classNames += ' option-inline';
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement(ComponentLabel, _extends({
        className: "form-label"
      }, this.props)), this.props.data.options.map(function (option) {
        var this_key = "preview_".concat(option.key);
        var props = {};
        props.name = "option_".concat(option.key);
        props.type = 'checkbox';
        props.value = option.value;

        if (self.props.mutable) {
          props.defaultChecked = self.props.defaultValue !== undefined && self.props.defaultValue.indexOf(option.key) > -1;
        }

        if (_this9.props.read_only) {
          props.disabled = 'disabled';
        }

        return _react["default"].createElement("label", {
          className: classNames,
          key: this_key
        }, _react["default"].createElement("input", _extends({
          ref: function ref(c) {
            if (c && self.props.mutable) {
              self.options["child_ref_".concat(option.key)] = c;
            }
          }
        }, props)), " ", option.text);
      })));
    }
  }]);

  return Checkboxes;
}(_react["default"].Component);

var RadioButtons =
/*#__PURE__*/
function (_React$Component13) {
  _inherits(RadioButtons, _React$Component13);

  function RadioButtons(props) {
    var _this10;

    _classCallCheck(this, RadioButtons);

    _this10 = _possibleConstructorReturn(this, _getPrototypeOf(RadioButtons).call(this, props));
    _this10.options = {};
    return _this10;
  }

  _createClass(RadioButtons, [{
    key: "render",
    value: function render() {
      var _this11 = this;

      var self = this;
      var classNames = 'radio-label';

      if (this.props.data.inline) {
        classNames += ' option-inline';
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement(ComponentLabel, _extends({
        className: "form-label"
      }, this.props)), this.props.data.options.map(function (option) {
        var this_key = "preview_".concat(option.key);
        var props = {};
        props.name = self.props.data.field_name;
        props.type = 'radio';
        props.value = option.value;

        if (self.props.mutable) {
          props.defaultChecked = self.props.defaultValue !== undefined && (self.props.defaultValue.indexOf(option.key) > -1 || self.props.defaultValue.indexOf(option.value) > -1);
        }

        if (_this11.props.read_only) {
          props.disabled = 'disabled';
        }

        return _react["default"].createElement("label", {
          className: classNames,
          key: this_key
        }, _react["default"].createElement("input", _extends({
          ref: function ref(c) {
            if (c && self.props.mutable) {
              self.options["child_ref_".concat(option.key)] = c;
            }
          }
        }, props)), " ", option.text);
      })));
    }
  }]);

  return RadioButtons;
}(_react["default"].Component);

var Image =
/*#__PURE__*/
function (_React$Component14) {
  _inherits(Image, _React$Component14);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, _getPrototypeOf(Image).apply(this, arguments));
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      var style = this.props.data.center ? {
        textAlign: 'center'
      } : null;
      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react["default"].createElement("div", {
        className: baseClasses,
        style: style
      }, !this.props.mutable && _react["default"].createElement(_headerBar["default"], {
        parent: this.props.parent,
        editModeOn: this.props.editModeOn,
        data: this.props.data,
        onDestroy: this.props._onDestroy,
        onEdit: this.props.onEdit,
        required: this.props.data.required
      }), this.props.data.src && _react["default"].createElement("img", {
        src: this.props.data.src,
        width: this.props.data.width,
        height: this.props.data.height
      }), !this.props.data.src && _react["default"].createElement("div", {
        className: "no-image"
      }, "No Image"));
    }
  }]);

  return Image;
}(_react["default"].Component);

var Rating =
/*#__PURE__*/
function (_React$Component15) {
  _inherits(Rating, _React$Component15);

  function Rating(props) {
    var _this12;

    _classCallCheck(this, Rating);

    _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Rating).call(this, props));
    _this12.inputField = _react["default"].createRef();
    return _this12;
  }

  _createClass(Rating, [{
    key: "render",
    value: function render() {
      var props = {};
      props.name = this.props.data.field_name;
      props.ratingAmount = 5;

      if (this.props.mutable) {
        props.rating = this.props.defaultValue !== undefined ? parseFloat(this.props.defaultValue, 10) : 0;
        props.editing = true;
        props.disabled = this.props.read_only;
        props.ref = this.inputField;
      }

      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement(ComponentLabel, this.props), _react["default"].createElement(_starRating["default"], props)));
    }
  }]);

  return Rating;
}(_react["default"].Component);

var HyperLink =
/*#__PURE__*/
function (_React$Component16) {
  _inherits(HyperLink, _React$Component16);

  function HyperLink() {
    _classCallCheck(this, HyperLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(HyperLink).apply(this, arguments));
  }

  _createClass(HyperLink, [{
    key: "render",
    value: function render() {
      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("a", {
        target: "_blank",
        href: this.props.data.href
      }, this.props.data.content)));
    }
  }]);

  return HyperLink;
}(_react["default"].Component);

var Download =
/*#__PURE__*/
function (_React$Component17) {
  _inherits(Download, _React$Component17);

  function Download(props) {
    var _this13;

    _classCallCheck(this, Download);

    _this13 = _possibleConstructorReturn(this, _getPrototypeOf(Download).call(this, props));

    _defineProperty(_assertThisInitialized(_this13), "createFileLink", function (linkData) {
      if (linkData.indexOf("blob:") > -1) {
        _this13.setState({
          file_link: linkData
        });
      } else {
        _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var link;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(_this13.props.data.creatorId === undefined)) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 3;
                  return _this13.props.getS3File(linkData);

                case 3:
                  link = _context.sent;
                  _context.next = 9;
                  break;

                case 6:
                  _context.next = 8;
                  return _this13.props.getS3File(linkData, _this13.props.data.creatorId);

                case 8:
                  link = _context.sent;

                case 9:
                  _this13.setState({
                    file_link: link
                  });

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      }
    });

    _this13.state = {
      file_link: "#"
    };
    return _this13;
  }

  _createClass(Download, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var this_element = this.props.data;

      if (this_element['file_path'] !== undefined && this_element['file_path'] !== "") {
        this.createFileLink(this_element['file_path']);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("a", {
        href: this.state.file_link
      }, this.props.data.content)));
    }
  }]);

  return Download;
}(_react["default"].Component);

var Camera =
/*#__PURE__*/
function (_React$Component18) {
  _inherits(Camera, _React$Component18);

  function Camera(props) {
    var _this14;

    _classCallCheck(this, Camera);

    _this14 = _possibleConstructorReturn(this, _getPrototypeOf(Camera).call(this, props));

    _defineProperty(_assertThisInitialized(_this14), "displayImage", function (e) {
      var self = _assertThisInitialized(_this14);

      var target = e.target;
      var file;
      var reader;

      if (target.files && target.files.length) {
        file = target.files[0]; // eslint-disable-next-line no-undef

        reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function () {
          self.setState({
            img: reader.result,
            file: file,
            img_link: window.URL.createObjectURL(file)
          });
        };
      }
    });

    _defineProperty(_assertThisInitialized(_this14), "clearImage", function () {
      _this14.setState({
        img: null,
        original_link: null,
        file: null,
        img_link: null
      });
    });

    _this14.state = {
      img: null,
      original_link: null,
      file: null,
      img_link: null
    };
    return _this14;
  }

  _createClass(Camera, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this15 = this;

      if (this.props.defaultValue !== "" && this.props.defaultValue !== undefined) {
        _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var link;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(_this15.props.creatorId === undefined)) {
                    _context2.next = 6;
                    break;
                  }

                  _context2.next = 3;
                  return _this15.props.getS3File(_this15.props.defaultValue);

                case 3:
                  link = _context2.sent;
                  _context2.next = 9;
                  break;

                case 6:
                  _context2.next = 8;
                  return _this15.props.getS3File(_this15.props.defaultValue, _this15.props.creatorId);

                case 8:
                  link = _context2.sent;

                case 9:
                  _this15.setState({
                    img_link: link,
                    original_link: _this15.props.defaultValue
                  });

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var baseClasses = 'SortableItem rfb-item';
      var name = this.props.data.field_name;
      var fileInputStyle = this.state.img || this.state.img_link ? {
        display: 'none'
      } : null;

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      } // let sourceDataURL;
      // if (this.props.read_only === true && this.props.defaultValue && this.props.defaultValue.length > 0) {
      //   if (this.props.defaultValue.indexOf(name > -1)) {
      //     sourceDataURL = this.props.defaultValue;
      //   } else {
      //     sourceDataURL = `data:image/png;base64,${this.props.defaultValue}`;
      //   }
      // }


      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement(ComponentLabel, this.props), this.props.read_only === true && this.props.defaultValue && this.props.defaultValue.length > 0 ? _react["default"].createElement("div", null, _react["default"].createElement("img", {
        src: this.state.img || this.state.img_link
      })) : _react["default"].createElement("div", {
        className: "image-upload-container"
      }, _react["default"].createElement("div", {
        style: fileInputStyle
      }, _react["default"].createElement("input", {
        name: name,
        type: "file",
        accept: "image/*",
        capture: "camera",
        className: "image-upload",
        onChange: this.displayImage
      }), _react["default"].createElement("div", {
        className: "image-upload-control"
      }, _react["default"].createElement("div", {
        className: "btn btn-default btn-school"
      }, _react["default"].createElement("i", {
        className: "fa fa-camera"
      }), " Upload Photo"), _react["default"].createElement("p", null, "Select an image from your computer or device."))), (this.state.img || this.state.img_link) && _react["default"].createElement("div", null, _react["default"].createElement("a", {
        href: this.state.img_link,
        target: "_blank",
        rel: "noopener noreferrer"
      }, _react["default"].createElement("img", {
        src: this.state.img || this.state.img_link,
        height: "100",
        className: "image-upload-preview"
      })), _react["default"].createElement("br", null), _react["default"].createElement("div", {
        className: "btn btn-school btn-image-clear",
        onClick: this.clearImage
      }, _react["default"].createElement("i", {
        className: "fa fa-times"
      }), " Clear Photo")))));
    }
  }]);

  return Camera;
}(_react["default"].Component);

var FileUpload =
/*#__PURE__*/
function (_React$Component19) {
  _inherits(FileUpload, _React$Component19);

  function FileUpload(props) {
    var _this16;

    _classCallCheck(this, FileUpload);

    _this16 = _possibleConstructorReturn(this, _getPrototypeOf(FileUpload).call(this, props));

    _defineProperty(_assertThisInitialized(_this16), "processFile", function (e) {
      var target = e.target;
      var file;

      if (target.files && target.files.length) {
        file = target.files[0]; // eslint-disable-next-line no-undef

        if (/\.(pdf|docx?|txt)/i.test(file.name)) {
          _this16.setState({
            file: file,
            file_link: window.URL.createObjectURL(file),
            file_name: file.name
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this16), "clearFile", function () {
      _this16.setState({
        file: null,
        original_link: null,
        file_name: null,
        file_link: null
      });
    });

    _this16.state = {
      file: null,
      original_link: null,
      file_link: null,
      file_name: null
    };
    return _this16;
  }

  _createClass(FileUpload, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this17 = this;

      if (this.props.defaultValue !== "" && this.props.defaultValue !== undefined) {
        var fileName;
        var splitOnSlash = this.props.defaultValue.split("/");
        fileName = splitOnSlash[1];
        var indexHyp = fileName.indexOf("-");
        fileName = fileName.substring(indexHyp + 1);
        this.setState({
          file_name: fileName
        });

        _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          var link;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(_this17.props.creatorId === undefined)) {
                    _context3.next = 6;
                    break;
                  }

                  _context3.next = 3;
                  return _this17.props.getS3File(_this17.props.defaultValue);

                case 3:
                  link = _context3.sent;
                  _context3.next = 9;
                  break;

                case 6:
                  _context3.next = 8;
                  return _this17.props.getS3File(_this17.props.defaultValue, _this17.props.creatorId);

                case 8:
                  link = _context3.sent;

                case 9:
                  _this17.setState({
                    file_link: link,
                    original_link: _this17.props.defaultValue
                  });

                case 10:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }))();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var baseClasses = 'SortableItem rfb-item';
      var name = this.props.data.field_name;
      var fileInputStyle = this.state.file_link ? {
        display: 'none'
      } : null;

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      } // let sourceDataURL;
      // if (this.props.read_only === true && this.props.defaultValue && this.props.defaultValue.length > 0) {
      //   if (this.props.defaultValue.indexOf(name > -1)) {
      //     sourceDataURL = this.props.defaultValue;
      //   } else {
      //     sourceDataURL = `data:application/pdf;base64,${this.props.defaultValue}`;
      //   }
      // }


      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement(ComponentLabel, this.props), this.props.read_only === true && this.props.defaultValue && this.props.defaultValue.length > 0 ? _react["default"].createElement("a", {
        href: this.state.file_link
      }, this.state.file_name) : _react["default"].createElement("div", {
        className: "image-upload-container"
      }, _react["default"].createElement("div", {
        style: fileInputStyle
      }, _react["default"].createElement("input", {
        name: name,
        type: "file",
        accept: "application/pdf,.doc,.docx,.txt",
        capture: "camera",
        className: "image-upload",
        onChange: this.processFile
      }), _react["default"].createElement("div", {
        className: "image-upload-control"
      }, _react["default"].createElement("div", {
        className: "btn btn-default btn-school"
      }, _react["default"].createElement("i", {
        className: "fa fa-file-text"
      }), " Upload File"), _react["default"].createElement("p", null, "Select a file from your computer or device."))), (this.state.file || this.state.file_link) && _react["default"].createElement("div", null, _react["default"].createElement("a", {
        href: this.state.file_link,
        target: "_blank",
        rel: "noopener noreferrer"
      }, this.state.file_name), _react["default"].createElement("div", {
        className: "btn btn-school btn-image-clear",
        onClick: this.clearFile
      }, _react["default"].createElement("i", {
        className: "fa fa-times"
      }), " Clear File")))));
    }
  }]);

  return FileUpload;
}(_react["default"].Component);

var Range =
/*#__PURE__*/
function (_React$Component20) {
  _inherits(Range, _React$Component20);

  function Range(props) {
    var _this18;

    _classCallCheck(this, Range);

    _this18 = _possibleConstructorReturn(this, _getPrototypeOf(Range).call(this, props));

    _defineProperty(_assertThisInitialized(_this18), "changeValue", function (e) {
      var target = e.target;

      _this18.setState({
        value: target.value
      });
    });

    _this18.inputField = _react["default"].createRef();
    _this18.state = {
      value: props.defaultValue !== undefined ? parseInt(props.defaultValue, 10) : parseInt(props.data.default_value, 10)
    };
    return _this18;
  }

  _createClass(Range, [{
    key: "render",
    value: function render() {
      var props = {};
      var name = this.props.data.field_name;
      props.type = 'range';
      props.list = "tickmarks_".concat(name);
      props.min = this.props.data.min_value;
      props.max = this.props.data.max_value;
      props.step = this.props.data.step;
      props.value = this.state.value;
      props.change = this.changeValue;

      if (this.props.mutable) {
        props.ref = this.inputField;
      }

      var datalist = [];

      for (var i = parseInt(props.min_value, 10); i <= parseInt(props.max_value, 10); i += parseInt(props.step, 10)) {
        datalist.push(i);
      }

      var oneBig = 100 / (datalist.length - 1);

      var _datalist = datalist.map(function (d, idx) {
        return _react["default"].createElement("option", {
          key: "".concat(props.list, "_").concat(idx)
        }, d);
      });

      var visible_marks = datalist.map(function (d, idx) {
        var option_props = {};
        var w = oneBig;

        if (idx === 0 || idx === datalist.length - 1) {
          w = oneBig / 2;
        }

        option_props.key = "".concat(props.list, "_label_").concat(idx);
        option_props.style = {
          width: "".concat(w, "%")
        };

        if (idx === datalist.length - 1) {
          option_props.style = {
            width: "".concat(w, "%"),
            textAlign: 'right'
          };
        }

        return _react["default"].createElement("label", option_props, d);
      });
      var baseClasses = 'SortableItem rfb-item';

      if (this.props.data.pageBreakBefore) {
        baseClasses += ' alwaysbreak';
      }

      return _react["default"].createElement("div", {
        className: baseClasses
      }, _react["default"].createElement(ComponentHeader, this.props), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement(ComponentLabel, this.props), _react["default"].createElement("div", {
        className: "range"
      }, _react["default"].createElement("div", {
        className: "clearfix"
      }, _react["default"].createElement("span", {
        className: "pull-left"
      }, this.props.data.min_label), _react["default"].createElement("span", {
        className: "pull-right"
      }, this.props.data.max_label)), _react["default"].createElement(_reactBootstrapSlider["default"], props)), _react["default"].createElement("div", {
        className: "visible_marks"
      }, visible_marks), _react["default"].createElement("input", {
        name: name,
        value: this.state.value,
        type: "hidden"
      }), _react["default"].createElement("datalist", {
        id: props.list
      }, _datalist)));
    }
  }]);

  return Range;
}(_react["default"].Component);

FormElements.Header = Header;
FormElements.Paragraph = Paragraph;
FormElements.Label = Label;
FormElements.LineBreak = LineBreak;
FormElements.TextInput = TextInput;
FormElements.NumberInput = NumberInput;
FormElements.TextArea = TextArea;
FormElements.Dropdown = Dropdown;
FormElements.Signature = Signature;
FormElements.Checkboxes = Checkboxes;
FormElements.DatePicker = DatePicker;
FormElements.RadioButtons = RadioButtons;
FormElements.Image = Image;
FormElements.Rating = Rating;
FormElements.Tags = Tags;
FormElements.HyperLink = HyperLink;
FormElements.Download = Download;
FormElements.Camera = Camera;
FormElements.FileUpload = FileUpload;
FormElements.Range = Range;
var _default = FormElements;
exports["default"] = _default;