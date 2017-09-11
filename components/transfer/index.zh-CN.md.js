webpackJsonp([124,220],{1234:function(t,e){t.exports={content:["section",["p","\u53cc\u680f\u7a7f\u68ad\u9009\u62e9\u6846\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u7528\u76f4\u89c2\u7684\u65b9\u5f0f\u5728\u4e24\u680f\u4e2d\u79fb\u52a8\u5143\u7d20\uff0c\u5b8c\u6210\u9009\u62e9\u884c\u4e3a\u3002"],["p","\u9009\u62e9\u4e00\u4e2a\u6216\u4ee5\u4e0a\u7684\u9009\u9879\u540e\uff0c\u70b9\u51fb\u5bf9\u5e94\u7684\u65b9\u5411\u952e\uff0c\u53ef\u4ee5\u628a\u9009\u4e2d\u7684\u9009\u9879\u79fb\u52a8\u5230\u53e6\u4e00\u680f\u3002\n\u5176\u4e2d\uff0c\u5de6\u8fb9\u4e00\u680f\u4e3a ",["code","source"],"\uff0c\u53f3\u8fb9\u4e00\u680f\u4e3a ",["code","target"],"\uff0cAPI \u7684\u8bbe\u8ba1\u4e5f\u53cd\u6620\u4e86\u8fd9\u4e24\u4e2a\u6982\u5ff5\u3002"]],meta:{category:"Components",subtitle:"\u7a7f\u68ad\u6846",type:"Data Entry",cols:1,title:"Transfer",filename:"components/transfer/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6ce8\u610f",title:"\u6ce8\u610f"},"\u6ce8\u610f"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","dataSource"],["td","\u6570\u636e\u6e90\uff0c\u5176\u4e2d\u7684\u6570\u636e\u5c06\u4f1a\u88ab\u6e32\u67d3\u5230\u5de6\u8fb9\u4e00\u680f\u4e2d\uff0c",["code","targetKeys"]," \u4e2d\u6307\u5b9a\u7684\u9664\u5916\u3002"],["td",["a",{title:null,href:"https://git.io/vMM64"},"TransferItem"],"[]"],["td","[]"]],["tr",["td","render"],["td","\u6bcf\u884c\u6570\u636e\u6e32\u67d3\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u7684\u5165\u53c2\u4e3a ",["code","dataSource"]," \u4e2d\u7684\u9879\uff0c\u8fd4\u56de\u503c\u4e3a ReactElement"],["td","Function(record)"],["td"]],["tr",["td","targetKeys"],["td","\u663e\u793a\u5728\u53f3\u4fa7\u6846\u6570\u636e\u7684key\u96c6\u5408"],["td","string[]"],["td","[]"]],["tr",["td","selectedKeys"],["td","\u8bbe\u7f6e\u54ea\u4e9b\u9879\u5e94\u8be5\u88ab\u9009\u4e2d"],["td","string[]"],["td","[]"]],["tr",["td","onChange"],["td","\u9009\u9879\u5728\u4e24\u680f\u4e4b\u95f4\u8f6c\u79fb\u65f6\u7684\u56de\u8c03\u51fd\u6570"],["td","(targetKeys, direction, moveKeys): void"],["td"]],["tr",["td","onSelectChange"],["td","\u9009\u4e2d\u9879\u53d1\u751f\u6539\u53d8\u65f6\u7684\u56de\u8c03\u51fd\u6570"],["td","(sourceSelectedKeys, targetSelectedKeys): void"],["td"]],["tr",["td","onScroll"],["td","\u9009\u9879\u5217\u8868\u6eda\u52a8\u65f6\u7684\u56de\u8c03\u51fd\u6570"],["td","(direction, event): void"],["td"]],["tr",["td","listStyle"],["td","\u4e24\u4e2a\u7a7f\u68ad\u6846\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f"],["td","object"],["td"]],["tr",["td","className"],["td","\u81ea\u5b9a\u4e49\u7c7b"],["td","string"],["td"]],["tr",["td","titles"],["td","\u6807\u9898\u96c6\u5408\uff0c\u987a\u5e8f\u4ece\u5de6\u81f3\u53f3"],["td","string[]"],["td",["span","'', ''"]]],["tr",["td","operations"],["td","\u64cd\u4f5c\u6587\u6848\u96c6\u5408\uff0c\u987a\u5e8f\u4ece\u4e0b\u81f3\u4e0a"],["td","string[]"],["td",["span","'>', '<'"]]],["tr",["td","showSearch"],["td","\u662f\u5426\u663e\u793a\u641c\u7d22\u6846"],["td","boolean"],["td","false"]],["tr",["td","filterOption"],["td","\u63a5\u6536 ",["code","inputValue"]," ",["code","option"]," \u4e24\u4e2a\u53c2\u6570\uff0c\u5f53 ",["code","option"]," \u7b26\u5408\u7b5b\u9009\u6761\u4ef6\u65f6\uff0c\u5e94\u8fd4\u56de ",["code","true"],"\uff0c\u53cd\u4e4b\u5219\u8fd4\u56de ",["code","false"],"\u3002"],["td","(inputValue, option): boolean"],["td"]],["tr",["td","searchPlaceholder"],["td","\u641c\u7d22\u6846\u7684\u9ed8\u8ba4\u503c"],["td","string"],["td","'\u8bf7\u8f93\u5165\u641c\u7d22\u5185\u5bb9'"]],["tr",["td","notFoundContent"],["td","\u5f53\u5217\u8868\u4e3a\u7a7a\u65f6\u663e\u793a\u7684\u5185\u5bb9"],["td","string","|","ReactNode"],["td","'\u5217\u8868\u4e3a\u7a7a'"]],["tr",["td","footer"],["td","\u5e95\u90e8\u6e32\u67d3\u51fd\u6570"],["td","(props): ReactNode"],["td"]],["tr",["td","lazy"],["td","Transfer \u4f7f\u7528\u4e86 ",["a",{title:null,href:"https://github.com/loktar00/react-lazy-load"},"react-lazy-load"]," \u4f18\u5316\u6027\u80fd\uff0c\u8fd9\u91cc\u53ef\u4ee5\u8bbe\u7f6e\u76f8\u5173\u53c2\u6570\u3002\u8bbe\u4e3a ",["code","false"]," \u53ef\u4ee5\u5173\u95ed\u61d2\u52a0\u8f7d\u3002"],["td","object","|","boolean"],["td",["code","{ height: 32, offset: 32 }"]]],["tr",["td","onSearchChange"],["td","\u641c\u7d22\u6846\u5185\u5bb9\u65f6\u6539\u53d8\u65f6\u7684\u56de\u8c03\u51fd\u6570"],["td","(direction: 'left'","|","'right', event: Event): void"],["td","-"]]]],["h2","\u6ce8\u610f"],["p","\u6309\u7167 React \u7684",["a",{title:null,href:"http://facebook.github.io/react/docs/lists-and-keys.html#keys"},"\u89c4\u8303"],"\uff0c\u6240\u6709\u7684\u7ec4\u4ef6\u6570\u7ec4\u5fc5\u987b\u7ed1\u5b9a key\u3002\u5728 Transfer \u4e2d\uff0c",["code","dataSource"],"\u91cc\u7684\u6570\u636e\u503c\u9700\u8981\u6307\u5b9a ",["code","key"]," \u503c\u3002\u5bf9\u4e8e ",["code","dataSource"]," \u9ed8\u8ba4\u5c06\u6bcf\u5217\u6570\u636e\u7684 ",["code","key"]," \u5c5e\u6027\u4f5c\u4e3a\u552f\u4e00\u7684\u6807\u8bc6\u3002"],["p","\u5982\u679c\u4f60\u7684\u6570\u636e\u6ca1\u6709\u8fd9\u4e2a\u5c5e\u6027\uff0c\u52a1\u5fc5\u4f7f\u7528 ",["code","rowKey"]," \u6765\u6307\u5b9a\u6570\u636e\u5217\u7684\u4e3b\u952e\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// \u6bd4\u5982\u4f60\u7684\u6570\u636e\u4e3b\u952e\u662f uid</span>\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transfer</span> <span class="token attr-name">rowKey</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>record <span class="token operator">=</span><span class="token operator">></span> record<span class="token punctuation">.</span>uid<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>'},["code","// \u6bd4\u5982\u4f60\u7684\u6570\u636e\u4e3b\u952e\u662f uid\nreturn <Transfer rowKey={record => record.uid} />;"]]]}}});