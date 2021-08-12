"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7017],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),h=n,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2849:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],c={id:"Visit_data_in_cache",title:"Visit data in cache"},s=void 0,l={unversionedId:"Cache_Library_User_Guides/Visit_data_in_cache",id:"Cache_Library_User_Guides/Visit_data_in_cache",isDocsHomePage:!1,title:"Visit data in cache",description:"Cachelib provides a concurrent iterator to visit unchained data (items) in a cache while other threads are inserting data to or removing data from the cache. At any time, an item visited by the iterator is guaranteed to be valid even if it is concurrently removed by another thread.",source:"@site/docs/Cache_Library_User_Guides/Visit_data_in_cache.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Visit_data_in_cache",permalink:"/docs/Cache_Library_User_Guides/Visit_data_in_cache",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/Visit_data_in_cache.md",version:"current",frontMatter:{id:"Visit_data_in_cache",title:"Visit data in cache"},sidebar:"someSidebar",previous:{title:"Remove data from cache",permalink:"/docs/Cache_Library_User_Guides/Remove_data_from_cache"},next:{title:"faq",permalink:"/docs/Cache_Library_User_Guides/faq"}},d=[],u={toc:d};function p(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cachelib provides a concurrent iterator to visit unchained data (items) in a cache while other threads are inserting data to or removing data from the cache. At any time, an item visited by the iterator is guaranteed to be valid even if it is concurrently removed by another thread."),(0,i.kt)("p",null,"The current iterator is ",(0,i.kt)("em",{parentName:"p"},"unordered"),"; that is, the order it visits the items is not the same as the order in which they're written to the cache. During iteration, it guarantees visiting all items that exist in the cache. Iterating the cache does not block any other cache operation like ",(0,i.kt)("inlineCode",{parentName:"p"},"find()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"allocate()"),". However, before calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"shutDown()")," API to shut down the cache, you must release all iterators."),(0,i.kt)("p",null,"For example, suppose you write the following three items to cache:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'std::map<std::string, std::string> dict = {\n  { "key1", "item 1" },\n  { "key2", "item 2" },\n  { "key3", "item 3" },\n};\nfor (auto& itr : dict) {\n  auto item_handle = cache->allocate(pool_id, itr.first, itr.second.size());\n  std::memcpy(item_handle->getWritableMemory(), itr.first.data(), itr.second.size());\n  cache->insertOrReplace(item_handle);\n}\n')),(0,i.kt)("p",null,"To visit these three items in the cache, use an iterator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"for (auto itr = cache->begin(); itr != cache->end(); ++itr) {\n  auto key = itr->getKey();\n  auto data = reinterpret_cast<const char*>(itr->getMemory());\n  std::cout << key << \" -> \" << data << '\\n';\n}\n")),(0,i.kt)("p",null,"You can also use the shorter ",(0,i.kt)("inlineCode",{parentName:"p"},"for-each")," statement to visit them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"for (auto& itr : *cache) {\n  auto key = itr.getKey();\n  auto data = reinterpret_cast<const char*>(itr.getMemory());\n  std::cout << key << \" -> \" << data << '\\n';\n}\n")),(0,i.kt)("p",null,"Chained items are stored in cache as a linked list. For example, suppose you write three chained items to cache:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'std::string parent_item("parent item");\nauto parent_item_handle = cache->allocate(pool_id, "parent key", parent_item.size());\nstd::memcpy(parent_item_handle->getWritableMemory(), parent_item.c_str(), parent_item.size());\ncache->insert(parent_item_handle);\n\nauto size = 100\nstd::vector<std::string> vitems = { "item 1", "item 2", "item 3" };\nfor (auto& itr : vitems) {\n  auto item_handle = cache->allocateChainedItem(parent_item_handle, size);\n  std::memcpy(item_handle->getWritableMemory(), itr.c_str(), itr.size());\n  cache->addChainedItem(parent_item_handle, std::move(item_handle));\n}\n')),(0,i.kt)("p",null,"To visit the chained items, use the parent ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemHandle")," to traverse the list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"auto chained_allocs = cache->viewAsChainedAllocs(parent_item_handle);\nfor (const auto& c : chained_allocs.getChain()) {\n  auto data = reinterpret_cast<const char*>(c.getMemory());\n  std::cout << data << '\\n';\n}\n")))}p.isMDXComponent=!0}}]);