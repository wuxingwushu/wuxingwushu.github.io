## TextView  文本

<分>	id：<分>为TextView设置一个组件ID
<分>	layout_width：<分>组件的宽度
<分>	layout_height：<分>组件的高度
<分>	text：<分>设置显示的文本内容（一般是用@string/NAME来引用，统一管理：在strings.xml当中）
<分>	textColor：<分>设置字体颜色（一般是用@color/NAME来引用，统一管理：在colors.xml当中）
<分>	textStyle：<分>设置字体风格，（normal(无效果) , bold(加粗) , italic(斜体)）
<分>	textSize：<分>字体大小，单位一般是用SP
<分>	background：<分>控制的背景颜色，可以理解为填充整个控件的颜色，可以是图片（一般是用@color/NAME来引用，统一管理：在colors.xml当中）
<分>	addingLeft：<分>设置内容与边框的间距gravity：设置控件中内容的对齐方向，TextView中是文字，lmageView中是图片等等

## TextView  阴影

<分>	shadowColor：<分>设置阴影颜色，需要与shadowRadius一起使用
<分>	shadowRadius：<分>设置阴影的模糊程度，设为0.1就变成原字体的样式，建议使用3.0
<分>	shadowDx：<分>设置阴影在水平方向的偏移，就是水平方向阴影开始的横坐标位置
<分>	shadowDy：<分>设置阴影在坚直方向的偏移，就是坚直方向阴影开始的纵坐标位置

## TextView  滚动

<分>	singleLine：<分>内容单行显示
<分>	ellipsize：<分>在哪里省略文本
<分>	marqueeRepeatLimit：<分>字幕动画重复的次数
<分>	focusable：<分>是否可以获取焦点
<分>	focusableInTouchMode=：<分>用于控制视图在触摸模式下是否可以聚焦
<分>	非容器控件标签中放<requestFocus />标签，表示将当前控件设为焦点。






## BUTTON  按钮

<分>	onClick：<分>添加事件。

<分>	drawable：<分>引用的Drawable位图
<分>	state_focused：<分>是否获得焦点
<分>	state_pressed：<分>控件是否被按下
<分>	state_enabled：<分>控件是否可用
<分>	state_selected：<分>控件是否被选择，针对有滚轮的情况
<分>	state_checked：<分>控件是否被勾选
<分>	state_checkedle：<分>控件是否被勾选，eg:checkbox






## EditText  输入框

<分>	hint：<分>输入提示
<分>	textColorHint：<分>输入提示文字的颜色
<分>	inputType：<分>输入类型
<分>	drawableLeft：<分>在输入框的指定方位添加图片
<分>	drawablePadding：<分>设置内容与输入内容的间距
<分>	paddingLeft：<分>设置内容与边框的间距
<分>	background：<分>背景色

>	我们可以通过xml中的属性android:backgroundTint和android:backgroundTintMode来设置，android:backgroundTintMode这个属性传的值就是刚刚上面那些PorterDuff.Mode中的值，效果的话上面的图也展示了。android:backgroundTint的话就是传color的值。
>	那么android:background和android:backgroundTint有什么区别呢？
>	如果设置了android:background，那么控件的背景颜色就会直接修改。
>	如果设置了android:backgroundTint，那么就会将设置的颜色和原来的背景进行一个叠加的过程，至于如何叠加，就是上面的mode。






## ImageView  图片

<分>	src：<分>设置图片资源
<分>	maxHeight：<分>最大高度，和adjustViewBounds一起使用才有效
<分>	maxWidth：<分>最大宽度，和adjustViewBounds一起使用才有效
<分>	adjustViewBounds：<分>调整View的界限
<分>	scaleType：<分>设置图片缩放类型

## scaleType  有的类型

<分>	fitStart：<分>保持宽高比缩放图片，直到较长的边与lmage的边长相等，缩放完成后将图片放在lmageView的左上角。
<分>	fitCenter：<分>默认值，同上，缩放后放中间。
<分>	fitEnd：<分>同上，缩放后放在右下角。
<分>	fitXY：<分>对图片的横纵方向进行独立缩放，使得该图片完全适应lmageView，但是图片的高宽比可能会发生改变。
<分>	center：<分>保持原图的大小，显示在lmageView的中心。当原图的size大于lmageView的size，超过部分裁剪处理。
<分>	centerCrop：<分>保持宽高比缩放图片，直到完全覆盖lmagView，可能会出现图片显示不完全。
<分>	centerlnside：<分>保持宽高比缩放图片，直到lmaheView能够完全地显示图片。
<分>	matrix：<分>不改变原图的大小，从lmageView的左上角开始绘制原图，原图超过lmageView的部分作裁剪处理。







## ProgressBar  进度条

<分>	max：<分>进度条的最大值
<分>	progress：<分>进度条己完成进度值
<分>	indeterminate：<分>如果设置成true，则进度条不精确显示进度
<分>	style="?android:attr/progressBarStyleHorizontal"进度条样式









## 通知的设置

<分>	setContentTitle("道生发的通知")<分>设置标题
<分>	setContentText("还不认真学习，还在玩！！！")<分>设置文本内容
<分>	setSmallIcon(R.drawable.ic_baseline_ac_unit_24)<分>设置小图标
<分>	setLargeIcon(BitmapFactory.decodeResource(getResources(),R.drawable.ic_launcher_foreground))<分>设置通知的大图标
<分>	setColor(Color.parseColor("#00FF00"))<分>设置小图标的颜色
<分>	setContentIntent(pendingIntent)<分>设置点击通知后的跳转意图
<分>	setAutoCancel(true)	<分>设置点击通知后自动消除通知
<分>	setWhen()	<分>设置通知被创建的时间







## Toolbar  标题栏

<分>	android:background="#4C4C4C"<分>设置背景颜色
<分>	app:navigationIcon="@drawable/ic_baseline_chevron_left_24"	<分>设置标题栏的图标
<分>	app:title="APP"<分>设置标题栏的主题文字
<分>	app:titleTextColor="#62AF65"	<分>设置主题文字的颜色
<分>	app:titleMarginStart="50dp"	<分>设置主题文字和左边的间距
<分>	app:subtitle="子标题"<分>设置主题文字下面的子标题内容
<分>	app:subtitleTextColor="#FF000000"<分>设置子标题文字的颜色
<分>	app:logo="@mipmap/ic_launcher_2"<分>设置主标题的LOGO






## Builder  构建AlertDialog的各种参数

<分>	.setIcon()<分>添加ICON图标
<分>	.setTitle()<分>添加标题
<分>	.setMessage()<分>添加消息内容
<分>	.setView()<分>设置自定义布局
<分>	.setPositiveButton()<分>添加确认按键
<分>	.setNegativeButton()<分>添加取消按键
<分>	.setNeutralButton()<分>添加中间按键
<分>	.create()<分>创建AlertDialog
<分>	.show();<分>显示





## PopupWindow  设置弹窗

<分>	setContentView(View contentView)<分>设置PopupWindow显示的View
<分>	showAsDropDown(View anchor)<分>相对某个控件的位置（正左下方），无偏转。
<分>	showAsDropDown(View anchor,int xoff,int yoff)<分>相对某个控件的位置，有偏转。
<分>	setFocusable(boolean focusable)<分>设置是否获得焦点
<分>	setBackgroundDrawable(Drawable background)<分>设置背景
<分>	dismiss()<分>关闭弹窗
<分>	setAnimationStyle(int animationStyle)<分>设置加载动画
<分>	setTouchable(boolean touchable)<分>设置触摸使能
<分>	setOutsideTouchable(boolean touchable)<分>设置PopupWindow外面的触摸使能





## LinearLayout  线性布局

<分>	orientation:<分>布局中组件的排列方式
<分>	gravity:<分>控制该组件所包含的子元素的对其方式，可多个组合
<分>	layout_gravity:<分>控制该组件在父容器里的对其方式
<分>	background:<分>为该组件设置一个背景图片，或者是直接用颜色覆盖
<分>	divider:<分>分割线
<分>	showDividers:<分>设置分割线所在的位置，none(无),beginning(开始),end(结束),middle(每两个组件间)
<分>	dividerPadding:<分>设置分割线的padding
<分>	layout_weight(权重):<分>该属性是用来等比例的划分区域（针对orientation排列方式分配的剩余空间）





## RelativeLayout  相对布局

#### 根据父容器定位
<分>	layout_alignParentLeft:<分>左对齐
<分>	layout_alignParentRigh:<分>右对齐
<分>	layout_alignParentTop:<分>顶部对齐
<分>	layout_alignParentBottom:<分>底部对齐
<分>	layout_centerHorizontal:<分>水平对齐
<分>	layout_centerVertical:<分>垂直居中
<分>	layout_centerinParent:<分>中间位置

#### 根据兄弟组件定位
<分>	layout_toLeftOf:<分>放置于参考组件的左边
<分>	layout_toRightOf:<分>放置于参考组件的右边
<分>	layout_above:<分>放置于参考组件的上方
<分>	layout_below:<分>放置于组件的下方
<分>	layout_alignTop:<分>对齐参考组件的上边界
<分>	layout_alignBottom:<分>对齐参考组件的下边界
<分>	layout_alignLeft:<分>对齐参考组件的左边界
<分>	layout_alignRight:<分>对齐参考组件的有边界

####  设置组件与父容器的边距

<分>	layout_margin:<分>上下左右
<分>	layout_marginLeft:<分>左
<分>	layout_marginRight:<分>右
<分>	layout_marginTop:<分>上
<分>	layout_marginBottom:<分>下

####  padding  设置组件内部元素的边距





## FrameLayout  框架布局

<分>	foreground:<分>设置前景
<分>	foregroundGravity:<分>设置前景位置





## TableLayout  表格布局

<分>	collapseColumns:<分>设置需要被隐藏的列的序号，从0开始
<分>	stretchColumns:<分>设置允许被拉伸的列的序列号，从0开始
<分>	shrinkColumns:<分>设置允许被收缩的列的序列号，从0开始

####  子控件设置属性
<分>	layout_column:<分>显示在第几列
<分>	layout_span:<分>横向跨几列





## GridLayout  网格布局

####  父控件属性
<分>	orientation:<分>设置水平显示还是垂直显示
<分>	columnCount:<分>设置行的显示个数
<分>	rowCount:<分>设置列的显示个数

####  子控件属性
<分>	layout_column:<分>显示在第几列
<分>	layout_columnSpan:<分>横向跨几列
<分>	layout_columnWeight:<分>横向剩余空间分配方式
<分>	layout_gravity:<分>在网格中的显示位置
<分>	layout_row:<分>显示在第几行
<分>	layout_rowSpan:<分>横向跨几行
<分>	layout_rowWeight:<分>纵向剩余空间分配方式





## ConstraintLayout  限制布局（可视化布局）
