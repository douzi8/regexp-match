/**
 * @description
 * @example
 * 'a', 'a\'a', 'a\\'
 */
exports.singleQuotes = /'([^'\\]|\\.)*'/;

/**
 * @description
 * @exmaple
 * "a", "a\"a", "a\\"
 */
exports.doubleQuotes = /"([^"\\]|\\.)*"/;

/**
 * @description
 * @see http://www.w3.org/TR/html5/syntax.html#syntax-tag-name
 * @example
 * <div>, <div id="">
 */
exports.htmlStartTag = /<[\w-]+('[^']'|"[^"]"|[^>])*>/;

/**
 * @description
 * @see http://www.w3.org/TR/html5/syntax.html#end-tags
 * @exmaple
 * </a>, </div>
 */
exports.htmlEndTag = /<\/[\w-]+[^>]*>/;

// @example 
// /* comment */
exports.blockComment = /\/\*[\s\S]*?\*\//;

/**
 * @description
 * @example
 * // line coment
 */
exports.lineComment = /\/\/.*/;

/**
 * @description
 * @example
 * liaowei08@gamil.com
 */
exports.email = /[\w\.-]+@(?:[\w\-]+\.)+\w{2,4}/;

/**
 * @description
 * @example
 * 10.9.204.5
 */
exports.ip = /(?:([01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d\d?|2[0-4]\d|25[0-5])/;

/**
 * @description
 * protocol (ftp|https?)
 * hostname [-\w]+(\.\w[-\w]*)
 * port :\d+
 * path \/.*
 */
exports.url = /(ftp|https?):\/\/[-\w]+(\.\w[-\w]*)+(:\d+)?(\/.*)?/;