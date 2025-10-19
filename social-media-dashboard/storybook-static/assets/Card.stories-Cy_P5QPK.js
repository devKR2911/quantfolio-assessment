import{c as e,r as t}from"./iframe-Bd6PPeZG.js";import{t as n}from"./jsx-runtime-DnlJUwfN.js";import{t as r}from"./compiler-runtime--Qlqo9va.js";var i=e(r());t();var a={overflowContainer:`_overflowContainer_hx8ht_1`,cardContainer:`_cardContainer_hx8ht_6`,"border-facebook":`_border-facebook_hx8ht_16`,"border-twitter":`_border-twitter_hx8ht_19`,"border-instagram":`_border-instagram_hx8ht_22`,"border-youtube":`_border-youtube_hx8ht_30`},o=e(n()),s=e=>{let t=(0,i.c)(4),{children:n,type:r,isClickable:s}=e,c=s===void 0?!0:s,l;if(t[0]!==n||t[1]!==c||t[2]!==r){let e=c?(0,o.jsx)(`button`,{type:`button`,className:`${a.cardContainer} ${r?a[`border-${r}`]:``}`,children:n}):(0,o.jsx)(`div`,{className:`${a.cardContainer} ${r?a[`border-${r}`]:``}`,children:n});l=(0,o.jsx)(`div`,{className:a.overflowContainer,children:e}),t[0]=n,t[1]=c,t[2]=r,t[3]=l}else l=t[3];return l},c=s;s.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},type:{required:!1,tsType:{name:`union`,raw:`"facebook" | "twitter" | "instagram" | "youtube"`,elements:[{name:`literal`,value:`"facebook"`},{name:`literal`,value:`"twitter"`},{name:`literal`,value:`"instagram"`},{name:`literal`,value:`"youtube"`}]},description:``},isClickable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}}};var l={title:`core/Card`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`facebook`,`twitter`,`instagram`,`youtube`,void 0]},isClickable:{control:`radio`,options:[!0,!1,void 0]}}};const u={args:{type:`facebook`,isClickable:!0,children:`Card Content`}},d={args:{type:`twitter`,isClickable:!0,children:`Card Content`}},f={args:{type:`instagram`,isClickable:!0,children:`Card Content`}},p={args:{type:`youtube`,isClickable:!0,children:`Card Content`}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: "facebook",
    isClickable: true,
    children: "Card Content"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: "twitter",
    isClickable: true,
    children: "Card Content"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: "instagram",
    isClickable: true,
    children: "Card Content"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: "youtube",
    isClickable: true,
    children: "Card Content"
  }
}`,...p.parameters?.docs?.source}}};const m=[`FacebookCard`,`TwitterCard`,`InstagramCard`,`YoutubeCard`];export{u as FacebookCard,f as InstagramCard,d as TwitterCard,p as YoutubeCard,m as __namedExportsOrder,l as default};