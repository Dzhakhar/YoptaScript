/*!
 * YoptaScript v0.2.6 (https://yopta.space)
 * Copyright (c) 2016 Yopta.Space project and Contributors
 * Licensed under the MIT license
 */
import words from "./words.js";

class Yopta {
  compile(yoptaCode){
    return yoptaCode.replace(/([а-яА-Я]+)/g, function(e){
      if(words[e]){
        return words[e];
      } else {
        return e;
      }
    })
  }
}

const yopta = new Yopta();

if(typeof window !== 'undefined'){
  let scripts = document.querySelectorAll('[language="YoptaScript"]');

  if(scripts.length > 0){
    for (let i = 0; i < scripts.length; ++i) {
      let elem = scripts[i];
      elem.parentNode.removeChild(elem);
      elem.innerHTML = yopta.compile(elem.innerHTML);
      elem.removeAttribute("language");
      document.body.appendChild(elem);
    }
  }
}

exports.compiler = yopta.compile;
export default Yopta;
