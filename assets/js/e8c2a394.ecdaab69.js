"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[272],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return h}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(o),h=a,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return o?n.createElement(d,r(r({ref:t},p),{},{components:o})):n.createElement(d,r({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4977:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=o(7462),a=o(3366),i=(o(7294),o(3905)),r=["components"],l={id:"Partition_cache_into_pools",title:"Partition cache into pools"},s=void 0,c={unversionedId:"Cache_Library_User_Guides/Partition_cache_into_pools",id:"Cache_Library_User_Guides/Partition_cache_into_pools",isDocsHomePage:!1,title:"Partition cache into pools",description:"One easy way to manage your cache's memory is to partition it into pools. This is useful when your application has knowledge of different objects and you want to cache them into different pools or you want to set cache memory limits based on application specific context. For example, if you are caching photos on a 20 GB cache, you can separate celebrity photos from cat photos by storing them in two different pools and restrict the size of each pool.",source:"@site/docs/Cache_Library_User_Guides/Partition_cache_into_pools.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Partition_cache_into_pools",permalink:"/docs/Cache_Library_User_Guides/Partition_cache_into_pools",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/Partition_cache_into_pools.md",version:"current",frontMatter:{id:"Partition_cache_into_pools",title:"Partition cache into pools"},sidebar:"someSidebar",previous:{title:"eviction policy",permalink:"/docs/Cache_Library_User_Guides/eviction_policy"},next:{title:"Configure HashTable",permalink:"/docs/Cache_Library_User_Guides/Configure_HashTable"}},p=[{value:"Creating pools",id:"creating-pools",children:[]},{value:"Customizing pools",id:"customizing-pools",children:[{value:"Eviction parameters configuration",id:"eviction-parameters-configuration",children:[]}]},{value:"Resizing pools",id:"resizing-pools",children:[{value:"1. Manual pool resizing",id:"1-manual-pool-resizing",children:[]},{value:"2. Automated pool resizing",id:"2-automated-pool-resizing",children:[]}]},{value:"Pool specific stats",id:"pool-specific-stats",children:[{value:"Stats API",id:"stats-api",children:[]}]}],u={toc:p};function m(e){var t=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"One easy way to manage your cache's memory is to partition it into pools. This is useful when your application has knowledge of different objects and you want to cache them into different pools or you want to set cache memory limits based on application specific context. For example, if you are caching photos on a 20 GB cache, you can separate celebrity photos from cat photos by storing them in two different pools and restrict the size of each pool."),(0,i.kt)("p",null,"So you don't need to create separate cache instance; you can create a single cache and use cachelib to partition it into two or more pools."),(0,i.kt)("p",null,"By partition your cache into pools, you can achieve the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Restricting memory footprint")," Each pool's workload is isolated from others' when it comes to eviction and memory footprint. If you configure a pool to take 10 GB out of a 30 GB cache, cachelib ensures that the pool's footprint across all objects can not grow beyond that.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Improving hit ratio")," Each pool has its own eviction domain. Once a pool is full, cachelib only evicts data in the same pool and does not pull in memory not belonging to the pool. This is useful because, often times, the cache hit ratio curve (hits vs cache size) varies between different workloads. Using pools to isolate workloads ensures that one workload does not impact the other. For example, if you want to guarantee different hit ratios for different objects you cache, partition the cache into different pools, one for each object type."))),(0,i.kt)("h2",{id:"creating-pools"},"Creating pools"),(0,i.kt)("p",null,"You can create and resize pools at runtime. Cachelib supports up to 64 pools. ",(0,i.kt)("inlineCode",{parentName:"p"},"CacheAllocator.h")," defines the following methods to manage pools:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Create a pool with the specified name and size.\npublic PoolId addPool(\n  folly::StringPiece name,\n  size_t size,\n  const std::set<uint32_t>& allocSizes = {},\n  MMConfig config = {},\n  std::shared_ptr<RebalanceStrategy> rebalanceStrategy = nullptr,\n  std::shared_ptr<RebalanceStrategy> resizeStrategy = nullptr,\n  bool ensureProvisionable = false,\n);\n\n// Shrink the existing pool by the specified number of bytes.\npublic bool shrinkPool(PoolId pid, size_t bytes)\n\n// Grow the existing pool by the specified number of bytes.\npublic bool growPool(PoolId pid, size_t bytes);\n\n// Return the ID for the specified pool.\nPoolId getPoolId(folly::StringPiece pool_name) const noexcept;\n")),(0,i.kt)("p",null,"For example, the following code creates two pools from a 30 GB cache:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Create two pools.\nauto photoPoolId = cache.addPool("photos", 10 * 1024 * 1024 * 1024);    // 10 GB pool\nauto regularPoolId = cache.addPool("regular", 20 * 1024 * 1024 * 1024); // 20 GB pool\n')),(0,i.kt)("p",null,"If you have the name of an existing pool, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"getPoolId()")," method to get its ID:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'auto poolId = cache.getPoolId("photos");  // "photos" is the pool name\n')),(0,i.kt)("p",null,"To allocate memory from a specific pool for an item, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"allocate")," with the pool's ID:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Allocate memory for the "my-cat" item from the pool with ID photoPoolId.\nauto photoHandle = cache.allocate(photoPoolId, "my-cat", 1024);\n\n// Allocate memory for the "my blob" item from the pool with ID regularPoolId.\nauto regularHandle = cache.allocate(regularPoolId, "my blob", 400);\n')),(0,i.kt)("p",null,"Each item is associated with a unique key. Use the key to find the item (you don't need the pool ID to look up the item):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'auto handle = cache.find("my-cat");       // find item in photo pool\nauto otherHandle = cache.find("my blob"); // find item in regular pool\n')),(0,i.kt)("h2",{id:"customizing-pools"},"Customizing pools"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"addPool()")," method provides default parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"public PoolId addPool(\n  folly::StringPiece name,\n  size_t size,\n  const std::set<uint32_t>& allocSizes = {},\n  MMConfig config = {},\n  std::shared_ptr<RebalanceStrategy> rebalanceStrategy = nullptr,\n  std::shared_ptr<RebalanceStrategy> resizeStrategy = nullptr,\n  bool ensureProvisionable = false,\n);\n")),(0,i.kt)("p",null,"When calling ",(0,i.kt)("inlineCode",{parentName:"p"},"addPool()")," to create a pool, override some of the default parameters to customize your pool:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Allocation sizes")," Allocation sizes can be customized on a per pool basis. Cachelib uses a slab allocator which can take custom allocation sizes per pool. Tuning the allocation sizes can help you reduce overall memory fragmentation and improving cache hit ratio.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Eviction parameters")," Your ",(0,i.kt)("inlineCode",{parentName:"p"},"MMConfig")," parameter can be customized on a per pool basis when you create the pool. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"#Eviction_parameters_configuration"},"Eviction parameters configuration"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Rebalance strategy")," This lets you override the default strategy that is used for rebalancing the memory in the pool across its various allocation sizes if you choose to. For example, you can set the overall cache to use ",(0,i.kt)("inlineCode",{parentName:"p"},"HitsPerSlab")," strategy and set ",(0,i.kt)("inlineCode",{parentName:"p"},"LruTailAge")," strategy for some specific ones where you want to ensure uniformity in eviction ages across cache objects of different sizes."))),(0,i.kt)("h3",{id:"eviction-parameters-configuration"},"Eviction parameters configuration"),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"MMLru"),", look at the config structure in ",(0,i.kt)("inlineCode",{parentName:"p"},"cachelib/allocator/MMLru.h"),"."),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"MM2Q"),", look at the config structure in ",(0,i.kt)("inlineCode",{parentName:"p"},"cachelib/allocator/MM2Q.h"),"."),(0,i.kt)("p",null,"When configuring your eviction policy, look out for these:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"defaultLruRefreshTime")," By default, this controls how many seconds since the last access; we will promote this item to the head of LRU. Setting this to a longer time (for example, 300 seconds) may help reduce contention in the LRU. However, setting this too high (i.e., close to or higher than the eviction age) will make you evict items sooner because before you get to promote it, it will be evicted.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"lruRefreshRatio")," This is useful if you want a dynamically configured LRU refresh time. For example, you don't know if you should use 60 seconds or 300 seconds. Then you can simply set this to be a ratio of the eviction age, for example, 0.1 which is 10% of the eviction age. In that case, if your eviction age is 1,000 seconds, we will promote an item if it has been 100 seconds since we last accessed it. Or for an eviction age of 3,000 seconds, we will only promote if it has been 300 seconds since its last access.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"mmReconfigureIntervalSecs")," This controls how often we adjust the LRU refresh time per the ratio explained above.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"updateOnWrite")," Should we promote an item to be the head when you access it for mutation?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"updateOnRead")," Should we promote an item to be the head when you access it for pure reads?"))),(0,i.kt)("h2",{id:"resizing-pools"},"Resizing pools"),(0,i.kt)("p",null,"The following describes two ways to resize a pool at runtime."),(0,i.kt)("h3",{id:"1-manual-pool-resizing"},"1. Manual pool resizing"),(0,i.kt)("p",null,"An application can use cachelib APIs to resize pools asynchronously. When changing the pools' sizes, cachelib will shrink or grow the pools asynchronously based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"PoolResizer")," configuration. Depending on the ",(0,i.kt)("inlineCode",{parentName:"p"},"PoolResizer")," configuration and the amount of memory to be resized, cachelib might take a few minutes to hours to finish resizing the pool."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// Move 1 GB from photos pool to regular pool.\nauto res = cache.resizePools(photosPoolId, regularPoolId, 1024 * 1024 * 1024);\n")),(0,i.kt)("p",null,"When the cache has free memory, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"growPool()")," method to increase the pool's size:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"/**\n * Assume the cache has 100 GB memory, 20 GB is added to the\n * photos pool, and 50 GB is added to the regular pool.\n * The remaining 30 GB is unclaimed.\n */\nsize_t extra_bytes = 1024 * 1024 * 1024; // 1 GB\nauto res = cache.growPool(photosPoolId, extra_bytes);\n")),(0,i.kt)("p",null,"To free up some of a pool's memory for another new pool, call the ",(0,i.kt)("inlineCode",{parentName:"p"},"shrinkPool()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'size_t memory_size = 1024 * 1024 * 1024; // 1 GB\n// Shrink an existing pool.\nauto res = cache.shrinkPool(regularPoolId, memory_size);\n\n// Create a new pool.\nauto newPoolId = cache.addPool("new-pool", memory_size);\n')),(0,i.kt)("h3",{id:"2-automated-pool-resizing"},"2. Automated pool resizing"),(0,i.kt)("p",null,"Cachelib provides ",(0,i.kt)("inlineCode",{parentName:"p"},"PoolOptimizer")," to track the hits from each pool and adjust the sizes automatically after the initial setup. We're actively polishing ",(0,i.kt)("inlineCode",{parentName:"p"},"PoolOptimizer")," for wider use. Reach out to us in the Cache Library Users group if you are interested in using it."),(0,i.kt)("h2",{id:"pool-specific-stats"},"Pool specific stats"),(0,i.kt)("h3",{id:"stats-api"},"Stats API"),(0,i.kt)("p",null,"You can track the breakdown of ",(0,i.kt)("inlineCode",{parentName:"p"},"find()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"allocate()"),", hits, number of items in the cache, etc. by pool. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"auto poolStats = cache.getPoolStats(photosPoolId);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PoolStats")," exposes the following counters and information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"struct PoolStats {\n  // Pool name given by users of this pool.\n  std::string poolName;\n\n  // Total pool size assigned by users when adding pool.\n  uint64_t poolSize;\n\n  // Container stats that provide evictions etc.\n  std::unordered_map<ClassId, CacheStat> cacheStats;\n\n  // Stats from the memory allocator perspective. This is a map\n  // of MPStat for each allocation class that this pool has.\n  MPStats mpStats;\n\n  // Number of get hits for this pool.\n  uint64_t numPoolGetHits;\n\n  const std::set<ClassId>& getClassIds() const noexcept {\n    return mpStats.classIds;\n  }\n\n  // Number of attempts to allocate.\n  uint64_t numAllocAttempts() const;\n\n  // Number of attempts that failed.\n  uint64_t numAllocFailures() const;\n\n  // Number of attempts that were invalid.\n  uint64_t numInvalidAllocs() const;\n\n  // Toal memory fragmentation size of this pool.\n  uint64_t totalFragmentation() const;\n\n  // Total number of free allocs for this pool.\n  uint64_t numFreeAllocs() const noexcept;\n\n  // Amount of cache memory that is not allocated.\n  size_t freeMemoryBytes() const noexcept;\n\n  // Number of evictions for this pool.\n  uint64_t numEvictions() const noexcept;\n\n  // Number of all items in this pool.\n  uint64_t numItems() const noexcept;\n\n  // Number of evictable items.\n  uint64_t numEvictableItems() const noexcept;\n\n  // Number of unevictable items.\n  uint64_t numUnevictableItems() const noexcept;\n\n  // Total number of allocations currently in this pool.\n  uint64_t numActiveAllocs() const noexcept;\n\n  // Number of hits for an alloc class in this pool.\n  uint64_t numHitsForClass(ClassId cid) const {\n    return cacheStats.at(cid).numHits;\n  }\n\n  uint64_t numSlabsForClass(ClassId cid) const {\n    return mpStats.acStats.at(cid).totalSlabs();\n  }\n\n  // This is the real eviction age of this pool as this number\n  // guarantees the time any item inserted into this pool will live.\n  uint64_t minEvictionAge() const;\n\n  // Computes the maximum eviction age across all class Ids.\n  uint64_t maxEvictionAge() const;\n}\n")))}m.isMDXComponent=!0}}]);