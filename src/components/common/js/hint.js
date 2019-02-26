/**
 *  hint提示
 *  store
 *  changeHintShow hint显示
 *  changeHintStatus 样式class
 *  changeTitle 内容
 * */
export function hintFunction(store, changeHintStatus, changeHintText) {
  store.commit('changeHintShow', true);
  store.commit('changeHintStatus', changeHintStatus);
  store.commit('changeHintText', changeHintText);
}
