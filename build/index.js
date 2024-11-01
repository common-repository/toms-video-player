/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/edit.js":
/*!****************************!*\
  !*** ./src/blocks/edit.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_edit_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/edit.scss */ "./src/assets/edit.scss");
/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video */ "./src/blocks/video.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function EditTomSVideoPlayer(tomsProps) {
  /*console.log(tomsProps)*/
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "toms-video-player"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_video__WEBPACK_IMPORTED_MODULE_2__["default"], tomsProps)));
}
/* harmony default export */ __webpack_exports__["default"] = (EditTomSVideoPlayer);

/***/ }),

/***/ "./src/blocks/video.js":
/*!*****************************!*\
  !*** ./src/blocks/video.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_video_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/video.scss */ "./src/assets/video.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);






function TomSVideoPlayer(props) {
  /* console.log(props) */

  // Attributes Var
  var videoBlock = props.attributes.videoBlock;
  var controls = props.attributes.controls;
  var autoPictureInPicture = props.attributes.autoPictureInPicture;
  var disablePictureInPicture = props.attributes.disablePictureInPicture;
  var autoPlay = props.attributes.autoPlay;
  var loop = props.attributes.loop;
  var muted = props.attributes.muted;
  var playsInline = props.attributes.playsInline;
  var noDownload = props.attributes.noDownload;
  var noFullscreen = props.attributes.noFullscreen;
  var noRemotePlayback = props.attributes.noRemotePlayback;
  var preload = props.attributes.preload;
  var disableSaveVideoAs = props.attributes.disableSaveVideoAs;
  var videoSize = props.attributes.videoSize;
  var disabledResponsiveSize = props.attributes.disabledResponsiveSize;
  var posterLock = props.attributes.posterLock;

  //onChange functions
  function onChangeVideoBlock(newValue) {
    props.setAttributes({
      videoBlock: newValue
    });
  }
  function onChangeControls(newValue) {
    props.setAttributes({
      controls: newValue
    });
  }
  function onChangeAutopictureinpicture(newValue) {
    props.setAttributes({
      autoPictureInPicture: newValue
    });
  }
  function onChangeDisablePictureInPicture(newValue) {
    props.setAttributes({
      disablePictureInPicture: newValue
    });
  }
  function onChangeAutoPlay(newValue) {
    props.setAttributes({
      autoPlay: newValue
    });
  }
  function onChangeLoop(newValue) {
    props.setAttributes({
      loop: newValue
    });
  }
  function onChangeMuted(newValue) {
    props.setAttributes({
      muted: newValue
    });
  }
  function onChangePlaysInline(newValue) {
    props.setAttributes({
      playsInline: newValue
    });
  }
  function onChangeNoDownload(newValue) {
    props.setAttributes({
      noDownload: newValue
    });
  }
  function onChangeNoFullscreen(newValue) {
    props.setAttributes({
      noFullscreen: newValue
    });
  }
  function onChangeNoRemotePlayback(newValue) {
    props.setAttributes({
      noRemotePlayback: newValue
    });
  }
  function onChangePreload(newValue) {
    props.setAttributes({
      preload: newValue
    });
  }
  function onChangeDisableSaveVideoAs(newValue) {
    props.setAttributes({
      disableSaveVideoAs: newValue
    });
  }
  function onChangeVideoSize(newValue) {
    props.setAttributes({
      videoSize: newValue
    });
  }
  function onChangeDisabledResponsiveSize(newValue) {
    props.setAttributes({
      disabledResponsiveSize: newValue
    });
  }
  function onChangePosterLock(newValue) {
    props.setAttributes({
      posterLock: newValue
    });
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.AlignmentToolbar, {
    value: props.attributes.videoAlignment,
    onChange: x => props.setAttributes({
      videoAlignment: x
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    className: "toms-video-player-panel-body",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Video Settings", "toms-video-player"),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Video Block", "toms-video-player"),
    help: videoBlock ? '' : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Temporarily disable Video Block.", "toms-video-player"),
    checked: videoBlock,
    onChange: onChangeVideoBlock
  })), props.attributes.videoBlock !== false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    className: "toms-video-player-poster-lock",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Poster Image", "toms-video-player"),
    help: posterLock ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Enabled this option, A URL for an image to be shown while the video is downloading. If this attribute isn\'t specified, nothing is displayed until the first frame is available, then the first frame is shown as the poster frame.", "toms-video-player") : '',
    checked: posterLock,
    onChange: onChangePosterLock
  }))), props.attributes.videoBlock !== false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    className: "toms-video-player-panel-body",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Options Setting", "toms-video-player"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Playback Controls", "toms-video-player"),
    help: controls ? '' : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("If this attribute is enabled, the browser will offer controls to allow the user to control video playback, including volume, seeking, and pause/resume playback.", "toms-video-player"),
    checked: controls,
    onChange: onChangeControls
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Disabled Picture in picture", "toms-video-player"),
    help: disablePictureInPicture ? '' : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Prevents the browser from suggesting a Picture-in-Picture context menu or to request Picture-in-Picture automatically in some cases.", "toms-video-player"),
    checked: disablePictureInPicture,
    onChange: onChangeDisablePictureInPicture
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Disabled Save video as...", "toms-video-player"),
    help: disableSaveVideoAs ? '' : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("If enabled, the Video screens will not be able to right-click.", "toms-video-player"),
    checked: disableSaveVideoAs,
    onChange: onChangeDisableSaveVideoAs
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Auto Picture in picture", "toms-video-player"),
    help: autoPictureInPicture ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("If this attribute is enabled that the element should automatically toggle picture-in-picture mode when the user switches back and forth between this document and another document or application.", "toms-video-player") : '',
    checked: autoPictureInPicture,
    onChange: onChangeAutopictureinpicture
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("AutoPlay", "toms-video-player"),
    help: autoPlay ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Enabled this option, the video automatically begins to play back as soon as it can do so without stopping to finish loading the data. This may cause usability issues for some users.", "toms-video-player") : '',
    checked: autoPlay,
    onChange: onChangeAutoPlay
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Loop", "toms-video-player"),
    help: loop ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("If enabled, the browser will automatically seek back to the start upon reaching the end of the video.", "toms-video-player") : '',
    checked: loop,
    onChange: onChangeLoop
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Muted", "toms-video-player"),
    help: muted ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("If enabled, the audio will be initially silenced. Its default value is Disabled, meaning that the audio will be played when the video is played.", "toms-video-player") : '',
    checked: muted,
    onChange: onChangeMuted
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Plays Inline", "toms-video-player"),
    help: playsInline ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("If enabled this option that the video is to be played \'inline\', that is within the element&apos;s playback area. Note that the absence of this attribute does not imply that the video will always be played in fullscreen.Enable Video Auto Picture in picture", "toms-video-player") : '',
    checked: playsInline,
    onChange: onChangePlaysInline
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Disabled Responsive Video Size", "toms-video-player"),
    help: disabledResponsiveSize ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("If enabled, will remove the responsive style from the video elememt", "toms-video-player") : '',
    checked: disabledResponsiveSize,
    onChange: onChangeDisabledResponsiveSize
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Set video size manually", "toms-video-player"),
    help: videoSize ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("If enabled, you can customize width and height in the video elememt", "toms-video-player") : '',
    checked: videoSize,
    onChange: onChangeVideoSize
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Controls List Options", "toms-video-player")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("No Download", "toms-video-player"),
    help: noDownload ? '' : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("The NoDownload keyword hints that the download control should be hidden when using the user agent\'s own set of controls for the media element.", "toms-video-player"),
    checked: noDownload,
    onChange: onChangeNoDownload
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("No Fullscreen", "toms-video-player"),
    help: noFullscreen ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("The NoFullScreen keyword hints that the fullscreen mode control should be hidden when using the user agent\'s own set of controls for the media element.", "toms-video-player") : '',
    checked: noFullscreen,
    onChange: onChangeNoFullscreen
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("No Remote Playback", "toms-video-player"),
    help: noRemotePlayback ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("The NoRemotePlayback keyword hints that the remote playback control should be hidden when using the user agent\'s own set of controls for the media element.", "toms-video-player") : '',
    checked: noRemotePlayback,
    onChange: onChangeNoRemotePlayback
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Preload", "toms-video-player"),
    value: preload,
    options: [{
      value: 'auto',
      label: 'Auto'
    }, {
      value: 'metadata',
      label: 'Metadata'
    }, {
      value: 'none',
      label: 'None'
    }],
    onChange: onChangePreload
  }))))), props.attributes.videoBlock !== false ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TomsVideoPlayerPreview, props) /*调用自定义component*/ : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: '280px',
      height: '280px',
      backgroundColor: '#e5ffd5',
      fontSize: '20px',
      fontWeight: 'bold',
      padding: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    t: "1633403139510",
    className: "toms-disabled-icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "13033",
    width: "80",
    height: "80"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M511.175727 162.355715c-192.325283 0-349.669868 157.343561-349.669868 349.669868 0 192.276165 157.344584 349.619726 349.669868 349.619726s349.669868-157.343561 349.669868-349.619726C860.845595 319.699276 703.502034 162.355715 511.175727 162.355715M231.470327 512.024559c0-153.886833 125.890198-279.758612 279.7054-279.758612 62.945611 0 122.361839 20.974707 171.375136 59.46637l-391.670447 391.594723C252.46857 634.386398 231.470327 574.947657 231.470327 512.024559M511.175727 791.729959c-62.952774 0-122.360815-20.973684-171.329087-59.438741l391.617236-391.617236c38.465057 48.940642 59.416228 108.407012 59.416228 171.3516C790.881127 665.862273 665.036977 791.729959 511.175727 791.729959",
    "p-id": "13034",
    fill: "#d81e06"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    t: "1633403574862",
    className: "toms-unvisible-icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "31920",
    width: "80",
    height: "80"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M930.9 456.1c-28.7-31.3-75.8-77.9-137.2-121.7-9.9-7.1-23.6-4.8-30.7 5.1-7.1 9.9-4.8 23.6 5.1 30.7 61.4 43.8 108 91.3 130.4 115.7 4.8 5.2 4.8 12.9 0 18.1-26.6 29-81.9 84.6-154.5 132.2-86.5 56.7-171.4 85.4-252.4 85.4-29.5 0-60-3.9-90.5-11.6-11.8-2.9-23.7 4.2-26.7 16-2.9 11.8 4.2 23.7 16 26.7 34.1 8.6 68.1 12.9 101.2 12.9 89.7 0 182.7-31.1 276.5-92.7 76.6-50.2 134.9-108.7 162.8-139.2 20.3-22.1 20.3-55.5 0-77.6zM870.7 115.9c-8.6-8.6-22.5-8.6-31.1 0L685 270.5c-65.6-30.6-130.7-46.1-193.4-46.1-89.7 0-182.7 31.2-276.5 92.6-76.6 50.2-134.9 108.7-162.8 139.2-20.3 22.1-20.3 55.5 0 77.6C88 572.7 161.2 644.9 257 698.5L112.4 843.1c-8.6 8.6-8.6 22.5 0 31.1 4.3 4.3 10 6.4 15.6 6.4s11.2-2.1 15.5-6.4L870.7 147c8.6-8.6 8.6-22.5 0-31.1zM425 317.5c41.7 0 75.5 33.8 75.5 75.5s-33.8 75.5-75.5 75.5-75.5-33.8-75.5-75.5c0-41.8 33.8-75.5 75.5-75.5z m198.9-24.8c9.3 3.3 18.6 7 27.9 11l-7.5 7.5c-6.4-6.6-13.2-12.7-20.4-18.5zM287.3 664.9C192.6 614 119.8 542.3 84.8 504.1c-4.8-5.2-4.8-12.9 0-18.1 26.5-29 81.8-84.6 154.4-132.2 40.3-26.4 80.2-46.7 119.6-60.9-49 39-80.4 99.2-80.4 166.7 0.1 59.9 25 114 64.8 152.7l-53.9 53.9c-0.6-0.5-1.3-0.9-2-1.3z",
    "p-id": "31921",
    fill: "#bfbfbf"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M491.6 672.6c117.7 0 213.1-95.4 213.1-213.1 0-18.3-2.5-35.9-6.9-52.8l-259 259c16.9 4.3 34.5 6.9 52.8 6.9z",
    "p-id": "31922",
    fill: "#bfbfbf"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("This Block has been", "toms-image-slider"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      color: '#ff0000',
      fontSize: '30px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Disabled", "toms-image-slider")), " !")));
}
const TomsVideoPlayerPreview = props => {
  /* 自定义component */

  const {
    isSelected
  } = props;

  //Media Library On Select
  const removeMedia = () => {
    props.setAttributes({
      posterImgId: 0,
      posterImg: ''
    });
  };
  const onSelectMediaImage = media => {
    props.setAttributes({
      posterImgId: media.id,
      posterImg: media.url
    });
  };
  const removeMediaVideo = () => {
    props.setAttributes({
      videoId: 0,
      videoSource: ''
    });
  };
  const onSelectMediaVideo = media => {
    props.setAttributes({
      videoId: media.id,
      videoSource: media.url
    });
  };
  var preview = props.attributes.preview;
  function onchangeVideoWidth(newValue) {
    props.setAttributes({
      videoWidth: parseInt(newValue)
    });
  }
  function onchangeVideoHeight(newValue) {
    props.setAttributes({
      videoHeight: parseInt(newValue)
    });
  }
  function onChangePosterImg(newValue) {
    if (props.attributes.posterImg != newValue) {
      props.setAttributes({
        posterImg: newValue,
        posterImgId: undefined
      });
    }
  }
  function onChangeMediaVideo(newValue) {
    if (props.attributes.videoSource != newValue) {
      props.setAttributes({
        videoSource: newValue,
        videoId: undefined
      });
    }
  }
  function onChangeVideoType(newValue) {
    props.setAttributes({
      videoType: newValue
    });
  }
  //检查数组source内其中一个值包含有http 则为true
  const sourceChecked = props.attributes.source.some(function (x, index) {
    var patt = new RegExp("http");
    return patt.test(x);
  });
  const mimeTypeChecked = props.attributes.mimeType.some(function (x, index) {
    var patt = new RegExp("video");
    return patt.test(x);
  });

  //console.log(!!(props.attributes.videoSource), !!(props.attributes.posterImg),props.attributes, sourceChecked, mimeTypeChecked)
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "toms-video-player-content"
  }, !!props.attributes.videoSource || !!props.attributes.posterImg || sourceChecked === true ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "toms-video-player-preview",
    style: {
      textAlign: props.attributes.videoAlignment
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    controls: props.attributes.controls !== false ? 'controls' : false,
    disablePictureInPicture: props.attributes.disablePictureInPicture !== false ? true : false,
    poster: props.attributes.posterLock !== false && !!props.attributes.posterImg ? props.attributes.posterImg : '',
    autopictureinpicture: props.attributes.autoPictureInPicture !== true ? false : true,
    autoPlay: props.attributes.autoPlay === true ? true : false,
    loop: props.attributes.loop === true ? true : false,
    muted: props.attributes.muted === true ? true : false,
    playsInline: props.attributes.playsInline === true ? true : false,
    controlsList: (props.attributes.noDownload !== false ? 'nodownload' : '') + (props.attributes.noFullscreen === true ? ' noFullscreen' : '') + (props.attributes.noRemotePlayback === true ? ' noRemotePlayback' : ''),
    preload: props.attributes.preload == undefined ? 'metadata' : props.attributes.preload,
    style: {
      width: props.attributes.disabledResponsiveSize === true ? '' : '100%',
      height: props.attributes.disabledResponsiveSize === true ? '' : 'auto'
    }
  }, !!props.attributes.videoSource && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    src: props.attributes.videoSource,
    type: !!props.attributes.videoType ? props.attributes.videoType : ''
  }), sourceChecked === true && props.attributes.source.map(function (url, index) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      src: url,
      type: props.attributes.mimeType[index]
    });
  }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "toms-video-player-default-image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    t: "1633444148279",
    className: "toms-video-player-default-icon",
    viewBox: "0 0 1039 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "2467",
    width: "280",
    height: "280"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M33.961573 141.154492h972.538472q18.071573 0 18.071573 18.071573V880.085422q0 18.071573-18.071573 18.071573H33.961573Q15.89 898.15798 15.89 880.085422V159.226065q0-18.071573 18.071573-18.071573z",
    fill: "#E5FFD5",
    "p-id": "2468"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M417.842498 545.657078v11.235995h16.535177v-11.239597h-16.535177z m55.935009 0v20.465434c-3.159336-3.382687-7.255304-5.072229-12.298713-5.072229-5.926006 0-10.504701 1.941712-13.718072 5.817933-3.213372 3.829388-4.820058 9.517633-4.820059 17.05753 0 7.593933 1.606686 13.32901 4.820059 17.208832 3.213372 3.883425 7.792067 5.825137 13.718072 5.825138 6.09532 0 10.742461-2.413631 13.959436-7.240895l1.415757 6.24302h13.465902v-60.304763h-16.542382z m225.750196 0v60.304763h16.542381v-60.304763h-16.542381z m-332.223766 3.080082l-19.615259 0.007205 20.28171 57.217476h21.279583l20.191649-57.224681h-18.779494l-11.553009 38.261463h-0.338629l-11.466551-38.25786z m304.874079 0l-32.083287 0.007205v57.217476h18.372419v-18.46248h13.71447c3.544796 0 6.707734-0.803343 9.474404-2.413631a17.461003 17.461003 0 0 0 6.487986-6.823012c1.549047-2.88555 2.323571-6.09532 2.32357-9.640116v-1.091538c0-3.548399-0.774524-6.736554-2.32357-9.560863a16.873806 16.873806 0 0 0-6.484383-6.736553c-2.773875-1.660723-5.933211-2.496487-9.478007-2.496488z m241.38116 12.223062c-2.719838 0-5.151482 0.66645-7.312943 1.999352-2.161461 1.27166-3.746532 3.188155-4.740804 5.738679l-1.077128-6.646493h-13.552361v43.910081h16.542382v-19.546813c0-3.494362 0.752909-6.12414 2.244317-7.90014 1.55265-1.776 4.041932-2.658597 7.478655-2.658597h5.320797v-13.890989c0-0.054037-0.497136-0.223351-1.491409-0.500739a10.785691 10.785691 0 0 0-3.411506-0.504341z m-390.493152 0.090061c-7.702006 0-13.739687 1.93811-18.120248 5.817933-4.376959 3.883425-6.560034 9.596887-6.560035 17.133181 0 7.709211 2.244317 13.473107 6.732951 17.302496 4.488634 3.77175 10.8001 5.655823 18.948809 5.655823 7.75244 0 13.653229-1.495011 17.702366-4.488635 4.041932-2.997226 6.070103-7.158038 6.070103-12.482437h-16.041644c0 1.945315-0.670053 3.49076-1.999351 4.650744-1.27166 1.167189-3.289023 1.761591-6.062898 1.76159-3.04766 0-5.291977-0.806945-6.736554-2.413631-1.383335-1.610288-2.075003-3.998703-2.075002-7.158039h32.915449v-2.827911c0-7.759645-2.132642-13.534348-6.401527-17.298893-4.207644-3.77175-10.338989-5.652221-18.372419-5.652221z m55.441475 0c-7.705609 0-13.74329 1.93811-18.120248 5.817933-4.380561 3.883425-6.567239 9.596887-6.567239 17.133181 0 7.543499 2.186678 13.249756 6.563637 17.133181 4.380561 3.883425 10.425447 5.825137 18.127453 5.825138 7.698404 0 13.739687-1.941712 18.116646-5.825138 4.430995-3.933859 6.650095-9.643719 6.650095-17.133181 0-7.482258-2.215498-13.1669-6.650095-17.046723-4.376959-3.937462-10.418242-5.904391-18.120249-5.904391z m169.807981 0c-7.370582 0-13.044417 1.221225-17.032312 3.660074-3.933859 2.442451-5.904391 5.735077-5.904391 9.892287 0 0.504341 0.028819 0.893404 0.086458 1.167189h16.286609v-0.331424c0-1.329299 0.612414-2.305558 1.830037-2.910768 1.27166-0.612414 2.770273-0.915019 4.488634-0.915018 1.884074 0 3.411506 0.4431 4.575092 1.329298 1.221225 0.886199 1.826435 2.186678 1.826435 3.90504v2.161461c-6.981519 0-12.63374 0.417882-16.956662 1.250045-4.322922 0.82856-7.64797 2.388414-9.978745 4.657948-2.269534 2.2191-3.400699 5.457689-3.400699 9.726575 0 8.206347 5.151482 12.320328 15.454447 12.320328 3.494362 0 6.545624-0.504341 9.150185-1.502215a26.744478 26.744478 0 0 0 7.060773-3.995101c0.778126 1.718362 2.190281 3.083684 4.236463 4.081559 2.107425 0.940236 4.762419 1.412155 7.979394 1.412155 1.660723 0 3.126914-0.13329 4.405778-0.41428a21.290391 21.290391 0 0 0 2.910767-0.673656c0.724089-0.277387 1.167189-0.461112 1.332901-0.572787v-9.568068h-2.990021c-0.886199 0-1.556252-0.302605-1.999351-0.915018-0.4431-0.612414-0.662848-1.386937-0.662848-2.327173v-17.133181c0-5.047012-2.107425-8.681868-6.318671-10.897366-4.214849-2.269534-9.676141-3.407904-16.380273-3.407904z m105.817928 0c-7.705609 0-13.736085 1.93811-18.120249 5.817933-4.373356 3.883425-6.570842 9.596887-6.570841 17.133181 0 7.709211 2.244317 13.473107 6.736553 17.302496 4.481429 3.77175 10.807305 5.655823 18.948809 5.655823 7.763248 0 13.664036-1.495011 17.705968-4.488635 4.045535-2.997226 6.066501-7.158038 6.066501-12.482437h-16.045246c0 1.945315-0.655643 3.49076-1.988544 4.650744-1.275262 1.167189-3.303433 1.761591-6.073706 1.76159-3.051262 0-5.288375-0.806945-6.736553-2.413631-1.37613-1.610288-2.0714-3.998703-2.0714-7.158039h32.915449v-2.827911c0-7.759645-2.132642-13.534348-6.397925-17.298893-4.207644-3.77175-10.338989-5.652221-18.372419-5.652221z m-436.29091 1.001477v43.910081h16.535177v-43.913683h-16.535177z m359.234824 0l17.461003 43.910081c-0.778126 4.049137-3.242192 6.066501-7.403004 6.066501h-6.650095v9.899491c2.773875 0.997875 5.958428 1.498613 9.560862 1.498613 5.929608 0 10.529918-1.603084 13.797326-4.820058 3.325048-3.162938 6.12414-7.817284 8.393674-13.977448l15.627363-42.580782h-16.293813l-7.723621 29.186929h-0.587197l-8.393674-29.183327H777.084527z m-118.610174 0.244966h7.565113c1.934508 0 3.386289 0.497136 4.322922 1.498613 1.001477 0.940236 1.495011 2.298354 1.495011 4.070751v0.662848c0 1.721964-0.493534 3.083684-1.491408 4.081559-0.943838 0.997875-2.388414 1.498613-4.326525 1.498613h-7.565113v-11.815987z m-134.731071 9.308692v0.007205c2.330775 0 4.128391 0.670053 5.403652 1.999351 1.329299 1.329299 1.988544 3.134118 1.988545 5.403653h-16.1245c0.612414-4.935336 3.523181-7.410209 8.732303-7.410209z m331.056576 0v0.007205c2.327173 0 4.135595 0.670053 5.403653 1.999351 1.332901 1.329299 1.999351 3.134118 1.999351 5.403653h-16.128101c0.612414-4.935336 3.512374-7.410209 8.725097-7.410209z m-276.281551 0.66645v0.007205c5.482906 0 8.224359 3.130516 8.224359 9.395151v4.740804c0 6.210598-2.737851 9.315897-8.224359 9.315897-5.42887 0-8.148708-3.105299-8.148708-9.315897v-4.740804c0-6.268237 2.716236-9.402355 8.148708-9.402356z m-111.880826 1.001477c2.435246 0 4.268886 0.882597 5.490111 2.658597 1.214021 1.721964 1.826435 3.966281 1.826435 6.740156v2.745056c0 2.773875-0.612414 5.01459-1.826435 6.736553-1.224828 1.718362-3.054865 2.579343-5.490111 2.579344-4.766022 0-7.147231-2.831514-7.147231-8.487337v-4.402176c0-5.713462 2.38121-8.573795 7.147231-8.573795z m287.841766 13.555963v3.746533c0 1.718362-0.835765 3.159336-2.496487 4.322922-1.606686 1.163587-3.487157 1.747181-5.648619 1.747181-3.768147 0-5.652221-1.383335-5.65222-4.15721 0-1.721964 1.102345-3.083684 3.321445-4.081559 2.269534-1.051911 5.763896-1.577867 10.475881-1.577867z m-112.658951 223.008742a7.168846 7.168846 0 0 0-7.204871 7.140027v50.542164c0 3.962679 3.242192 7.208473 7.204871 7.208472h64.843831a7.230087 7.230087 0 0 0 7.20487-7.208472v-50.542164c0-3.962679-3.242192-7.140026-7.20487-7.140027h-64.843831z m-592.600567 3.60964v57.678588l23.415828-14.420547 23.415828-14.416946-23.415828-14.416945-23.415828-14.42415z m808.74667 0v21.62902h7.20487v-14.416945h14.40974v-7.212075h-21.61461z m36.02435 0v7.212075h14.409741v14.416945h7.20487v-21.62902h-21.614611z m77.776573 0.104471a1.40495 1.40495 0 0 0-1.40495 1.188804l-1.08073 7.647969c-1.729169 0.720487-3.350265 1.693144-4.863287 2.8099l-7.168846-2.885551a1.394142 1.394142 0 0 0-1.729169 0.619619l-5.763896 9.946323a1.480601 1.480601 0 0 0 0.324219 1.837242l6.052091 4.755214a24.089483 24.089483 0 0 0-0.180122 2.817104c0 0.933031 0.068446 1.866061 0.180122 2.806297l-6.052091 4.755215a1.426564 1.426564 0 0 0-0.324219 1.837241l5.763896 9.949926c0.324219 0.612414 1.116755 0.875392 1.729169 0.626824l7.168846-2.892756c1.480601 1.152779 3.098094 2.089412 4.863287 2.813502l1.08073 7.640765c0.072049 0.684463 0.684463 1.196008 1.40495 1.196008h11.531395a1.397745 1.397745 0 0 0 1.401347-1.196008l1.08073-7.640765c1.732771-0.720487 3.350265-1.696747 4.863288-2.813502l7.168846 2.892756a1.394142 1.394142 0 0 0 1.729168-0.626824l5.763896-9.949926a1.527432 1.527432 0 0 0-0.324219-1.837241l-6.052091-4.755215c0.108073-0.900609 0.180122-1.837242 0.180122-2.809899s-0.072049-1.873266-0.180122-2.809899l6.052091-4.758817a1.426564 1.426564 0 0 0 0.324219-1.837242l-5.763896-9.946323a1.40495 1.40495 0 0 0-1.729168-0.619619l-7.168846 2.881948a20.346553 20.346553 0 0 0-4.863288-2.806297l-1.08073-7.647969a1.368925 1.368925 0 0 0-1.401347-1.188804h-11.531395z m-329.947026 3.389891h64.843831v50.646635h-64.843831v-50.646635z m-96.365138 0.108073a7.230087 7.230087 0 0 0-7.20487 7.212075v36.045966c0 3.962679 3.242192 7.208473 7.20487 7.208472h50.434091a7.230087 7.230087 0 0 0 7.20487-7.208472v-36.045966c0-3.966281-3.242192-7.212075-7.20487-7.212075h-50.434091z m204.438189 0v50.470116h72.048701v-50.470116h-72.048701z m-407.341741 2.024569c-2.968406 0-5.241543 1.181599-6.808602 3.530386-1.563457 2.341583-2.341583 5.749486-2.341583 10.220109 0 4.456212 0.778126 7.853308 2.341583 10.2093 1.567059 2.341583 3.840196 3.508772 6.808602 3.508772 2.961202 0 5.223531-1.167189 6.783385-3.508772 1.570662-2.355993 2.355993-5.753089 2.355993-10.2093 0-4.467019-0.785331-7.874923-2.355993-10.216506-1.556252-2.35239-3.818581-3.530386-6.783385-3.530387z m54.324721 0c-2.622573 0-4.683166 0.619619-6.196189 1.851652-1.502215 1.22843-2.255124 2.89996-2.255124 5.014589 0 1.516625 0.421485 2.79549 1.275262 3.851003 0.85738 1.048309 2.060593 1.765193 3.59523 2.147052-1.725566 0.39987-3.072877 1.188804-4.03833 2.355992-0.972657 1.167189-1.451781 2.593753-1.451781 4.286898 0 2.561331 0.778126 4.539068 2.33798 5.907993 1.570662 1.372528 3.818581 2.053388 6.732952 2.053388 2.917972 0 5.151482-0.68086 6.711336-2.053388 1.570662-1.368925 2.355993-3.346662 2.355993-5.907993 0-1.693144-0.479124-3.119709-1.448179-4.286898-0.958248-1.170791-2.305558-1.956122-4.02392-2.355992 1.520228-0.381858 2.712634-1.098743 3.559206-2.147052 0.864584-1.055513 1.296877-2.334378 1.296876-3.851003 0-2.114629-0.752909-3.786159-2.251522-5.014589-1.502215-1.22843-3.566411-1.851652-6.19979-1.851652z m51.730967 0c-1.044706 0-2.193883 0.154905-3.443928 0.450304a28.268308 28.268308 0 0 0-4.034727 1.304082v3.620447c1.412155-0.788933 2.745056-1.379733 3.984293-1.772398 1.25725-0.389063 2.438849-0.583594 3.562808-0.583594 1.581469 0 2.867538 0.4431 3.847401 1.3329 0.994272 0.882597 1.484203 2.031773 1.484203 3.436724 0 0.864584-0.226953 1.747181-0.688065 2.647789-0.446702 0.882597-1.246443 1.96693-2.392017 3.256602-0.601607 0.684463-2.08581 2.215498-4.430995 4.593104a693.630857 693.630857 0 0 0-5.54775 5.655823v3.015238h16.801757v-3.011635h-12.493245c2.881948-2.943189 5.111855-5.237941 6.696927-6.869844 1.585071-1.639108 2.521705-2.629778 2.813502-2.975611 1.080731-1.322094 1.815627-2.464066 2.215497-3.433121 0.410678-0.983465 0.619619-2.020966 0.619619-3.108901 0-2.294751-0.810548-4.128391-2.438848-5.493714-1.631903-1.37613-3.818581-2.064195-6.556432-2.064195z m32.594832 0c-1.044706 0-2.186678 0.154905-3.440325 0.450304a28.41961 28.41961 0 0 0-4.03833 1.304082v3.620447c1.415757-0.788933 2.748658-1.379733 3.987896-1.772398 1.25725-0.389063 2.435246-0.583594 3.562808-0.583594 1.581469 0 2.867538 0.4431 3.847401 1.3329 0.994272 0.882597 1.484203 2.031773 1.484203 3.436724 0 0.864584-0.226953 1.747181-0.688065 2.647789-0.446702 0.882597-1.246443 1.96693-2.392017 3.256602-0.605209 0.684463-2.08581 2.215498-4.430995 4.593104-2.341583 2.3668-4.189632 4.250873-5.54775 5.655823v3.015238h16.801757v-3.011635h-12.496847c2.881948-2.943189 5.115458-5.237941 6.700529-6.869844 1.577867-1.639108 2.521705-2.629778 2.813502-2.975611 1.077128-1.322094 1.81923-2.464066 2.215497-3.433121a7.889333 7.889333 0 0 0 0.619619-3.108901c0-2.294751-0.810548-4.128391-2.442451-5.493714-1.628301-1.37613-3.818581-2.064195-6.556432-2.064195z m21.726286 0c-1.044706 0-2.179473 0.154905-3.433121 0.450304a28.416008 28.416008 0 0 0-4.034727 1.304082v3.620447c1.412155-0.788933 2.737851-1.379733 3.980691-1.772398a11.988904 11.988904 0 0 1 3.566411-0.583594c1.585071 0 2.860333 0.4431 3.840195 1.3329 0.994272 0.882597 1.491408 2.031773 1.491409 3.436724 0 0.864584-0.237761 1.747181-0.69527 2.647789-0.446702 0.882597-1.246443 1.96693-2.392017 3.256602-0.605209 0.684463-2.078605 2.215498-4.427393 4.593104-2.341583 2.3668-4.189632 4.250873-5.54775 5.655823v3.015238h16.798155v-3.011635h-12.493245c2.881948-2.943189 5.111855-5.237941 6.696927-6.869844 1.577867-1.639108 2.528909-2.629778 2.820706-2.975611 1.077128-1.322094 1.815627-2.464066 2.215498-3.433121 0.41428-0.983465 0.619619-2.020966 0.619619-3.108901 0-2.294751-0.817753-4.128391-2.449656-5.493714-1.628301-1.37613-3.818581-2.064195-6.556432-2.064195z m-126.542736 0.479124l-11.001837 16.772937v3.46194h11.93847v6.24302h3.566411v-6.24302h3.771749v-2.982816h-3.771749v-17.252061h-4.503044z m50.073847 0l-9.215029 29.846174h3.011636l9.218631-29.846174h-3.011635zM141.975227 820.659765v43.254438l30.620698-21.632622-30.620698-21.621816z m36.02435 0v43.254438h7.204871v-43.254438h-7.204871z m164.544824 1.260853c1.851652 0 3.234987 0.907814 4.15721 2.727043 0.929428 1.808422 1.401347 4.535466 1.401347 8.177528 0 3.627652-0.468317 6.347491-1.401347 8.16672-0.922223 1.808422-2.305558 2.716236-4.15721 2.716236-1.844447 0-3.231384-0.907814-4.164415-2.716236-0.922223-1.81923-1.386937-4.539068-1.386937-8.16672 0-3.642062 0.461112-6.369105 1.386937-8.177528 0.929428-1.81923 2.319968-2.730646 4.164415-2.730646z m54.324721 0c1.53824 0 2.730646 0.381858 3.59523 1.152779 0.875392 0.767319 1.314889 1.830037 1.314889 3.198962s-0.4431 2.442451-1.314889 3.206167c-0.864584 0.774524-2.05699 1.156382-3.59523 1.156382-1.545445 0-2.755863-0.381858-3.616845-1.152779-0.850175-0.767319-1.275262-1.837242-1.275262-3.206167 0-1.372528 0.425087-2.438849 1.275262-3.206168 0.864584-0.767319 2.0714-1.152779 3.616845-1.152779z m-19.554018 0.756511v14.12875H368.280197l9.034907-14.12875z m379.775908 1.585071h57.638961v36.045966h-57.638961v-36.045966z m-400.100847 2.990022v4.503043h3.735726v-4.503043h-3.735726z m107.276914 0v4.503043h3.735725v-4.503043h-3.735725z m513.253332 4.902914a10.097625 10.097625 0 0 1 0 20.188046 10.097625 10.097625 0 0 1 0-20.188046z m-580.651289 1.300479c1.711157 0 3.054865 0.453907 4.023919 1.368925 0.983465 0.904211 1.469794 2.157859 1.469794 3.753737 0 1.585071-0.486329 2.842321-1.469794 3.764545-0.979862 0.907814-2.327173 1.368925-4.023919 1.368925-1.703952 0-3.040455-0.461112-4.02392-1.368925-0.969055-0.911416-1.451781-2.168666-1.451782-3.764545 0-1.595879 0.482726-2.845924 1.451782-3.757339 0.97626-0.911416 2.323571-1.365323 4.02392-1.365323z m148.578831 5.223531h10.807305v7.212074h-10.807305v-7.212074z m18.012175 0h32.421916v7.212074h-32.421916v-7.212074z m107.172443 0v21.62902h28.81948v-21.62902h-28.81948z m-313.642406 2.842321v4.510248h3.735726v-4.510248h-3.735726z m107.276914 0v4.510248h3.735725v-4.510248h-3.735725z m393.692115 7.972189v21.632622h21.61461v-7.215677h-14.40974v-14.416945h-7.20487z m50.434091 0v14.424149h-14.409741v7.208473h21.614611v-21.632622h-7.20487z m-362.945332 3.602435h32.421915v7.212075h-32.421915v-7.212075z m39.626785 0h10.807306v7.212075h-10.807306v-7.212075z",
    "p-id": "2469"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M354.954126 773.999396a10.833488 10.822652 90 0 1 0.629441 3.605252 10.833488 10.822652 90 0 1-0.630426 3.603282h629.994193a3.596387 3.596387 0 0 0 3.600327-3.604267 3.596387 3.596387 0 0 0-3.600327-3.604267z",
    fill: "#E4E4E4",
    "p-id": "2470"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M344.760915 768.478238a9.128381 9.121485 90 0 0-8.372853 5.521158H55.516254a3.596387 3.596387 0 0 0-3.603283 3.605252 3.597372 3.597372 0 0 0 3.603283 3.603282h280.877718a9.128381 9.121485 90 0 0 8.365958 5.528054 9.128381 9.121485 90 0 0 9.124441-9.131336 9.128381 9.121485 90 0 0-9.124441-9.121485z",
    fill: "#FF000F",
    "fill-opacity": ".941",
    "p-id": "2471"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M236.030053 504.280229a595.526603 595.138496 90 0 0-98.867641 4.954759 11.924914 11.917033 90 0 0-10.207986 9.791314 314.42528 314.220392 90 0 0 0 111.266359 11.935749 11.924914 90 0 0 10.207986 9.802149 595.391652 595.004531 90 0 0 79.088005 5.279823 595.391652 595.004531 90 0 0 79.076185-5.279823 11.924914 11.917033 90 0 0 10.201091-9.802149 314.567126 314.362238 90 0 0-0.010835-111.261434 11.935749 11.924914 90 0 0-10.212912-9.791314 595.526603 595.138496 90 0 0-59.276848-4.959684z m-43.20491 38.901263a8.171905 8.16501 90 0 1 4.069207 0.983072l3.108791 1.585916v-0.040386l28.771095 14.504737 28.768141 14.507693-28.768141 14.505723-28.771095 14.504737v-0.149726l-3.108791 1.582962a8.171905 8.16501 90 0 1-12.047059-6.772161v-47.446499a8.171905 8.16501 90 0 1 7.977852-7.766068z",
    fill: "#D81E06",
    "p-id": "2472"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M280.702675 809.635246v7.654758c10.739909 3.19843 18.581825 13.167051 18.581825 24.955044 0 11.787008-7.841916 21.749719-18.581825 24.948149v7.663624c14.901709-3.384603 26.014949-16.696455 26.014948-32.611773 0-15.916302-11.113239-29.226184-26.014948-32.609802z m-7.430169 2.861546l-18.581825 18.59266h-14.865263v22.311193h14.864278l18.58281 18.591675z m7.430169 14.873143v29.749242c5.499487-2.528602 9.291897-8.293065 9.291897-14.874129 0-6.470738-3.79241-12.122907-9.291897-14.875113z",
    "p-id": "2473"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M317.587558 279.836529a0.308318 0.308318 0 0 0-0.303393 0.309303v29.199589c0 0.167457 0.134951 0.302408 0.303393 0.302407h38.148691v134.050372c0 0.164502 0.131011 0.303393 0.295512 0.303393h50.814357c0.164502 0 0.295512-0.137906 0.295512-0.303393v-9.223929a71.49432 71.49432 0 0 1-25.484996-54.627453 71.49432 71.49432 0 0 1 25.484996-54.725956V309.647828h73.567832c0.167457 0 0.303393-0.134951 0.303393-0.302407V280.145832a0.308318 0.308318 0 0 0-0.303393-0.309303z m404.922037 0.167457v1.386939h4.320392v10.793101h1.659796v-10.793101h4.320392v-1.385954z m11.890437 0v12.18004h1.597738v-10.694597l3.138342 8.351183h1.659795l3.138343-8.351183v10.694597h1.604633v-12.179055h-2.455709l-3.124552 8.28814-3.102881-8.28814z m-98.032325 17.120023l-11.504301 7.119881v19.658475h-115.496128c-0.154652 0-0.273842 0.11525-0.273842 0.260051v11.278727a71.49432 71.49432 0 0 1 15.549867 44.40469 71.49432 71.49432 0 0 1-15.549867 44.509105v16.310319c0 0.167457 0.134951 0.309303 0.302408 0.309303h34.384847c0.167457 0 0.302408-0.141846 0.302408-0.309303v-87.387966h27.144791v58.096769c0 0.126085 0.099489 0.225575 0.225575 0.225574h26.764565c0.126085 0 0.225575-0.099489 0.225575-0.226559v-58.095784h26.419801v36.475106l11.49051 7.10609H697.17334c0.149726 0 0.265961 0.1251 0.265961 0.275811v47.408083c0 0.149726-0.116235 0.265961-0.265961 0.265961H649.764273a0.270886 0.270886 0 0 1-0.274827-0.265961V422.779857h-24.62604v47.302683c0 0.149726 0.1251 0.261036 0.274826 0.261036h86.198036l9.864207-6.107258v-86.782166l-11.798829-7.303098H649.764273c-0.149726 0-0.274827-0.110325-0.274827-0.260051v-47.415963c0-0.149726 0.1251-0.267931 0.274827-0.267931h47.409067c0.149726 0 0.266946 0.118205 0.266946 0.267931v21.762524H721.200475V297.390956a0.264976 0.264976 0 0 0-0.266947-0.265962z",
    "p-id": "2474"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M418.247974 331.367996v0.002955a12.444031 12.444031 0 0 0-12.157383 11.829365v72.258711a12.444031 12.444031 0 0 0 18.355265 10.313386l4.73805-2.413352v0.22656l43.845187-22.088573 43.845187-22.088573-43.844202-22.099409-43.846172-22.089558v0.063043l-4.73805-2.413352a12.444031 12.444031 0 0 0-6.197882-1.500218z m24.582698 27.260041a5.368477 5.368477 0 0 1 2.670448 0.650128l2.045932 1.041189v-0.035462l18.915754 9.530278 18.919694 9.537172-18.919694 9.530278-18.915754 9.530277v-0.089638l-2.045932 1.040204a5.368477 5.368477 0 0 1-7.917764-4.452388V363.736463a5.368477 5.368477 0 0 1 5.247316-5.102516z",
    fill: "#FF0000",
    "p-id": "2475"
  }))), isSelected && props.attributes.videoBlock !== false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "toms-video-player-url"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Source URL", "toms-video-player"),
    className: "toms-video-player-video-main-url",
    value: props.attributes.videoSource,
    onChange: onChangeMediaVideo,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Video Url", "toms-video-player")
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "toms-video-player-main-options"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Type&Codecs", "toms-video-player"),
    className: "toms-video-player-main-type",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("e.g. video/mp4", "toms-video-player"),
    value: props.attributes.videoType,
    onChange: onChangeVideoType
  }), props.attributes.videoSize === true && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Width", "toms-video-player"),
    type: "number",
    className: "toms-video-player-width",
    value: props.attributes.videoWidth,
    onChange: onchangeVideoWidth
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Height", "toms-video-player"),
    type: "number",
    className: "toms-video-player-height",
    value: props.attributes.videoHeight,
    onChange: onchangeVideoHeight
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "toms-video-player-main-media-botton"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaUpload, {
    onSelect: onSelectMediaVideo,
    value: props.attributes.videoId,
    allowedTypes: ['video'],
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        className: "toms-video-player-main-media-botton-add-video",
        onClick: open,
        isPrimary: true
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        icon: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          role: "img",
          "aria-hidden": "true",
          focusable: "false"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
          d: "M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h13.4c.4 0 .8.4.8.8v13.4zM10 15l5-3-5-3v6z"
        }))
      }), (props.attributes.videoId == 0 || props.attributes.videoId == undefined) && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Choose a Video", "toms-video-player") || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Change a Video", "toms-video-player"));
    }
  })), (props.attributes.videoId != 0 || props.attributes.videoId == undefined) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "toms-video-player-main-media-botton-remove",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Empty this video URL!", "toms-video-player"),
    onClick: removeMediaVideo,
    isLink: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    t: "1629270164001",
    className: "toms-video-player-main-media-botton-remove-icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "54190",
    width: "22",
    height: "22"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M873.525261 147.003104C896.999411 147.003104 916.365619 150.892595 931.628186 158.670153 946.885024 166.447711 959.013978 176.17215 968.013619 187.837775 977.014694 199.504823 983.271888 212.144601 986.792365 225.757107 990.312845 239.371037 992.075232 252.005118 992.075232 263.676439 992.075232 269.118309 991.880365 273.395182 991.48777 276.511332 991.096605 279.621786 990.900307 282.342008 990.900307 284.677697L990.900307 291.676217 913.432605 291.676217 913.432605 904.193424C913.432605 919.748541 910.303293 934.72543 904.040365 949.112701 897.783171 963.504243 888.78353 976.144022 877.045741 987.032032 865.309382 997.918621 851.02544 1006.67033 834.201082 1013.284317 817.376723 1019.894032 798.010515 1023.198176 776.098157 1023.198176L252.592963 1023.198176C232.248127 1023.198176 213.078217 1020.087722 195.0775 1013.86824 177.083948 1007.643059 161.629381 998.892774 148.718097 987.615955 135.805381 976.339139 125.629381 962.725206 118.197262 946.781286 110.763709 930.837363 107.048366 912.750019 107.048366 892.527798L107.048366 291.676217 34.270336 291.676217C33.492306 290.89718 33.099709 288.950298 33.099709 285.841268 32.315948 281.951778 31.924784 269.895922 31.924784 249.673702 31.924784 239.566153 34.270336 228.283638 38.965739 215.837552 43.661142 203.39289 50.702097 191.920957 60.094336 181.423177 69.486575 170.9197 81.61553 162.169413 96.481202 155.170893 111.352605 148.172373 128.954993 144.673113 149.30556 144.673113L253.767888 144.673113 253.767888 73.501552C253.767888 53.279332 260.808844 35.971027 274.896485 21.585179 288.984127 7.192211 306.195351 0 326.545917 0L693.933619 0C721.326576 0 740.300186 7.192211 750.86735 21.585179 761.428784 35.971027 766.711651 53.279332 766.711651 73.501552L766.711651 145.83526C783.144845 146.614298 800.747232 147.003104 819.531709 147.003104L873.525261 147.003104 873.525261 147.003104ZM326.545917 147.003104 693.933619 147.003104 693.933619 73.501552 326.545917 73.501552 326.545917 147.003104ZM290.154754 885.52928C315.194993 885.52928 327.716544 869.585357 327.716544 837.69609L327.716544 296.344746 254.942814 296.344746 254.942814 837.69609C254.942814 854.030243 257.484665 866.086096 262.572665 873.863654 267.659232 881.641213 276.855172 885.52928 290.154754 885.52928L290.154754 885.52928ZM512.00359 884.361437C525.301741 884.361437 534.301382 880.667059 538.998218 873.278307 543.693619 865.890982 546.039171 854.030243 546.039171 837.69609L546.039171 296.344746 473.266874 296.344746 473.266874 837.69609C473.266874 868.80632 486.178157 884.361437 512.00359 884.361437L512.00359 884.361437ZM732.670336 882.030019C746.759411 882.030019 756.144486 878.335645 760.841322 870.942621 765.536723 863.553869 767.882275 851.69313 767.882275 835.358976L767.882275 296.344746 693.933619 296.344746 693.933619 835.358976C693.933619 866.469206 706.846336 882.030019 732.670336 882.030019L732.670336 882.030019Z",
    "p-id": "54191"
  }))))), props.attributes.posterLock === true && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
    className: "toms-video-player-poster"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    className: "toms-video-player-poster-url",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Poster Image URL", "toms-video-player"),
    value: props.attributes.posterImg,
    onChange: onChangePosterImg,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Image url", "toms-video-player")
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, {
    className: "toms-video-player-poster-media"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaUpload, {
    onSelect: onSelectMediaImage,
    value: props.attributes.posterImgId,
    allowedTypes: ['image'],
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        className: "toms-video-player-poster-media-add-image",
        onClick: open,
        isPrimary: true
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"
      })), (props.attributes.posterImgId == 0 || props.attributes.posterImgId == undefined) && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Choose an image", "toms-video-player") || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Change an image", "toms-video-player"));
    }
  })), (props.attributes.posterImgId != 0 || props.attributes.posterImgId == undefined) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "toms-video-player-poster-media-button-remove",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Empty Poster image URL !", "toms-video-player"),
    onClick: removeMedia,
    isLink: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    t: "1629270164001",
    className: "toms-video-player-poster-media-button-remove-icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "p-id": "54190",
    width: "22",
    height: "22"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M873.525261 147.003104C896.999411 147.003104 916.365619 150.892595 931.628186 158.670153 946.885024 166.447711 959.013978 176.17215 968.013619 187.837775 977.014694 199.504823 983.271888 212.144601 986.792365 225.757107 990.312845 239.371037 992.075232 252.005118 992.075232 263.676439 992.075232 269.118309 991.880365 273.395182 991.48777 276.511332 991.096605 279.621786 990.900307 282.342008 990.900307 284.677697L990.900307 291.676217 913.432605 291.676217 913.432605 904.193424C913.432605 919.748541 910.303293 934.72543 904.040365 949.112701 897.783171 963.504243 888.78353 976.144022 877.045741 987.032032 865.309382 997.918621 851.02544 1006.67033 834.201082 1013.284317 817.376723 1019.894032 798.010515 1023.198176 776.098157 1023.198176L252.592963 1023.198176C232.248127 1023.198176 213.078217 1020.087722 195.0775 1013.86824 177.083948 1007.643059 161.629381 998.892774 148.718097 987.615955 135.805381 976.339139 125.629381 962.725206 118.197262 946.781286 110.763709 930.837363 107.048366 912.750019 107.048366 892.527798L107.048366 291.676217 34.270336 291.676217C33.492306 290.89718 33.099709 288.950298 33.099709 285.841268 32.315948 281.951778 31.924784 269.895922 31.924784 249.673702 31.924784 239.566153 34.270336 228.283638 38.965739 215.837552 43.661142 203.39289 50.702097 191.920957 60.094336 181.423177 69.486575 170.9197 81.61553 162.169413 96.481202 155.170893 111.352605 148.172373 128.954993 144.673113 149.30556 144.673113L253.767888 144.673113 253.767888 73.501552C253.767888 53.279332 260.808844 35.971027 274.896485 21.585179 288.984127 7.192211 306.195351 0 326.545917 0L693.933619 0C721.326576 0 740.300186 7.192211 750.86735 21.585179 761.428784 35.971027 766.711651 53.279332 766.711651 73.501552L766.711651 145.83526C783.144845 146.614298 800.747232 147.003104 819.531709 147.003104L873.525261 147.003104 873.525261 147.003104ZM326.545917 147.003104 693.933619 147.003104 693.933619 73.501552 326.545917 73.501552 326.545917 147.003104ZM290.154754 885.52928C315.194993 885.52928 327.716544 869.585357 327.716544 837.69609L327.716544 296.344746 254.942814 296.344746 254.942814 837.69609C254.942814 854.030243 257.484665 866.086096 262.572665 873.863654 267.659232 881.641213 276.855172 885.52928 290.154754 885.52928L290.154754 885.52928ZM512.00359 884.361437C525.301741 884.361437 534.301382 880.667059 538.998218 873.278307 543.693619 865.890982 546.039171 854.030243 546.039171 837.69609L546.039171 296.344746 473.266874 296.344746 473.266874 837.69609C473.266874 868.80632 486.178157 884.361437 512.00359 884.361437L512.00359 884.361437ZM732.670336 882.030019C746.759411 882.030019 756.144486 878.335645 760.841322 870.942621 765.536723 863.553869 767.882275 851.69313 767.882275 835.358976L767.882275 296.344746 693.933619 296.344746 693.933619 835.358976C693.933619 866.469206 706.846336 882.030019 732.670336 882.030019L732.670336 882.030019Z",
    "p-id": "54191"
  }))))), " "))));
};
/* harmony default export */ __webpack_exports__["default"] = (TomSVideoPlayer);

/***/ }),

/***/ "./src/assets/edit.scss":
/*!******************************!*\
  !*** ./src/assets/edit.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/video.scss":
/*!*******************************!*\
  !*** ./src/assets/video.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/edit */ "./src/blocks/edit.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);







var TomSVPIcon = FromPHP.defaultImgUrl ? FromPHP.defaultImgUrl : '';
const TomSVideoPlayerIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Icon
// icon={
//     <svg t="1633442741459" className="toms-video-player-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2094" width="24" height="24">
//         <path d="M609.214496 57.524408a2361.040572 2361.040572 0 0 0-392.209124 19.653543 47.289448 47.289448 0 0 0-40.516535 38.79307 1246.578867 1246.578867 0 0 0 0 441.146446 47.319684 47.319684 0 0 0 40.516535 38.853542 2360.511438 2360.511438 0 0 0 313.746134 20.938582 2360.511438 2360.511438 0 0 0 313.700779-20.938582 47.289448 47.289448 0 0 0 40.486299-38.853542 1247.153355 1247.153355 0 0 0-0.045355-441.11621 47.319684 47.319684 0 0 0-40.516534-38.823306 2361.040572 2361.040572 0 0 0-235.162199-19.653543zM437.820484 211.744247a32.398109 32.398109 0 0 1 16.131024 3.91559l12.351495 6.274016v-0.166299l114.14173 57.494171 114.126611 57.539527-114.141729 57.494171-114.14173 57.50929v-0.604724l-12.336377 6.289134a32.398109 32.398109 0 0 1-47.773228-26.849764V242.524718a32.398109 32.398109 0 0 1 31.642204-30.780471z" fill="#FF0000" p-id="2095"></path><path d="M156.351515 661.795259a0.514016 0.514016 0 0 0-0.514016 0.514016v49.436219c0 0.287244 0.226772 0.498898 0.514016 0.498898h64.569447v226.953065c0 0.287244 0.226772 0.498898 0.514016 0.498898h86.022045a0.498898 0.498898 0 0 0 0.498898-0.498898v-15.617007a121.035588 121.035588 0 0 1-43.147086-92.477478 121.035588 121.035588 0 0 1 43.147086-92.658896v-26.199684h124.558107a0.498898 0.498898 0 0 0 0.498897-0.498898v-49.436219a0.514016 0.514016 0 0 0-0.498897-0.514016z m685.515574 0.272126v2.343307h7.317165v18.277795h2.79685v-18.277795h7.317165v-2.343307z m20.137322 0v20.621102h2.706142V664.59211l5.291338 14.120314h2.811968l5.321575-14.120314v18.096377h2.72126v-20.621102h-4.15748l-5.291339 14.029606-5.245984-14.029606zM696.037801 691.048802l-19.472126 12.049133v33.290078H481.028042c-0.257008 0-0.468661 0.196535-0.468661 0.453544V755.905493a121.035588 121.035588 0 0 1 26.320629 75.182361 121.035588 121.035588 0 0 1-26.320629 75.348659v27.605669c0 0.302362 0.226772 0.529134 0.498898 0.529134h58.219841a0.529134 0.529134 0 0 0 0.514015-0.529134v-147.945823h45.959054v98.358422c0 0.211654 0.166299 0.377953 0.377953 0.377953h45.308975a0.377953 0.377953 0 0 0 0.393071-0.377953v-98.358422h44.734487v61.757478l19.44189 12.034016h102.969446a0.453543 0.453543 0 0 1 0.453543 0.453543v80.262045a0.453543 0.453543 0 0 1-0.453543 0.453544h-80.277163a0.453543 0.453543 0 0 1-0.453544-0.453544V903.760608H676.565675V983.856354c0 0.257008 0.196535 0.453543 0.453544 0.453543h145.919996l16.705511-10.340787v-146.917792l-19.971023-12.366614H718.714966a0.453543 0.453543 0 0 1-0.453544-0.453543V733.984234a0.453543 0.453543 0 0 1 0.453544-0.453543h80.246927a0.453543 0.453543 0 0 1 0.453543 0.453543v36.842834h40.22929V691.502345a0.453543 0.453543 0 0 0-0.453543-0.453543z" opacity=".96" p-id="2096"></path><path d="M326.641904 747.182344a21.044409 21.044409 0 0 0-20.560629 20.001259v122.154328a21.044409 21.044409 0 0 0 31.03748 17.431181l8.012598-4.08189v0.393071l74.124092-37.341732 74.124093-37.341731-74.124093-37.356849-74.124092-37.341732v0.120945l-8.012598-4.08189a21.044409 21.044409 0 0 0-10.476851-2.539842z m41.574803 46.079999a9.070866 9.070866 0 0 1 4.505196 1.103622l3.462047 1.7537v-0.060472l31.974803 16.115905 31.974802 16.115905-31.974802 16.115905-31.974803 16.115905v-0.151181l-3.477165 1.753701a9.070866 9.070866 0 0 1-13.379527-7.528819v-52.701731a9.070866 9.070866 0 0 1 8.87433-8.617322z" fill="#FF0000" p-id="2097"></path>
//     </svg>
// }
, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: TomSVPIcon,
    style: {
      height: "24px",
      width: "auto"
    }
  })
});
{
  /* Change the TomS Blocks Category Icon */
  (function () {
    var TomSLogo = FromPHP.defaultLogo ? FromPHP.defaultLogo : '';
    const TomSBlocksIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Icon
    // icon={
    //     <svg t="1633509965289" className="toms-blocks-icon" viewBox="0 0 1078 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2725" width="24" height="24">
    //         <path d="M9.872126 282.058576a0.755905 0.755905 0 0 0-0.755906 0.755905v72.94488c0 0.423307 0.347717 0.755905 0.755906 0.755906h95.274328v334.866133c0 0.408189 0.332598 0.740787 0.755906 0.740788H232.818892a0.755905 0.755905 0 0 0 0.755905-0.755906v-23.039999a178.590232 178.590232 0 0 1-63.66236-136.45606 178.590232 178.590232 0 0 1 63.647242-136.697949v-38.657007h183.775744a0.755905 0.755905 0 0 0 0.755905-0.755906v-72.94488a0.755905 0.755905 0 0 0-0.755905-0.755905z m1011.47714 0.423307v3.462047h10.794331v26.95559h4.142362v-26.95559h10.79433v-3.477165z m29.707086 0v30.417637h3.991181V286.18582l7.831181 20.862991h4.15748l7.831181-20.862991v26.7137h4.021417v-30.417637h-6.137952l-7.800945 20.696692-7.75559-20.71181z m-244.883143 42.738896l-28.724409 17.794016v49.103621H488.919673c-0.377953 0-0.695433 0.302362-0.695433 0.650078V420.948651a178.590232 178.590232 0 0 1 38.853542 110.921572 178.590232 178.590232 0 0 1-38.853542 111.17858v40.758424c0 0.423307 0.332598 0.755905 0.755905 0.755906h85.901101a0.755905 0.755905 0 0 0 0.755905-0.755906v-218.305506h67.804723v145.118736c0 0.302362 0.24189 0.574488 0.55937 0.574489h66.852282c0.302362 0 0.574488-0.257008 0.574488-0.574489V465.486603h65.99055v91.116848l28.70929 17.748661H958.034622c0.377953 0 0.680315 0.302362 0.680315 0.680315v118.435272c0 0.362835-0.302362 0.680315-0.680315 0.680315h-118.420154a0.680315 0.680315 0 0 1-0.680315-0.680315v-54.364723h-61.515589V757.281241c0 0.362835 0.302362 0.665197 0.680314 0.665197h215.327239l24.642519-15.269291V525.89857l-29.480314-18.232441h-148.973854a0.665197 0.665197 0 0 1-0.680315-0.680315v-118.420154c0-0.377953 0.302362-0.680315 0.680315-0.680315h118.420154c0.377953 0 0.680315 0.302362 0.680315 0.680315V442.915265h59.353699v-117.014171a0.680315 0.680315 0 0 0-0.680315-0.680315z" opacity=".96" p-id="2726"></path><path d="M267.363773 425.484084a26.910236 26.910236 0 0 0-26.275275 25.564724v156.215429a26.910236 26.910236 0 0 0 39.66992 22.284094l10.250079-5.215748v0.498898l94.790549-47.758109 94.77543-47.742991-94.790548-47.773227-94.775431-47.75811v0.151182l-10.250079-5.230866a26.910236 26.910236 0 0 0-13.394645-3.235276zM320.503929 484.38424a11.610708 11.610708 0 0 1 5.775118 1.405984l4.429606 2.267717v-0.090709l40.879369 20.605984 40.909606 20.621102-40.909606 20.590865-40.879369 20.605984v-0.196535l-4.429606 2.267716a11.610708 11.610708 0 0 1-17.1137-9.645354v-67.381416a11.610708 11.610708 0 0 1 11.338582-11.03622z" fill="#FF0000" p-id="2727"></path>
    //     </svg>
    // }
    , {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: TomSLogo,
        style: {
          height: "14px",
          width: "auto"
        }
      })
    });
    wp.blocks.updateCategory('tomsneddon', {
      icon: TomSBlocksIcon
    });
  })();
}
wp.blocks.registerBlockType("tomsneddon-video-player/toms-video-player", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("TomS Video Player", "toms-video-player"),
  icon: TomSVideoPlayerIcon,
  category: "tomsneddon",
  attributes: {
    videoBlock: {
      type: 'boolean',
      default: true
    },
    videoAlignment: {
      type: "string",
      default: "none"
    },
    controls: {
      type: 'boolean',
      default: true
    },
    autoPictureInPicture: {
      type: 'boolean',
      default: undefined
    },
    disablePictureInPicture: {
      type: 'boolean',
      default: true
    },
    autoPlay: {
      type: 'boolean',
      default: undefined
    },
    loop: {
      type: 'boolean',
      default: undefined
    },
    muted: {
      type: 'boolean',
      default: false
    },
    playsInline: {
      type: 'boolean',
      default: false
    },
    noDownload: {
      type: 'boolean',
      default: true
    },
    noFullscreen: {
      type: 'boolean',
      default: false
    },
    noRemotePlayback: {
      type: 'boolean',
      default: false
    },
    preload: {
      type: 'string',
      default: 'metadata'
    },
    disableSaveVideoAs: {
      type: 'boolean',
      default: true
    },
    posterLock: {
      type: 'boolean',
      default: false
    },
    posterImgId: {
      type: 'number',
      default: 0
    },
    posterImg: {
      type: 'string',
      default: ''
    },
    videoRemark: {
      type: 'string'
    },
    videoId: {
      type: 'number',
      default: 0
    },
    videoSource: {
      type: 'string',
      default: ''
    },
    videoType: {
      type: 'string',
      default: ''
    },
    videoWidth: {
      type: 'number'
    },
    videoHeight: {
      type: 'number'
    },
    preview: {
      type: 'boolean',
      default: false
    },
    videoSize: {
      type: 'boolean',
      default: false
    },
    disabledResponsiveSize: {
      type: 'boolean',
      default: false
    },
    sourceLock: {
      type: 'boolean',
      default: false
    },
    source: {
      type: 'array',
      default: ['']
    },
    mimeType: {
      type: 'array',
      default: ['']
    }
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Simply protect your videos from being downloaded 'Directly'.", "toms-video-player"),
  // example: {
  //     attributes: {
  //         videoTitle: __("TomS Video Player", "toms-video-player"),
  //         videoSource: ['']
  //     }
  // },
  edit: function (props) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_blocks_edit__WEBPACK_IMPORTED_MODULE_1__["default"], props));
  },
  save: function (props) {
    return null;
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map