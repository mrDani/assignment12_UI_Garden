"use strict";(self.webpackChunkui_garden=self.webpackChunkui_garden||[]).push([[721],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledButton=styled_components_browser_esm.Ay.button`
  background-color: ${_ref=>{let{disabled}=_ref;return disabled?"#ccc":"#ff69b4"}};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: ${_ref2=>{let{disabled}=_ref2;return disabled?"not-allowed":"pointer"}};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${_ref3=>{let{disabled}=_ref3;return disabled?"#ccc":"#ff1493"}};
  }
`,Button=_ref4=>{let{text,onClick,disabled}=_ref4;return(0,jsx_runtime.jsx)(StyledButton,{onClick,disabled,children:text})},Button_Button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{text:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const Button_stories={title:"UI/Button",component:Button_Button,argTypes:{text:{control:"text"},disabled:{control:"boolean"}}},Default={args:{text:"Click Me",disabled:!1}},Disabled={args:{text:"Disabled",disabled:!0}},__namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Click Me',\n    disabled: false\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Disabled',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Button-Button-stories.523a4ff3.iframe.bundle.js.map