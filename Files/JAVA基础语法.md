# Java 关键字
## 访问控制

<分>private	<分>私有的
<分>protected	<分>受保护的
<分>public	<分>公共的
<分>default	<分>默认

## 类、方法和变量修饰符

<分>abstract	<分>声明抽象
<分>class	<分>类
<分>extends	<分>扩充,继承
<分>final	<分>最终值,不可改变的
<分>implements	<分>实现（接口）
<分>interface	<分>接口
<分>native	<分>本地，原生方法（非 Java 实现）
<分>new	<分>新,创建
<分>static	<分>静态
<分>strictf>	<分>严格,精准
<分>synchronized	<分>线程,同步
<分>transient	<分>短暂
<分>volatile	<分>易失

## 程序控制语句

<分>break	<分>跳出循环
<分>case	<分>定义一个值以供 switch 选择
<分>continue	<分>继续
<分>default	<分>默认
<分>do	<分>运行
<分>else	<分>否则
<分>for	<分>循环
<分>if	<分>如果
<分>instanceof	<分>实例
<分>return	<分>返回
<分>switch	<分>根据值选择执行
<分>while	<分>循环

## 错误处理

<分>assert	<分>断言表达式是否为真
<分>catch	<分>捕捉异常
<分>finally	<分>有没有异常都执行
<分>throw	<分>抛出一个异常对象
<分>throws	<分>声明一个异常可能被抛出
<分>try	<分>捕获异常

## 包相关

<分>import	引入
<分>package	包

## 基本类型

<分>boolean	<分>布尔型
<分>byte	<分>字节型
<分>char	<分>字符型
<分>double	<分>双精度浮点
<分>float	<分>单精度浮点
<分>int	<分>整型
<分>long	<分>长整型
<分>short	<分>短整型

## 变量引用

<分>super	父类,超类
<分>this	本类
<分>void	无返回值

## 保留关键字

<分>goto	<分>是关键字，但不能使用
<分>const	<分>是关键字，但不能使用

## Java语言支持一些特殊的转义字符序列。

<分>\n	<分>换行 (0x0a)
<分>\r	<分>回车 (0x0d)
<分>\f	<分>换页符(0x0c)
<分>\b	<分>退格 (0x08)
<分>\0	<分>空字符 (0x0)
<分>\s	<分>空格 (0x20)
<分>\t	<分>制表符
<分>\"	<分>双引号
<分>\'	<分>单引号
<分>\\	<分>反斜杠
<分>\ddd	<分>八进制字符 (ddd)
<分>\uxxxx	<分>16进制Unicode字符 (xxxx)









## 强制转换

>	容量大的类型转换为容量小的类型时必须使用强制类型转换。
>	转换过程中可能导致溢出或损失精度，例如：
>	int i =128; (int)23.7 == 23;        
>	(int)-45.89f == -45;












## 对象和类
```java
public class Puppy{
   int puppyAge;
   public Puppy(String name){
      // 这个构造器仅有一个参数：name
      System.out.println("小狗的名字是 : " + name ); 
   }
 
   public void setAge( int age ){
       puppyAge = age;
   }
 
   public int getAge( ){
       System.out.println("小狗的年龄为 : " + puppyAge ); 
       return puppyAge;
   }
 
   public static void main(String[] args){
      /* 创建对象 */
      Puppy myPuppy = new Puppy( "tommy" );
      /* 通过方法来设定age */
      myPuppy.setAge( 2 );
      /* 调用另一个方法获取age */
      myPuppy.getAge( );
      /*你也可以像下面这样访问成员变量 */
      System.out.println("变量值 : " + myPuppy.puppyAge ); 
   }
}
```

h3结果
>	小狗的名字是 : tommy
>	小狗的年龄为 : 2
>	变量值 : 2











## static 修饰符

h5静态变量：
>	static 关键字用来声明独立于对象的静态变量，无论一个类实例化多少对象，它的静态变量只有一份拷贝。 静态变量也被称为类变量。局部变量不能被声明为 static 变量。

h5静态方法：
>	static 关键字用来声明独立于对象的静态方法。静态方法不能使用类的非静态变量。静态方法从参数列表得到数据，然后计算这些数据。

```java
public class InstanceCounter {
   private static int numInstances = 0;
   protected static int getCount() {
      return numInstances;
   }
 
   private static void addInstance() {
      numInstances++;
   }
 
   InstanceCounter() {
      InstanceCounter.addInstance();
   }
 
   public static void main(String[] arguments) {
      System.out.println("Starting with " +
      InstanceCounter.getCount() + " instances");
      for (int i = 0; i < 500; ++i){
         new InstanceCounter();
          }
      System.out.println("Created " +
      InstanceCounter.getCount() + " instances");
   }
}
```

h5结果：
>	Starting with 0 instances
>	Created 500 instances







## 位运算符


<分>操作符	<分>描述	<分>例子
<分>＆	<分>如果相对应位都是1，则结果为1，否则为0	<分>（A＆B），得到12，即0000 1100
<分>|	<分>如果相对应位都是 0，则结果为 0，否则为 1	<分>（A | B）得到61，即 0011 1101
<分>^	<分>如果相对应位值相同，则结果为0，否则为1	<分>（A ^ B）得到49，即 0011 0001
<分>〜	<分>按位取反运算符翻转操作数的每一位，即0变成1，1变成0。	<分>（〜A）得到-61，即1100 0011
<分><< 	<分>按位左移运算符。左操作数按位左移右操作数指定的位数。	<分>A << 2得到240，即 1111 0000
<分>>> 	<分>按位右移运算符。左操作数按位右移右操作数指定的位数。	<分>A >> 2得到15即 1111
<分>>>> 	<分>按位右移补零操作符。左操作数的值按右操作数指定的位数右移，移动得到的空位以零填充。	<分>A>>>2得到15即0000 1111






## 赋值运算符

<分>操作符	描述	例子
<分>=	<分>简单的赋值运算符，将右操作数的值赋给左侧操作数	<分>C = A + B将把A + B得到的值赋给C
<分>+ =	<分>加和赋值操作符，它把左操作数和右操作数相加赋值给左操作数	<分>C + = A等价于C = C + A
<分>- =	<分>减和赋值操作符，它把左操作数和右操作数相减赋值给左操作数	<分>C - = A等价于C = C - A
<分>* =	<分>乘和赋值操作符，它把左操作数和右操作数相乘赋值给左操作数	<分>C * = A等价于C = C * A
<分>/ =	<分>除和赋值操作符，它把左操作数和右操作数相除赋值给左操作数	<分>C / = A，C 与 A 同类型时等价于 C = C / A
<分>（％）=	<分>取模和赋值操作符，它把左操作数和右操作数取模后赋值给左操作数	<分>C％= A等价于C = C％A
<分><< =	<分>左移位赋值运算符	<分>C << = 2等价于C = C << 2
<分>>> =	<分>右移位赋值运算符	<分>C >> = 2等价于C = C >> 2
<分>＆=	<分>按位与赋值运算符	<分>C＆= 2等价于C = C＆2
<分>^ =	<分>按位异或赋值操作符	<分>C ^ = 2等价于C = C ^ 2
<分>| =	<分>按位或赋值操作符	<分>C | = 2等价于C = C | 2






## Number & Math 类方法

<分>xxxValue()<分>将 Number 对象转换为xxx数据类型的值并返回。
<分>compareTo()<分>将number对象与参数比较。
<分>equals()<分>判断number对象是否与参数相等。
<分>valueOf()<分>返回一个 Number 对象指定的内置数据类型
<分>toString()<分>以字符串形式返回值。
<分>parseInt()<分>将字符串解析为int类型。
<分>abs()<分>返回参数的绝对值。
<分>ceil()<分>返回大于等于( >= )给定参数的的最小整数，类型为双精度浮点型。
<分>floor()<分>返回小于等于（<=）给定参数的最大整数 。
<分>rint()<分>返回与参数最接近的整数。返回类型为double。
<分>round()<分>它表示四舍五入，算法为 Math.floor(x+0.5)，即将原来的数字加上 0.5 后再向下取整，所以，Math.round(11.5) 的结果为12，Math.round(-11.5) 的结果为-11。
<分>min()<分>返回两个参数中的最小值。
<分>max()<分>返回两个参数中的最大值。
<分>exp()<分>返回自然数底数e的参数次方。
<分>log()<分>返回参数的自然数底数的对数值。
<分>pow()<分>返回第一个参数的第二个参数次方。
<分>sqrt()<分>求参数的算术平方根。
<分>sin()<分>求指定double类型参数的正弦值。
<分>cos()<分>求指定double类型参数的余弦值。
<分>tan()<分>求指定double类型参数的正切值。
<分>asin()<分>求指定double类型参数的反正弦值。
<分>acos()<分>求指定double类型参数的反余弦值。
<分>atan()<分>求指定double类型参数的反正切值。
<分>atan2()<分>将笛卡尔坐标转换为极坐标，并返回极坐标的角度值。
<分>toDegrees()<分>将参数转化为角度。
<分>toRadians()<分>将角度转换为弧度。
<分>random()<分>返回一个随机数。








## String 方法


<分>char charAt(int index)<分>返回指定索引处的 char 值。
<分>int compareTo(Object o)<分>把这个字符串和另一个对象比较。
<分>int compareTo(String anotherString)<分>按字典顺序比较两个字符串。
<分>int compareToIgnoreCase(String str)<分>按字典顺序比较两个字符串，不考虑大小写。
<分>String concat(String str)<分>将指定字符串连接到此字符串的结尾。
<分>boolean contentEquals(StringBuffer sb)<分>当且仅当字符串与指定的StringBuffer有相同顺序的字符时候返回真。
<分>static String copyValueOf(char[] data)<分>返回指定数组中表示该字符序列的 String。
<分>static String copyValueOf(char[] data, int offset, int count)<分>返回指定数组中表示该字符序列的 String。
<分>boolean endsWith(String suffix)<分>测试此字符串是否以指定的后缀结束。
<分>boolean equals(Object anObject)<分>将此字符串与指定的对象比较。
<分>boolean equalsIgnoreCase(String anotherString)<分>将此 String 与另一个 String 比较，不考虑大小写。
<分>byte[] getBytes()<分>使用平台的默认字符集将此 String 编码为 byte 序列，并将结果存储到一个新的 byte 数组中。
<分>byte[] getBytes(String charsetName)<分>使用指定的字符集将此 String 编码为 byte 序列，并将结果存储到一个新的 byte 数组中。
<分>void getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin)<分>将字符从此字符串复制到目标字符数组。
<分>int hashCode()<分>返回此字符串的哈希码。
<分>int indexOf(int ch)<分>返回指定字符在此字符串中第一次出现处的索引。
<分>int indexOf(int ch, int fromIndex)<分>返回在此字符串中第一次出现指定字符处的索引，从指定的索引开始搜索。
<分>int indexOf(String str)<分>返回指定子字符串在此字符串中第一次出现处的索引。
<分>int indexOf(String str, int fromIndex)<分>返回指定子字符串在此字符串中第一次出现处的索引，从指定的索引开始。
<分>String intern()<分>返回字符串对象的规范化表示形式。
<分>int lastIndexOf(int ch)<分>返回指定字符在此字符串中最后一次出现处的索引。
<分>int lastIndexOf(int ch, int fromIndex)<分>返回指定字符在此字符串中最后一次出现处的索引，从指定的索引处开始进行反向搜索。
<分>int lastIndexOf(String str)<分>返回指定子字符串在此字符串中最右边出现处的索引。
<分>int lastIndexOf(String str, int fromIndex)<分>返回指定子字符串在此字符串中最后一次出现处的索引，从指定的索引开始反向搜索。
<分>int length()<分>返回此字符串的长度。
<分>boolean matches(String regex)<分>告知此字符串是否匹配给定的正则表达式。
<分>boolean regionMatches(boolean ignoreCase, int toffset, String other, int ooffset, int len)<分>测试两个字符串区域是否相等。
<分>boolean regionMatches(int toffset, String other, int ooffset, int len)<分>测试两个字符串区域是否相等。
<分>String replace(char oldChar, char newChar)<分>返回一个新的字符串，它是通过用 newChar 替换此字符串中出现的所有 oldChar 得到的。
<分>String replaceAll(String regex, String replacement)<分>使用给定的 replacement 替换此字符串所有匹配给定的正则表达式的子字符串。
<分>String replaceFirst(String regex, String replacement)<分>使用给定的 replacement 替换此字符串匹配给定的正则表达式的第一个子字符串。
<分>String[] split(String regex)<分>根据给定正则表达式的匹配拆分此字符串。
<分>String[] split(String regex, int limit)<分>根据匹配给定的正则表达式来拆分此字符串。
<分>boolean startsWith(String prefix)<分>测试此字符串是否以指定的前缀开始。
<分>boolean startsWith(String prefix, int toffset)<分>测试此字符串从指定索引开始的子字符串是否以指定前缀开始。
<分>CharSequence subSequence(int beginIndex, int endIndex)<分>返回一个新的字符序列，它是此序列的一个子序列。
<分>String substring(int beginIndex)<分>返回一个新的字符串，它是此字符串的一个子字符串。
<分>String substring(int beginIndex, int endIndex)<分>返回一个新字符串，它是此字符串的一个子字符串。
<分>char[] toCharArray()<分>将此字符串转换为一个新的字符数组。
<分>String toLowerCase()<分>使用默认语言环境的规则将此 String 中的所有字符都转换为小写。
<分>String toLowerCase(Locale locale)<分>使用给定 Locale 的规则将此 String 中的所有字符都转换为小写。
<分>String toString()<分>返回此对象本身（它已经是一个字符串！）。
<分>String toUpperCase()<分>使用默认语言环境的规则将此 String 中的所有字符都转换为大写。
<分>String toUpperCase(Locale locale)<分>使用给定 Locale 的规则将此 String 中的所有字符都转换为大写。
<分>String trim()<分>返回字符串的副本，忽略前导空白和尾部空白。
<分>static String valueOf(primitive data type x)<分>返回给定data type类型x参数的字符串表示形式。
<分>contains(CharSequence chars)<分>判断是否包含指定的字符系列。
<分>isEmpty()<分>判断字符串是否为空。








## Date 对象



<分>boolean after(Date date)<分>若当调用此方法的Date对象在指定日期之后返回true,否则返回false。
<分>boolean before(Date date)<分>若当调用此方法的Date对象在指定日期之前返回true,否则返回false。
<分>Object clone( )<分>返回此对象的副本。
<分>int compareTo(Date date)<分>比较当调用此方法的Date对象和指定日期。两者相等时候返回0。调用对象在指定日期之前则返回负数。调用对象在指定日期之后则返回正数。
<分>int compareTo(Object obj)<分>若obj是Date类型则操作等同于compareTo(Date) 。否则它抛出ClassCastException。
<分>boolean equals(Object date)<分>当调用此方法的Date对象和指定日期相等时候返回true,否则返回false。
<分>long getTime( )<分>返回自 1970 年 1 月 1 日 00:00:00 GMT 以来此 Date 对象表示的毫秒数。
<分>int hashCode( )<分>返回此对象的哈希码值。
<分>void setTime(long time)<分>用自1970年1月1日00:00:00 GMT以后time毫秒数设置时间和日期。
<分>String toString( )<分>把此 Date 对象转换为以下形式的 String： dow mon dd hh:mm:ss zzz yyyy 其中： dow 是一周中的某一天 (Sun, Mon, Tue, Wed, Thu, Fri, Sat)。


## 日期和时间的格式化编码


<分>字母	<分>描述	<分>示例
<分>G	<分>纪元标记	<分>AD
<分>y	<分>四位年份	<分>2001
<分>M	<分>月份	<分>July or 07
<分>d	<分>一个月的日期	<分>10
<分>h	<分> A.M./P.M. (1~12)格式小时	<分>12
<分>H	<分>一天中的小时 (0~23)	<分>22
<分>m	<分>分钟数	<分>30
<分>s	<分>秒数	<分>55
<分>S	<分>毫秒数	<分>234
<分>E	<分>星期几	<分>Tuesday
<分>D	<分>一年中的日子	<分>360
<分>F	<分>一个月中第几周的周几	<分>2 (second Wed. in July)
<分>w	<分>一年中第几周	<分>40
<分>W	<分>一个月中第几周	<分>1
<分>a	<分>A.M./P.M. 标记	<分>PM
<分>k	<分>一天中的小时(1~24)	<分>24
<分>K	<分> A.M./P.M. (0~11)格式小时	<分>10
<分>z	<分>时区	<分>Eastern Standard Time
<分>'	<分>文字定界符	<分>Delimiter
<分>"	<分>单引号	<分>`

h3使用printf格式化日期

<分>转  换  符<分>说    明<分>示    例
<分>c<分>包括全部日期和时间信息<分>星期六 十月 27 14:21:20 CST 2007
<分>F<分>"年-月-日"格式<分>2007-10-27
<分>D<分>"月/日/年"格式<分>10/27/07
<分>r<分>"HH:MM:SS PM"格式（12时制）<分>02:25:51 下午
<分>T<分>"HH:MM:SS"格式（24时制）<分>14:28:16
<分>R<分>"HH:MM"格式（24时制）<分>14:28

h4实例

```java
import java.util.Date;
 
public class DateDemo {
 
  public static void main(String[] args) {
     // 初始化 Date 对象
     Date date = new Date();
 
     //c的使用  
    System.out.printf("全部日期和时间信息：%tc%n",date);          
    //f的使用  
    System.out.printf("年-月-日格式：%tF%n",date);  
    //d的使用  
    System.out.printf("月/日/年格式：%tD%n",date);  
    //r的使用  
    System.out.printf("HH:MM:SS PM格式（12时制）：%tr%n",date);  
    //t的使用  
    System.out.printf("HH:MM:SS格式（24时制）：%tT%n",date);  
    //R的使用  
    System.out.printf("HH:MM格式（24时制）：%tR",date);  
  }
}
```

h4结果

>	全部日期和时间信息：星期一 九月 10 10:43:36 CST 2012  
>	年-月-日格式：2012-09-10  
>	月/日/年格式：09/10/12  
>	HH:MM:SS PM格式（12时制）：10:43:36 上午  
>	HH:MM:SS格式（24时制）：10:43:36  
>	HH:MM格式（24时制）：10:43  