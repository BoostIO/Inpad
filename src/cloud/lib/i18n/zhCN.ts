import { lngKeys, TranslationSource } from './types'

const zhTranslation: TranslationSource = {
  //General
  [lngKeys.GeneralError]: '错误',
  [lngKeys.GeneralCreate]: '创建',
  [lngKeys.GeneralCancel]: '取消',
  [lngKeys.GeneralUpdate]: '更新',
  [lngKeys.GeneralAttachments]: '附件',
  [lngKeys.GeneralArchive]: '归档',
  [lngKeys.GeneralSignin]: '登录',
  [lngKeys.GeneralSigningIn]: '登录中...',
  [lngKeys.GeneralSignout]: '登出',
  [lngKeys.GeneralSave]: '保存',
  [lngKeys.GeneralDefault]: '默认',
  [lngKeys.GeneralDelete]: '删除',
  [lngKeys.GeneralDaily]: '每日',
  [lngKeys.GeneralWeekly]: '每周',
  [lngKeys.GeneralNever]: '从未',
  [lngKeys.GeneralTemplates]: '模板',
  [lngKeys.GeneralTitle]: '标题',
  [lngKeys.GeneralUse]: '使用',
  [lngKeys.GeneralChangeIcon]: '更改图标',
  [lngKeys.GeneralFolders]: '文件夹',
  [lngKeys.GeneralShowMore]: '现实更多',

  // settings
  [lngKeys.SettingsInfo]: '我的信息',
  [lngKeys.SettingsGeneral]: '我的首选项',
  [lngKeys.SettingsNotifications]: '邮件通知',
  [lngKeys.SettingsTeamInfo]: '设置',
  [lngKeys.SettingsTitle]: '设置',
  [lngKeys.SettingsPersonalInfo]: '设置',
  [lngKeys.SettingsPreferences]: '首选项',
  [lngKeys.SettingsTeamUpgrade]: '更新',
  [lngKeys.SettingsTeamSubscription]: '付费',
  [lngKeys.SettingsIntegrations]: '集成',
  [lngKeys.SettingsAppFeedback]: 'Feedback',
  [lngKeys.SettingsSpace]: '命名空间',
  [lngKeys.SettingsSpaceDelete]: '删除这个命名空间',
  [lngKeys.SettingsSpaceDeleteWarning]:
    '一旦删除此命名空间，我们将删除所有相关数据。请注意，这是不可恢复的。',
  [lngKeys.SettingsAccount]: '账户',
  [lngKeys.SettingsAccountDelete]: '删除你的账户',
  [lngKeys.SettingsAccountDeleteWarning]:
    '您可以随时删除您的帐户，请注意，这是不可恢复的。',
  [lngKeys.SettingsUILanguage]: '界面语言',
  [lngKeys.SettingsApplicationTheme]: '应用程序主题',
  [lngKeys.SettingsEditorTheme]: '编辑主题',
  [lngKeys.SettingsCodeBlockTheme]: '代码块主题',
  [lngKeys.SettingsEditorKeyMap]: '编辑器键映射',
  [lngKeys.SettingsEditorFontSize]: '编辑器字体大小',
  [lngKeys.SettingsEditorFontFamily]: '编辑器字体系列',
  [lngKeys.SettingsLight]: 'Light',
  [lngKeys.SettingsDark]: 'Dark',
  [lngKeys.SettingsNotifFrequencies]: 'Email updates',
  [lngKeys.SettingsIndentType]: '编辑器缩进类型',
  [lngKeys.SettingsShowEditorToolbar]: '编辑器工具栏',
  [lngKeys.SettingsIndentSize]: '编辑器缩进大小',
  [lngKeys.SettingsUserForum]: '用户论坛（新！）',
  [lngKeys.ManagePreferences]: '管理您的首选项。',
  [lngKeys.ManageProfile]: '管理你的档案。',
  [lngKeys.ManageSpaceSettings]: '管理共享空间的设置。',
  [lngKeys.ManageTeamMembers]: '管理谁有权访问此空间。',
  [lngKeys.ManageIntegrations]: '将第三方内容连接到Boost Note文档。',
  [lngKeys.CurrentMembers]: '当前成员',
  [lngKeys.MembersAccessLevel]: '访问级别',
  [lngKeys.AddMembers]: '添加成员',
  [lngKeys.TeamCreate]: '创建团队空间',
  [lngKeys.TeamCreateSubtitle]: '转换到一个团队空间来邀请你的队友',
  [lngKeys.TeamName]: '团队名字',
  [lngKeys.TeamDomain]: '团队域名',
  [lngKeys.SpaceName]: '命名空间名字',
  [lngKeys.SpaceDomain]: '命名空间域名',
  [lngKeys.TeamDomainShow]: '您的url如下所示：',
  [lngKeys.TeamDomainWarning]: '注意：此步骤后不能更改。',
  [lngKeys.InviteAddWithLink]: '使用打开的链接邀请',
  [lngKeys.InviteEmail]: '通过电子邮件邀请',
  [lngKeys.InviteByEmailMore]: '添加另一个团队成员',
  [lngKeys.InviteFailError]:
    '由于电子邮件数据不正确，邀请失败。请提供有效的电子邮件和角色。',
  [lngKeys.InviteRoleDetails]: '点击查看角色详情。',
  [lngKeys.RoleMemberDescription]:
    '成员可以访问除团队管理、计费之外的所有功能。',
  [lngKeys.RoleAdminDescription]: '管理员可以处理计费、删除或升级/降级成员。',
  [lngKeys.RoleViewerDescription]:
    '查看者只能浏览文档、文件夹、撰写评论并邀请更多查看者加入团队。',
  [lngKeys.CancelInvite]: '取消邀请？',
  [lngKeys.CancelInviteOpenLinkMessage]:
    '确定要取消此邀请吗？当前链接将被折旧。',
  [lngKeys.CancelInviteEmailMessage]:
    '你确定要撤消此邀请吗？用户将无法再加入团队。',
  [lngKeys.RoleAdminPromote]:
    '此操作将{{user}}提升为管理员，他们将被授予访问团队管理和帐单信息的权限。你确定吗？',
  [lngKeys.RoleMemberChange]:
    '此操作将{{user}}的角色更改为常规成员，他们将在订阅中进行说明，并可以在团队中积极参与。但是，他们将无法访问任何帐单信息。你确定吗？',
  [lngKeys.RoleViewerDemote]:
    '此操作将{{user}}的角色更改为查看器。它们将从订阅金额中删除。他们将无法以任何方式编辑文件夹和文档，但仍然可以阅读和发表评论。你确定吗？',
  [lngKeys.TeamLeave]: 'Leave the team',
  [lngKeys.TeamLeaveWarning]:
    '你确定要离开团队并且不能再访问它的任何内容了吗？最后一个团队成员必须完全删除团队。',
  [lngKeys.RemovingMember]: '删除成员',
  [lngKeys.RemovingMemberWarning]: '您将从此团队中删除{{user}}。你确定吗？',
  [lngKeys.ExternalEntity]: '外部实体',
  [lngKeys.ExternalEntityOpenInBrowser]: '在浏览器中打开以启用',
  [lngKeys.ExternalEntityDescription]:
    'boostnote向您显示外部内容，如Github问题、Trello卡、Google文档，以及更自动的内容。你想在便笺上看到什么？',
  [lngKeys.ExternalEntityRequest]: '请告诉我们您的要求！',
  [lngKeys.CommunityFeedback]: 'Feedback',
  [lngKeys.CommunityFeatureRequests]: 'Feature Requests',
  [lngKeys.CommunityFeedbackSubtitle]:
    '想要一个特定的功能？你注意到虫子了吗？让我们知道！',
  [lngKeys.CommunityBugReport]: 'Bug Report',
  [lngKeys.CommunityFeedbackSendError]: '无法发送您的反馈',
  [lngKeys.CommunityFeedbackSendSuccess]:
    '您的反馈是非常感谢的！谢谢你伸出援手。',
  [lngKeys.CommunityFeedbackType]: '反馈类型',
  [lngKeys.CommunityFeedbackFreeForm]: 'Free Form',
  [lngKeys.ManageApi]: '这些令牌仅对{{space}}可用',
  [lngKeys.AccessTokens]: '访问令牌',
  [lngKeys.GenerateToken]: '生成令牌',
  [lngKeys.CreateTokens]: '创建新令牌',
  [lngKeys.TokensName]: '你的令牌名...',
  [lngKeys.TokensDocumentation]: 'Boost Note API文档',

  [lngKeys.FormSelectImage]: '选择图像',
  [lngKeys.FormChangeImage]: '更改图像',
  [lngKeys.SupportGuide]: 'Support Guide',
  [lngKeys.SendUsAMessage]: '给我们发个信息',
  [lngKeys.KeyboardShortcuts]: '键盘快捷键',

  [lngKeys.SettingsSubLimitTrialTitle]: '升级到unlimited',
  [lngKeys.SettingsSubLimitTrialDate]:
    '您的工作区对Pro计划的试用持续到{{date}}',
  [lngKeys.SettingsSubLimitTrialUpgrade]: '您可以在试用期间随时升级。',
  [lngKeys.SettingsSubLimitTrialEnd]: '你的pro计划试用已经结束。请立即升级',
  [lngKeys.SettingsSubLimitUnderFreePlan]:
    '在自由计划下，您最多可以创建{{limit}}个文档。',

  [lngKeys.PlanChoose]: '选择你的计划。',
  [lngKeys.PlanDiscountUntil]: '只要您在预订之前就可以享受折扣',
  [lngKeys.PlanDiscountDetail]: '{{month}}个月{{off}}%的折扣',
  [lngKeys.PlanDiscountLabel]: '{{month}}个月折扣',
  [lngKeys.PlanDiscountCouponWarning]: '应用促销代码将阻止您获得其他折扣',
  [lngKeys.PlanBusinessIntro]: '对于大型企业或高度管制行业，请',
  [lngKeys.PlanBusinessLink]: '联系我们的销售部',
  [lngKeys.PlanPerMember]: '每个成员',
  [lngKeys.PlanPerMonth]: '每月',
  [lngKeys.PlanTrial]: '{{days}}天免费试用',
  [lngKeys.PlanInTrial]: '免费试用（剩余{{remaining}}）',
  [lngKeys.UpgradeSubtitle]: '确认并输入您的付款信息',
  [lngKeys.Viewers]: '查看者',
  [lngKeys.Month]: '月',
  [lngKeys.TotalMonthlyPrice]: '每月总价',
  [lngKeys.PaymentMethod]: '付款方式',
  [lngKeys.TrialWillBeStopped]: '你的免费试用将停止',
  [lngKeys.ApplyCoupon]: '申请优惠券',
  [lngKeys.PromoCode]: '促销代码',
  [lngKeys.Subscribe]: '订阅',
  [lngKeys.PaymentMethodJpy]: '用JCB卡付款时，我们只能接受日元。',
  [lngKeys.UnlimitedViewers]: '无限查看者',

  [lngKeys.BillingActionRequired]: '您的付款可能需要采取行动！',
  [lngKeys.BillingHistory]: '帐单历史记录',
  [lngKeys.BillingHistoryCheck]:
    '请检查您的帐单历史，以处理任何未付或失败的费用。',
  [lngKeys.BillingCancelledAt]:
    '收到最后一张发票后，您的订阅将于{{date}}取消。',
  [lngKeys.BillingToCard]: '将向{{cardEnd}}结束于{{date}}的信用卡付款。',
  [lngKeys.BillingEditCard]: '编辑卡',
  [lngKeys.BillingEmail]: '帐单电子邮件是{{email}}',
  [lngKeys.BillingEditEmail]: '编辑电子邮箱',
  [lngKeys.BillingCanSeeThe]: '你可以看到 ',
  [lngKeys.BillingChangePlan]: '改变计划',
  [lngKeys.BillingUpdateCard]: '更新您的信用卡',
  [lngKeys.BillingCurrentCard]: '活期信用卡',
  [lngKeys.BillingUpdateEmail]: '更新您的帐单电子邮件',
  [lngKeys.BillingCurrentEmail]: '当前电子邮件',
  [lngKeys.BillingChangeJCB]:
    '将付款方式从/切换到JCB卡需要取消现有的活动订阅。请取消现有卡，并用新卡重新订阅。',
  [lngKeys.BillingApplyPromoWarning]: '应用促销代码将结束您当前的折扣',
  [lngKeys.BillingApplyPromo]: '应用促销代码',

  [lngKeys.BillingChangePlanDiscountStop]: '更改计划将结束您当前的折扣。',
  [lngKeys.BillingChangePlanStripeProration]:
    '费用变更通过Stripe的按比例分配处理。',
  [lngKeys.BillingChangePlanFreeDisclaimer]:
    '您将立即无法访问高级功能，如无限文档、文档修订历史记录、更大的存储大小等...',
  [lngKeys.BillingChangePlanProDisclaimer]:
    '您可以访问高级功能，如无限文档修订历史记录、设置共享文档的密码和过期日期、无限查看器等...',
  [lngKeys.BillingChangePlanStandardDisclaimer]:
    '您将无法访问高级功能，如无限制的文档修订历史记录、为共享文档设置密码和过期日期、无限制的查看器等...',

  [lngKeys.FreeTrialModalTitle]: '免费尝试专业计划',
  [lngKeys.FreeTrialModalBody]:
    '您将可以访问付费专业计划的大多数功能，如无限文档、修订历史等。。。{{days}}天。',
  [lngKeys.FreeTrialModalDisclaimer]: '目前不需要信用卡信息。',
  [lngKeys.FreeTrialModalCTA]: '开始免费试用',

  [lngKeys.LogOut]: '注销',
  [lngKeys.CreateNewSpace]: '创建新空间',
  [lngKeys.DownloadDesktopApp]: '下载桌面应用程序',

  [lngKeys.ToolbarTooltipsSpaces]: 'Spaces',
  [lngKeys.ToolbarTooltipsTree]: 'Tree',
  [lngKeys.ToolbarTooltipsDiscount]: '获取新用户折扣',

  [lngKeys.FolderNamePlaceholder]: '文件夹名字...',
  [lngKeys.DocTitlePlaceholder]: '文档标题...',

  [lngKeys.SortLastUpdated]: '上次更新',
  [lngKeys.SortTitleAZ]: '标题 A-Z',
  [lngKeys.SortTitleZA]: '标题 Z-A',
  [lngKeys.SortDragAndDrop]: '拖放',
  [lngKeys.CreateNewDoc]: '创建新文档',
  [lngKeys.UseATemplate]: '使用模板',
  [lngKeys.RenameFolder]: '重命名文件夹',
  [lngKeys.RenameDoc]: '重命名文档',
  [lngKeys.ModalsCreateNewFolder]: '创建新文件夹',
  [lngKeys.ModalsCreateNewDocument]: '创建新文档',

  [lngKeys.ModalsDeleteWorkspaceTitle]: '删除文件夹',
  [lngKeys.ModalsDeleteWorkspaceDisclaimer]:
    '确定要删除此文件夹吗？您将无法恢复此操作。',

  [lngKeys.ModalsDeleteDocFolderTitle]: '删除 {{label}}',
  [lngKeys.ModalsDeleteDocDisclaimer]: '确定要永久删除此文档吗？',
  [lngKeys.ModalsDeleteFolderDisclaimer]:
    '确实要删除此文件夹并完全删除其文档吗？',

  [lngKeys.ModalsWorkspaceCreateTitle]: '创建文件夹',
  [lngKeys.ModalsWorkspaceEditTitle]: '编辑文件夹',

  [lngKeys.ModalsWorkspaceMakePrivate]: '保密',
  [lngKeys.ModalsWorkspaceAccess]: '访问',
  [lngKeys.ModalsWorkspaceDefaultDisclaimer]:
    '此默认工作区是公共的，无法修改其访问权限。',
  [lngKeys.ModalsWorkspacePublicDisclaimer]:
    '此工作区是公用的。团队中的任何人都可以访问它。',
  [lngKeys.ModalsWorkspacePrivateDisclaimer]: '此文件夹是专用的。',
  [lngKeys.ModalsWorkspacePrivateOwner]: '您可以在下面设置单个成员访问权限。',

  [lngKeys.ModalsWorkspaceSetAccess]: '设置访问',
  [lngKeys.ModalsWorkspacesSetAccessMembers]: '添加成员',
  [lngKeys.GeneralOwner]: '所有权',
  [lngKeys.GeneralAddVerb]: '添加',
  [lngKeys.GeneralSelectAll]: '全选',
  [lngKeys.ModalsWorkspacesWhoHasAcess]: '谁有权限',
  [lngKeys.ModalsWorkspacesNonOwnerDisclaimer]:
    '只有文件夹所有者才能更改其访问权限。',

  [lngKeys.ModalsImportDestinationTitle]: '选择文件夹',
  [lngKeys.ModalsImportDestinationDisclaimer]: '选择要导入文档的文件夹',
  [lngKeys.ModalsImportDisclaimer]: '选择导入文件的方式（每个文件最多5Mb）',

  [lngKeys.ModalsSmartFolderCreateTitle]: '创建智能文件夹',
  [lngKeys.ModalsSmartFolderEditTitle]: '编辑智能文件夹',
  [lngKeys.ModalsSmartFolderPrivateDisclaimer]:
    '此智能文件夹将成为私有文件夹。只有你能看到。',
  [lngKeys.ModalsSmartFolderPublicDisclaimer]:
    '智能文件夹将成为公共文件夹。每个成员都能看到它。',

  [lngKeys.EditorToolbarTooltipHeader]: '添加标题文本',
  [lngKeys.EditorToolbarTooltipAdmonition]: '添加警告',
  [lngKeys.EditorToolbarTooltipCodefence]: '插入代码围栏',
  [lngKeys.EditorToolbarTooltipQuote]: '插入报价',
  [lngKeys.EditorToolbarTooltipList]: '添加项目符号列表',
  [lngKeys.EditorToolbarTooltipNumberedList]: '添加编号列表',
  [lngKeys.EditorToolbarTooltipTaskList]: '添加任务列表',
  [lngKeys.EditorToolbarTooltipBold]: '添加粗体文本',
  [lngKeys.EditorToolbarTooltipItalic]: '添加斜体文本',
  [lngKeys.EditorToolbarTooltipCode]: '插入代码',
  [lngKeys.EditorToolbarTooltipLink]: '添加链接',
  [lngKeys.EditorToolbarTooltipUpload]: '上载图像',
  [lngKeys.EditorToolbarTooltipTemplate]: '使用模板',
  [lngKeys.EditorToolbarTooltipScrollSyncEnable]: '启用滚动同步',
  [lngKeys.EditorToolbarTooltipScrollSyncDisable]: '禁用滚动同步',

  [lngKeys.EditorReconnectAttempt]: '连接中...',
  [lngKeys.EditorReconnectAttempt1]: '正在尝试自动重新连接',
  [lngKeys.EditorReconnectAttempt2]: '在重新连接之前，更改不会与服务器同步',
  [lngKeys.EditorReconnectDisconnected]: '重新连接',
  [lngKeys.EditorReconnectDisconnected1]: '请尝试重新连接。',
  [lngKeys.EditorReconnectDisconnected2]:
    '在重新连接之前，更改不会与服务器同步',
  [lngKeys.EditorReconnectSyncing]: '同步...',
  [lngKeys.EditorReconnectSyncing1]: '与云同步。',
  [lngKeys.EditorReconnectSyncing2]: '检查更改并实时更新文档',

  [lngKeys.DocSaveAsTemplate]: '另存为模板',
  [lngKeys.DocExportPdf]: '导出PDF',
  [lngKeys.DocExportMarkdown]: '导出Markdown',
  [lngKeys.DocExportHtml]: '导出HTML',
  [lngKeys.OpenInBrowser]: '打开浏览器',
  [lngKeys.GeneralPickYourDestination]: '选择您的目的地',

  [lngKeys.AttachmentsDeleteDisclaimer]:
    '是否确实删除此文件？它将不再在您的文档中可见。',
  [lngKeys.AttachmentsLimitDisclaimer]: '使用了{{limit}}的{{current}}。',
  [lngKeys.AttachmentsPlanUpgradeDisclaimer]: '如果你需要更多的空间，请',
  [lngKeys.AttachmentsUpgradeLink]: '升级你的计划。',

  [lngKeys.FolderInfo]: 'Folder Info',
  [lngKeys.DocInfo]: '文档信息',
  [lngKeys.Assignees]: '分配给',
  [lngKeys.Unassigned]: '未分配',
  [lngKeys.DueDate]: '到期日',
  [lngKeys.AddDueDate]: '添加到期日',
  [lngKeys.AddALabel]: '添加标签',
  [lngKeys.NoStatus]: '无状态',
  [lngKeys.CreationDate]: '创建日期',
  [lngKeys.UpdateDate]: '更新日期',
  [lngKeys.CreatedBy]: '创建人',
  [lngKeys.UpdatedBy]: '更新人',
  [lngKeys.Contributors]: '贡献者',
  [lngKeys.History]: '历史',
  [lngKeys.Share]: '共享',
  [lngKeys.PublicSharing]: '公共共享',
  [lngKeys.PublicSharingDisclaimer]: '任何拥有此链接的人都可以访问',
  [lngKeys.SharingSettings]: '共享设置',
  [lngKeys.SharingRegenerateLink]: '重新生成链接',
  [lngKeys.Regenerate]: '重新生成',
  [lngKeys.PasswordProtect]: '密码保护',
  [lngKeys.ExpirationDate]: '过期日期',
  [lngKeys.SeeFullHistory]: '查看完整历史',
  [lngKeys.SeeLimitedHistory]: '查看最近{{days}}天',
  [lngKeys.ThreadsTitle]: '线程',
  [lngKeys.ThreadPost]: '文章',
  [lngKeys.ThreadFullDocLabel]: '完整文档线程',
  [lngKeys.ThreadCreate]: '创建新线程',
  [lngKeys.ThreadOpen]: '打开',
  [lngKeys.ThreadClosed]: '已关闭',
  [lngKeys.ThreadOutdated]: '已过期',
  [lngKeys.ThreadReopen]: '重新打开',
  [lngKeys.ThreadReplies]: '{{count}}个评论',
  [lngKeys.ModalsTemplatesDeleteDisclaimer]: `确定要删除此模板吗？`,
  [lngKeys.ModalsTemplatesSearchEmpty]: '找不到任何模板',
  [lngKeys.ModalsTemplatesSelectTemplate]: '选择这个模板',
  [lngKeys.ModalsTemplatesUseInDoc]: '使用你的文档',
  [lngKeys.GeneralAll]: '所有',
  [lngKeys.GeneralAny]: '任意',

  //Language
  [lngKeys.GeneralSelectVerb]: '选择',
  [lngKeys.GeneralOpenVerb]: '打开',
  [lngKeys.GeneralCopyTheLink]: '拷贝这个链接',
  [lngKeys.GeneralMoveVerb]: '移动',
  [lngKeys.GeneralSource]: '源文本',
  [lngKeys.GeneralDestination]: '描述',
  [lngKeys.GeneralPrevious]: '上一个',
  [lngKeys.GeneralNext]: '下一个',
  [lngKeys.GeneralContinueVerb]: '跳过',
  [lngKeys.GeneralShared]: '分享',
  [lngKeys.GeneralRenameVerb]: '重命名',
  [lngKeys.GeneralEditVerb]: '编辑',
  [lngKeys.GeneralBookmarks]: '书签',
  [lngKeys.GeneralUnbookmarkVerb]: '移除书签',
  [lngKeys.GeneralBookmarkVerb]: 'A添加书签',
  [lngKeys.GeneralSmartFolders]: '智能文件夹',
  [lngKeys.GeneralWorkspaces]: '工作区',
  [lngKeys.GeneralPrivate]: '私有',
  [lngKeys.GeneralLabels]: '标签',
  [lngKeys.GeneralMore]: '更多',
  [lngKeys.GeneralStatus]: '状态',
  [lngKeys.GeneralMembers]: '成员',
  [lngKeys.GeneralSettings]: '设置',
  [lngKeys.GeneralTimeline]: '时间轴',
  [lngKeys.GeneralImport]: '导入',
  [lngKeys.GeneralSearchVerb]: '搜索',
  [lngKeys.GeneralHelp]: '帮助',
  [lngKeys.GeneralProfilePicture]: '个人头像',
  [lngKeys.GeneralName]: '名字',
  [lngKeys.GeneralSpaces]: 'spaces',
  [lngKeys.GeneralTabs]: 'tab',
  [lngKeys.GeneralLogo]: 'Logo',
  [lngKeys.GeneralUser]: '用户',
  [lngKeys.GeneralBack]: 'Back',
  [lngKeys.GeneralAdmin]: '管理员',
  [lngKeys.GeneralMember]: '成员',
  [lngKeys.GeneralViewer]: '查看者',
  [lngKeys.GeneralSeeVerb]: '查看',
  [lngKeys.GeneralCopyVerb]: '拷贝',
  [lngKeys.GeneralCopied]: '已拷贝',
  [lngKeys.GeneralSendVerb]: '发送',
  [lngKeys.GeneralSendMore]: '发送更多',
  [lngKeys.GeneralLeaveVerb]: '离开',
  [lngKeys.GeneralRemoveVerb]: '删除',
  [lngKeys.GeneralDemoteVerb]: '降级',
  [lngKeys.GeneralPromoteVerb]: '提升',
  [lngKeys.GeneralEnableVerb]: '激活',
  [lngKeys.GeneralDisableVerb]: '禁用',
  [lngKeys.GeneralShowVerb]: '显示',
  [lngKeys.GeneralHideVerb]: '隐藏',
  [lngKeys.GeneralSaveVerb]: '保存',
  [lngKeys.GeneralCloseVerb]: '关闭',
  [lngKeys.GeneralThisSpace]: '这个空间',
  [lngKeys.GeneralToken]: 'Token',
  [lngKeys.GeneralApplyVerb]: '应用',
  [lngKeys.GeneralUpdateVerb]: '更新',
  [lngKeys.GeneralLearnMore]: '了解更多',
  [lngKeys.GeneralDoYouWishToProceed]: '你想继续吗？',
  [lngKeys.GeneralDays]: '天',
  [lngKeys.GeneralHours]: '小时',
  [lngKeys.GeneralMinutes]: '分钟',
  [lngKeys.GeneralSeconds]: '秒',

  [lngKeys.GeneralOrdering]: 'Ordering',
  [lngKeys.SidebarViewOptions]: 'View Options',
  [lngKeys.SidebarSettingsAndMembers]: 'Settings & Members',
  [lngKeys.GeneralInbox]: 'Inbox',
  [lngKeys.SidebarNewUserDiscount]: 'Get the new user discount!',
  [lngKeys.SettingsImportDescription]:
    'No need to start from scratch. Import data into Boost Note by selecting one of the options below.',
  [lngKeys.GeneralPassword]: '密码',

  [lngKeys.CooperateTitle]: 'Create a new space',
  [lngKeys.CooperateSubtitle]: 'Please set up your space information',
  [lngKeys.PictureAdd]: 'Add a picture',
  [lngKeys.PictureChange]: 'Change your picture',
  [lngKeys.SpaceIntent]: 'For what purpose are you going to use this space?',
  [lngKeys.SpaceIntentPersonal]: 'For my personal use',
  [lngKeys.SpaceIntentTeam]: 'To collaborate with my team',
  [lngKeys.PlanFreePerk1]: 'Unlimited Viewers',
  [lngKeys.PlanFreePerk2]: '1 Member',
  [lngKeys.PlanFreePerk3]: 'Unlimited documents',
  [lngKeys.PlanStoragePerk]: '{{storageSize}} per member',
  [lngKeys.PlanStandardPerk1]: 'Unlimited members',
  [lngKeys.PlanStandardPerk2]: 'Support development',
  [lngKeys.PlanStandardPerk3]:
    "Last {{days}} days of your docs's revision history",
  [lngKeys.PlanProPerk3]: 'Priority Support',
  [lngKeys.PlanProPerk1]: 'Password and expiration date when sharing',
  [lngKeys.PlanProPerk2]: "Full access to your docs' revision history",
  [lngKeys.PlanViewersMembersIntro]:
    "What's the difference between viewers and members? Please take a look at",
  [lngKeys.PlanViewersMembersLink]: 'this article',
  [lngKeys.SeeRoleDetails]: 'See role details',
  [lngKeys.ViewerDisclaimerIntro]: 'You are a',
  [lngKeys.ViewerDisclaimerDescription]:
    'Please ask your admin to give you a member role so that you can participate as well.',
  [lngKeys.DiscountModalTitle]: '立即订阅即可享受折扣！',
  [lngKeys.DiscountModalAlreadySubscribed]: '您已订阅',
  [lngKeys.DiscountModalTimeRemaining]: '剩余时间',
  [lngKeys.DiscountModalExpired]: '您享受折扣的资格已过期',
  [lngKeys.GeneralInvite]: 'Invite',
  [lngKeys.SettingsRolesRestrictedTitle]: 'This role is restricted',
  [lngKeys.SettingsRolesRestrictedDescription]:
    'In order to promote the user to this specific role, your space needs to have an active subscription. Please consider upgrading your plan.',

  [lngKeys.GeneralDocuments]: 'Documents',
  [lngKeys.RequestSent]: 'Request sent',
  [lngKeys.RequestAsk]: 'Ask to edit',
  [lngKeys.UploadLimit]:
    'The maximum allowed size for uploads is {{sizeInMb}}Mb',

  [lngKeys.OnboardingFolderSectionTitle]: 'Welcome to Boost Note!',
  [lngKeys.OnboardingFolderSectionDisclaimer]:
    'Invite your teammates to this space',
  [lngKeys.GeneralContent]: 'Content',
  [lngKeys.CreateNewCanvas]: 'Create new canvas (beta)',
}

export default {
  translation: zhTranslation,
}
