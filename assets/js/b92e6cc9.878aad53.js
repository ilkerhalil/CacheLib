"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3177],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return u}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(i),u=a,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return i?n.createElement(h,l(l({ref:t},p),{},{components:i})):n.createElement(h,l({ref:t},p))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},7946:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=i(7462),a=i(3366),r=(i(7294),i(3905)),l=["components"],o={id:"Configure_HybridCache",title:"Configure HybridCache"},s="Example Config",c={unversionedId:"Cache_Library_User_Guides/Configure_HybridCache",id:"Cache_Library_User_Guides/Configure_HybridCache",isDocsHomePage:!1,title:"Configure HybridCache",description:"You can configure the Navy engine (flash cache engine when running in the HybridCache mode) through the NvmCache:",source:"@site/docs/Cache_Library_User_Guides/Configure_HybridCache.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Configure_HybridCache",permalink:"/docs/Cache_Library_User_Guides/Configure_HybridCache",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/Configure_HybridCache.md",version:"current",frontMatter:{id:"Configure_HybridCache",title:"Configure HybridCache"},sidebar:"someSidebar",previous:{title:"HybridCache",permalink:"/docs/Cache_Library_User_Guides/HybridCache"},next:{title:"chained items",permalink:"/docs/Cache_Library_User_Guides/chained_items"}},p=[{value:"1. Common settings",id:"1-common-settings",children:[{value:"(1) Device",id:"1-device",children:[]},{value:"(2) Job scheduler",id:"2-job-scheduler",children:[]},{value:"(3) Other",id:"3-other",children:[]}]},{value:"2. Admission policy settings",id:"2-admission-policy-settings",children:[{value:"(1) &quot;random&quot; policy",id:"1-random-policy",children:[]},{value:"(2) &quot;dynamic_random&quot; policy",id:"2-dynamic_random-policy",children:[]}]},{value:"3. Engine specific settings",id:"3-engine-specific-settings",children:[{value:"(1) Block Cache",id:"1-block-cache",children:[]},{value:"(2) BigHash",id:"2-bighash",children:[]}]},{value:"Random reject",id:"random-reject",children:[]},{value:"Reject first",id:"reject-first",children:[]},{value:"Dynamic reject (or rate throttle)",id:"dynamic-reject-or-rate-throttle",children:[]},{value:"ML-based admission policy",id:"ml-based-admission-policy",children:[]}],m={toc:p};function d(e){var t=e.components,i=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"example-config"},"Example Config"),(0,r.kt)("p",null,"You can configure the Navy engine (flash cache engine when running in the HybridCache mode) through the NvmCache::Config::navyConfig in the Cache config by using APIs provided in navy::NavyConfig, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "cachelib/allocator/CacheAllocator.h"\nLruAllocator::Config lruConfig;\n\nLruAllocator::NvmCacheConfig nvmConfig;\nnvmConfig.navyConfig.setBlockSize(4096);\nnvmConfig.navyConfig.setSimpleFile(FLAGS_navy_file_name,\n                                   FLAGS_dipper_device_size_mb * 1024 *1024 /*fileSize*/,\n                                   false /*truncateFile*/);\nnvmConfig.navyConfig.blockCache().setRegionSize(16 * 1024 * 1024);\n\nlruConfig.enableNvmCache(nvmConfig);\n')),(0,r.kt)("p",null,"All settings are optional, unless marked as ",(0,r.kt)("strong",{parentName:"p"},'"Required"'),". The default value is shown after the equal sign ",(0,r.kt)("inlineCode",{parentName:"p"},"="),"."),(0,r.kt)("h1",{id:"how-to-set-navy-settings"},"How to set Navy settings"),(0,r.kt)("h2",{id:"1-common-settings"},"1. Common settings"),(0,r.kt)("h3",{id:"1-device"},"(1) Device"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(",(0,r.kt)("strong",{parentName:"p"},"Required"),") Set a simple file or RAID files"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"simple file:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("strong",{parentName:"li"},"Required"),")",(0,r.kt)("inlineCode",{parentName:"li"},"file name"),"\nFile/device path with cache."),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("strong",{parentName:"li"},"Required"),") ",(0,r.kt)("inlineCode",{parentName:"li"},"file size"),"\nSize (in bytes) of the file/device with cache."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"truncate file = false"),"\nDefault is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),". If it is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", do ",(0,r.kt)("inlineCode",{parentName:"li"},"ftruncate")," on the file to the requested size.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"navyConfig.setSimpleFile(fileName, fileSize, truncateFile /*optional*/);\n")))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RAID files:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("strong",{parentName:"li"},"Required"),") ",(0,r.kt)("inlineCode",{parentName:"li"},"RAID paths"),"\nMultiple files/devices to be used as a single cache. Note they must be identical in size."),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("strong",{parentName:"li"},"Required"),") ",(0,r.kt)("inlineCode",{parentName:"li"},"file size"),"\nSize (in bytes) of a single file/device."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"truncate file = false"),"\nDefault is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),". If it is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", do ",(0,r.kt)("inlineCode",{parentName:"li"},"ftruncate")," on the file to the requested size.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"navyConfig.setRaidFiles(raidPaths, fileSize, truncateFile /*optional*/);\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"block size = 4096"),"\nDevice block size in bytes (minimum IO granularity).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"device metadata size = 0"),"\nThe size of the metadata partition on the Navy device.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"device max write size = 1024*1024"),"\nThis controls what\u2019s the biggest IO we can write to a device. After it is configured, any IO size above it will be split and issued sequentially."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"navyConfig.setBlockSize(blockSize);\nnavyConfig.setDeviceMetadataSize(deviceMetadataSize);\nnavyConfig.setDeviceMaxWriteSize(deviceMaxWriteSize);\n")))),(0,r.kt)("h3",{id:"2-job-scheduler"},"(2) Job scheduler"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(",(0,r.kt)("strong",{parentName:"p"},"Required"),") ",(0,r.kt)("inlineCode",{parentName:"p"},"reader threads = 32"),"\nNumber of threads available for processing ",(0,r.kt)("em",{parentName:"p"},"read")," requests.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(",(0,r.kt)("strong",{parentName:"p"},"Required"),") ",(0,r.kt)("inlineCode",{parentName:"p"},"writer threads = 32"),"\nNumber of threads available for processing ",(0,r.kt)("em",{parentName:"p"},"write")," requests and navy-internal operations."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request ordering shards = 20"),"\nIf it is non-zero, we will enable request ordering where we put requests into 2",(0,r.kt)("sup",null,"N")," shards and ensure each shard executes requests in order.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"navyConfig.setReaderAndWriterThreads(readerThreads, writerThreads);\nnavyConfig.setNavyReqOrderingShards(navyReqOrderingShards);\n")),(0,r.kt)("h3",{id:"3-other"},"(3) Other"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max concurrent inserts = 1'000'000"),"\nThis controls how many insertions can happen in parallel. This is an effective way to avoid too many insertions backing up that drives  up the write latency (it can happen if the use case is too heavy on writes)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max parcel memory = 256 (MB)"),"\nTotal memory limit for in-flight parcels. Once this is reached, requests will be rejected until the parcel memory usage gets under the limit.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"navyConfig.setMaxConcurrentInserts(maxConcurrentInserts);\nnavyConfig.setMaxParcelMemoryMB(maxParcelMemoryMB);\n")),(0,r.kt)("h2",{id:"2-admission-policy-settings"},"2. Admission policy settings"),(0,r.kt)("p",null,'There are 2 types of admission policy: "random" and "dynamic_random". Users can choose one of them to enable.'),(0,r.kt)("h3",{id:"1-random-policy"},'(1) "random" policy'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(",(0,r.kt)("strong",{parentName:"p"},"Required"),") ",(0,r.kt)("inlineCode",{parentName:"p"},"admission probability"),"\nAcceptance probability. The value has to be in the range of ","[0, 1]","."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"navyConfig.enableRandomAdmPolicy()\n          .setAdmProbability(admissionProbability);\n")))),(0,r.kt)("h3",{id:"2-dynamic_random-policy"},'(2) "dynamic_random" policy'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(",(0,r.kt)("strong",{parentName:"p"},"Required"),") ",(0,r.kt)("inlineCode",{parentName:"p"},"admission write rate")," (bytes/s)\nAverage ",(0,r.kt)("strong",{parentName:"p"},"per day")," write rate to target. Default to be 0 if not being  explicitly set, meaning no rate limiting.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"max write rate = 0")," (bytes/s)\nThe max write rate to device in bytes/s to stay within the device limit of saturation to avoid latency increase. This ensures writing at any given second doesn't exceed this limit despite a possibility of writing more to stay within the target rate above.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"admission suffix length = 0"),"\nLength of suffix in key to be ignored when hashing for probability.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"admission base size = 0"),"\nNavy item base size of baseProbability calculation. Set this closer to the mean size of objects. The probability is scaled for other sizes by using this size as the pivot."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"navyConfig.enableDynamicRandomAdmPolicy()\n          .setAdmissionWriteRate(admissionWriteRate)\n          .setMaxWriteRate(maxWriteRate)\n          .setAdmissionSuffixLength(admissionSuffixLen)\n          .setAdmissionProbBaseSize(admissionProbBaseSize);\n")))),(0,r.kt)("h2",{id:"3-engine-specific-settings"},"3. Engine specific settings"),(0,r.kt)("h3",{id:"1-block-cache"},"(1) Block Cache"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"eviction policy (choose one of the followings):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"LRU: default policy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"FIFO: once enabled, LRU will be disabled."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"enableFifo();\n")))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"segmented FIFO: once enabled, LRU and FIFO will be disabled."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// sFifoSegmentRatio maps to segments in the order from least-important to most-important.\n//  e.g. {1, 1, 1} gives equal share in each of the 3 segments;\n//       {1, 2, 3} gives the 1/6th of the items in the first segment (P0 least important),\n//       2/6th of the items in the second segment(P1),\n//      and finally 3/6th of the items in the third segment (P2).\nenableSegmentedFifo(sFifoSegmentRatio);\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"reinsertion policy (choose one of the followings):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"hits based\nIf this is enabled, we will reinsert item that had been accessed more than the threshold since the last time it was written into block cache. This can better approximate a LRU than the region-based LRU. Typically users configure this with a region-granularity FIFO policy, or SFIFO policy.  It cannot be enabled when percentage based reinsertion policy has been enabled."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"enableHitsBasedReinsertion(hitsThreshold);\n")))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"percentage based\nThis is used for testing where a certain fraction of evicted items(governed by the percentage) are always reinserted.The percentage value is between 0 and 100 for reinsertion. It cannot be enabled when hits based reinsertion policy has been enabled."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"enablePctBasedReinsertion(pctThreshold);\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"clean regions = 1"),"\nHow many regions do we reserve for future writes. Set this to be equivalent to your per-second write rate. It should ensure your writes will not have to retry to wait for a region reclamation to finish."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"in-memory buffers = 0"),"\nA non-zero value enables in-mem buffering for writes. All writes will first go into a region-sized buffer. Once the buffer is full, we will flush the region to the device. This allows BlockCache to internally pack items closer to each other (saves space) and also improves device read latency (regular sized write IOs means better read performance)."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Clean Regions and in-mem buffer will be set together.\n// Once in-mem buffer is enabled, it is 2 * clean regions.\nsetCleanRegions(cleanRegions, true /* enable in-mem buffers*/);\n")))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"size classes = []"),"\nA vector of Navy BlockCache size classes (must be multiples of block size). If enabled, Navy will configure regions to allocate rounded up to these size classes and evict regions within a size classs. A given region allocates corresponding to a given size class. By default, objects will be stack allocated irrespective of their size on available regions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"region size = 16777216")," (16 Mb)\nRegion size in bytes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"data checksum = true"),"\nThis controls whether or not BlockCache will verify the item\u2019s value is correct (equivalent to its checksum). This should always be enabled, unless you\u2019re doing your own checksum logic at a higher layer."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"navyConfig.blockCache()\n          .enableSegmentedFifo(sFifoSegmentRatio)\n          .enableHitsBasedReinsertion(hitsThreshold)\n          .setCleanRegions(cleanRegions, true)\n          .useSizeClasses(sizeClasses)\n          .setRegionSize(regionSize)\n          .setDataChecksum(false);\n\n")),(0,r.kt)("h3",{id:"2-bighash"},"(2) BigHash"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(",(0,r.kt)("strong",{parentName:"p"},"Required"),") ",(0,r.kt)("inlineCode",{parentName:"p"},"size percentage"),"\nPercentage of space to reserve for BigHash. Set the percentage > 0 to enable BigHash. The remaining part is for BlockCache. The value has to be in the range of ","[0, 100]",". Default value is 0.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(",(0,r.kt)("strong",{parentName:"p"},"Required"),") ",(0,r.kt)("inlineCode",{parentName:"p"},"small item max size")," (bytes)\nMaximum size of a small item to be stored in BigHash. Must be less than the bucket size.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bucket size = 4096")," (bytes)\nBucket size in bytes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bucket bloom filter size = 8"),"\nBloom filter, bytes per bucket. Must be power of two. 0 means bloom filter will not be applied"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"navyConfig.bigHash()\n      .setSizePctAndMaxItemSize(bigHashSizePct, bigHashSmallItemMaxSize)\n      .setBucketSize(bigHashBucketSize)\n      .setBucketBfSize(bigHashBucketBfSize);\n")),(0,r.kt)("h1",{id:"navyconfig-data-output"},"NavyConfig Data Output"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NavyConfig")," provides a public function NavyConfig::serialize() so that you can call it to print out the data, e.g.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'XLOG(INFO) << "Using the following navy config"\n          << folly::toPrettyJson(\n                       folly::toDynamic(navyConfig.serialize()));\n')),(0,r.kt)("h1",{id:"admission"},"Admission"),(0,r.kt)("p",null,"HybridCache can leverage an admission policy to control burn rate of the underlying nvm devices (e.g. SSD drives). Using a suitable admission policy for your workloads can often not only improve device longevitiy but also improve the cache hit rate. You can configure an admission policy like the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"auto policy = std::make_shared<cachelib::RejectFirstAP<LruAllocator>>(/* ... */);\n\ncacheConfig.setNvmCacheAdmissionPolicy(std::move(policy));\n")),(0,r.kt)("h2",{id:"random-reject"},"Random reject"),(0,r.kt)("p",null,"This policy just rejects ",(0,r.kt)("inlineCode",{parentName:"p"},"P%")," of inserts, picking victims randomly. It lets user to reduce IOPS (and so increase flash life time)."),(0,r.kt)("h2",{id:"reject-first"},"Reject first"),(0,r.kt)("p",null,"This policy helps if flash cache contains lots of inserted and never accessed items. It maintains a running window (sketch) of keys that were accessed. If a key is inserted for the first time, the policy rejects it. Second inserts get into the cache. A sketch consists of several splits. As times goes, old splits are discarded. With larger split, rejection gets more accurate (less false accepts)."),(0,r.kt)("h2",{id:"dynamic-reject-or-rate-throttle"},"Dynamic reject (or rate throttle)"),(0,r.kt)("p",null,"This is a smart random reject policy. Users specify the maximum size of data that can be written to the device per day. Policy monitors ",(0,r.kt)("em",{parentName:"p"},"write")," traffic and as it grows beyond the target (how much can be written up to this time of the day) it starts randomly reject inserts. It prefers to reject larger items to make hit ratio better. This behavior is tunable to allow users to control flash's wearing out."),(0,r.kt)("h2",{id:"ml-based-admission-policy"},"ML-based admission policy"),(0,r.kt)("p",null,"CacheLib also supports using ML based admission policy to make intelligent decision on what to admit into nvm devices. However, the use of ML policy requires careful analysis of cache workloads, and set up a training pipeline to train the model on a conintuous basis. Please try out the other admission policies first, and if you're not satisfied with them, then reach out directly to the CacheLib team to discuss using a ML-based policy."))}d.isMDXComponent=!0}}]);