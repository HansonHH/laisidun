import LocalizedStrings from 'react-localization'

let localization = new LocalizedStrings({
	en: {
        headerHomeLink: 'Home',
        headerDiscoverLink: 'Discover',
        headerUploadLink: 'Upload',
        headerSettingsLink: 'Settings',
        headerContractLink: 'Contract',
        headerLanguageLink: '中',

        homePageHeaderTitle: 'Blockchain-Driven File Storing Platform',
        homePageHeaderButton: 'Know more',
        homePageBannerLeftTitle: 'Searching for shared content worldwide',
        homePageBannerLeftSubTitle: 'and more..',
        homePageBannerRightTitle: 'Storing files permanently for free',
        homePageBannerRightSubTitle: 'and more...',
        homePageInstructionsTitle: 'Instructions',
        homePageInstructionsOneTitle: 'Install Chrome extension wallet',
        homePageInstructionsOneSubTitle: 'Please install extension from Chrome Web Store',
        homePageInstructionsTwoTitle: 'Create a new wallet',
        homePageInstructionsTwoSubTitle: 'Open your wallet extension and create a new wallet',
        homePageInstructionsThreeTitle: 'Ready to go!',
        homePageInstructionsThreeSubTitle: 'Now you are all good to start exploring IPFAS :)',

		discoverPageHeaderTitle: 'Search everything on IPFAS',
		discoverPageHeaderInput: 'Enter anything',
        discoverPageHeaderButton: 'Go!',
        
        uploadPageHeaderTitle: 'Upload everything on IPFAS',
		uploadPageHeaderSubTitle: 'Or simply drop everything here :)',
        uploadPageHeaderButton: 'Upload',
        uploadPageShowMyFilesButton: 'Show my files',

        settingsPageHeaderTitle: 'Connect to IPFS network',
        settingsCardTitle: 'IPFS Node',
        settingsCardStatusSuccess: 'Success',
        settingsCardStatusFailure: 'Fail',
        settingsCardNodeHost: 'Node',
        settingsCardNodeProtocol: 'Protocol',
        settingsCardNodePort: 'Port',
        settingsCardCheckNodeButton: 'Check node',
        settingsCardChangeNodeButton: 'Change node',

		recentButton: 'Recent',
		imageButton: 'Image',
		docButton: 'Doc',
		videoButton: 'Video',
		musicButton: 'Music',
        weLikeButton: 'We like',
        fileNameTh: 'File',
        fileSizeTh: 'Size',
        dateTh: 'Date',
        moreTh: 'More',
        
        infoButton: 'Info',
        shareButton: 'Share',
        tipsButton: 'Tips',
        reportButton: 'Report',
        makePrivateButton: 'Make Private',
        makePublicButton: 'Make Public',


        infoModalTitle: 'Info',
        infoModalFileName: 'File Name',
        infoModalHash: 'Hash',
        infoModalUploader: 'Uploader',
        infoModalCloseButton: 'Close',
        shareModalTitle: 'Share',
        shareModalLink: 'Link',
        shareModalCloseButton: 'Close',
        reportModalTitle: 'Report',
        reportModalLabel: 'Reason',        
        reportModalSubmitButton: 'Submit',
        reportModalCloseButton: 'Close',
        nodeModalTitle: 'Change node',
        nodeModalHost: 'Node',
        nodeModalPort: 'Port',
        nodeModalProtocol: 'Protocol',
        nodeModalSaveButton: 'Save',
        nodeModalCloseButton: 'Close',

        notificationFetchFilesSuccess: 'Successfully fetched stored files 👌',
        notificationFetchFilesWarn: 'No result found ⚠️',
        notificationFetchFilesFailure: 'Failed to get stored files ⚠️',

        notificationUploadFileInProgress: 'Upload in progress, please wait...',
        notificationUploadFileDone: 'Upload done 👌',
        notificationUploadFileSuccess: 'Successfully uploaded file 👌',
        notificationUploadFileTooLargeFailure: 'File is too large (supported < 100 MB) ⚠️',
        notificationUploadFileExistWarn: 'File alread exists or something went wrong ⚠️',
        notificationUploadFileOneAtATimeWarn: 'Please upload one file at a time ⚠️',
        notificationUploadFileFailure: 'Failed to upload file ⚠️',

        notificationSetVisibilitySuccess: 'Successfuly set file visibility 👌',
        notificationSetVisibilityFailure: 'Failed set file visibility ⚠️',

        notificationPayTipsSuccess: 'Successfully paid tips 👌',
        notificationPayTipsFailure: 'Failed to pay tips ⚠️',
        notificationReportFileSuccess: 'Successfully reported file 👌',
        notificationReportFileFailure: 'Failed to report file ⚠️',
        notificationReportFileEmptyReason: 'Please input reason, thanks',

        notificationInstallWalletWarn: 'Please install Nebulas Chrome wallet extension ⚠️',

        notificationCheckNodeSuccess: 'Node status is healthy 👌',
        notificationCheckNodeFailure: 'Ops! Something went wrong ⚠️',

        timelineQ22018PlanTitle: 'Dawn release',
        timelineQ22018PlanLocation: 'Stockholm, Sweden',
        timelineQ22018PlanOne: 'Support uploading, sharing files and paying tips to files uploaders',
        timelineQ32018PlanTitle: 'Diamond release',
        timelineQ32018PlanLocation: 'Stockholm, Sweden',
        timelineQ22018PlanTwo: 'Mechanism for content censorship',
        timelineQ32018PlanOne: 'Support file encryption to secure shared content',
        timelineQ32018PlanTwo: 'Integrate with social media',
        timelineQ42018PPlanTitle: 'Coming soon'
	},
	cn: {
        headerHomeLink: '主页',
        headerDiscoverLink: '发现',
        headerUploadLink: '上传',
        headerSettingsLink: '设置',
        headerContractLink: '合约',
        headerLanguageLink: 'EN',

        homePageHeaderTitle: '一个区块链驱动的共享网盘',
        homePageHeaderButton: '了解更多',
        homePageBannerLeftTitle: '搜索链上所有共享内容',
        homePageBannerLeftSubTitle: '更多...',
        homePageBannerRightTitle: '永久免费存储文件',
        homePageBannerRightSubTitle: '更多...',
        homePageInstructionsTitle: '使用步骤',
        homePageInstructionsOneTitle: '安装Chrome钱包插件',
        homePageInstructionsOneSubTitle: '请从Chrome Web Store安装插件',
        homePageInstructionsTwoTitle: '创建新钱包',
        homePageInstructionsTwoSubTitle: '打开插件并创建一个新钱包',
        homePageInstructionsThreeTitle: '准备开始吧',
        homePageInstructionsThreeSubTitle: '请开始使用IPFAS :)',

		discoverPageHeaderTitle: '搜索整个IPFAS',
		discoverPageHeaderInput: '输入内容',
        discoverPageHeaderButton: '试试手气!',
        
        uploadPageHeaderTitle: '上传任意文件到IPFAS',
		uploadPageHeaderSubTitle: '或者拖动文件到这里 :)',
        uploadPageHeaderButton: '上传',
        uploadPageShowMyFilesButton: '显示我的文件',

        settingsPageHeaderTitle: '连接到IPFS网络',
        settingsCardTitle: 'IPFS节点',
        settingsCardStatusSuccess: '连接成功',
        settingsCardStatusFailure: '连接失败',
        settingsCardNodeHost: '地址',
        settingsCardNodeProtocol: '协议',
        settingsCardNodePort: '端口',
        settingsCardCheckNodeButton: '检测节点',
        settingsCardChangeNodeButton: '改变节点',

		recentButton: '最近',
		imageButton: '图像',
		docButton: '文档',
		videoButton: '视频',
		musicButton: '音乐',
        weLikeButton: '好物',
        fileNameTh: '文件',
        fileSizeTh: '大小',
        dateTh: '日期',
        moreTh: '更多',
        
        infoButton: '信息',
        shareButton: '分享',
        tipsButton: '打赏',
        reportButton: '举报',
        makePrivateButton: '设为隐私文件',
        makePublicButton: '设为公开文件',

        infoModalTitle: '信息',
        infoModalFileName: '文件',
        infoModalHash: '哈希',
        infoModalUploader: '上传者',
        infoModalCloseButton: '关闭',
        shareModalTitle: '分享',
        shareModalLink: '链接',
        shareModalCloseButton: '关闭',
        reportModalTitle: '举报',
        reportModalLabel: '原因',        
        reportModalSubmitButton: '提交',
        reportModalCloseButton: '关闭',
        nodeModalTitle: '改变节点',
        nodeModalHost: '地址',
        nodeModalPort: '端口',
        nodeModalProtocol: '协议',
        nodeModalSaveButton: '保存',
        nodeModalCloseButton: '关闭',

        notificationFetchFilesSuccess: '成功获取文件 👌',
        notificationFetchFilesWarn: '没有找到文件 ⚠️',
        notificationFetchFilesFailure: '获取文件失败 ⚠️',

        notificationUploadFileInProgress: '文件正在上传，请等待...',
        notificationUploadFileDone: '文件完成上传 👌',
        notificationUploadFileSuccess: '成功上传文件 👌',
        notificationUploadFileTooLargeFailure: '文件太大 (支持 < 100 MB) ⚠️',
        notificationUploadFileExistWarn: '文件已存在或出错 ⚠️',
        notificationUploadFileOneAtATimeWarn: '请一次上传一份文件 ⚠️',
        notificationUploadFileFailure: '上传文件失败 ⚠️',

        notificationSetVisibilitySuccess: '成功设置文件公开性 👌',
        notificationSetVisibilityFailure: '设置文件公开性失败 ⚠️',

        notificationPayTipsSuccess: '成功打赏 👌',
        notificationPayTipsFailure: '打赏失败 ⚠️',
        notificationReportFileSuccess: '文件已举报 👌',
        notificationReportFileFailure: '举报文件失败 ⚠️',
        notificationReportFileEmptyReason: '请填写举报原因，谢谢',
        notificationInstallWalletWarn: '请在浏览器安装钱包插件 ⚠️',
        notificationCheckNodeSuccess: '节点状态健康 👌',
        notificationCheckNodeFailure: '糟糕！出错啦 ⚠️',

        timelineQ22018PlanTitle: '黎明发布',
        timelineQ22018PlanLocation: '斯德哥尔摩, 瑞典',
        timelineQ22018PlanOne: '支持上传分享文件，打赏内容分享者',
        timelineQ32018PlanTitle: '钻石发布',
        timelineQ32018PlanLocation: '斯德哥尔摩, 瑞典',
        timelineQ22018PlanTwo: '加入内容审查机制',
        timelineQ32018PlanOne: '支持分享内容加密',
        timelineQ32018PlanTwo: '接入社交媒体平台',
        timelineQ42018PPlanTitle: '计划中'
	},
})

export { localization }