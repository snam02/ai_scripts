/**
 * Adobe ExtendScript for Illustrator CS6+
 * (c) Marat Shagiev
 * e-mail: m_js@bk.ru
 * 11.11.2016
 * */
//@target illustrator
act_setLayTmplAttr();
function act_setLayTmplAttr () {
  var str = '/version 3' + '/name [ 14' + ' 7365744c6179546d706c41747472' + ']' + '/isOpen 1' + '/actionCount 1' + '/action-1 {' + ' /name [ 14' + ' 7365744c6179546d706c41747472' + ' ]' + ' /keyIndex 0' + ' /colorIndex 0' + ' /isOpen 1' + ' /eventCount 1' + ' /event-1 {' + ' /useRulersIn1stQuadrant 0' + ' /internalName (ai_plugin_Layer)' + ' /localizedName [ 5' + ' 4c61796572' + ' ]' + ' /isOpen 1' + ' /isOn 1' + ' /hasDialog 1' + ' /showDialog 0' + ' /parameterCount 10' + ' /parameter-1 {' + ' /key 1836411236' + ' /showInPalette -1' + ' /type (integer)' + ' /value 4' + ' }' + ' /parameter-2 {' + ' /key 1851878757' + ' /showInPalette -1' + ' /type (ustring)' + ' /value [ 20' + ' 4c61796572732050616e656c204f7074696f6e73' + ' ]' + ' }' + ' /parameter-3 {' + ' /key 1953068140' + ' /showInPalette -1' + ' /type (ustring)' + ' /value [ 7' + ' 4c617965722031' + ' ]' + ' }' + ' /parameter-4 {' + ' /key 1953329260' + ' /showInPalette -1' + ' /type (boolean)' + ' /value 1' + ' }' + ' /parameter-5 {' + ' /key 1936224119' + ' /showInPalette -1' + ' /type (boolean)' + ' /value 1' + ' }' + ' /parameter-6 {' + ' /key 1819239275' + ' /showInPalette -1' + ' /type (boolean)' + ' /value 1' + ' }' + ' /parameter-7 {' + ' /key 1886549623' + ' /showInPalette -1' + ' /type (boolean)' + ' /value 1' + ' }' + ' /parameter-8 {' + ' /key 1886547572' + ' /showInPalette -1' + ' /type (boolean)' + ' /value 0' + ' }' + ' /parameter-9 {' + ' /key 1684630830' + ' /showInPalette -1' + ' /type (boolean)' + ' /value 1' + ' }' + ' /parameter-10 {' + ' /key 1885564532' + ' /showInPalette -1' + ' /type (unit real)' + ' /value 50.0' + ' /unit 592474723' + ' }' + ' }' +
    '}';
  var f = new File ('~/ScriptAction.aia');
  f.open ('w');
  f.write (str);
  f.close ();
  app.loadAction (f);
  f.remove ();
  app.doScript ("setLayTmplAttr", "setLayTmplAttr", false); // action name, set name
  app.unloadAction ("setLayTmplAttr", ""); // set name
}
