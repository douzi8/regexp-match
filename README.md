# regexp-demo
This is a regexp demo for javascript, you can learn RegExp from next list.
You can submit code that you think it's useful for others.
And you also can submit [issue](https://github.com/douzi8/regexp-match/issues/new) if you have a problem with RegExp

## install
```
npm install regexp-match
```
### test
```
mocha
```

## API
### singleQuotes
Match single quotes
```js
'a',
'a\'a',
'a\\'
```
### doubleQuotes
Match double quotes
### htmlStartTag
Match html start tag
```html
<div>
<div class="cls">
```
### htmlEndTag
Match html end tag
```html
</div>
```
### blockComment
```js
/* block comment */
```
### lineComment
```js
// line comment
```
### email
```
liaowei08@gmail.com
```
### ip
```
10.2.240.8
```
### url
```
http://127.0.0.1:5389/webapp
```