// Created by iWeb 3.0.4 local-build-20160312

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_3:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_4:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,469),url:'HEX_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'HEX_files/stroke_1.png'},{rect:new IWRect(1,-1,486,2),url:'HEX_files/stroke_2.png'},{rect:new IWRect(487,-1,2,2),url:'HEX_files/stroke_3.png'},{rect:new IWRect(487,1,2,469),url:'HEX_files/stroke_4.png'},{rect:new IWRect(487,470,2,3),url:'HEX_files/stroke_5.png'},{rect:new IWRect(1,470,486,3),url:'HEX_files/stroke_6.png'},{rect:new IWRect(-1,470,2,3),url:'HEX_files/stroke_7.png'}],new IWSize(488,471)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_2:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('HEX_files/HEXMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id2');applyEffects()}
function onPageUnload()
{Widget.onunload();}
