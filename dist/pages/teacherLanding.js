"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Header = _interopRequireDefault(require("../components/Header"));
var _TeacherSideBar = _interopRequireDefault(require("../components/TeacherSideBar"));
var _reactRouterDom = require("react-router-dom");
var _Loader = _interopRequireDefault(require("../components/Loader"));
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function TeacherLanding(props) {
  const navigate = (0, _reactRouterDom.useNavigate)();
  const [loading, setLoading] = _react.default.useState(false);
  // const [courses , setCourses] = React.useState([])

  console.log(props);

  // React.useEffect(() => {
  //    if(props){
  //       setCourses(props.courses)
  //    }
  // }, [props])
  // console.log("props " , props.courses)

  async function startGoogleMeetCall() {
    try {
      const resp = await _axios.default.get("http://localhost:4000/api/createMeeting");
      console.log(resp.data);
      window.open(resp.data.meetingLink, "_blank");
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  return /*#__PURE__*/_react.default.createElement("div", null, loading ? /*#__PURE__*/_react.default.createElement(_Loader.default, null) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("section", {
    className: "courses"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "Courses"), /*#__PURE__*/_react.default.createElement("div", {
    className: "box-container"
  }, props && props.courses && props.courses.map(course => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "box",
      key: course.courseId
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "thumb"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "images/".concat(course.courseId, ".png"),
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("span", null, course.numberOfBatches, " Batches"), " "), /*#__PURE__*/_react.default.createElement("h3", {
      className: "title"
    }, course.courseName), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/ManageCourse?data=".concat(encodeURIComponent(JSON.stringify({
        "id": course.courseId,
        "numberOfBatches": course.numberOfBatches,
        "adminId": props && props.adminId
      }))),
      className: "inline-btn"
    }, "Manage Course ", /*#__PURE__*/_react.default.createElement("i", {
      className: "fa-solid fa-arrow-right"
    })));
  }), props && props.courses && props.courses.length === 0 && /*#__PURE__*/_react.default.createElement("h1", null, "No Courses"), props && props.courses && props.courses.length < 2 && /*#__PURE__*/_react.default.createElement("div", null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "more-btn"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/courses",
    className: "inline-option-btn"
  }, "View All Courses")))));
}
var _default = exports.default = TeacherLanding; // <div className="tutor">
// <img src="images/pic-2.jpg" alt="" />
// <div className="info">
//    <h3></h3>
// </div>
// </div>