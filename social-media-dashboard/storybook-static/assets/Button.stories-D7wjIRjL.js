import{c as e,r as t}from"./iframe-Bd6PPeZG.js";import{t as n}from"./jsx-runtime-DnlJUwfN.js";import{t as r}from"./compiler-runtime--Qlqo9va.js";var i=e(r());t();var a=e(n());const o=e=>{let t=(0,i.c)(16),n,r,o,s,c;t[0]===e?(n=t[1],r=t[2],o=t[3],s=t[4],c=t[5]):({primary:s,size:c,backgroundColor:n,label:r,...o}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=o,t[4]=s,t[5]=c);let l=s===void 0?!1:s,u=c===void 0?`medium`:c,d=l?`storybook-button--primary`:`storybook-button--secondary`,f=`storybook-button--${u}`,p;t[6]!==d||t[7]!==f?(p=[`storybook-button`,f,d],t[6]=d,t[7]=f,t[8]=p):p=t[8];let m=p.join(` `),h;t[9]===n?h=t[10]:(h={backgroundColor:n},t[9]=n,t[10]=h);let g;return t[11]!==r||t[12]!==o||t[13]!==m||t[14]!==h?(g=(0,a.jsx)(`button`,{type:`button`,className:m,style:h,...o,children:r}),t[11]=r,t[12]=o,t[13]=m,t[14]=h,t[15]=g):g=t[15],g};o.__docgenInfo={description:`Primary UI component for user interaction`,methods:[],displayName:`Button`,props:{primary:{required:!1,tsType:{name:`boolean`},description:`Is this the principal call to action on the page?`,defaultValue:{value:`false`,computed:!1}},backgroundColor:{required:!1,tsType:{name:`string`},description:`What background color to use`},size:{required:!1,tsType:{name:`union`,raw:`"small" | "medium" | "large"`,elements:[{name:`literal`,value:`"small"`},{name:`literal`,value:`"medium"`},{name:`literal`,value:`"large"`}]},description:`How large should the button be?`,defaultValue:{value:`"medium"`,computed:!1}},label:{required:!0,tsType:{name:`string`},description:`Button contents`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Optional click handler`}}};var{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Example/Button`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{backgroundColor:{control:`color`}},args:{onClick:s()}};const l={args:{primary:!0,label:`Button`}},u={args:{label:`Button`}},d={args:{size:`large`,label:`Button`}},f={args:{size:`small`,label:`Button`}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Button"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Button"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Button"
  }
}`,...f.parameters?.docs?.source}}};const p=[`Primary`,`Secondary`,`Large`,`Small`];export{d as Large,l as Primary,u as Secondary,f as Small,p as __namedExportsOrder,c as default};