// Created by iWeb 3.0.4 local-build-20160311

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,162),url:'Deep_Space_Wong_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Deep_Space_Wong_files/stroke_1.png'},{rect:new IWRect(1,-1,218,2),url:'Deep_Space_Wong_files/stroke_2.png'},{rect:new IWRect(219,-1,2,2),url:'Deep_Space_Wong_files/stroke_3.png'},{rect:new IWRect(219,1,2,162),url:'Deep_Space_Wong_files/stroke_4.png'},{rect:new IWRect(219,163,2,3),url:'Deep_Space_Wong_files/stroke_5.png'},{rect:new IWRect(1,163,218,3),url:'Deep_Space_Wong_files/stroke_6.png'},{rect:new IWRect(-1,163,2,3),url:'Deep_Space_Wong_files/stroke_7.png'}],new IWSize(220,165)),shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_2:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Deep_Space_Wong_files/Deep_Space_WongMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
