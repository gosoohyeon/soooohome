# worklist

## 2022-05-26
### IA csv -> json 변환
+ json 파일로 생성하는 부분은 추후 적용 예정. 
```javascript
    csvConvert(){      
      const iaResult = [];
      let iaArray = this.iaList.split('\n');
      const iaKey = iaArray[0].split(',');

      for (var k=1; k<iaArray.length; k++) {
        const iaObj = new Object;
        const iaVal = iaArray[k].split(',');

        // 각 배열의 요소를 매치하여 object로 변환 key:value
        for (var i=0; i<iaKey.length; i++) {
          iaObj[iaKey[i]] = iaVal[i];
        }
          iaResult.push(iaObj)
      }
      const iaJson = JSON.stringify(iaResult);
      this.iaJson = iaJson;
      console.log(iaJson)

      // fs.writeFileSync('IA-json.js', iaJson, 'utf8');
    }
```

### 데이터 테이블 랜딩
+ Array형태의 for문의 Object를 다시한번 for로 돌려서 key, value를 받아서 각 class와 문자열로 할당
```html
<tr v-for="(iaValList, idx) in ia" :key="idx">
    <td v-for="(iaVal, title) in iaValList" :key="`${iaVal}-${idx}`" :class="`col-${title}`">{{ iaVal }}</td>
</tr>
```
