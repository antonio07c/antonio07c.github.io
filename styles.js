(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** F:/Code/ng-bits/node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!F:/Code/ng-bits/node_modules/postcss-loader/src??embedded!F:/Code/ng-bits/node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "div.code-toolbar {\n\tposition: relative;\n}\n\ndiv.code-toolbar > .toolbar {\n\tposition: absolute;\n\ttop: .3em;\n\tright: .2em;\n\t-webkit-transition: opacity 0.3s ease-in-out;\n\ttransition: opacity 0.3s ease-in-out;\n\topacity: 0;\n}\n\ndiv.code-toolbar:hover > .toolbar {\n\topacity: 1;\n}\n\n/* Separate line b/c rules are thrown out if selector is invalid.\n   IE11 and old Edge versions don't support :focus-within. */\n\ndiv.code-toolbar:focus-within > .toolbar {\n\topacity: 1;\n}\n\ndiv.code-toolbar > .toolbar .toolbar-item {\n\tdisplay: inline-block;\n}\n\ndiv.code-toolbar > .toolbar a {\n\tcursor: pointer;\n}\n\ndiv.code-toolbar > .toolbar button {\n\tbackground: none;\n\tborder: 0;\n\tcolor: inherit;\n\tfont: inherit;\n\tline-height: normal;\n\toverflow: visible;\n\tpadding: 0;\n\t-webkit-user-select: none; /* for button */\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n}\n\ndiv.code-toolbar > .toolbar a,\ndiv.code-toolbar > .toolbar button,\ndiv.code-toolbar > .toolbar span {\n\tcolor: #bbb;\n\tfont-size: .8em;\n\tpadding: 0 .5em;\n\tbackground: #f5f2f0;\n\tbackground: rgba(224, 224, 224, 0.2);\n\tbox-shadow: 0 2px 0 0 rgba(0,0,0,0.2);\n\tborder-radius: .5em;\n}\n\ndiv.code-toolbar > .toolbar a:hover,\ndiv.code-toolbar > .toolbar a:focus,\ndiv.code-toolbar > .toolbar button:hover,\ndiv.code-toolbar > .toolbar button:focus,\ndiv.code-toolbar > .toolbar span:hover,\ndiv.code-toolbar > .toolbar span:focus {\n\tcolor: inherit;\n\ttext-decoration: none;\n}\n\n/**\n * okaidia theme for JavaScript, CSS and HTML\n * Loosely based on Monokai textmate theme by http://www.monokai.nl/\n * @author ocodia\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n  color: #f8f8f2;\n  background: none;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none; }\n\n/* Code blocks */\n\npre[class*=\"language-\"] {\n  padding: 1em;\n  margin: .5em 0;\n  overflow: auto;\n  border-radius: 0.3em; }\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n  background: #272822; }\n\n/* Inline code */\n\n:not(pre) > code[class*=\"language-\"] {\n  padding: .1em;\n  border-radius: .3em;\n  white-space: normal; }\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: slategray; }\n\n.token.punctuation {\n  color: #f8f8f2; }\n\n.namespace {\n  opacity: .7; }\n\n.token.property,\n.token.tag,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #f92672; }\n\n.token.boolean,\n.token.number {\n  color: #ae81ff; }\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: #a6e22e; }\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n  color: #f8f8f2; }\n\n.token.atrule,\n.token.attr-value,\n.token.function,\n.token.class-name {\n  color: #e6db74; }\n\n.token.keyword {\n  color: #66d9ef; }\n\n.token.regex,\n.token.important {\n  color: #fd971f; }\n\n.token.important,\n.token.bold {\n  font-weight: bold; }\n\n.token.italic {\n  font-style: italic; }\n\n.token.entity {\n  cursor: help; }\n\nBody {\n  font-family: Roboto,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\n  overflow-x: hidden;\n  margin: 0;\n  background-color: #fafafa;\n  color: #0f0f0f; }\n\npre {\n  margin: 24px 0 !important; }\n\n:root {\n  --header-color: #0073b1;\n  /* --header-gradient: linear-gradient(152deg, rgba(2,0,36,1) 0%, rgba(63,63,205,1) 0%, rgba(0,194,255,1) 100%); */\n  --header-gradient: linear-gradient(152deg, rgba(2,0,36,1) 0%, rgba(63,63,205,1) 0%, rgba(0,163,210,1) 100%);\n  --primary-color: #1a73e8;\n  --secondary-color: #99c3ff; }\n\n.h1 {\n  font-size: 18px; }\n\na {\n  text-decoration: none;\n  background-color: transparent;\n  outline: 0;\n  cursor: pointer;\n  color: #0f0f0f; }\n\na:hover {\n  color: #1a73e8; }\n\na:visited {\n  color: #0f0f0f; }\n\n::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n  background-color: transparent; }\n\n::-webkit-scrollbar-thumb {\n  background-color: #ccc; }\n\n::-webkit-scrollbar-track {\n  background-color: transparent; }\n\nbit-divider .divider {\n  margin: 20px 0 10px 0 !important;\n  font-size: 22px; }\n\nbit-note .note-container {\n  margin: 10px 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvdG9vbGJhci9wcmlzbS10b29sYmFyLmNzcyIsInByb2plY3RzL25nLWJpdHMtZGVtby9zcmMvRjpcXENvZGVcXG5nLWJpdHMvbm9kZV9tb2R1bGVzXFxwcmlzbWpzXFx0aGVtZXNcXHByaXNtLW9rYWlkaWEuY3NzIiwicHJvamVjdHMvbmctYml0cy1kZW1vL3NyYy9GOlxcQ29kZVxcbmctYml0cy9wcm9qZWN0c1xcbmctYml0cy1kZW1vXFxzcmNcXHN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsbUJBQW1CO0NBQ25COztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixZQUFZO0NBQ1osNkNBQXFDO0NBQXJDLHFDQUFxQztDQUNyQyxXQUFXO0NBQ1g7O0FBRUQ7Q0FDQyxXQUFXO0NBQ1g7O0FBRUQ7NkRBQzZEOztBQUM3RDtDQUNDLFdBQVc7Q0FDWDs7QUFFRDtDQUNDLHNCQUFzQjtDQUN0Qjs7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFFRDtDQUNDLGlCQUFpQjtDQUNqQixVQUFVO0NBQ1YsZUFBZTtDQUNmLGNBQWM7Q0FDZCxvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCwwQkFBMEIsQ0FBQyxnQkFBZ0I7Q0FDM0MsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0Qjs7QUFFRDs7O0NBR0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0NBQ3BCLHFDQUFxQztDQUNyQyxzQ0FBc0M7Q0FDdEMsb0JBQW9CO0NBQ3BCOztBQUVEOzs7Ozs7Q0FNQyxlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCOztBQy9ERDs7OztHQUlHOztBQUVIOztFQUVDLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsc0NBQXFDO0VBQ3JDLHVFQUFzRTtFQUN0RSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixxQkFBb0I7RUFDcEIsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFFaEIsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxZQUFXO0VBRVgsc0JBQXFCO0VBRXJCLGtCQUFpQjtFQUNqQixjQUFhLEVBQ2I7O0FBRUQsaUJBQWlCOztBQUNqQjtFQUNDLGFBQVk7RUFDWixlQUFjO0VBQ2QsZUFBYztFQUNkLHFCQUFvQixFQUNwQjs7QUFFRDs7RUFFQyxvQkFBbUIsRUFDbkI7O0FBRUQsaUJBQWlCOztBQUNqQjtFQUNDLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsb0JBQW1CLEVBQ25COztBQUVEOzs7O0VBSUMsaUJBQWdCLEVBQ2hCOztBQUVEO0VBQ0MsZUFBYyxFQUNkOztBQUVEO0VBQ0MsWUFBVyxFQUNYOztBQUVEOzs7OztFQUtDLGVBQWMsRUFDZDs7QUFFRDs7RUFFQyxlQUFjLEVBQ2Q7O0FBRUQ7Ozs7OztFQU1DLGVBQWMsRUFDZDs7QUFFRDs7Ozs7O0VBTUMsZUFBYyxFQUNkOztBQUVEOzs7O0VBSUMsZUFBYyxFQUNkOztBQUVEO0VBQ0MsZUFBYyxFQUNkOztBQUVEOztFQUVDLGVBQWMsRUFDZDs7QUFFRDs7RUFFQyxrQkFBaUIsRUFDakI7O0FBQ0Q7RUFDQyxtQkFBa0IsRUFDbEI7O0FBRUQ7RUFDQyxhQUFZLEVBQ1o7O0FDdEhEO0VBQ0ksdUdBQXNHO0VBQ3RHLG1CQUFrQjtFQUNsQixVQUFRO0VBQ1IsMEJBQXlCO0VBQ3pCLGVBQW9CLEVBQ3JCOztBQUVEO0VBQ0ksMEJBQXdCLEVBQzNCOztBQW9CSDtFQUNJLHdCQUFlO0VBQ2Ysa0hBQWtIO0VBQ2xILDRHQUFrQjtFQUNsQix5QkFBZ0I7RUFDaEIsMkJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxzQkFBcUI7RUFDckIsOEJBQTZCO0VBQzdCLFdBQVU7RUFDVixnQkFBZTtFQUNmLGVBQW9CLEVBQ3ZCOztBQUVEO0VBQ0ksZUFBYSxFQUNoQjs7QUFFRDtFQUNJLGVBQW9CLEVBQ3ZCOztBQUVEO0VBQ0ksV0FBVTtFQUNWLFlBQVc7RUFDWCw4QkFDSixFQUFDOztBQUVEO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksOEJBQTZCLEVBQ2hDOztBQUVEO0VBQ0ksaUNBQWdDO0VBQ2hDLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksMEJBQXdCLEVBQzNCIiwiZmlsZSI6InByb2plY3RzL25nLWJpdHMtZGVtby9zcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29kZS10b29sYmFyIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLjNlbTtcblx0cmlnaHQ6IC4yZW07XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcblx0b3BhY2l0eTogMDtcbn1cblxuZGl2LmNvZGUtdG9vbGJhcjpob3ZlciA+IC50b29sYmFyIHtcblx0b3BhY2l0eTogMTtcbn1cblxuLyogU2VwYXJhdGUgbGluZSBiL2MgcnVsZXMgYXJlIHRocm93biBvdXQgaWYgc2VsZWN0b3IgaXMgaW52YWxpZC5cbiAgIElFMTEgYW5kIG9sZCBFZGdlIHZlcnNpb25zIGRvbid0IHN1cHBvcnQgOmZvY3VzLXdpdGhpbi4gKi9cbmRpdi5jb2RlLXRvb2xiYXI6Zm9jdXMtd2l0aGluID4gLnRvb2xiYXIge1xuXHRvcGFjaXR5OiAxO1xufVxuXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgLnRvb2xiYXItaXRlbSB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIGEge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciBidXR0b24ge1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRib3JkZXI6IDA7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHRmb250OiBpbmhlcml0O1xuXHRsaW5lLWhlaWdodDogbm9ybWFsO1xuXHRvdmVyZmxvdzogdmlzaWJsZTtcblx0cGFkZGluZzogMDtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogZm9yIGJ1dHRvbiAqL1xuXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xuXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciBhLFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIGJ1dHRvbixcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciBzcGFuIHtcblx0Y29sb3I6ICNiYmI7XG5cdGZvbnQtc2l6ZTogLjhlbTtcblx0cGFkZGluZzogMCAuNWVtO1xuXHRiYWNrZ3JvdW5kOiAjZjVmMmYwO1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDIyNCwgMjI0LCAyMjQsIDAuMik7XG5cdGJveC1zaGFkb3c6IDAgMnB4IDAgMCByZ2JhKDAsMCwwLDAuMik7XG5cdGJvcmRlci1yYWRpdXM6IC41ZW07XG59XG5cbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciBhOmhvdmVyLFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIGE6Zm9jdXMsXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgYnV0dG9uOmhvdmVyLFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIGJ1dHRvbjpmb2N1cyxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciBzcGFuOmhvdmVyLFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIHNwYW46Zm9jdXMge1xuXHRjb2xvcjogaW5oZXJpdDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIiwiLyoqXG4gKiBva2FpZGlhIHRoZW1lIGZvciBKYXZhU2NyaXB0LCBDU1MgYW5kIEhUTUxcbiAqIExvb3NlbHkgYmFzZWQgb24gTW9ub2thaSB0ZXh0bWF0ZSB0aGVtZSBieSBodHRwOi8vd3d3Lm1vbm9rYWkubmwvXG4gKiBAYXV0aG9yIG9jb2RpYVxuICovXG5cbmNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLFxucHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XG5cdGNvbG9yOiAjZjhmOGYyO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHR0ZXh0LXNoYWRvdzogMCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuXHRmb250LWZhbWlseTogQ29uc29sYXMsIE1vbmFjbywgJ0FuZGFsZSBNb25vJywgJ1VidW50dSBNb25vJywgbW9ub3NwYWNlO1xuXHRmb250LXNpemU6IDFlbTtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0d2hpdGUtc3BhY2U6IHByZTtcblx0d29yZC1zcGFjaW5nOiBub3JtYWw7XG5cdHdvcmQtYnJlYWs6IG5vcm1hbDtcblx0d29yZC13cmFwOiBub3JtYWw7XG5cdGxpbmUtaGVpZ2h0OiAxLjU7XG5cblx0LW1vei10YWItc2l6ZTogNDtcblx0LW8tdGFiLXNpemU6IDQ7XG5cdHRhYi1zaXplOiA0O1xuXG5cdC13ZWJraXQtaHlwaGVuczogbm9uZTtcblx0LW1vei1oeXBoZW5zOiBub25lO1xuXHQtbXMtaHlwaGVuczogbm9uZTtcblx0aHlwaGVuczogbm9uZTtcbn1cblxuLyogQ29kZSBibG9ja3MgKi9cbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuXHRwYWRkaW5nOiAxZW07XG5cdG1hcmdpbjogLjVlbSAwO1xuXHRvdmVyZmxvdzogYXV0bztcblx0Ym9yZGVyLXJhZGl1czogMC4zZW07XG59XG5cbjpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLFxucHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XG5cdGJhY2tncm91bmQ6ICMyNzI4MjI7XG59XG5cbi8qIElubGluZSBjb2RlICovXG46bm90KHByZSkgPiBjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XG5cdHBhZGRpbmc6IC4xZW07XG5cdGJvcmRlci1yYWRpdXM6IC4zZW07XG5cdHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi50b2tlbi5jb21tZW50LFxuLnRva2VuLnByb2xvZyxcbi50b2tlbi5kb2N0eXBlLFxuLnRva2VuLmNkYXRhIHtcblx0Y29sb3I6IHNsYXRlZ3JheTtcbn1cblxuLnRva2VuLnB1bmN0dWF0aW9uIHtcblx0Y29sb3I6ICNmOGY4ZjI7XG59XG5cbi5uYW1lc3BhY2Uge1xuXHRvcGFjaXR5OiAuNztcbn1cblxuLnRva2VuLnByb3BlcnR5LFxuLnRva2VuLnRhZyxcbi50b2tlbi5jb25zdGFudCxcbi50b2tlbi5zeW1ib2wsXG4udG9rZW4uZGVsZXRlZCB7XG5cdGNvbG9yOiAjZjkyNjcyO1xufVxuXG4udG9rZW4uYm9vbGVhbixcbi50b2tlbi5udW1iZXIge1xuXHRjb2xvcjogI2FlODFmZjtcbn1cblxuLnRva2VuLnNlbGVjdG9yLFxuLnRva2VuLmF0dHItbmFtZSxcbi50b2tlbi5zdHJpbmcsXG4udG9rZW4uY2hhcixcbi50b2tlbi5idWlsdGluLFxuLnRva2VuLmluc2VydGVkIHtcblx0Y29sb3I6ICNhNmUyMmU7XG59XG5cbi50b2tlbi5vcGVyYXRvcixcbi50b2tlbi5lbnRpdHksXG4udG9rZW4udXJsLFxuLmxhbmd1YWdlLWNzcyAudG9rZW4uc3RyaW5nLFxuLnN0eWxlIC50b2tlbi5zdHJpbmcsXG4udG9rZW4udmFyaWFibGUge1xuXHRjb2xvcjogI2Y4ZjhmMjtcbn1cblxuLnRva2VuLmF0cnVsZSxcbi50b2tlbi5hdHRyLXZhbHVlLFxuLnRva2VuLmZ1bmN0aW9uLFxuLnRva2VuLmNsYXNzLW5hbWUge1xuXHRjb2xvcjogI2U2ZGI3NDtcbn1cblxuLnRva2VuLmtleXdvcmQge1xuXHRjb2xvcjogIzY2ZDllZjtcbn1cblxuLnRva2VuLnJlZ2V4LFxuLnRva2VuLmltcG9ydGFudCB7XG5cdGNvbG9yOiAjZmQ5NzFmO1xufVxuXG4udG9rZW4uaW1wb3J0YW50LFxuLnRva2VuLmJvbGQge1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cbi50b2tlbi5pdGFsaWMge1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi50b2tlbi5lbnRpdHkge1xuXHRjdXJzb3I6IGhlbHA7XG59XG4iLCJAaW1wb3J0IFwifnByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuY3NzXCI7XG4vL0BpbXBvcnQgXCJ+cHJpc21qcy90aGVtZXMvcHJpc20tY295XCI7XG5AaW1wb3J0IFwifnByaXNtanMvdGhlbWVzL3ByaXNtLW9rYWlkaWFcIjtcblxuQm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90byxcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxcIkx1Y2lkYSBHcmFuZGVcIixzYW5zLXNlcmlmO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBtYXJnaW46MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIGNvbG9yOiByZ2IoMTUsMTUsMTUpO1xuICB9XG5cbiAgcHJle1xuICAgICAgbWFyZ2luOiAyNHB4IDAhaW1wb3J0YW50O1xuICB9XG5cbi8vIHByZXtcbi8vICAgICBkaXNwbGF5OmdyaWQ7XG4vLyB9XG5cbi8vIHByZTphZnRlciwgcHJlOmJlZm9yZXtcbi8vICAgICBkaXNwbGF5Om5vbmUhaW1wb3J0YW50O1xuLy8gfVxuXG4vLyBwcmUgY29kZXtcbi8vICAgICBtYXJnaW46IDEwcHggMDtcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbi8vICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOGU4ZTghaW1wb3J0YW50O1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbi8vIH1cblxuXG46cm9vdHtcbiAgICAtLWhlYWRlci1jb2xvcjogIzAwNzNiMTtcbiAgICAvKiAtLWhlYWRlci1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDE1MmRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoNjMsNjMsMjA1LDEpIDAlLCByZ2JhKDAsMTk0LDI1NSwxKSAxMDAlKTsgKi9cbiAgICAtLWhlYWRlci1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDE1MmRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoNjMsNjMsMjA1LDEpIDAlLCByZ2JhKDAsMTYzLDIxMCwxKSAxMDAlKTtcbiAgICAtLXByaW1hcnktY29sb3I6ICMxYTczZTg7XG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICM5OWMzZmY7XG59XG5cbi5oMSB7ICAgIFxuICAgIGZvbnQtc2l6ZTogMThweDsgICAgXG59XG5cbmF7ICAgIFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgICAgXG4gICAgY29sb3I6IHJnYigxNSwxNSwxNSk7XG59XG5cbmE6aG92ZXJ7XG4gICAgY29sb3I6IzFhNzNlODtcbn1cblxuYTp2aXNpdGVke1xuICAgIGNvbG9yOiByZ2IoMTUsMTUsMTUpO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XG59IFxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmJpdC1kaXZpZGVyIC5kaXZpZGVye1xuICAgIG1hcmdpbjogMjBweCAwIDEwcHggMCAhaW1wb3J0YW50OyAgICBcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5cbmJpdC1ub3RlIC5ub3RlLWNvbnRhaW5lcntcbiAgICBtYXJnaW46IDEwcHggMCFpbXBvcnRhbnQ7XG59Il19 */", '', '']]

/***/ }),

/***/ "../../node_modules/style-loader/lib/addStyles.js":
/*!******************************************************************!*\
  !*** F:/Code/ng-bits/node_modules/style-loader/lib/addStyles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../../node_modules/style-loader/lib/urls.js":
/*!*************************************************************!*\
  !*** F:/Code/ng-bits/node_modules/style-loader/lib/urls.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Code\ng-bits\projects\ng-bits-demo\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map