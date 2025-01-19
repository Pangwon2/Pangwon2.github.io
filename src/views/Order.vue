<template>
    <form class="order" @submit.prevent="order">
        <div role="group" class="amount">
            <span>1. 인당 몇병씩 선물하시길 원하시나요? 최대1개 선택 가능</span>
            <br>
            <input type="radio" name="amount_input" value="1" v-model="amount">1병
            <input type="radio" name="amount_input" value="2" v-model="amount">2병
            <input type="radio" name="amount_input" value="3" v-model="amount">3병
            <input type="radio" name="amount_input" value="4" v-model="amount">4병
            <input type="radio" name="amount_input" value="5" v-model="amount">5병
        </div>
        <div role="group" class="people">
            <span>2. 몇명에게 선물하실 계획이신가요?</span>
            <span>확실하지 않으실 경우 대략적으로 입력해주셔도 좋습니다.</span>
            <input type="text" name="people" placeholder="숫자만 입력 가능합니다" v-model="people" maxlength="10" pattern="\d+">
        </div>
        <div role="group" class="date">
            <span>3. 와인을 받아보실 날짜를 입력해주세요.</span>
            <input type="date" name="date" v-model="date">
        </div>
        <div role="group" class="price">
            <span>4. 원하시는 와인 예산을 선택해주세요.</span>
            <input type="checkbox" name="price_input" value="1_2" v-model="price">1~2만원대
            <input type="checkbox" name="price_input" value="2_3" v-model="price">2~3만원대
            <input type="checkbox" name="price_input" value="3_4" v-model="price">3~4만원대
            <input type="checkbox" name="price_input" value="4_5" v-model="price">4~5만원대
            <input type="checkbox" name="price_input" value="6" v-model="price">6만원 이상
            <input type="checkbox" name="price_input" value="10" v-model="price">10만원 이상
            <input type="checkbox" name="price_input" value="10_" v-model="price">기타
        </div>
        <div role="group" class="type">
            <span>5. 원하시는 와인 타입이 있으신가요?</span>
            <input type="checkbox" name="type_input" value="red" v-model="type">레드
            <input type="checkbox" name="type_input" value="white" v-model="type">화이트
            <input type="checkbox" name="type_input" value="champagne" v-model="type">샴페인
            <input type="checkbox" name="type_input" value="whisky" v-model="type">위스키
            <input type="checkbox" name="type_input" value="other" v-model="type">기타
        </div>
        <div role="group" class="name">
            <span>6. 성함을 입력해주세요.</span>
            <input type="text" placeholder="이름을 입력해주세요." v-model="name">
        </div>
        <div role="group" class="phone">
            <span>7. 연락 가능한 연락처를 입력해주세요.</span>
            <input type="text" v-model="phone" placeholder="연락처를 입력해주세요. (-없이 번호만 입력)" minlength="10" maxlength="11" pattern="\d+">
        </div>
        <div role="group" class="place">
            <span>8. 받아보실 지역을 선택해주세요.</span>
            <input type="radio" name="place" value="seoul" v-model="place">서울
            <input type="radio" name="place" value="incheon" v-model="place">인천
            <input type="radio" name="place" value="kyungki" v-model="place">경기
            <input type="radio" name="place" value="chungcheong" v-model="place">충청
            <input type="radio" name="place" value="kangwon" v-model="place">강원
            <input type="radio" name="place" value="kyungsang" v-model="place">경상
            <input type="radio" name="place" value="jueolla" v-model="place">전라
            <input type="radio" name="place" value="jeju" v-model="place">제주
        </div>
        <div role="group" class="agree">
            <span>9. 개인정보 수집 및 이용 동의</span>
            <span>동의를 거부하실 수 있으나 설문 참여가 불가합니다.</span>
            <div>
                <h4>수집하는 개인정보 항목</h4>
                <h5>이름, 연락처, 주소 등</h5>
                <h4>수집 및 이용 목적</h4>
                <h5>와인 주문 및 견적용</h5>
                <h4>보유 및 이용기간</h4>
                <h5>납품완료 후 1년</h5>
            </div>
            <input type="checkbox" class="survey" v-model="agree" />
            <label class="survey" aria-checked="false" tabindex="0" role="checkbox">
                개인정보 수집 및 이용에 동의합니다.
            </label>
        </div>
        <button type="submit">주문</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            amount: null,     // 라디오 버튼 값
            people: "",       // 텍스트 필드 값
            date: "",         // 날짜 입력 값
            price: [],        // 체크박스 배열
            type: [],         // 체크박스 배열
            name: "",         // 이름 입력 값
            phone: "",        // 연락처 입력 값
            place: "",        // 라디오 버튼 값
            agree: false,     // 개인정보 수집 동의
        };
    },
    methods : {
        order(){
            console.log({
                amount: this.amount,
                people: this.people,
                date: this.date,
                price: this.price,
                type: this.type,
                name: this.name,
                phone: this.phone,
                place: this.place,
                agree: this.agree,
            });
            this.$router.push("/");
        },
    },
}

</script>

<style>
.order {
    font-family: Arial, sans-serif;
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
/* 각 그룹에 대해 공통적인 스타일 적용 */
.order div {
    margin-bottom: 20px;
}
.order span {
    font-weight: bold;
    display: block;
    font-size: 14px;
}

.order input[type="text"],
.order input[type="date"] {
    width: 50%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
/* 체크박스와 라벨 스타일 */
.order .survey {
    display: inline-block;
}

.order .survey + label {
    font-size: 14px;
    cursor: pointer;
}

.order input[type="radio"]:checked,
.order input[type="checkbox"]:checked {
    background-color: #007BFF;
    border-color: #007BFF;
}

.order input[type="text"]:focus,
.order input[type="date"]:focus {
    outline: 2px solid #007BFF;
    border-color: #007BFF;
}

form {
    background-color: #f4f4f4;  /* 통일된 배경색 */
    padding: 20px;
    border-radius: 8px;
}

form > div {
    margin-bottom: 20px;  /* 각 항목 사이 간격 */
    padding: 10px;
    background-color: #ffffff;  /* 각 항목에 배경색 */
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);  /* 그림자 효과 */
}

form > div:last-child {
    margin-bottom: 0;  /* 마지막 항목의 아래쪽 여백 제거 */
}
</style>