import React from 'react';
import { ScrollView, View } from 'react-native';

import Panel from '../QAPanel';

const QA = () => (
  <ScrollView 
   
  >
    <Panel style={styles.pan}
      title='Q1.攝影師是否侵犯柯市長肖像權？'
      expanded='false'
      sub='首先，我們要先了解，柯P有沒有肖像權 ?'
      content="一般來說，在公眾場合並沒有隱私權可言。只要對方不伸進裙底拍攝「隱私」部位，只是對著路人拍照，這「照像行為」本身並無犯法。被攝民眾可以主動出面要求對方「不要繼續拍攝」，但是卻無權要求對方刪除照片。                                                "
      sub2='當「有公開散播、廣告，甚至盈利時」       '
      content2="但是當你發現以自己為主題的照片被公開散播，且侵犯到你的個人形象時，可以依民法第195條主張對方「侵害名譽」，要求合理賠償；或者以人格權來替自己伸張正義。所以，柯文哲市長擁有肖像權，要將該照片作商業模式的利用，應先取得柯市長的同意。律師蔣昕佑：「把他的這個動作拿去做販售的話，我們認為這確實是比較有可能，會侵害人格權，柯市長可能可以主張說，這是我的人格權，那姓名權之類的你不能隨便利用。」"
    />
    <Panel style={styles.pan}
      title='Q2.攝影師有著作權嗎？'
      sub='著作權法所保障                                               '
      expanded='false'
      content="依著作權法之規定，著作權保護之客體，僅及於著作之表達（express），而不及於其思想或概念（idea）。例如「柯P跌倒」這個「概念」，即不屬於著作權所保護的範圍，任何人都可以此概念去創作自己的作品。但當攝影師拍照，將這個概念以「照片」的形式「表達」出來後，這個「照片」就成為著作權所保護的客體，他人不得任意使用這張照片。藉由相機所拍出來的著作，因為是由攝影創作人花費心思所拍攝出來的照片，是所謂的「攝影著作」，由著作權法所保護。"
    />
    <Panel style={styles.pan}
      title='Q3.網友ＫＵＳＯ改圖有違法嗎？'
      expanded='true'
      content="我不知道"
    />
    <Panel style={styles.pan}
      title='Q4.成衣業者有違法嗎？'
      expanded='true'
      content="你猜猜看"
    />
  </ScrollView>
);
const styles={
pan:{
shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
},
}

export default QA;
